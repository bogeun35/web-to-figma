/* 영역 선택 픽커 — 페이지 위에서 요소를 하이라이트하고 클릭으로 선택
   선택 결과는 chrome.storage.local { pickedSelector, pickedDesc } 에 저장.
   ESC로 취소. 안내 문구는 window.__PICKER_MSG__ (팝업이 언어에 맞게 주입) */
(function () {
  if (window.__PICKER_ACTIVE__) return;
  window.__PICKER_ACTIVE__ = true;

  var MSG = window.__PICKER_MSG__ || { hint: '캡처할 영역을 클릭하세요 (ESC 취소)', done: '영역이 선택되었습니다. 확장 아이콘을 다시 눌러 복사하세요.' };

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
  function onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!current) return;
    var sel = selectorOf(current);
    var r = current.getBoundingClientRect();
    var desc = describe(current) + ' (' + Math.round(r.width) + '×' + Math.round(r.height) + ')';
    // 셀렉터가 실제로 그 요소를 찾는지 검증(아니면 그래도 저장 — 캡처 시 첫 매칭 사용)
    try { if (document.querySelector(sel) !== current) sel = selectorOf(current); } catch (err) {}
    chrome.storage.local.set({ pickedSelector: sel, pickedDesc: desc }, function () {
      toast.textContent = MSG.done;
      toast.style.background = '#0ACF83';
      setTimeout(function () { toast.remove(); }, 2500);
      cleanup();
    });
  }
  function onKey(e) {
    if (e.key === 'Escape') { toast.remove(); cleanup(); }
  }
  document.addEventListener('mousemove', onMove, true);
  document.addEventListener('click', onClick, true);
  document.addEventListener('keydown', onKey, true);
})();
