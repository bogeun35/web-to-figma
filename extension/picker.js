/* 영역 선택 픽커 — 페이지 위에서 요소를 하이라이트하고 클릭으로 선택.
   ★ v2.1: 클릭하는 순간 캡처 → 변환 → 클립보드 복사까지 여기서 끝낸다.
     (크롬은 페이지를 클릭하면 확장 팝업을 닫아버리므로, 예전처럼 "팝업을 다시 열어 복사"하면 번거롭다.)
     클립보드 쓰기는 사용자 제스처가 필요한데 변환에 시간이 걸리므로,
     ClipboardItem에 Promise를 넘겨 클릭 시점에 write()를 걸어두고 데이터는 나중에 채운다.
   선택한 셀렉터는 chrome.storage에도 저장 → 팝업을 열면 칩으로 보이고 재사용 가능.
   ESC로 취소. 안내 문구는 window.__PICKER_MSG__ (팝업이 언어에 맞게 주입) */
(function () {
  if (window.__PICKER_ACTIVE__) return;
  window.__PICKER_ACTIVE__ = true;

  var MSG = window.__PICKER_MSG__ || {
    hint: '캡처할 영역을 클릭하세요 (ESC 취소)',
    working: '변환 중...',
    done: '복사 완료 — 피그마에서 Ctrl+V 하세요',
    fail: '복사 실패'
  };

  var box = document.createElement('div');
  box.style.cssText = 'position:fixed;z-index:2147483646;pointer-events:none;border:2px solid #0D99FF;background:rgba(13,153,255,.12);border-radius:2px;transition:all .05s;display:none';
  var tag = document.createElement('div');
  tag.style.cssText = 'position:fixed;z-index:2147483647;pointer-events:none;background:#0D99FF;color:#fff;font:11px/1.6 sans-serif;padding:1px 7px;border-radius:3px;display:none;max-width:60vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
  var toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;z-index:2147483647;left:50%;top:18px;transform:translateX(-50%);background:#1e1e1e;color:#fff;font:13px/1.5 sans-serif;padding:9px 18px;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.3)';
  toast.textContent = MSG.hint;
  document.documentElement.appendChild(box);
  document.documentElement.appendChild(tag);
  document.documentElement.appendChild(toast);

  var current = null;

  function describe(el) {
    var s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    else if (el.classList && el.classList.length) s += '.' + el.classList[0];
    return s;
  }
  /* 견고한 CSS 셀렉터 생성: id 우선, 아니면 클래스+nth-of-type 경로(최대 5단계) */
  function selectorOf(el) {
    if (el.id) return el.tagName.toLowerCase() + '#' + CSS.escape(el.id);
    var path = [];
    var cur = el;
    while (cur && cur !== document.body && path.length < 5) {
      var part = cur.tagName.toLowerCase();
      if (cur.id) { path.unshift(part + '#' + CSS.escape(cur.id)); return path.join(' > '); }
      var cls = Array.prototype.slice.call(cur.classList || []).filter(function (c) { return /^[a-zA-Z_-][\w-]*$/.test(c); })[0];
      if (cls) part += '.' + CSS.escape(cls);
      var parent = cur.parentElement;
      if (parent) {
        var same = Array.prototype.filter.call(parent.children, function (ch) { return ch.tagName === cur.tagName; });
        if (same.length > 1) part += ':nth-of-type(' + (same.indexOf(cur) + 1) + ')';
      }
      path.unshift(part);
      cur = parent;
    }
    return path.join(' > ');
  }

  function onMove(e) {
    var el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el || el === box || el === tag || el === toast) return;
    current = el;
    var r = el.getBoundingClientRect();
    box.style.display = 'block';
    box.style.left = r.left + 'px';
    box.style.top = r.top + 'px';
    box.style.width = r.width + 'px';
    box.style.height = r.height + 'px';
    tag.style.display = 'block';
    tag.style.left = Math.max(4, r.left) + 'px';
    tag.style.top = Math.max(4, r.top - 22) + 'px';
    tag.textContent = describe(el) + '  ' + Math.round(r.width) + '×' + Math.round(r.height);
  }
  function cleanup() {
    document.removeEventListener('mousemove', onMove, true);
    document.removeEventListener('click', onClick, true);
    document.removeEventListener('keydown', onKey, true);
    box.remove(); tag.remove();
    window.__PICKER_ACTIVE__ = false;
  }
  function setToast(text, color) {
    toast.textContent = text;
    if (color) toast.style.background = color;
  }
  function bye(ms) { setTimeout(function () { toast.remove(); }, ms || 2600); }

  /* 선택 → 캡처 → 변환 → 클립보드 (팝업 재오픈 불필요) */
  function copySelected(sel) {
    var build = (async function () {
      // capture.js 는 모듈로 불러도, 이미 주입돼 있어도 전역 __figmaCapture 로 잡힌다.
      if (!globalThis.__figmaCapture) await import(chrome.runtime.getURL('capture.js'));
      var cap = globalThis.__figmaCapture(sel, 0);
      var encMod = await import(chrome.runtime.getURL('figma-encoder.js'));
      var built = await encMod.buildClipboardHtml(cap);
      return new Blob([built.html], { type: 'text/html' });
    })();

    // 클릭(사용자 제스처) 시점에 write를 걸고, 데이터는 Promise로 나중에 채운다
    var p;
    try {
      p = navigator.clipboard.write([new ClipboardItem({ 'text/html': build })]);
    } catch (e) {
      // Promise 형태를 지원하지 않는 경우 — 데이터를 만든 뒤 다시 시도
      p = build.then(function (b) { return navigator.clipboard.write([new ClipboardItem({ 'text/html': b })]); });
    }
    return p;
  }

  function onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!current) return;
    var sel = selectorOf(current);
    var r = current.getBoundingClientRect();
    var desc = describe(current) + ' (' + Math.round(r.width) + '×' + Math.round(r.height) + ')';
    try { if (document.querySelector(sel) !== current) sel = selectorOf(current); } catch (err) {}

    // 팝업에서 재사용할 수 있게 선택 영역 저장
    try { chrome.storage.local.set({ pickedSelector: sel, pickedDesc: desc }); } catch (err) {}

    setToast(MSG.working, '#0D99FF');
    cleanup();   // 하이라이트는 즉시 제거 (토스트만 남김)

    copySelected(sel).then(function () {
      setToast(MSG.done, '#0ACF83');
      bye(3000);
    }, function (err) {
      console.warn('[picker] 복사 실패', err);
      setToast(MSG.fail + ' — ' + ((err && err.message) || err), '#F24E1E');
      bye(5000);
    });
  }
  function onKey(e) {
    if (e.key === 'Escape') { toast.remove(); cleanup(); }
  }
  document.addEventListener('mousemove', onMove, true);
  document.addEventListener('click', onClick, true);
  document.addEventListener('keydown', onKey, true);
})();
