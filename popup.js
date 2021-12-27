"use strict";
(function(a,b){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],b);else if("undefined"!=typeof exports)b(module);else{var c={exports:{}};b(c),a.browser=c.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a);let m=!1;const n=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){m||(console.warn("Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",new Error().stack),m=!0),h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),o=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},p=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=o.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},q={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(n),onMessageExternal:k(n),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},r={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":r},services:{"*":r},websites:{"*":r}},j(a,q,b)})(chrome)}else a.exports=browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.8.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function fileSizeToText(size) {
  let unit = "B";
  if (size >= 1024) {
    size /= 1024;
    unit = "KB";

    if (size >= 1024) {
      size /= 1024;
      unit = "MB";

      if (size >= 1024) {
        size /= 1024;
        unit = "GB";
      }
    }
  }

  return `${size.toFixed(1)} ${unit}`;
}

function renderOptionsElement(body, type, name, value, label, help, callback) {
  const labelEl = document.createElement("label");
  labelEl.title = help;
  labelEl.htmlFor = name;

  const input = document.createElement("input");
  input.id = name;
  input.name = name;
  input.type = type;
  if (type === "checkbox" || type === "radio") input.checked = value;
  else input.value = value;

  input.onchange = callback;

  if (type === "text") {
    labelEl.classList.add("text-input", "browser-style");
    labelEl.appendChild(document.createTextNode(label + ":"));
    labelEl.appendChild(input);
    body.appendChild(labelEl);
  } else {
    labelEl.appendChild(document.createTextNode(label));
    body.appendChild(input);
    body.appendChild(labelEl);
  }
}

function renderOptions(body, options, callback) {
  function onchange(event) {
    let ops = {};
    let target = event.target;
    if (target.type === "radio") ops["command"] = target.name;
    else if (target.type === "checkbox") ops[target.name] = target.checked;
    else if (target.type === "text") ops[target.name] = target.value;

    callback(ops);
  }

  function resetCallback() {
    callback();
  }

  let reset = document.createElement("button");
  reset.classList.add("reset", "browser-style");
  reset.onclick = resetCallback;
  reset.textContent = "Reset";
  body.appendChild(reset);

  let command = document.createElement("div");
  command.classList.add("command", "browser-style");
  renderOptionsElement(
    command,
    "radio",
    "curl",
    options.command === "curl",
    "curl",
    "Generate curl command.",
    onchange
  );
  renderOptionsElement(
    command,
    "radio",
    "wget",
    options.command === "wget",
    "wget",
    "Generate wget command.",
    onchange
  );
  renderOptionsElement(
    command,
    "radio",
    "aria2",
    options.command === "aria2",
    "aria2",
    "Generate aria2 command.",
    onchange
  );

  let common = document.createElement("div");
  common.classList.add("common", "browser-style");
  renderOptionsElement(
    common,
    "checkbox",
    "doubleQuotes",
    options.doubleQuotes,
    "Escape with double-quotes",
    'Use double quotation marks (") for command-line arguments. Enable this if you plan to *execute* the commands on a Windows machine.',
    onchange
  );
  renderOptionsElement(
    common,
    "text",
    "excludeHeaders",
    options.excludeHeaders,
    "Exclude headers",
    "Exclude request headers from the generated command.",
    onchange
  );

  let extra = document.createElement("div");
  extra.classList.add("extra", "browser-style");

  if (options.command === "curl")
    renderOptionsElement(
      extra,
      "text",
      "curlOptions",
      options.curlOptions,
      "Extra curl arguments",
      "Add extra command-line arguments to be appended to the curl command.",
      onchange
    );

  if (options.command === "wget")
    renderOptionsElement(
      extra,
      "text",
      "wgetOptions",
      options.wgetOptions,
      "Extra wget arguments",
      "Add extra command-line arguments to be appended to the curl command.",
      onchange
    );

  if (options.command === "aria2")
    renderOptionsElement(
      extra,
      "text",
      "aria2Options",
      options.aria2Options,
      "Extra aria2 arguments",
      "Add extra command-line arguments to be appended to the curl command.",
      onchange
    );

  body.appendChild(command);
  body.appendChild(common);
  body.appendChild(extra);
}

function showCommand(requestId, options) {
  if (!options) {
    browser.runtime.sendMessage(["getOptions"]).then((opts) => {
      showCommand(requestId, opts);
    });
    return;
  }

  browser.runtime
    .sendMessage(["generateCommand", requestId, options])
    .then((cmd) => {
      const body = document.body;
      while (body.firstChild) body.removeChild(body.firstChild);

      const textArea = document.createElement("textarea");
      textArea.classList.add("browser-style");
      textArea.cols = 80;
      textArea.rows = 15;
      textArea.value = cmd;

      let optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");
      renderOptions(optionsDiv, options, (optionsUpdate) => {
        if (!optionsUpdate)
          browser.runtime.sendMessage(["resetOptions"]).then((newOptions) => {
            showCommand(requestId, newOptions);
          });
        else
          browser.runtime
            .sendMessage(["setOptions", optionsUpdate])
            .then((newOptions) => {
              showCommand(requestId, newOptions);
            });
      });
      body.appendChild(textArea);
      body.appendChild(optionsDiv);
      textArea.focus();
      textArea.select();
    });
}

function showList(downloadList, highlight) {
  const body = document.body;
  while (body.firstChild) body.removeChild(body.firstChild);

  if (!downloadList.length) {
    let el = document.createElement("div");
    el.style.margin = "20px";
    el.textContent = "No downloads for this session.";
    body.appendChild(el);
    return;
  }

  for (let i = downloadList.length - 1; i >= 0; --i) {
    const req = downloadList[i];

    const row = document.createElement("div");
    row.classList.add("panel-section", "panel-section-tabs");
    if (highlight-- > 0) row.classList.add("highlight");
    body.appendChild(row);

    const buttonElement = document.createElement("div");
    buttonElement.classList.add("panel-section-tabs-button");
    buttonElement.title = req.url;
    buttonElement.onclick = function () {
      showCommand(req.id);
    };

    let fileNameSpan = document.createElement("span");
    if (req.size) {
      fileNameSpan.textContent = req.filename + " ";
      let sizeSpan = document.createElement("span");
      sizeSpan.classList.add("file-size");
      sizeSpan.textContent = `(${fileSizeToText(req.size)})`;
      fileNameSpan.appendChild(sizeSpan);
    } else {
      fileNameSpan.textContent = req.filename;
    }

    buttonElement.appendChild(fileNameSpan);
    row.appendChild(buttonElement);

    if (i) {
      let sep = document.createElement("div");
      sep.classList.add("panel-section-separator");
      body.appendChild(sep);
    }
  }

  let footer = document.createElement("div");
  footer.classList.add("panel-section", "panel-section-footer");
  body.appendChild(footer);
  let clearButton = document.createElement("div");
  clearButton.classList.add("panel-section-footer-button");
  clearButton.textContent = "Clear all";
  clearButton.onclick = function () {
    browser.runtime.sendMessage(["clear"]).then(() => window.close());
  };
  footer.appendChild(clearButton);
}

function applyTheme(theme) {
  if (!theme || !theme.colors) return;
  const colors = theme.colors;
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  const rules = [
    `body { color: ${colors.popup_text}; background-color: ${colors.popup}; }`,
    `.panel-section-tabs { color: ${colors.popup_text}; }`,
    `.panel-section-footer { color: ${colors.popup_text}; background-color: rgba(128, 128, 128, 0.12); border-top-color: rgba(128, 128, 128, 0.30); }`,
    `.panel-section-separator { background-color: rgba(128, 128, 128, 0.30); }`,
    `.options { background-color: rgba(128, 128, 128, 0.12); border-top-color: rgba(128, 128, 128, 0.30); }`,
  ];

  if (colors.popup_heightlight)
    rules.push(
      `.panel-section-tabs-button:hover { color: ${colors.popup_heightlight_text}; background-color: ${colors.popup_heightlight}; }`,
      `.panel-section-footer-button:hover { color: ${colors.popup_heightlight_text}; background-color: ${colors.popup_heightlight}; }`
    );
  else
    rules.push(
      `.panel-section-tabs-button:hover { background-color: rgba(128, 128, 128, 0.12); }`,
      `.panel-section-footer-button:hover { background-color: rgba(128, 128, 128, 0.12); }`
    );

  for (const rule of rules) styleEl.sheet.insertRule(rule);
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    browser.runtime.sendMessage(["getDownloadList"]),
    browser.browserAction.getBadgeText({})
  ]).then(([list, txt, theme]) => {
    let highlight = +txt;
    browser.browserAction.setBadgeText({ text: "" });
    applyTheme(theme);
    showList(list, highlight);
  });
});
