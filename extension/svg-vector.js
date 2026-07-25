/* SVG 마크업 → Figma VECTOR 노드 재료 (vectorNetworkBlob)
   네트워크 blob 포맷(역해석 확정, 삼각형 렌더 검증):
     header: uint32×3 {vertexCount, segmentCount, regionCount(0=닫힌루프 자동채움)}
     vertex(12B): {flags u32, x f32, y f32}                — px, 노드 공간
     segment(28B): {flags u32, v0 u32, t0x f32, t0y f32, v1 u32, t1x f32, t1y f32}  — 탄젠트는 정점 기준 상대
   DOMParser 없이 regex 파싱(아이콘 수준 SVG 대상, Node/브라우저 겸용) */
import { parsePathToMLQZ } from "./svg-path.js";

const K = 0.5522847498;   // 원 → cubic 근사 상수

/* 기본 도형 → path d 문자열 (파서 재사용) */
function shapeToD(tag, a) {
  const n = k => parseFloat(a[k] || 0);
  if (tag === "rect") {
    const x = n("x"), y = n("y"), w = n("width"), h = n("height");
    return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`;
  }
  if (tag === "circle" || tag === "ellipse") {
    const cx = n("cx"), cy = n("cy");
    const rx = tag === "circle" ? n("r") : n("rx"), ry = tag === "circle" ? n("r") : n("ry");
    const kx = rx * K, ky = ry * K;
    return `M ${cx + rx} ${cy} C ${cx + rx} ${cy + ky} ${cx + kx} ${cy + ry} ${cx} ${cy + ry}` +
      ` C ${cx - kx} ${cy + ry} ${cx - rx} ${cy + ky} ${cx - rx} ${cy}` +
      ` C ${cx - rx} ${cy - ky} ${cx - kx} ${cy - ry} ${cx} ${cy - ry}` +
      ` C ${cx + kx} ${cy - ry} ${cx + rx} ${cy - ky} ${cx + rx} ${cy} Z`;
  }
  if (tag === "polygon" || tag === "polyline") {
    const pts = String(a.points || "").trim().split(/[\s,]+/).map(parseFloat);
    if (pts.length < 4) return "";
    let d = `M ${pts[0]} ${pts[1]}`;
    for (let i = 2; i + 1 < pts.length; i += 2) d += ` L ${pts[i]} ${pts[i + 1]}`;
    return d + (tag === "polygon" ? " Z" : "");
  }
  if (tag === "line") return `M ${n("x1")} ${n("y1")} L ${n("x2")} ${n("y2")}`;
  return "";
}

/* MLQZ 명령열 → 네트워크 {verts:[[x,y]], segs:[[v0,t0x,t0y,v1,t1x,t1y]]} */
function mlqzToNetwork(cmds, s) {
  const verts = [], segs = [];
  const EPS = 0.01;
  let startIdx = -1, curIdx = -1, cur = null, start = null;
  const addV = (x, y) => {
    // 서브패스 시작점과 같으면 재사용(닫힘 루프 정점 중복 방지)
    if (start && Math.abs(x - start.x) < EPS && Math.abs(y - start.y) < EPS) return startIdx;
    verts.push([x * s, y * s]);
    return verts.length - 1;
  };
  for (const c of cmds) {
    if (c.t === "M") {
      start = { x: c.x, y: c.y };
      verts.push([c.x * s, c.y * s]);
      startIdx = curIdx = verts.length - 1;
      cur = { x: c.x, y: c.y };
    } else if (c.t === "L") {
      const ni = addV(c.x, c.y);
      if (ni !== curIdx) segs.push([curIdx, 0, 0, ni, 0, 0]);
      curIdx = ni; cur = { x: c.x, y: c.y };
    } else if (c.t === "Q") {
      // quad → cubic 제어점: c1 = p0 + 2/3(ctrl-p0), c2 = p1 + 2/3(ctrl-p1); 탄젠트 = 제어점-정점 (상대)
      const t0x = (2 / 3) * (c.cx - cur.x), t0y = (2 / 3) * (c.cy - cur.y);
      const t1x = (2 / 3) * (c.cx - c.x), t1y = (2 / 3) * (c.cy - c.y);
      const ni = addV(c.x, c.y);
      segs.push([curIdx, t0x * s, t0y * s, ni, t1x * s, t1y * s]);
      curIdx = ni; cur = { x: c.x, y: c.y };
    } else if (c.t === "Z") {
      if (curIdx !== startIdx && startIdx >= 0) segs.push([curIdx, 0, 0, startIdx, 0, 0]);
      curIdx = startIdx; cur = start ? { ...start } : cur;
    }
  }
  return { verts, segs };
}

function encodeNetwork(net) {
  const buf = new Uint8Array(12 + net.verts.length * 12 + net.segs.length * 28);
  const dv = new DataView(buf.buffer);
  dv.setUint32(0, net.verts.length, true);
  dv.setUint32(4, net.segs.length, true);
  dv.setUint32(8, 0, true);
  let o = 12;
  for (const [x, y] of net.verts) { dv.setUint32(o, 0, true); dv.setFloat32(o + 4, x, true); dv.setFloat32(o + 8, y, true); o += 12; }
  for (const [a, t0x, t0y, b, t1x, t1y] of net.segs) {
    dv.setUint32(o, 0, true); dv.setUint32(o + 4, a, true); dv.setFloat32(o + 8, t0x, true); dv.setFloat32(o + 12, t0y, true);
    dv.setUint32(o + 16, b, true); dv.setFloat32(o + 20, t1x, true); dv.setFloat32(o + 24, t1y, true); o += 28;
  }
  return buf;
}

/* svg 마크업 → [{blob, size:{x,y}, fill, stroke, strokeWeight, opacity}]
   w,h: 캡처된 표시 크기(px), fallbackColor: currentColor 해석용(요소의 CSS color) */
export function svgToVectors(svgMarkup, w, h, fallbackColor) {
  const svgTag = (svgMarkup.match(/<svg[^>]*>/i) || [""])[0];
  const attr = (tag, name) => { const m = tag.match(new RegExp(name + '\\s*=\\s*"([^"]*)"', "i")); return m ? m[1] : null; };
  // viewBox → 스케일 (표시 px / viewBox 단위)
  const vb = (attr(svgTag, "viewBox") || "").trim().split(/[\s,]+/).map(parseFloat);
  const vbW = vb.length === 4 ? vb[2] : (parseFloat(attr(svgTag, "width")) || w);
  const scale = vbW > 0 ? (w / vbW) : 1;
  const vbX = vb.length === 4 ? vb[0] : 0, vbY = vb.length === 4 ? vb[1] : 0;
  const svgFill = attr(svgTag, "fill");

  const resolveColor = (v, inherit) => {
    if (!v || v === "inherit") return inherit || null;
    if (v === "none") return "none";
    if (v === "currentColor" || v === "currentcolor") return fallbackColor || "rgb(68,68,68)";
    return v;
  };
  const out = [];
  // path/rect/circle/ellipse/polygon/polyline/line 요소 수집
  const re = /<(path|rect|circle|ellipse|polygon|polyline|line)\b[^>]*\/?>/gi;
  let m;
  while ((m = re.exec(svgMarkup))) {
    const tag = m[1].toLowerCase(), full = m[0];
    const a = {};
    const ar = /([a-zA-Z-]+)\s*=\s*"([^"]*)"/g; let am;
    while ((am = ar.exec(full))) a[am[1]] = am[2];
    const d = tag === "path" ? (a.d || "") : shapeToD(tag, a);
    if (!d) continue;
    let cmds;
    try { cmds = parsePathToMLQZ(d); } catch (e) { continue; }
    if (vbX || vbY) cmds = cmds.map(c => c.t === "Z" ? c : Object.assign({}, c, {
      x: c.x - vbX, y: c.y - vbY,
      cx: c.cx !== undefined ? c.cx - vbX : undefined, cy: c.cy !== undefined ? c.cy - vbY : undefined
    }));
    // 서브패스 분리(M마다): 2개 이상이면 BOOLEAN_OPERATION(XOR)로 구멍(even-odd) 재현
    const subs = [];
    let curSub = null;
    for (const c of cmds) {
      if (c.t === "M") { curSub = [c]; subs.push(curSub); }
      else if (curSub) curSub.push(c);
    }
    const blobs = [];
    for (const sub of subs) {
      const net = mlqzToNetwork(sub, scale);
      if (net.verts.length) blobs.push(encodeNetwork(net));
    }
    if (!blobs.length) continue;
    const fill = resolveColor(a.fill, resolveColor(svgFill, fallbackColor));
    const stroke = resolveColor(a.stroke, null);
    out.push({
      blobs: blobs,                       // 1개=단일 VECTOR, 2개 이상=XOR 부울로 묶기
      size: { x: w, y: h },
      fill: fill === "none" ? null : fill,
      stroke: stroke === "none" ? null : stroke,
      strokeWeight: parseFloat(a["stroke-width"] || 1) * scale,
      opacity: a.opacity !== undefined ? parseFloat(a.opacity) : 1
    });
  }
  return out;
}
