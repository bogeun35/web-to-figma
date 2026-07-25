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
          { lsPx: tx.ls || 0, maxW: node.w || 0 });   // 자간 + 박스 너비 줄바꿈(삐짐 방지)
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
    nc.fillPaints = bg ? [solidPaint(bg)] : [];
    const rad = Array.isArray(st.radius) ? st.radius : (typeof st.radius === "number" ? [st.radius, st.radius, st.radius, st.radius] : null);
    if (rad && rad.some(r => r > 0)) {
      if (rad[0] === rad[1] && rad[1] === rad[2] && rad[2] === rad[3]) nc.cornerRadius = rad[0];
      else { nc.rectangleTopLeftCornerRadius = rad[0]; nc.rectangleTopRightCornerRadius = rad[1]; nc.rectangleBottomRightCornerRadius = rad[2]; nc.rectangleBottomLeftCornerRadius = rad[3]; }
    }
    const border = parseColor(st.borderColor);
    if (border && st.borderWidth > 0) { nc.strokePaints = [solidPaint(border)]; nc.strokeWeight = st.borderWidth; }
    if (node.type === "IMAGE" && !bg) nc.fillPaints = [solidPaint(parseColor(node.avg) || { r: 0.9, g: 0.91, b: 0.93, a: 1 })];  // 평균색 플레이스홀더
    nc.stackMode = "NONE";
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
