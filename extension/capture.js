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

  /* background-image 중 실제 그림만 (그라디언트는 배경색으로 따로 처리) */
  function pickBgImage(cs2) {
    if (!cs2) return '';
    if (cs2.content === 'none') return '';        // 가상요소가 만들어지지 않은 경우
    var bi = cs2.backgroundImage || '';
    if (!bi || bi === 'none' || /gradient\(/.test(bi)) return '';
    var m = bi.match(/url\(["']?([^"')]+)["']?\)/);
    return m ? m[1] : '';
  }

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

  /* ── 눈에 안 보이는 요소 걸러내기 ──────────────────────────────
     (1) 잘려서 안 보이는 것 — 조상 중 overflow 가 visible 이 아닌 상자 밖으로 나간 요소.
         닫힌 아코디언(height:0), 캐러셀의 화면 밖 슬라이드, 스크롤로 넘어간 내용이 여기 걸린다.
     (2) 완전히 덮인 것 — 모달이 열려 있으면 뒤쪽 내용은 보이지 않는다.
         상자의 5개 지점을 찍어 전부 다른 요소가 잡히면 덮인 것으로 본다(일부만 가려지면 남긴다).
     ─────────────────────────────────────────────────────────── */
  var FAR = 1e7;

  function clipOf(cs, r, parentClip, el) {
    // html·body 는 잘림 기준으로 쓰지 않는다 — 페이지 전체를 담아야 한다
    if (el === document.body || el === document.documentElement) return parentClip;
    /* 축별로 따로 본다 — overflow: hidden auto 처럼 한 축만 잘리는 상자가 흔하다.
       스크롤 상자(auto/scroll)도 잘림으로 본다. 넘어간 내용은 지금 화면에 안 보이는데,
       이걸 살려두면 캐러셀의 다른 슬라이드 글자들이 한자리에 겹쳐 찍힌다.
       페이지 전체 스크롤(html·body)만 위에서 예외로 뺀다. */
    var hx = cs.overflowX !== 'visible';
    var hy = cs.overflowY !== 'visible';
    if (!hx && !hy) return parentClip;
    var own = { l: hx ? r.left : -FAR, t: hy ? r.top : -FAR, rr: hx ? r.right : FAR, b: hy ? r.bottom : FAR };
    if (!parentClip) return own;
    return {
      l: Math.max(parentClip.l, own.l), t: Math.max(parentClip.t, own.t),
      rr: Math.min(parentClip.rr, own.rr), b: Math.min(parentClip.b, own.b)
    };
  }

  function isClippedAway(r, clip) {
    if (!clip) return false;
    var w = Math.min(r.right, clip.rr) - Math.max(r.left, clip.l);
    var h = Math.min(r.bottom, clip.b) - Math.max(r.top, clip.t);
    return w < 1 || h < 1;
  }

  var OCCLUSION_MIN_AREA = 2500;   // 50x50 이상만 검사 (작은 요소는 부모가 걸러진다)

  /* 덮은 쪽이 실제로 뒤를 가리는지 — 투명한 오버레이(클릭 감지용 레이어, 로딩 막, 배너 backdrop)는
     뒤가 그대로 보이므로 가림으로 보지 않는다. 이 조건이 없으면 전체화면 투명 레이어 하나에
     페이지 전체가 사라진다. */
  function hidesBehind(node, el) {
    var n = node;
    for (var d = 0; n && n.nodeType === 1 && d < 8; d++, n = n.parentElement) {
      // body·html 이나 el 의 조상까지 올라가면 안 된다 — 그 배경은 "앞에서 가린 것"이 아니다
      if (n === document.body || n === document.documentElement) return false;
      if (n.contains(el)) return false;
      var cs2 = getComputedStyle(n);
      if (num(cs2.opacity) < 0.9) continue;                       // 반투명 요소면 뒤가 보인다
      var bg = cs2.backgroundColor || '';
      var am = bg.match(/rgba?\([^)]*?([\d.]+)\s*\)$/);
      var alpha = am ? parseFloat(am[1]) : (/^rgb\(/.test(bg) ? 1 : 0);
      if (bg && bg !== 'transparent' && alpha >= 0.9) return true;  // 불투명 배경 = 진짜 가림
      if (cs2.backgroundImage && cs2.backgroundImage !== 'none') return true;
    }
    return false;
  }

  function isCovered(el, r) {
    if (r.width * r.height < OCCLUSION_MIN_AREA) return false;
    var vw = window.innerWidth, vh = window.innerHeight;
    var pts = [
      [r.left + r.width / 2, r.top + r.height / 2],
      [r.left + 2, r.top + 2], [r.right - 2, r.top + 2],
      [r.left + 2, r.bottom - 2], [r.right - 2, r.bottom - 2]
    ];
    var checked = 0;
    for (var i = 0; i < pts.length; i++) {
      var x = pts[i][0], y = pts[i][1];
      if (x < 0 || y < 0 || x > vw || y > vh) continue;   // 화면 밖 지점은 판단 못 함
      checked++;
      var top = document.elementFromPoint(x, y);
      if (!top) return false;
      if (top === el || el.contains(top) || top.contains(el)) return false;  // 한 곳이라도 보이면 남긴다
      if (!hidesBehind(top, el)) return false;                                   // 투명 레이어는 가림 아님
    }
    return checked > 0;
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

  function walk(el, parentClip) {
    if (count > MAX_NODES) return null;
    var cs = getComputedStyle(el);
    var r = el.getBoundingClientRect();
    if (!isVisible(cs, r)) return null;
    if (isClippedAway(r, parentClip)) return null;   // 조상 상자 밖으로 잘려 안 보임
    if (isCovered(el, r)) return null;               // 모달 등에 완전히 덮여 안 보임
    var myClip = clipOf(cs, r, parentClip, el);
    count++;

    var tag = el.tagName.toLowerCase();
    /* 상자를 조상의 잘림 영역으로 깎는다 — overflow:hidden 안의 큰 이미지가
       피그마에서 상자 밖으로 튀어나오던 문제. 브라우저에 보이는 만큼만 넣는다.
       글자는 폭을 줄이면 줄바꿈이 달라지므로 건드리지 않는다. */
    var vis = r;
    if (parentClip && tag !== 'br') {
      var cl = Math.max(r.left, parentClip.l), ct = Math.max(r.top, parentClip.t);
      var cr = Math.min(r.right, parentClip.rr), cb = Math.min(r.bottom, parentClip.b);
      if (cr - cl >= 1 && cb - ct >= 1) vis = { left: cl, top: ct, width: cr - cl, height: cb - ct };
    }
    var base = { x: vis.left + sx, y: vis.top + sy, w: Math.ceil(vis.width), h: Math.ceil(vis.height) };

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

    /* 가상요소(::before/::after)나 background-image 로만 그린 그림 —
       네이버 상단 서비스 아이콘, 로고, 화살표가 대부분 이 방식이라 지금까지 통째로 빠졌다.
       실제 태그가 없으니 자리만 IMAGE 노드로 잡아 준다(피그마에서 자리표시 블록이 된다). */
    if (el.children.length === 0 && tag !== 'input' && tag !== 'textarea' && tag !== 'select') {
      var ownText = '';
      for (var ti = 0; ti < el.childNodes.length; ti++) {
        if (el.childNodes[ti].nodeType === 3) ownText += el.childNodes[ti].textContent;
      }
      if (!ownText.trim()) {
        var bgi = pickBgImage(cs);
        if (!bgi) bgi = pickBgImage(getComputedStyle(el, '::before')) || pickBgImage(getComputedStyle(el, '::after'));
        if (bgi) {
          return Object.assign(base, {
            type: 'IMAGE', name: 'img', src: bgi, avg: '', data: '',
            radius: [num(cs.borderTopLeftRadius), num(cs.borderTopRightRadius), num(cs.borderBottomRightRadius), num(cs.borderBottomLeftRadius)]
          });
        }
      }
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
        /* 그라디언트 배경 — background-image 가 gradient 인 경우 원문을 그대로 넘긴다(인코더가 해석) */
        gradient: /gradient\(/.test(cs.backgroundImage || '') ? cs.backgroundImage : '',
        clip: cs.overflow !== 'visible'
      },
      layout: {
        display: cs.display,
        dir: cs.flexDirection,
        wrap: cs.flexWrap,
        gap: num(cs.columnGap) || num(cs.rowGap) || 0,
        rowGap: num(cs.rowGap) || 0,
        colGap: num(cs.columnGap) || 0,
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
      var ch = walk(el.children[ci], myClip);
      if (ch) node.children.push(ch);
    }

    /* 결과적으로 아무것도 안 남았는데 배경그림이 있는 요소 → 자리표시 블록으로 바꾼다.
       예: 네이버 로그인 버튼의 "NAVER" 로고. 로고는 배경그림이고 안에는 화면낭독기용
       글자만 있어서, 그 글자를 걸러내면 통째로 빈자리가 됐다. */
    if (!node.children.length) {
      var bgi2 = pickBgImage(cs) || pickBgImage(getComputedStyle(el, '::before')) || pickBgImage(getComputedStyle(el, '::after'));
      if (bgi2) {
        return Object.assign(base, {
          type: 'IMAGE', name: 'img', src: bgi2, avg: '', data: '',
          radius: [num(cs.borderTopLeftRadius), num(cs.borderTopRightRadius), num(cs.borderBottomRightRadius), num(cs.borderBottomLeftRadius)]
        });
      }
    }
    return node;
  }

  /* ── 레이어 정리 ────────────────────────────────────────────
     피그마에서 받으면 div.wrapper 같은 레이어가 수천 개 쌓여 다루기 힘들다.
     (1) 껍데기 병합 — 자식 하나뿐이고 배경·테두리·그림자·라운드·클립이 없으며
                       자식이 자기 상자를 거의 그대로 채우는 프레임은 없애고 자식을 올린다.
     (2) 이름 — 글자 레이어는 글자 내용으로, 글자 하나만 든 프레임도 그 글자로 이름을 준다.
     ─────────────────────────────────────────────────────────── */
  function isPlainWrapper(n) {
    if (!n || n.type !== 'FRAME' || n.frameHost) return false;
    if (!n.children || n.children.length !== 1) return false;
    var s = n.styles || {};
    if (s.gradient || s.shadow || s.clip) return false;
    if (s.borderWidth > 0) return false;
    if (Array.isArray(s.radius) && s.radius.some(function (v) { return v > 0; })) return false;
    if (s.bg && !/rgba\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(s.bg)) return false;
    var c = n.children[0];
    if (c.type === 'TEXT') return false;   // 글자는 부모 프레임을 이름표로 남겨둔다
    if (c.frameHost) return false;
    // 보이는 스타일이 없으므로 없애도 그림은 그대로다(자식 좌표는 절대값이라 안 움직인다).
    return true;
  }

  function shortText(s) {
    s = String(s || '').replace(/\s+/g, ' ').trim();
    return s.length > 40 ? s.slice(0, 40) + '…' : s;
  }

  function tidy(n, isRoot) {
    if (!n) return n;
    if (n.children && n.children.length) {
      for (var i = 0; i < n.children.length; i++) n.children[i] = tidy(n.children[i], false);
      // 자식 중 껍데기를 없애고 그 안의 것을 올린다 (루트 자체는 붙여넣기 기준이라 건드리지 않는다)
      for (var j = 0; j < n.children.length; j++) {
        var guard = 0;
        while (isPlainWrapper(n.children[j]) && guard++ < 20) n.children[j] = n.children[j].children[0];
      }
    }
    if (n.type === 'TEXT') {
      var t = shortText(n.text && n.text.chars);
      if (t) n.name = t;
    } else if (n.type === 'FRAME' && n.children && n.children.length === 1 && n.children[0].type === 'TEXT') {
      var t2 = shortText(n.children[0].text && n.children[0].text.chars);
      if (t2) n.name = t2;
    }
    return n;
  }

  var sel = selector || null;
  if (sel && window !== window.top) sel = null;   // 하위 프레임에는 그 선택자가 없다 — 프레임 전체를 캡처
  var rootEl = sel ? document.querySelector(sel) : document.body;
  if (!rootEl) throw new Error('선택한 영역을 찾을 수 없습니다: ' + sel);

  console.log('[capture] 시작... (' + (sel || 'body') + ')');
  var root = tidy(walk(rootEl, null), true);
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
