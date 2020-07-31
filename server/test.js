parent.postMessage({ pageType: "THIRD_PARTY_APP" }, "*");
const loadScript = function (src) {
  const script = document.createElement("script");
  script.src = src;
  return script;
};

const loadJsResource = function () {
  const urlArr = window.resourceUrl ? Object.values(window.resourceUrl) : [];
  const fragment = document.createDocumentFragment();
  urlArr.forEach((url) => {
    fragment.appendChild(loadScript(url));
  });
  return fragment;
};

const handleMessage = function (event) {
  if (/.*\.youzan\.com$/.test(event.orgin)) {
    const { userToken } = event.data;
    window.userToken = userToken;

    document.head.appendChild(loadJsResource());

    window.removeEventListener("message", handleMessage, false);
  }
};
// 收到来自宿主页面的消息
window.addEventListener("message", handleMessage, false);
