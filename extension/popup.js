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
    pickGo: "ページ上で要素をクリックすると、そのままコピーされます。"
  }
};
var lang = "ko";
var T = function (k) { return (I18N[lang] && I18N[lang][k]) || I18N.ko[k] || k; };

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = T(el.getAttribute("data-i18n")); });
  document.querySelectorAll(".langs button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === lang); });
}
document.querySelectorAll(".langs button").forEach(function (b) {
  b.addEventListener("click", function () {
    lang = b.getAttribute("data-lang");
    chrome.storage.local.set({ lang: lang });
    applyLang();
  });
});

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
  var url = chrome.runtime.getURL("capture.js");
  // 1) 모듈 import
  try {
    var res = await chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: async function (u, s, w) { await import(u); return globalThis.__figmaCapture(s || null, w || 0); },
      args: [url, sel, vw]
    });
    var cap = res && res[0] ? res[0].result : null;
    if (cap && cap.root) return cap;
  } catch (e) {
    console.warn("[figma-clipboard] 모듈 방식 실패 → 파일 주입으로 재시도", e);
  }
  // 2) 파일 주입
  await chrome.scripting.executeScript({ target: { tabId: tabId }, files: ["capture.js"] });
  var res2 = await chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: function (s, w) { return globalThis.__figmaCapture(s || null, w || 0); },
    args: [sel, vw]
  });
  return res2 && res2[0] ? res2[0].result : null;
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
    }

    // 캡처
    var cap = null;
    try {
      setStatus(T("capturing"), "");
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

/* ═══ 초기화: 언어·선택영역 복원 ═══ */
chrome.storage.local.get(["lang", "pickedSelector", "pickedDesc"], function (st) {
  if (st.lang && I18N[st.lang]) lang = st.lang;
  if (st.pickedSelector) picked = { selector: st.pickedSelector, desc: st.pickedDesc || st.pickedSelector };
  applyLang();
  renderChip();
});
