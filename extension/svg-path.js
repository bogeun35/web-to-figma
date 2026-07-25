/* SVG path d-문자열 → 정규화 명령열 (M/L/Q/Z만, 절대좌표)
   - 상대좌표(mlhvcsqtaz), H/V, S/T(반사 제어점), A(호) 모두 전개
   - C(cubic)→Q(quad) 2분할 근사, A(arc)→cubic 열→Q
   Figma commandsBlob(글리프와 동일 포맷)으로 굽기 위한 전처리 */

function tokenize(d) {
  const re = /([MmLlHhVvCcSsQqTtAaZz])|(-?\d*\.?\d+(?:[eE][+-]?\d+)?)/g;
  const out = []; let m;
  while ((m = re.exec(d))) out.push(m[1] || parseFloat(m[2]));
  return out;
}
function lerp(a, b, t) { return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }; }
function cubicToQuads(p0, p1, p2, p3) {
  const a = lerp(p0, p1, .5), b = lerp(p1, p2, .5), c = lerp(p2, p3, .5);
  const d = lerp(a, b, .5), e = lerp(b, c, .5), mid = lerp(d, e, .5);
  return [
    { cx: (a.x + d.x) / 2, cy: (a.y + d.y) / 2, x: mid.x, y: mid.y },
    { cx: (e.x + c.x) / 2, cy: (e.y + c.y) / 2, x: p3.x, y: p3.y }
  ];
}
/* 타원호 → cubic 분해 (표준 endpoint→center 변환) */
function arcToCubics(p0, rx, ry, phi, largeArc, sweep, p) {
  if (rx === 0 || ry === 0) return [{ c1: p0, c2: p, p }];
  rx = Math.abs(rx); ry = Math.abs(ry);
  const rad = phi * Math.PI / 180, cosp = Math.cos(rad), sinp = Math.sin(rad);
  const dx = (p0.x - p.x) / 2, dy = (p0.y - p.y) / 2;
  const x1 = cosp * dx + sinp * dy, y1 = -sinp * dx + cosp * dy;
  let l = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
  if (l > 1) { const s = Math.sqrt(l); rx *= s; ry *= s; }
  const sign = largeArc !== sweep ? 1 : -1;
  const num = rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1;
  const den = rx * rx * y1 * y1 + ry * ry * x1 * x1;
  const co = sign * Math.sqrt(Math.max(0, num / den));
  const cx1 = co * rx * y1 / ry, cy1 = -co * ry * x1 / rx;
  const cx = cosp * cx1 - sinp * cy1 + (p0.x + p.x) / 2;
  const cy = sinp * cx1 + cosp * cy1 + (p0.y + p.y) / 2;
  const ang = (ux, uy, vx, vy) => {
    const dot = ux * vx + uy * vy, len = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
    let a = Math.acos(Math.min(1, Math.max(-1, dot / len)));
    if (ux * vy - uy * vx < 0) a = -a;
    return a;
  };
  let th1 = ang(1, 0, (x1 - cx1) / rx, (y1 - cy1) / ry);
  let dth = ang((x1 - cx1) / rx, (y1 - cy1) / ry, (-x1 - cx1) / rx, (-y1 - cy1) / ry);
  if (!sweep && dth > 0) dth -= 2 * Math.PI;
  if (sweep && dth < 0) dth += 2 * Math.PI;
  const segs = Math.max(1, Math.ceil(Math.abs(dth) / (Math.PI / 2)));
  const out = [];
  for (let i = 0; i < segs; i++) {
    const t1 = th1 + dth * i / segs, t2 = th1 + dth * (i + 1) / segs;
    const dt = t2 - t1, k = 4 / 3 * Math.tan(dt / 4);
    const pt = t => ({
      x: cx + rx * Math.cos(t) * cosp - ry * Math.sin(t) * sinp,
      y: cy + rx * Math.cos(t) * sinp + ry * Math.sin(t) * cosp
    });
    const dpt = t => ({
      x: -rx * Math.sin(t) * cosp - ry * Math.cos(t) * sinp,
      y: -rx * Math.sin(t) * sinp + ry * Math.cos(t) * cosp
    });
    const a0 = pt(t1), a3 = pt(t2), d0 = dpt(t1), d3 = dpt(t2);
    out.push({ c1: { x: a0.x + k * d0.x, y: a0.y + k * d0.y }, c2: { x: a3.x - k * d3.x, y: a3.y - k * d3.y }, p: a3 });
  }
  return out;
}

/* d → [{t:"M",x,y}|{t:"L",x,y}|{t:"Q",cx,cy,x,y}|{t:"Z"}] */
export function parsePathToMLQZ(d) {
  const tk = tokenize(d);
  const out = [];
  let i = 0, cmd = "", cur = { x: 0, y: 0 }, start = { x: 0, y: 0 };
  let prevC = null, prevQ = null;   // S/T 반사용
  const num = () => tk[i++];
  const emitC = (p1, p2, p) => { for (const q of cubicToQuads(cur, p1, p2, p)) out.push({ t: "Q", cx: q.cx, cy: q.cy, x: q.x, y: q.y }); cur = p; };
  while (i < tk.length) {
    if (typeof tk[i] === "string") cmd = tk[i++];
    const rel = cmd === cmd.toLowerCase();
    const C = cmd.toUpperCase();
    if (C === "Z") { out.push({ t: "Z" }); cur = { ...start }; prevC = prevQ = null; continue; }
    if (C === "M") {
      const x = num() + (rel ? cur.x : 0), y = num() + (rel ? cur.y : 0);
      cur = { x, y }; start = { x, y };
      out.push({ t: "M", x, y });
      cmd = rel ? "l" : "L";   // 후속 좌표쌍은 lineto
      prevC = prevQ = null; continue;
    }
    if (C === "L") { const x = num() + (rel ? cur.x : 0), y = num() + (rel ? cur.y : 0); cur = { x, y }; out.push({ t: "L", x, y }); prevC = prevQ = null; continue; }
    if (C === "H") { const x = num() + (rel ? cur.x : 0); cur = { x, y: cur.y }; out.push({ t: "L", x, y: cur.y }); prevC = prevQ = null; continue; }
    if (C === "V") { const y = num() + (rel ? cur.y : 0); cur = { x: cur.x, y }; out.push({ t: "L", x: cur.x, y }); prevC = prevQ = null; continue; }
    if (C === "C") {
      const p1 = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      const p2 = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      const p = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      emitC(p1, p2, p); prevC = p2; prevQ = null; continue;
    }
    if (C === "S") {
      const p1 = prevC ? { x: 2 * cur.x - prevC.x, y: 2 * cur.y - prevC.y } : { ...cur };
      const p2 = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      const p = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      emitC(p1, p2, p); prevC = p2; prevQ = null; continue;
    }
    if (C === "Q") {
      const c1 = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      const p = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      out.push({ t: "Q", cx: c1.x, cy: c1.y, x: p.x, y: p.y }); cur = p; prevQ = c1; prevC = null; continue;
    }
    if (C === "T") {
      const c1 = prevQ ? { x: 2 * cur.x - prevQ.x, y: 2 * cur.y - prevQ.y } : { ...cur };
      const p = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      out.push({ t: "Q", cx: c1.x, cy: c1.y, x: p.x, y: p.y }); cur = p; prevQ = c1; prevC = null; continue;
    }
    if (C === "A") {
      const rx = num(), ry = num(), phi = num(), la = num(), sw = num();
      const p = { x: num() + (rel ? cur.x : 0), y: num() + (rel ? cur.y : 0) };
      for (const seg of arcToCubics(cur, rx, ry, phi, !!la, !!sw, p)) emitC(seg.c1, seg.c2, seg.p);
      prevC = prevQ = null; continue;
    }
    i++;   // 미지 토큰 스킵(무한루프 방지)
  }
  return out;
}

/* MLQZ 명령열 → Figma commandsBlob Uint8Array. scale/offset으로 좌표 변환 */
export function commandsToBlob(cmds, fx, fy) {
  const bytes = [0x00];
  const pushF = v => { const b = new Uint8Array(4); new DataView(b.buffer).setFloat32(0, v, true); bytes.push(b[0], b[1], b[2], b[3]); };
  let open = false;
  for (const c of cmds) {
    if (c.t === "M") { if (open) bytes.push(0x00); bytes.push(0x01); pushF(fx(c.x)); pushF(fy(c.y)); open = true; }
    else if (c.t === "L") { bytes.push(0x02); pushF(fx(c.x)); pushF(fy(c.y)); }
    else if (c.t === "Q") { bytes.push(0x03); pushF(fx(c.cx)); pushF(fy(c.cy)); pushF(fx(c.x)); pushF(fy(c.y)); }
    else if (c.t === "Z") { bytes.push(0x00); open = false; }
  }
  if (open) bytes.push(0x00);
  return new Uint8Array(bytes);
}
