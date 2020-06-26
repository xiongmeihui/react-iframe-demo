import React, { useEffect, useRef } from "react";

export default function ({ src, id }) {
  const iframeRef = useRef(null);
  useEffect(() => {
    const innerWindow = iframeRef.current.contentWindow;
    innerWindow.postMessage("测试", src);
  }, [src]);
  return <iframe ref={iframeRef} src={src} title={id} />;
}
