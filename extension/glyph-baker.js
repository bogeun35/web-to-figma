/* 글리프 베이커 (브라우저판) — 폰트 외곽선을 Figma commandsBlob 포맷으로 굽기
   blob 포맷 (역해석 확정): [0x00] + ( 0x01 x,y | 0x02 x,y | 0x03 cx,cy,x,y(quad) | 0x00(close) )*
   좌표 float32LE, em 정규화, y-up(폰트와 동일 — 반전 금지) */

let _prev = { x: 0, y: 0 };
function lerp(a, b, t) { return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }; }
function cubicToQuads(c) {
  const p0 = _prev, p1 = { x: c.x1, y: c.y1 }, p2 = { x: c.x2, y: c.y2 }, p3 = { x: c.x, y: c.y };
  const a = lerp(p0, p1, .5), b = lerp(p1, p2, .5), cc = lerp(p2, p3, .5);
  const d = lerp(a, b, .5), e = lerp(b, cc, .5), m = lerp(d, e, .5);
  const q1c = { x: (a.x + d.x) / 2, y: (a.y + d.y) / 2 };
  const q2c = { x: (e.x + cc.x) / 2, y: (e.y + cc.y) / 2 };
  _prev = p3;
  return [{ cx: q1c.x, cy: q1c.y, x: m.x, y: m.y }, { cx: q2c.x, cy: q2c.y, x: p3.x, y: p3.y }];
}

/* 한 글리프 외곽선 → Figma blob Uint8Array */
export function bakeGlyphBlob(glyph, upem) {
  const cmds = glyph.path.commands;
  const bytes = [0x00];
  const pushF = v => {
    const b = new Uint8Array(4);
    new DataView(b.buffer).setFloat32(0, v, true);
    bytes.push(b[0], b[1], b[2], b[3]);
  };
  const nx = x => x / upem, ny = y => y / upem;
  let open = false;
  for (const c of cmds) {
    if (c.type === "M") {
      if (open) bytes.push(0x00);
      bytes.push(0x01); pushF(nx(c.x)); pushF(ny(c.y));
      open = true; _prev = { x: c.x, y: c.y };
    } else if (c.type === "L") {
      bytes.push(0x02); pushF(nx(c.x)); pushF(ny(c.y));
      _prev = { x: c.x, y: c.y };
    } else if (c.type === "Q") {
      bytes.push(0x03); pushF(nx(c.x1)); pushF(ny(c.y1)); pushF(nx(c.x)); pushF(ny(c.y));
      _prev = { x: c.x, y: c.y };
    } else if (c.type === "C") {
      for (const s of cubicToQuads(c)) { bytes.push(0x03); pushF(nx(s.cx)); pushF(ny(s.cy)); pushF(nx(s.x)); pushF(ny(s.y)); }
    } else if (c.type === "Z") {
      bytes.push(0x00);
      open = false;
    }
  }
  if (open) bytes.push(0x00);
  return new Uint8Array(bytes);
}

/* 텍스트 → derivedTextData 재료. blobBase: 새 blob 시작 인덱스, blobCache: 글리프 공유(웨이트별)
   opts: { lsPx: 자간(px, 음수 가능), maxW: 박스 너비(px, 초과 시 단어 단위 줄바꿈) } */
export function bakeText(font, chars, fontSize, lineHeight, blobBase, blobCache, opts) {
  opts = opts || {};
  const lsPx = opts.lsPx || 0;
  const boxW = opts.maxW || 0;
  const upem = font.unitsPerEm;
  const lh = lineHeight > 0 ? lineHeight : Math.round(fontSize * 1.362);
  // CSS 라인박스처럼 (asc+desc)를 lh 안에 중앙 배치 → baseline 위치
  const ascPx = (font.ascender / upem) * fontSize;
  const descPx = (-font.descender / upem) * fontSize;
  const baselineIn = lh2 => (lh2 - (ascPx + descPx)) / 2 + ascPx;

  const advOf = cp => { const g = font.charToGlyph(cp); return { g, advPx: (g.advanceWidth / upem) * fontSize + lsPx }; };

  /* 1) 명시 개행 분할 → 2) 박스 너비 초과 시 단어(공백) 단위 그리디 줄바꿈 */
  const hardLines = String(chars).split("\n");
  const visLines = [];   // [{cps:[...], startChar}] — charIndex는 원본 문자열 기준 유지
  let charIndex = 0;
  for (const line of hardLines) {
    const cps = [...line];
    if (!boxW) { visLines.push({ cps, startChar: charIndex }); charIndex += cps.length + 1; continue; }
    let cur = [], curW = 0, curStart = charIndex, i = 0;
    while (i < cps.length) {
      // 다음 토큰(공백 1개 또는 단어)
      let j = i;
      if (cps[i] === " ") j = i + 1;
      else { while (j < cps.length && cps[j] !== " ") j++; }
      const token = cps.slice(i, j);
      const tokenW = token.reduce((s, c) => s + advOf(c).advPx, 0);
      if (cur.length && curW + tokenW > boxW + 1 && token[0] !== " ") {
        visLines.push({ cps: cur, startChar: curStart });
        curStart = charIndex + i;
        cur = []; curW = 0;
        if (token[0] === " ") { i = j; continue; }   // 줄머리 공백 제거
      }
      cur = cur.concat(token); curW += tokenW; i = j;
    }
    visLines.push({ cps: cur, startChar: curStart });
    charIndex += cps.length + 1;
  }

  const glyphs = [], baselines = [], blobs = [];
  let maxLineW = 0;
  /* 첫 줄 기준선 —
     브라우저가 준 글자 상자(boxH)는 line-height 여백이 **이미 반영된** 위치·크기다.
     (실측: font 14px / line-height 30px → 상자 높이 16px, 상단은 요소보다 7px 아래)
     그래서 여기서 여백을 또 더하면 글자가 그만큼 아래로 밀린다. 상자 안에서
     ascent:descent 비율로만 기준선을 잡는다. boxH 를 모르면 예전 방식으로 되돌린다. */
  const ascRatio = ascPx / (ascPx + descPx);
  const contentH = opts.boxH > 0 ? Math.max(fontSize, opts.boxH - (visLines.length - 1) * lh) : 0;
  const firstBase = contentH > 0 ? contentH * ascRatio : baselineIn(lh);
  visLines.forEach((vl, li) => {
    let penX = 0;
    const baseY = li * lh + firstBase;
    let ci = vl.startChar;
    for (const cp of vl.cps) {
      const { g, advPx } = advOf(cp);
      const key = cp.trim() ? g.index : "__EMPTY__";
      let bidx = blobCache.get(key);
      if (bidx === undefined) {
        _prev = { x: 0, y: 0 };
        const blob = cp.trim() ? bakeGlyphBlob(g, upem) : new Uint8Array([0x00]);
        bidx = blobBase + blobs.length;
        blobs.push(blob);
        blobCache.set(key, bidx);
      }
      glyphs.push({
        commandsBlob: bidx,
        position: { x: penX, y: baseY },
        styleID: 0,
        fontSize: fontSize,
        firstCharacter: ci,
        advance: g.advanceWidth / upem,
        rotation: 0
      });
      penX += advPx;
      ci++;
    }
    maxLineW = Math.max(maxLineW, penX);
    baselines.push({
      position: { x: 0, y: baseY },
      width: penX,
      lineY: li * lh,
      lineHeight: lh,
      lineAscent: ascPx,
      firstCharacter: vl.startChar,
      endCharacter: ci
    });
  });
  return { glyphs, baselines, blobs, layoutSize: { x: maxLineW, y: visLines.length * lh } };
}
