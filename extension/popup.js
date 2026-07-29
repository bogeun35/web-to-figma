import { buildClipboardHtml } from "./figma-encoder.js";

/* ═══ i18n ═══ */
var I18N = {
  ko: {
    scope: "범위 선택", full: "전체 페이지", pick: "영역 선택", resolution: "캡처 해상도",
    current: "현재 브라우저 그대로", copy: "클립보드로 복사",
    capturing: "캡처 중...", resizing: "해상도 적용 중...", images: "이미지 색상 추출 중...", encoding: "변환 중...",
    success: "정상적으로 클립보드에 복사되었습니다.\n피그마에서 Ctrl+V 하세요.",
    error: "문제로 에러가 발생하였습니다. (에러코드 {code})",
    pickHint: "캡처할 영역을 클릭하세요 (ESC 취소)",
    pickWorking: "변환 중...",
    pickDone: "복사 완료 — 피그마에서 Ctrl+V 하세요",
    pickFail: "복사 실패",
    updateFound: "새 버전 v{v} 이 나왔습니다 — 받으러 가기",
    pickGo: "페이지에서 영역을 클릭하면 바로 복사됩니다."
  },
  en: {
    scope: "Capture area", full: "Full page", pick: "Pick element", resolution: "Resolution",
    current: "Current browser size", copy: "Copy to clipboard",
    capturing: "Capturing...", resizing: "Applying resolution...", images: "Extracting image colors...", encoding: "Converting...",
    success: "Copied to clipboard.\nPress Ctrl+V in Figma.",
    error: "An error occurred. (code {code})",
    pickHint: "Click an element to capture (ESC to cancel)",
    pickWorking: "Converting...",
    pickDone: "Copied — press Ctrl+V in Figma",
    pickFail: "Copy failed",
    updateFound: "Version v{v} is available — get it",
    pickGo: "Click an element on the page to copy it."
  },
  zh: {
    scope: "捕获范围", full: "整个页面", pick: "选择区域", resolution: "分辨率",
    current: "当前浏览器尺寸", copy: "复制到剪贴板",
    capturing: "捕获中...", resizing: "应用分辨率中...", images: "提取图片颜色中...", encoding: "转换中...",
    success: "已成功复制到剪贴板。\n请在 Figma 中按 Ctrl+V。",
    error: "发生错误。(错误代码 {code})",
    pickHint: "点击要捕获的区域 (ESC 取消)",
    pickWorking: "转换中...",
    pickDone: "已复制 — 请在 Figma 中按 Ctrl+V",
    pickFail: "复制失败",
    updateFound: "新版本 v{v} 已发布 — 前往下载",
    pickGo: "在页面上点击区域即可直接复制。"
  },
  ja: {
    scope: "キャプチャ範囲", full: "ページ全体", pick: "要素を選択", resolution: "解像度",
    current: "現在のブラウザサイズ", copy: "クリップボードにコピー",
    capturing: "キャプチャ中...", resizing: "解像度を適用中...", images: "画像の色を抽出中...", encoding: "変換中...",
    success: "クリップボードにコピーしました。\nFigma で Ctrl+V を押してください。",
    error: "エラーが発生しました。(エラーコード {code})",
    pickHint: "キャプチャする要素をクリック (ESC でキャンセル)",
    pickWorking: "変換中...",
    pickDone: "コピーしました — Figma で Ctrl+V",
    pickFail: "コピー失敗",
    updateFound: "新しいバージョン v{v} が公開されました — 入手する",
    pickGo: "ページ上で要素をクリックすると、そのままコピーされます。"
  }
};
var lang = "ko";
var T = function (k) { return (I18N[lang] && I18N[lang][k]) || I18N.ko[k] || k; };

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = T(el.getAttribute("data-i18n")); });
  document.querySelectorAll(".langs button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === lang); });
  if (updShown) {
    var ut = document.getElementById("updTxt");
    if (ut) ut.textContent = T("updateFound").replace("{v}", updShown);
  }
}
document.querySelectorAll(".langs button").forEach(function (b) {
  b.addEventListener("click", function () {
    lang = b.getAttribute("data-lang");
    chrome.storage.local.set({ lang: lang });
    applyLang();
  });
});

/* ═══ 새 버전 안내 ═══
   압축을 풀어 넣는 방식은 크롬이 자동으로 갱신하지 않는다. 그래서 최신 릴리스 번호만 확인해
   새 버전이 있으면 안내 줄을 띄우고, 누르면 소개 웹페이지로 보낸다.
   하루 한 번만 조회하고 결과는 저장해 재사용한다. */
var SITE_URL = "https://bogeun35.github.io/web-to-figma/";
var RELEASE_API = "https://api.github.com/repos/bogeun35/web-to-figma/releases/latest";
var CHECK_INTERVAL = 24 * 60 * 60 * 1000;

function verNum(v) {
  var p = String(v || "").replace(/^v/i, "").split(".");
  return (parseInt(p[0], 10) || 0) * 10000 + (parseInt(p[1], 10) || 0) * 100 + (parseInt(p[2], 10) || 0);
}

var updShown = "";   // 언어를 바꿨을 때 안내 문구도 같이 바뀌게 기억해 둔다

function showUpdate(latest) {
  var el = document.getElementById("upd");
  if (!el) return;
  updShown = latest;
  document.getElementById("updTxt").textContent = T("updateFound").replace("{v}", latest);
  el.href = SITE_URL;
  el.hidden = false;
}

async function checkUpdate() {
  var cur = chrome.runtime.getManifest().version;
  try {
    var st = await chrome.storage.local.get(["updLatest", "updAt"]);
    if (st.updAt && Date.now() - st.updAt < CHECK_INTERVAL) {
      if (st.updLatest && verNum(st.updLatest) > verNum(cur)) showUpdate(st.updLatest);
      return;
    }
    var r = await fetch(RELEASE_API, { headers: { Accept: "application/vnd.github+json" } });
    if (!r.ok) return;
    var j = await r.json();
    var latest = String(j.tag_name || "").replace(/^v/i, "");
    await chrome.storage.local.set({ updLatest: latest, updAt: Date.now() });
    if (latest && verNum(latest) > verNum(cur)) showUpdate(latest);
  } catch (e) { /* 조회 실패는 조용히 무시 — 복사 기능과 무관하다 */ }
}

/* ═══ 상태/에러 ═══
   에러코드: 1001 탭없음 | 1002 미지원페이지 | 1003 해상도(디버거) | 1004 캡처 | 1005 변환 | 1006 클립보드 | 1007 영역선택 */
function setStatus(msg, cls) {
  var el = document.getElementById("status");
  el.textContent = msg;
  el.className = cls || "";
}
function fail(code, e) {
  console.warn("[figma-clipboard] E" + code, e);
  setStatus(T("error").replace("{code}", code), "err");
}

/* ═══ 범위 선택 (전체 / 영역) ═══ */
var picked = null;   // { selector, desc }
function renderChip() {
  var chip = document.getElementById("chip");
  var full = document.getElementById("scopeFull");
  var pick = document.getElementById("scopePick");
  if (picked) {
    chip.classList.add("show");
    document.getElementById("chipTxt").textContent = picked.desc || picked.selector;
    full.classList.remove("on");
    pick.classList.add("on");
  } else {
    chip.classList.remove("show");
    full.classList.add("on");
    pick.classList.remove("on");
  }
}
document.getElementById("scopeFull").addEventListener("click", function () {
  picked = null;
  chrome.storage.local.remove(["pickedSelector", "pickedDesc"]);
  renderChip();
});
document.getElementById("chipX").addEventListener("click", function () {
  picked = null;
  chrome.storage.local.remove(["pickedSelector", "pickedDesc"]);
  renderChip();
});
document.getElementById("scopePick").addEventListener("click", async function () {
  try {
    var tab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
    if (!tab || !tab.id) return fail(1001);
    if (/^(chrome|edge|about|chrome-extension):/.test(tab.url || "")) return fail(1002);
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: function (m) { window.__PICKER_MSG__ = m; },
      args: [{ hint: T("pickHint"), working: T("pickWorking"), done: T("pickDone"), fail: T("pickFail") }]
    });
    await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["picker.js"] });
    setStatus(T("pickGo"), "");
    window.close();   // 팝업 닫고 페이지에서 선택
  } catch (e) { fail(1007, e); }
});

/* ═══ 해상도 에뮬레이션 ═══ */
var PRESET_H = { 390: 844, 768: 1024, 1440: 900, 1920: 1080, 2560: 1440, 3440: 1440 };
function dbg(tabId, method, params) {
  return new Promise(function (resolve, reject) {
    chrome.debugger.sendCommand({ tabId: tabId }, method, params || {}, function (res) {
      if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
      else resolve(res);
    });
  });
}
function dbgAttach(tabId) {
  return new Promise(function (resolve, reject) {
    chrome.debugger.attach({ tabId: tabId }, "1.3", function () {
      if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
      else resolve();
    });
  });
}
function dbgDetach(tabId) {
  return new Promise(function (resolve) {
    chrome.debugger.detach({ tabId: tabId }, function () { void chrome.runtime.lastError; resolve(); });
  });
}

/* ═══ 이미지 평균색 보강 (교차출처) ═══ */
async function enrichImages(cap) {
  var targets = [];
  (function walk(n) {
    if (!n) return;
    if (n.type === "IMAGE" && n.src && /^https?:/.test(n.src) && !n.avg) targets.push(n);
    (n.children || []).forEach(walk);
  })(cap.root);
  if (!targets.length) return;
  async function one(n) {
    try {
      var ctl = new AbortController();
      var to = setTimeout(function () { ctl.abort(); }, 6000);
      var res = await fetch(n.src, { credentials: "include", signal: ctl.signal });
      clearTimeout(to);
      if (!res.ok) return;
      var blob = await res.blob();
      if (blob.size > 6 * 1024 * 1024) return;
      var bmp = await createImageBitmap(blob);
      var tiny = new OffscreenCanvas(8, 8);
      var tc = tiny.getContext("2d");
      tc.drawImage(bmp, 0, 0, 8, 8);
      var d = tc.getImageData(0, 0, 8, 8).data;
      var r = 0, g = 0, b = 0, np = 0;
      for (var i = 0; i < d.length; i += 4) { if (d[i + 3] > 16) { r += d[i]; g += d[i + 1]; b += d[i + 2]; np++; } }
      if (np) n.avg = "rgb(" + Math.round(r / np) + ", " + Math.round(g / np) + ", " + Math.round(b / np) + ")";
    } catch (e) { /* 개별 실패 무시 */ }
  }
  var q = targets.slice();
  await Promise.all(Array.from({ length: Math.min(4, q.length) }, async function () {
    while (q.length) await one(q.shift());
  }));
}

/* ═══ 캡처 실행 — 두 가지 방법을 순서대로 시도 ═══
   1) 모듈 import : 평소 경로. capture.js 를 페이지 안에서 모듈로 불러 실행한다.
   2) 파일 주입   : 1)이 막히는 사이트가 있다(보안정책이 강한 사내 시스템·은행 등).
                    그럴 때 capture.js 를 일반 스크립트로 밀어넣고 전역 함수를 호출한다.
   둘 다 실패해야 에러(1004)로 처리한다. */
async function runCapture(tabId, sel, vw) {
  var results = await injectAll(tabId, sel, vw);
  var top = null;
  for (var i = 0; i < results.length; i++) if (results[i].frameId === 0) top = results[i];
  if (!top || !top.result || !top.result.root) return null;
  await mergeFrames(tabId, top.result, results);
  return top.result;
}

/* 페이지의 모든 프레임에 캡처를 주입한다 (끼워진 페이지 안까지).
   확장 프로그램은 사이트 접근 권한이 있어서 다른 도메인 프레임에도 들어갈 수 있다. */
async function injectAll(tabId, sel, vw) {
  var url = chrome.runtime.getURL("capture.js");
  var target = { tabId: tabId, allFrames: true };
  // 1) 모듈 import
  try {
    var res = await chrome.scripting.executeScript({
      target: target,
      func: async function (u, s, w) { await import(u); return globalThis.__figmaCapture(s || null, w || 0); },
      args: [url, sel, vw]
    });
    for (var i = 0; i < res.length; i++) if (res[i].frameId === 0 && res[i].result && res[i].result.root) return res;
  } catch (e) {
    console.warn("[figma-clipboard] 모듈 방식 실패 → 파일 주입으로 재시도", e);
  }
  // 2) 파일 주입
  await chrome.scripting.executeScript({ target: target, files: ["capture.js"] });
  return await chrome.scripting.executeScript({
    target: target,
    func: function (s, w) { return globalThis.__figmaCapture(s || null, w || 0); },
    args: [sel, vw]
  });
}

/* 프레임별로 따로 캡처된 결과를 바깥 페이지의 iframe 자리에 얹는다. */
async function mergeFrames(tabId, topCap, results) {
  // 프레임 부모-자식 관계 (없으면 전부 최상위의 자식으로 본다)
  var tree = [];
  try { tree = await chrome.webNavigation.getAllFrames({ tabId: tabId }); } catch (e) { tree = []; }
  var parentOf = {};
  for (var i = 0; i < tree.length; i++) parentOf[tree[i].frameId] = tree[i].parentFrameId;

  var rootOf = { 0: topCap.root };
  var byId = {};
  for (var j = 0; j < results.length; j++) {
    if (results[j].frameId !== 0 && results[j].result && results[j].result.root) byId[results[j].frameId] = results[j].result;
  }

  var placed = 0, missed = 0;
  var ids = Object.keys(byId).map(Number);
  // 부모가 먼저 자리를 잡도록 얕은 프레임부터 처리
  ids.sort(function (a, b) { return depthOf(a, parentOf) - depthOf(b, parentOf); });

  for (var k = 0; k < ids.length; k++) {
    var fid = ids[k];
    var cap = byId[fid];
    var pid = parentOf[fid];
    if (pid === undefined || pid < 0) pid = 0;
    var parentRoot = rootOf[pid] || topCap.root;
    var host = findFrameHost(parentRoot, cap);
    if (!host) { missed++; continue; }
    // 프레임 문서의 원점을 iframe 상자 위치로 옮긴다
    offsetTree(cap.root, host.x, host.y);
    host.children = host.children || [];
    host.children.push(cap.root);
    host.__filled = true;
    rootOf[fid] = cap.root;
    placed++;
  }
  console.log("[figma-clipboard] 끼워진 페이지 " + placed + "개 반영" + (missed ? " / " + missed + "개 자리 못 찾음" : ""));
}

function depthOf(fid, parentOf) {
  var d = 0, cur = fid;
  while (cur && parentOf[cur] !== undefined && parentOf[cur] >= 0 && d < 20) { cur = parentOf[cur]; d++; }
  return d;
}

/* 자리 찾기 — 세 가지를 순서대로 시도한다.
   1) 부모에서 몇 번째 프레임인지  2) 주소  3) 상자 크기
   광고 프레임은 주소가 about:blank 라 1·3번으로 잡는다. */
function findFrameHost(parentRoot, cap) {
  var m = cap.meta || {};
  var vp = m.viewport || {};
  return searchHost(parentRoot, function (n) { return m.selfIndex >= 0 && n.frameIdx === m.selfIndex; })
    || searchHost(parentRoot, function (n) { return m.url && n.frameSrc && sameUrl(n.frameSrc, m.url); })
    || searchHost(parentRoot, function (n) { return vp.w && Math.abs(n.w - vp.w) <= 2 && Math.abs(n.h - vp.h) <= 2; });
}

function searchHost(node, ok) {
  if (!node) return null;
  if (node.frameHost && !node.__filled && ok(node)) return node;
  var ch = node.children || [];
  for (var i = 0; i < ch.length; i++) {
    var f = searchHost(ch[i], ok);
    if (f) return f;
  }
  return null;
}

function sameUrl(a, b) {
  try {
    var ua = new URL(a, location.href), ub = new URL(b, location.href);
    return ua.origin === ub.origin && ua.pathname === ub.pathname;
  } catch (e) { return a === b; }
}

function offsetTree(node, dx, dy) {
  if (!node) return;
  node.x = (node.x || 0) + dx;
  node.y = (node.y || 0) + dy;
  var ch = node.children || [];
  for (var i = 0; i < ch.length; i++) offsetTree(ch[i], dx, dy);
}

/* ═══ 클립보드로 복사 (메인) ═══ */
document.getElementById("copy").addEventListener("click", async function () {
  var btn = this;
  btn.disabled = true;
  var attached = false, tabId = null;
  try {
    var tab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
    if (!tab || !tab.id) { fail(1001); return; }
    if (/^(chrome|edge|about|chrome-extension):/.test(tab.url || "")) { fail(1002); return; }
    tabId = tab.id;
    var vw = parseInt(document.getElementById("vw").value, 10) || 0;
    var sel = picked ? picked.selector : "";

    // 해상도 에뮬레이션 (2단계: 너비 → 전체높이)
    if (vw > 0) {
      try {
        if (!chrome.debugger) throw new Error("no debugger");
        setStatus(T("resizing"), "");
        await dbgAttach(tabId);
        attached = true;
        await dbg(tabId, "Emulation.setDeviceMetricsOverride", { width: vw, height: PRESET_H[vw] || 1080, deviceScaleFactor: 0, mobile: vw <= 768 });
        await new Promise(function (r) { setTimeout(r, 1200); });
        var hRes = await chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: function () {
            window.scrollTo(0, 0);
            var h = Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0);
            var els = document.querySelectorAll("body, body > *, #root, #app, #app-root, main");
            for (var i = 0; i < els.length; i++) h = Math.max(h, els[i].scrollHeight || 0);
            return h;
          }
        });
        var fullH = (hRes && hRes[0] && hRes[0].result) || 0;
        var capH = Math.min(Math.max(fullH, PRESET_H[vw] || 1080), 20000);
        if (capH > (PRESET_H[vw] || 1080)) {
          await dbg(tabId, "Emulation.setDeviceMetricsOverride", { width: vw, height: capH, deviceScaleFactor: 0, mobile: vw <= 768 });
          await new Promise(function (r) { setTimeout(r, 1500); });
        }
      } catch (e) { fail(1003, e); return; }
    } else {
      /* "현재 브라우저 그대로" 여도 높이는 페이지 전체로 늘린다.
         이걸 안 하면 화면 아래쪽은 지연 로딩(lazy) 이 안 걸려 그려지지 않아 캡처가 모니터 높이에서 잘린다.
         너비는 그대로 두므로 레이아웃은 지금 보시는 그대로다. */
      try {
        if (chrome.debugger) {
          setStatus(T("resizing"), "");
          var sz = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: function () {
              window.scrollTo(0, 0);
              var h = Math.max(document.documentElement.scrollHeight, document.body ? document.body.scrollHeight : 0);
              var els = document.querySelectorAll("body, body > *, #root, #app, #app-root, main");
              for (var i = 0; i < els.length; i++) h = Math.max(h, els[i].scrollHeight || 0);
              return { w: window.innerWidth, h: window.innerHeight, full: h };
            }
          });
          var s = sz && sz[0] && sz[0].result;
          if (s && s.full > s.h + 40) {
            await dbgAttach(tabId);
            attached = true;
            await dbg(tabId, "Emulation.setDeviceMetricsOverride",
              { width: s.w, height: Math.min(s.full, 20000), deviceScaleFactor: 0, mobile: false });
            await new Promise(function (r) { setTimeout(r, 1500); });
          }
        }
      } catch (e) { console.warn("[figma-clipboard] 높이 늘리기 실패 — 보이는 만큼만 캡처합니다", e); }
    }

    // 캡처
    var cap = null;
    try {
      setStatus(T("capturing"), "");
      /* capture.js를 ES 모듈로 동적 import 해서 결과를 바로 받는다.
         픽커(picker.js)도 같은 모듈을 쓰므로 캡처 로직이 한 곳에만 있다. */
      cap = await runCapture(tabId, sel, vw);
      if (!cap || !cap.root) throw new Error("no capture result");
    } catch (e) { fail(1004, e); return; }

    // 이미지 평균색
    setStatus(T("images"), "");
    await enrichImages(cap);

    // 인코딩 + 클립보드
    var built;
    try {
      setStatus(T("encoding"), "");
      built = await buildClipboardHtml(cap);
    } catch (e) { fail(1005, e); return; }
    try {
      var blob = new Blob([built.html], { type: "text/html" });
      await navigator.clipboard.write([new ClipboardItem({ "text/html": blob })]);
    } catch (e) { fail(1006, e); return; }

    setStatus(T("success"), "ok");
  } finally {
    if (attached && tabId != null) {
      try { await dbg(tabId, "Emulation.clearDeviceMetricsOverride", {}); } catch (e) {}
      await dbgDetach(tabId);
    }
    btn.disabled = false;
  }
});


/* ═══ 초기화: 언어·선택영역 복원 + 새 버전 확인 ═══ */
chrome.storage.local.get(["lang", "pickedSelector", "pickedDesc"], function (st) {
  if (st.lang && I18N[st.lang]) lang = st.lang;
  if (st.pickedSelector) picked = { selector: st.pickedSelector, desc: st.pickedDesc || st.pickedSelector };
  applyLang();
  renderChip();
  checkUpdate();
});
