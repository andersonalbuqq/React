import "./index.css";

import ReactDOM from "react-dom/client";
import React from "react";

import Calculator from "./Calculator";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <h1>Calculadora</h1>
    <Calculator />
  </>
);
