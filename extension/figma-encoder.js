/* 캡처 JSON → 피그마 클립보드 HTML (브라우저 내장 인코더)
   3-build-payload.mjs 의 포팅. 데이터 청크는 raw deflate(pako). 스키마 청크는 원본 재사용.
   export: buildClipboardHtml(cap) → text/html 문자열(프래그먼트) */
import compiled from "./lib/figma-schema-compiled.js";  // 정적 컴파일 스키마(eval 없음, MV3 CSP 준수)
import pako from "./lib/pako.mjs";
import * as opentype from "./lib/opentype.mjs";
import { bakeText } from "./glyph-baker.js";
import { svgToVectors } from "./svg-vector.js";

/* Pretendard 웨이트 매칭 폰트 (글리프 베이킹용) */
const FONT_BY_WEIGHT = [
  [300, "Pretendard-Light.otf"], [400, "Pretendard-Regular.otf"], [500, "Pretendard-Medium.otf"],
  [600, "Pretendard-SemiBold.otf"], [700, "Pretendard-Bold.otf"], [800, "Pretendard-ExtraBold.otf"]
];
const _fonts = new Map();   // 폰트 파싱 결과만 영속 캐시 (글리프→blob 인덱스 캐시는 빌드마다 새로)
function pickWeight(weight) {
  const w = weight || 400;
  return FONT_BY_WEIGHT.reduce((a, b) => Math.abs(b[0] - w) < Math.abs(a[0] - w) ? b : a)[0];
}
async function loadFontFor(weightKey) {
  if (!_fonts.has(weightKey)) {
    const file = FONT_BY_WEIGHT.find(x => x[0] === weightKey)[1];
    const buf = await fetch(chrome.runtime.getURL("assets/fonts/" + file)).then(r => r.arrayBuffer());
    _fonts.set(weightKey, opentype.parse(buf));
  }
  return _fonts.get(weightKey);
}

const VERSION = 106;
const FRAGMENT_TMPL =
  '<meta charset="utf-8"><span data-metadata="&lt;!--(figmeta)__META__(/figmeta)--&gt;"></span>' +
  '<span data-buffer="&lt;!--(figma)__FIG__(/figma)--&gt;"></span>';

let _cache = null;
async function loadAssets() {
  if (_cache) return _cache;
  const url = p => chrome.runtime.getURL(p);
  const [rawBuf, msgTxt, metaTxt] = await Promise.all([
    fetch(url("assets/schema-raw.bin")).then(r => r.arrayBuffer()),
    fetch(url("assets/message.json")).then(r => r.text()),
    fetch(url("assets/meta.json")).then(r => r.text()),
  ]);
  const schemaRaw = new Uint8Array(rawBuf);   // 아카이브 chunk[0]에 그대로 재사용(디코드 불필요)
  const u8revive = (k, v) => (v && v.__u8 ? new Uint8Array(v.__u8) : v);
  const sample = JSON.parse(msgTxt, u8revive);
  const metaSample = JSON.parse(metaTxt);
  _cache = { schemaRaw, sample, metaSample, compiled };
  return _cache;
}

function b64encode(u8) {
  let s = "";
  for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
  return btoa(s);
}
function b64utf8(str) {
  const u8 = new TextEncoder().encode(str);
  return b64encode(u8);
}
function writeArchive(version, chunks) {
  let size = 12;
  for (const c of chunks) size += 4 + c.length;
  const buf = new Uint8Array(size);
  const dv = new DataView(buf.buffer);
  const kiwiStr = "fig-kiwi";
  for (let i = 0; i < 8; i++) buf[i] = kiwiStr.charCodeAt(i);
  dv.setUint32(8, version, true);
  let o = 12;
  for (const c of chunks) { dv.setUint32(o, c.length, true); o += 4; buf.set(c, o); o += c.length; }
  return buf;
}

function parseColor(str) {
  if (!str || str === "transparent") return null;
  const m = String(str).match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (m) { const a = m[4] === undefined ? 1 : parseFloat(m[4]); if (a === 0) return null; return { r: +m[1] / 255, g: +m[2] / 255, b: +m[3] / 255, a }; }
  const hx = String(str).match(/^#([0-9a-fA-F]{6})$/);
  if (hx) { const v = parseInt(hx[1], 16); return { r: (v >> 16 & 255) / 255, g: (v >> 8 & 255) / 255, b: (v & 255) / 255, a: 1 }; }
  const h3 = String(str).match(/^#([0-9a-fA-F]{3})$/);
  if (h3) { const s = h3[1]; return { r: parseInt(s[0] + s[0], 16) / 255, g: parseInt(s[1] + s[1], 16) / 255, b: parseInt(s[2] + s[2], 16) / 255, a: 1 }; }
  const NAMED = { black: [0, 0, 0], white: [255, 255, 255], red: [255, 0, 0], green: [0, 128, 0], blue: [0, 0, 255], gray: [128, 128, 128], grey: [128, 128, 128], orange: [255, 165, 0], yellow: [255, 255, 0] };
  const nm = NAMED[String(str).toLowerCase()];
  if (nm) return { r: nm[0] / 255, g: nm[1] / 255, b: nm[2] / 255, a: 1 };
  return null;
}
const solidPaint = c => ({ type: "SOLID", color: { r: c.r, g: c.g, b: c.b, a: 1 }, opacity: c.a, visible: true, blendMode: "NORMAL" });

/* 괄호 밖 콤마로만 분리 — rgba(0,0,0,.1) 안의 콤마에 걸리지 않게 */
function splitTop(s) {
  const out = []; let depth = 0, cur = "";
  for (const ch of String(s)) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === "," && depth === 0) { if (cur.trim()) out.push(cur.trim()); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

/* ── box-shadow → 피그마 effects ──────────────────────────────
   computed style 형태: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px" (여러 개는 콤마 구분, inset 포함 가능) */
function parseShadows(str) {
  if (!str) return [];
  const out = [];
  for (const part of splitTop(str)) {
    const cm = part.match(/rgba?\([^)]*\)|#[0-9a-fA-F]{3,8}/);
    const c = cm ? parseColor(cm[0]) : { r: 0, g: 0, b: 0, a: 0.25 };
    if (!c) continue;
    const nums = (part.replace(/rgba?\([^)]*\)/g, "").match(/-?\d*\.?\d+px/g) || []).map(v => parseFloat(v));
    const x = nums[0] || 0, y = nums[1] || 0, blur = nums[2] || 0, spread = nums[3] || 0;
    if (!x && !y && !blur && !spread) continue;
    out.push({
      type: /\binset\b/.test(part) ? "INNER_SHADOW" : "DROP_SHADOW",
      color: { r: c.r, g: c.g, b: c.b, a: c.a },
      offset: { x: x, y: y }, radius: Math.max(0, blur), spread: spread,
      visible: true, blendMode: "NORMAL", showShadowBehindNode: false
    });
  }
  return out;
}

/* ── linear-gradient → 피그마 GRADIENT_LINEAR ──────────────────
   방향은 위/오른쪽/아래/왼쪽 네 방향으로 맞춘다(대각선은 가장 가까운 방향). radial 은 아직 안 다룬다. */
function gradTransform(deg) {
  const a = ((deg % 360) + 360) % 360;
  if (a >= 315 || a < 45) return { m00: 0, m01: -1, m02: 1, m10: 1, m11: 0, m12: 0 };  // 아래→위
  if (a < 135)            return { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 };   // 왼→오른쪽
  if (a < 225)            return { m00: 0, m01: 1, m02: 0, m10: -1, m11: 0, m12: 1 };  // 위→아래 (CSS 기본)
  return { m00: -1, m01: 0, m02: 1, m10: 0, m11: 1, m12: 0 };                          // 오른→왼쪽
}

function parseGradient(str) {
  if (!str) return null;
  const s = String(str).trim();
  const m = s.match(/^(repeating-)?linear-gradient\(([\s\S]*)\)$/);
  if (!m) return null;                      // radial/conic 은 건너뜀 → 단색 배경 유지
  const parts = splitTop(m[2]);
  if (!parts.length) return null;
  let angle = 180;                          // CSS 기본값 = to bottom
  if (/^(to\s|-?\d+(\.\d+)?(deg|turn|rad))/i.test(parts[0])) {
    const head = parts.shift();
    const dm = head.match(/(-?\d+(?:\.\d+)?)deg/i);
    if (dm) angle = parseFloat(dm[1]);
    else if (/to\s+top/i.test(head)) angle = 0;
    else if (/to\s+right/i.test(head)) angle = 90;
    else if (/to\s+bottom/i.test(head)) angle = 180;
    else if (/to\s+left/i.test(head)) angle = 270;
  }
  const stops = [];
  for (const p of parts) {
    const cm = p.match(/rgba?\([^)]*\)|#[0-9a-fA-F]{3,8}|\b[a-z]+\b/i);
    if (!cm) continue;
    const c = parseColor(cm[0]);
    if (!c) continue;
    const pm = p.match(/(-?\d+(?:\.\d+)?)%/);
    stops.push({ color: { r: c.r, g: c.g, b: c.b, a: c.a }, position: pm ? parseFloat(pm[1]) / 100 : null });
  }
  if (stops.length < 2) return null;
  if (stops[0].position === null) stops[0].position = 0;
  if (stops[stops.length - 1].position === null) stops[stops.length - 1].position = 1;
  for (let i = 1; i < stops.length - 1; i++) if (stops[i].position === null) stops[i].position = i / (stops.length - 1);
  return { type: "GRADIENT_LINEAR", stops: stops, transform: gradTransform(angle), opacity: 1, visible: true, blendMode: "NORMAL" };
}

/* ── flex → 피그마 Auto Layout ────────────────────────────────
   받아서 바로 편집할 수 있게 만드는 게 목적이라, 실제 좌표가 Auto Layout 결과와
   일치하는 경우에만 적용한다. 간격이 들쭉날쭉하거나(grow/space 분배) 겹치면 절대좌표로 둔다. */
/* stackPrimaryAlignItems = StackJustify (MIN/CENTER/MAX/SPACE_*)
   stackCounterAlignItems = StackAlign   (MIN/CENTER/MAX/BASELINE — STRETCH 없음)
   CSS 의 stretch·normal 은 대응값이 없어 MIN 으로 둔다. 자식 크기는 캡처값 그대로 고정이라 그림은 같다. */
const JUSTIFY_MAP = { "flex-start": "MIN", "start": "MIN", "left": "MIN", "center": "CENTER", "flex-end": "MAX", "end": "MAX", "right": "MAX", "space-between": "SPACE_BETWEEN", "space-around": "SPACE_AROUND", "space-evenly": "SPACE_EVENLY" };
const ALIGN_MAP = { "flex-start": "MIN", "start": "MIN", "center": "CENTER", "flex-end": "MAX", "end": "MAX", "baseline": "BASELINE", "stretch": "MIN", "normal": "MIN" };

function applyAutoLayout(nc, node) {
  const L = node.layout || {};
  if (!/flex/.test(L.display || "")) return false;
  if ((L.wrap || "nowrap") !== "nowrap") return false;
  const kids = (node.children || []).filter(Boolean);
  if (kids.length < 2) return false;
  const col = /column/.test(L.dir || "row");
  const pad = Array.isArray(L.pad) ? L.pad : [0, 0, 0, 0];
  const gap = Math.max(0, (col ? (L.rowGap || L.gap) : (L.colGap || L.gap)) || 0);

  const sorted = kids.slice().sort((a, b) => (col ? (a.y - b.y) : (a.x - b.x)));
  const start = col ? node.y + pad[0] : node.x + pad[3];
  const first = col ? sorted[0].y : sorted[0].x;
  if (Math.abs(first - start) > 1.5) return false;               // 시작 위치가 패딩과 안 맞음
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1], cur = sorted[i];
    const prevEnd = col ? prev.y + (prev.h || 0) : prev.x + (prev.w || 0);
    const curStart = col ? cur.y : cur.x;
    if (Math.abs((curStart - prevEnd) - gap) > 1.5) return false; // 간격이 gap 과 다름
  }

  node.children = sorted;                                        // 피그마는 자식 순서대로 배치한다
  nc.stackMode = col ? "VERTICAL" : "HORIZONTAL";
  nc.stackSpacing = gap;
  nc.stackVerticalPadding = pad[0];
  nc.stackPaddingBottom = pad[2];
  nc.stackHorizontalPadding = pad[3];
  nc.stackPaddingRight = pad[1];
  nc.stackPrimarySizing = "FIXED";
  nc.stackCounterSizing = "FIXED";
  /* 스키마에 없는 값이 하나라도 들어가면 복사 전체가 실패한다 → 허용값만 통과시킨다 */
  const J_OK = ["MIN", "CENTER", "MAX", "SPACE_BETWEEN", "SPACE_AROUND", "SPACE_EVENLY"];
  const A_OK = ["MIN", "CENTER", "MAX", "BASELINE"];
  const j = JUSTIFY_MAP[L.justify], a = ALIGN_MAP[L.align];
  nc.stackPrimaryAlignItems = J_OK.indexOf(j) >= 0 ? j : "MIN";
  nc.stackCounterAlignItems = A_OK.indexOf(a) >= 0 ? a : "MIN";
  nc.stackWrap = "NO_WRAP";
  return true;
}

const DIRTY = ["styleIdForFill", "styleIdForStroke", "styleId", "derivedTextData",
  "isPublishable", "key", "publishID", "styleType", "componentKey", "overrideKey",
  "fillGeometry", "strokeGeometry", "vectorData", "symbolData", "styleReferences"];

export async function buildClipboardHtml(cap, opts) {
  opts = opts || {};
  const { schemaRaw, sample, metaSample } = await loadAssets();
  const u8revive = (k, v) => (v && v.__u8 ? new Uint8Array(v.__u8) : v);
  const clone = o => JSON.parse(JSON.stringify(o, (k, v) => (v instanceof Uint8Array ? { __u8: Array.from(v) } : v)), u8revive);

  const keep = [], tmpl = {};
  for (const nc of sample.nodeChanges) {
    if (nc.type === "DOCUMENT" || nc.type === "CANVAS") keep.push(nc);
    if (!tmpl[nc.type]) tmpl[nc.type] = nc;
  }
  const T_TEXT = tmpl["TEXT"], T_FRAME = tmpl["FRAME"];
  if (!T_TEXT || !T_FRAME) throw new Error("샘플에 TEXT/FRAME 템플릿 부족");
  const pageGuid = (keep.find(n => n.type === "CANVAS" && n.name !== "Internal Only Canvas") || {}).guid || { sessionID: 0, localID: 1 };

  function strip(nc) {
    for (const k of DIRTY) delete nc[k];
    for (const k of Object.keys(nc)) if (/blob|styleId|symbolId/i.test(k)) delete nc[k];
    return nc;
  }

  let localID = 90000;
  const newGuid = () => ({ sessionID: 20260724, localID: ++localID });
  const posOf = i => String.fromCharCode(33 + (i % 90)) + (i >= 90 ? String.fromCharCode(33 + Math.floor(i / 90)) : "");
  const NOTEXT = !!opts.noText;
  const LIMIT = opts.limit || Infinity;
  const out = [];

  /* 글리프 베이킹 상태 — 캡처에 등장하는 웨이트를 미리 스캔해 폰트 프리로드(walk는 동기) */
  const sampleBlobCount = (sample.blobs || []).length;
  const newBlobs = [];
  const cacheByWeight = new Map();   // 빌드 로컬 (blob 인덱스가 이번 빌드에 종속)
  const weightsNeeded = new Set();
  (function scan(n) {
    if (!n) return;
    if (n.type === "TEXT") { const tx = (n.text && typeof n.text === "object") ? n.text : {}; weightsNeeded.add(pickWeight(tx.weight)); }
    (n.children || []).forEach(scan);
  })(cap.root);
  const fontByWeight = new Map();
  for (const wk of weightsNeeded) fontByWeight.set(wk, await loadFontFor(wk));

  function baseFrom(templ, node, parentGuid, sibIdx, absX, absY) {
    const nc = strip(clone(templ));
    nc.guid = newGuid();
    nc.phase = "CREATED";
    nc.parentIndex = { guid: parentGuid, position: posOf(sibIdx) };
    nc.name = node.name || nc.type.toLowerCase();
    nc.size = { x: Math.max(node.w || 1, 0.01), y: Math.max(node.h || 1, 0.01) };
    nc.transform = { m00: 1, m01: 0, m02: absX, m10: 0, m11: 1, m12: absY };
    delete nc.overrideKey;
    return nc;
  }
  function walk(node, parentGuid, sibIdx, offX, offY) {
    if (out.length >= LIMIT) return;
    const absX = (node.x || 0) - offX, absY = (node.y || 0) - offY;
    if (node.type === "TEXT") {
      if (NOTEXT) return;
      const nc = baseFrom(T_TEXT, node, parentGuid, sibIdx, absX, absY);
      const tx = (node.text && typeof node.text === "object") ? node.text : { chars: String(node.text || "") };
      const chars = tx.chars || "";
      const paras = chars.split("\n");
      nc.textData = { characters: chars, lines: paras.map(() => ({ lineType: "PLAIN", styleId: 0, indentationLevel: 0, sourceDirectionality: "AUTO", listStartOffset: 0, isFirstLineOfList: false })) };
      if (tx.size) nc.fontSize = tx.size;
      if (tx.color) { const c = parseColor(tx.color); if (c) nc.fillPaints = [solidPaint(c)]; }
      const w = tx.weight || 400;
      const style = w >= 700 ? "Bold" : w >= 600 ? "Semi Bold" : w >= 500 ? "Medium" : w <= 300 ? "Light" : "Regular";
      nc.fontName = { family: "Inter", style: style, postscript: "" };  // 더블클릭 편집 시 대체 폰트
      if (tx.lh) nc.lineHeight = { value: tx.lh, units: "PIXELS" };
      if (tx.align) nc.textAlignHorizontal = tx.align === "center" ? "CENTER" : (tx.align === "right" ? "RIGHT" : "LEFT");
      nc.textAutoResize = "NONE";
      // ★ 글리프 베이킹: Pretendard 외곽선을 blob으로 구워 붙여넣기 즉시 렌더
      try {
        const wk = pickWeight(w);
        const font = fontByWeight.get(wk);
        if (!cacheByWeight.has(wk)) cacheByWeight.set(wk, new Map());
        const fontSize = tx.size || 13;
        const baked = bakeText(font, chars, fontSize, tx.lh || 0, sampleBlobCount + newBlobs.length, cacheByWeight.get(wk),
          { lsPx: tx.ls || 0, maxW: node.w || 0, boxH: node.h || 0 });   // 자간 + 박스 너비 줄바꿈(삐짐 방지) + 상자 높이(세로 위치 기준)
        for (const b of baked.blobs) newBlobs.push(b);
        nc.derivedTextData = {
          layoutSize: baked.layoutSize,
          baselines: baked.baselines,
          glyphs: baked.glyphs,
          fontMetaData: [{ key: nc.fontName, fontLineHeight: 1.362, fontDigest: new Uint8Array(20), fontStyle: "NORMAL", fontWeight: w }],
          truncationStartIndex: -1,
          truncatedHeight: -1,
          logicalIndexToCharacterOffsetMap: [],
          derivedLines: []
        };
      } catch (e) { console.warn("[bake 실패]", chars.slice(0, 20), e); }
      out.push(nc);
      return;
    }
    // SVG → 진짜 벡터 노드 (vectorNetworkBlob)
    if (node.type === "SVG" && node.svg) {
      try {
        const shapes = svgToVectors(node.svg, node.w || 1, node.h || 1, node.color);
        if (shapes.length) {
          const frame = baseFrom(T_FRAME, node, parentGuid, sibIdx, absX, absY);
          frame.fillPaints = [];
          frame.stackMode = "NONE";
          frame.frameMaskDisabled = true;
          out.push(frame);
          shapes.forEach((sh, i) => {
            const fc = parseColor(sh.fill);
            const sc = parseColor(sh.stroke);
            const mkVector = (blob, parentG, pos) => {
              const v = strip(clone(T_FRAME));
              v.type = "VECTOR";
              v.guid = newGuid();
              v.phase = "CREATED";
              v.parentIndex = { guid: parentG, position: pos };
              v.name = "vector";
              v.size = sh.size;
              v.transform = { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 };
              delete v.stackMode; delete v.frameMaskDisabled;
              v.vectorData = { vectorNetworkBlob: sampleBlobCount + newBlobs.length, normalizedSize: sh.size };
              newBlobs.push(blob);
              v.fillPaints = fc ? [solidPaint(fc)] : [];
              if (sc) { v.strokePaints = [solidPaint(sc)]; v.strokeWeight = sh.strokeWeight || 1; }
              else v.strokePaints = [];
              return v;
            };
            if (sh.blobs.length === 1) {
              const v = mkVector(sh.blobs[0], frame.guid, posOf(i));
              if (sh.opacity < 1) v.opacity = sh.opacity;
              out.push(v);
            } else {
              // 서브패스 2개 이상 → XOR 부울(even-odd 구멍 재현)
              const bo = strip(clone(T_FRAME));
              bo.type = "BOOLEAN_OPERATION";
              bo.guid = newGuid();
              bo.phase = "CREATED";
              bo.parentIndex = { guid: frame.guid, position: posOf(i) };
              bo.name = "vector-xor";
              bo.size = sh.size;
              bo.transform = { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: 0 };
              delete bo.stackMode; delete bo.frameMaskDisabled;
              bo.booleanOperation = "XOR";
              bo.vectorOperationVersion = 1;
              bo.fillPaints = fc ? [solidPaint(fc)] : [];
              bo.strokePaints = sc ? [solidPaint(sc)] : [];
              if (sc) bo.strokeWeight = sh.strokeWeight || 1;
              if (sh.opacity < 1) bo.opacity = sh.opacity;
              out.push(bo);
              sh.blobs.forEach((blob, j) => out.push(mkVector(blob, bo.guid, posOf(j))));
            }
          });
          return;
        }
      } catch (e) { console.warn("[svg 실패]", node.name, e); }
    }
    const nc = baseFrom(T_FRAME, node, parentGuid, sibIdx, absX, absY);
    const st = node.styles || {};
    const bg = parseColor(st.bg || node.bg || node.fill);
    /* 배경 — 그라디언트가 있으면 그것을 쓰고(단색 위에 얹음), 없으면 단색 */
    const grad = parseGradient(st.gradient);
    if (grad) nc.fillPaints = bg && bg.a > 0 ? [solidPaint(bg), grad] : [grad];
    else nc.fillPaints = bg ? [solidPaint(bg)] : [];
    const rad = Array.isArray(st.radius) ? st.radius : (typeof st.radius === "number" ? [st.radius, st.radius, st.radius, st.radius] : null);
    if (rad && rad.some(r => r > 0)) {
      if (rad[0] === rad[1] && rad[1] === rad[2] && rad[2] === rad[3]) nc.cornerRadius = rad[0];
      else { nc.rectangleTopLeftCornerRadius = rad[0]; nc.rectangleTopRightCornerRadius = rad[1]; nc.rectangleBottomRightCornerRadius = rad[2]; nc.rectangleBottomLeftCornerRadius = rad[3]; }
    }
    const border = parseColor(st.borderColor);
    if (border && st.borderWidth > 0) { nc.strokePaints = [solidPaint(border)]; nc.strokeWeight = st.borderWidth; }
    /* 이미지·아이콘 — 클립보드로는 실제 픽셀을 넣을 수 없다(피그마가 해시만 받는다).
       기획 와이어프레임처럼 회색 블록으로 자리만 표시한다. 나중에 그 자리에 실제 그림을 올리면 된다. */
    if (node.type === "IMAGE") {
      nc.fillPaints = [solidPaint({ r: 0.925, g: 0.933, b: 0.945, a: 1 })];   // #ECEEF1
      nc.strokePaints = [solidPaint({ r: 0.79, g: 0.808, b: 0.839, a: 1 })];  // #C9CED6
      nc.strokeWeight = 1;
    }
    /* 그림자 */
    const fx = parseShadows(st.shadow);
    if (fx.length) nc.effects = fx;
    /* flex → Auto Layout (조건이 맞을 때만, 아니면 절대좌표 유지) */
    if (!applyAutoLayout(nc, node)) nc.stackMode = "NONE";
    /* 잘라내기는 켜지 않는다.
       켜보니 말줄임(...)으로 처리된 글자가 상자 끝에서 통째로 잘려 읽을 수 없었다.
       그림이 상자 밖으로 튀어나오는 문제는 캡처 단계에서 상자를 깎는 방식으로 이미 막았다. */
    nc.frameMaskDisabled = true;
    out.push(nc);
    if (node.children && node.children.length) node.children.forEach((ch, i) => walk(ch, nc.guid, i, node.x || 0, node.y || 0));
  }
  walk(cap.root, pageGuid, 0, cap.root.x || 0, cap.root.y || 0);
  if (out[0] && (!out[0].fillPaints || !out[0].fillPaints.length)) {
    out[0].fillPaints = [{ type: "SOLID", color: { r: 1, g: 1, b: 1, a: 1 }, opacity: 1, visible: true, blendMode: "NORMAL" }];
  }

  const message = clone(sample);
  message.nodeChanges = [...keep, ...out];
  // blobs: 샘플 것 유지 + 구운 글리프 blob 이어붙임(인덱스는 sampleBlobCount부터)
  message.blobs = [...(message.blobs || []), ...newBlobs.map(b => ({ bytes: b }))];
  message.pasteID = Math.floor(Math.random() * 2 ** 31);
  const rootFrameGuid = out[0] && out[0].guid;
  message.clipboardSelectionRegions = rootFrameGuid ? [{
    parent: pageGuid, nodes: [rootFrameGuid],
    pasteIsPartiallyOutsideEnclosingFrame: false, focusType: "NONE"
  }] : [];
  const meta = Object.assign({}, metaSample, {
    pasteID: message.pasteID,
    selectedNodeData: rootFrameGuid ? (rootFrameGuid.sessionID + ":" + rootFrameGuid.localID + "|4|0") : ""
  });

  const dataBin = compiled.encodeMessage(message);
  const dataComp = pako.deflateRaw(dataBin);
  const archive = writeArchive(VERSION, [schemaRaw, dataComp]);
  const figB64 = b64encode(archive);
  const metaB64 = b64utf8(JSON.stringify(meta));

  const html = FRAGMENT_TMPL.replace("__META__", metaB64).replace("__FIG__", figB64);
  return { html, nodeCount: out.length };
}
