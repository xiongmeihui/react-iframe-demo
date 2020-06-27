import React, { useEffect, useRef } from "react";
import "./style.css";

export default function ({ src, id }) {
  const iframeRef = useRef(null);
  useEffect(() => {
    const innerWindow = iframeRef.current.contentWindow;
    console.log(document.readyState);
    console.log(innerWindow.document.readyState);
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        innerWindow.postMessage({ userId: 1, userName: "xmh" }, src);
      }
    };
  }, [src]);
  return (
    <iframe
      className="sand-box-wrapper"
      ref={iframeRef}
      src={src}
      title={id}
    ></iframe>
  );
}
