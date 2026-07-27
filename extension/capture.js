/**
 * Web → Figma 캡처 (ES 모듈)
 *   capture(selector, viewport) → { meta, root }
 * DOM을 훑어 노드 트리를 만든다. selector가 없으면 body 전체.
 * 팝업(전체 캡처)과 픽커(영역 선택 즉시 복사)가 이 한 파일을 공유한다.
 */
function capture(selector, viewport) {
  var MAX_NODES = 5000;
  var count = 0;
  var sx = window.scrollX, sy = window.scrollY;

  /* iframe 처리 —
     이 함수는 페이지의 모든 프레임에서 각각 돌아간다. 자기 문서만 캡처하고,
     끼워진 프레임 자리에는 표시만 남긴다. 합치는 일은 팝업이 한다. */
  var IFRAMES = Array.prototype.slice.call(document.querySelectorAll('iframe'));
  // 내가 부모의 몇 번째 프레임인지 — 다른 도메인이어도 이 비교는 허용된다.
  var selfIndex = -1;
  if (window !== window.top) {
    try {
      for (var fi = 0; fi < window.parent.frames.length; fi++) {
        if (window.parent.frames[fi] === window) { selfIndex = fi; break; }
      }
    } catch (e) { /* 접근 불가면 -1 로 두고 주소로 맞춘다 */ }
  }

  function num(v) { var n = parseFloat(v); return isNaN(n) ? 0 : n; }

  function isVisible(cs, r) {
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    if (num(cs.opacity) === 0) return false;
    if (r.width < 1 || r.height < 1) return false;
    if (isScreenReaderOnly(cs, r)) return false;
    return true;
  }

  /* 화면낭독기 전용으로 숨긴 요소 판별 — 눈에는 안 보이는데 글자는 들어있다.
     이걸 걸러내지 않으면 "알림", "이전 페이지", "최고기온" 같은 글자가
     진짜 글자 위에 겹쳐 찍힌다. (네이버 메인 기준 전체 글자의 12%가 이것) */
  function isScreenReaderOnly(cs, r) {
    // 1x1 상자에 숨긴 고전적인 .blind / .sr-only 패턴
    if (r.width <= 2 && r.height <= 2) return true;
    // clip 으로 잘라 없앤 경우 — clip: rect(0,0,0,0)
    if (cs.clip && cs.clip !== 'auto' && cs.clip !== 'none') {
      var cn = cs.clip.match(/-?\d+(\.\d+)?/g);
      if (cn && cn.length === 4) {
        var top = parseFloat(cn[0]), right = parseFloat(cn[1]), bottom = parseFloat(cn[2]), left = parseFloat(cn[3]);
        if (Math.abs(right - left) <= 1 || Math.abs(bottom - top) <= 1) return true;
      }
    }
    // clip-path 로 잘라 없앤 경우 — clip-path: inset(50%) / inset(100%)
    if (cs.clipPath && /inset\(\s*(100|5[0-9]|[6-9][0-9])(\.\d+)?%/.test(cs.clipPath)) return true;
    // 화면 밖으로 멀리 밀어낸 경우 — left:-9999px
    if (r.right + sx < -2000 || r.bottom + sy < -2000) return true;
    return false;
  }

  // 요소 직속 텍스트 노드들 → TEXT 런 추출
  function textRuns(el, cs) {
    var runs = [];
    // 글자만 숨긴 경우 — 자식 요소는 살려야 하므로 요소째 버리지 않고 글자만 건너뛴다.
    if (num(cs.fontSize) === 0) return runs;                 // font-size:0
    if (num(cs.textIndent) <= -999) return runs;             // text-indent:-9999px
    if (/^rgba\(.*,\s*0\)$/.test(cs.color || '')) return runs; // 투명 글자
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType !== 3) continue;
      var t = n.textContent.replace(/\s+/g, ' ');
      if (!t.trim()) continue;
      var range = document.createRange();
      range.selectNodeContents(n);
      var r = range.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) continue;
      runs.push({
        type: 'TEXT', name: 'text',
        x: r.left + sx, y: r.top + sy, w: Math.ceil(r.width) + 2, h: Math.ceil(r.height),
        text: {
          chars: t.trim(),
          size: num(cs.fontSize) || 13,
          weight: num(cs.fontWeight) || 400,
          family: (cs.fontFamily || 'Noto Sans KR').split(',')[0].replace(/["']/g, '').trim(),
          color: cs.color,
          lh: cs.lineHeight === 'normal' ? 0 : num(cs.lineHeight),
          ls: cs.letterSpacing === 'normal' ? 0 : num(cs.letterSpacing),
          align: cs.textAlign
        }
      });
    }
    return runs;
  }

  function nodeName(el) {
    var s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    else if (el.classList && el.classList.length) s += '.' + el.classList[0];
    return s;
  }

  function walk(el) {
    if (count > MAX_NODES) return null;
    var cs = getComputedStyle(el);
    var r = el.getBoundingClientRect();
    if (!isVisible(cs, r)) return null;
    count++;

    var tag = el.tagName.toLowerCase();
    var base = { x: r.left + sx, y: r.top + sy, w: Math.ceil(r.width), h: Math.ceil(r.height) };

    // SVG → 통째로 벡터 임포트 (color: currentColor 해석용)
    if (tag === 'svg') {
      return Object.assign(base, { type: 'SVG', name: 'svg', svg: el.outerHTML, color: cs.color });
    }

    // 이미지 — 캔버스로 픽셀 추출(이미 로드된 픽셀이라 인증 불필요, CORS 허용 시):
    //   avg  = 평균색(클립보드 흐름 플레이스홀더)
    //   data = dataURL 인라인(플러그인 흐름 실픽셀 — 인증 URL fetch 실패 대비)
    if (tag === 'img') {
      var avg = '', dataUrl = '';
      try {
        var iw = el.naturalWidth || el.width, ih = el.naturalHeight || el.height;
        var cv = document.createElement('canvas');
        // 평균색 (8x8 다운샘플)
        cv.width = 8; cv.height = 8;
        var cx2 = cv.getContext('2d');
        cx2.drawImage(el, 0, 0, 8, 8);
        var px = cx2.getImageData(0, 0, 8, 8).data;   // cross-origin+비CORS면 여기서 throw
        var rr = 0, gg = 0, bb = 0, np = 0;
        for (var pi = 0; pi < px.length; pi += 4) { if (px[pi + 3] > 16) { rr += px[pi]; gg += px[pi + 1]; bb += px[pi + 2]; np++; } }
        if (np) avg = 'rgb(' + Math.round(rr / np) + ', ' + Math.round(gg / np) + ', ' + Math.round(bb / np) + ')';
        // dataURL 인라인 (최대 1024px로 축소, 2MB 초과 시 포기)
        var scaleMax = 1024, sw = iw, sh2 = ih;
        if (Math.max(iw, ih) > scaleMax) { var sc = scaleMax / Math.max(iw, ih); sw = Math.round(iw * sc); sh2 = Math.round(ih * sc); }
        if (sw > 0 && sh2 > 0) {
          cv.width = sw; cv.height = sh2;
          cv.getContext('2d').drawImage(el, 0, 0, sw, sh2);
          var du = cv.toDataURL('image/png');
          if (du.length < 2 * 1024 * 1024) dataUrl = du;
        }
      } catch (e) { /* cross-origin 이미지는 실패 → src fetch에 맡김 */ }
      return Object.assign(base, {
        type: 'IMAGE', name: 'img',
        src: el.currentSrc || el.src || '',
        avg: avg,
        data: dataUrl,
        radius: [num(cs.borderTopLeftRadius), num(cs.borderTopRightRadius), num(cs.borderBottomRightRadius), num(cs.borderBottomLeftRadius)]
      });
    }

    // 일반 요소 → FRAME
    var node = Object.assign(base, {
      type: 'FRAME',
      name: nodeName(el),
      styles: {
        bg: cs.backgroundColor,
        borderColor: cs.borderTopColor,
        borderWidth: num(cs.borderTopWidth),
        radius: [num(cs.borderTopLeftRadius), num(cs.borderTopRightRadius), num(cs.borderBottomRightRadius), num(cs.borderBottomLeftRadius)],
        shadow: cs.boxShadow && cs.boxShadow !== 'none' ? cs.boxShadow : '',
        clip: cs.overflow !== 'visible'
      },
      layout: {
        display: cs.display,
        dir: cs.flexDirection,
        wrap: cs.flexWrap,
        gap: num(cs.columnGap) || num(cs.rowGap) || 0,
        pad: [num(cs.paddingTop), num(cs.paddingRight), num(cs.paddingBottom), num(cs.paddingLeft)],
        justify: cs.justifyContent,
        align: cs.alignItems
      },
      children: []
    });

    // 입력요소 → 값/placeholder를 텍스트로
    if (tag === 'input' || tag === 'textarea' || tag === 'select') {
      var val = el.value || el.placeholder || '';
      if (tag === 'select' && el.selectedIndex >= 0) val = el.options[el.selectedIndex] ? el.options[el.selectedIndex].text : val;
      if (val) {
        node.children.push({
          type: 'TEXT', name: 'value',
          x: base.x + num(cs.paddingLeft) + 2, y: base.y + base.h / 2 - num(cs.fontSize) * 0.7,
          w: Math.max(base.w - num(cs.paddingLeft) - num(cs.paddingRight), 10), h: num(cs.fontSize) * 1.4,
          text: { chars: String(val), size: num(cs.fontSize) || 12, weight: num(cs.fontWeight) || 400,
            family: (cs.fontFamily || 'Noto Sans KR').split(',')[0].replace(/["']/g, '').trim(),
            color: el.value ? cs.color : '#94a3b8', lh: 0, align: 'left' }
        });
      }
      return node;
    }

    // 끼워진 페이지(iframe) — 자리와 식별정보만 남긴다. 내용은 그 프레임에서 따로 캡처해 팝업이 채운다.
    if (tag === 'iframe') {
      node.name = 'iframe';
      node.frameHost = true;
      node.frameIdx = IFRAMES.indexOf(el);
      node.frameSrc = el.src || '';
      return node;
    }

    // 직속 텍스트 런
    var runs = textRuns(el, cs);
    for (var ri = 0; ri < runs.length; ri++) node.children.push(runs[ri]);

    // 자식 요소
    for (var ci = 0; ci < el.children.length; ci++) {
      var ch = walk(el.children[ci]);
      if (ch) node.children.push(ch);
    }
    return node;
  }

  var sel = selector || null;
  if (sel && window !== window.top) sel = null;   // 하위 프레임에는 그 선택자가 없다 — 프레임 전체를 캡처
  var rootEl = sel ? document.querySelector(sel) : document.body;
  if (!rootEl) throw new Error('선택한 영역을 찾을 수 없습니다: ' + sel);

  console.log('[capture] 시작... (' + (sel || 'body') + ')');
  var root = walk(rootEl);
  // 해상도 프리셋 캡처면 루트 이름에 @너비 표기 (피그마에서 어떤 해상도 기준인지 식별)
  var capVw = viewport || 0;
  var vpW = window.innerWidth, vpH = window.innerHeight;
  if (root && root.name) root.name = root.name + ' @' + (capVw > 0 ? capVw : vpW);
  var out = {
    meta: {
      url: location.href, title: document.title, capturedAt: new Date().toISOString(), nodes: count,
      viewport: { w: vpW, h: vpH, preset: capVw > 0 ? capVw : null },
      selfIndex: selfIndex, isTop: window === window.top
    },
    root: root
  };
  console.log('[capture] 완료: ' + count + '개 노드');
  return out;
}

/* 이 파일은 두 가지 방법으로 쓰인다.
   1) ES 모듈로 import  — 평소 경로
   2) 일반 스크립트로 주입 — 사이트 보안정책(CSP)이 모듈 import 를 막을 때의 대비책
   어느 쪽이든 아래 전역에 함수가 걸리므로, 호출하는 쪽은 이것만 보면 된다. */
globalThis.__figmaCapture = capture;
