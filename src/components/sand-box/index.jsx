import React, { useEffect, useRef } from "react";
import "./style.css";

export default function ({ src, id }) {
  const iframeRef = useRef(null);
  useEffect(() => {
    function receiveMessageFromIframePage(event) {
      if (event.origin === src) {
        console.log("收到来自iframe的信息", event);
        console.log(event.data.hasLoadedYunScript);

        const { hasLoadedYunScript } = event.data;
        const iframeNode = iframeRef.current;
        const innerWindow = iframeNode.contentWindow;

        iframeNode.onload = function () {
          if (hasLoadedYunScript) {
            innerWindow.postMessage(
              { userId: 10000, userName: "YOUZANYUN" },
              src
            );
          }
        };
      }
    }
    window.addEventListener("message", receiveMessageFromIframePage, false);
  }, [src]);

  return (
    <iframe
      className="sand-box-wrapper"
      sandbox="allow-scripts allow-same-origin"
      ref={iframeRef}
      src={src}
      title={id}
    />
  );
}
