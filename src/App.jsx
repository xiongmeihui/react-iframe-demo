import React from "react";
import SandBox from "./components/sand-box";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="left">导航栏</div>
      <div className="content">
        <SandBox id="sand-box" src="http://172.18.213.40:9000" />
      </div>
      <div className="right">帮助栏</div>
    </div>
  );
}

export default App;
