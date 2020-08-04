parent.postMessage({ pageType: "THIRD_PARTY_APP" }, "*");
const loadScript = function (src) {
  const script = document.createElement("script");
  script.src = src;
  return script;
};

const loadCss = function (href) {
  const css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("type", "text/css");
  css.href = href;
  return css;
};

const loadJsResource = function () {
  const urlArr = window.jsUrl ? Object.values(window.jsUrl) : [];
  const fragment = document.createDocumentFragment();
  urlArr.forEach((url) => {
    fragment.appendChild(loadScript(url));
  });
  return fragment;
};

const loadCssResource = function () {
  const urlArr = window.cssUrl ? Object.values(window.cssUrl) : [];
  const fragment = document.createDocumentFragment();
  urlArr.forEach((url) => {
    fragment.appendChild(loadCss(url));
  });
  return fragment;
};

const handleMessage = function (event) {
  if (/.*\.youzan\.com$/.test(event.orgin)) {
    const { userToken } = event.data;
    window.userToken = userToken;

    document.head.appendChild(loadCssResource());
    document.body.appendChild(loadJsResource());

    window.removeEventListener("message", handleMessage, false);
  }
};
// 收到来自宿主页面的消息
window.addEventListener("message", handleMessage, false);
