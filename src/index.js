import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./ch18/App";
import { BrowserRouter } from "react-router-dom"; // 이렇게 되어있어야 router 쓸수있음
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </RecoilRoot>
); 