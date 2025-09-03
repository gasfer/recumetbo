import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import ElementInspector from "../src/utils/ElementInspector.js";

// 👇 Forzar detección de React para Wappalyzer u otras herramientas
if (typeof window !== "undefined") {
  window.__REACT_DEV__ = "React";
  console.log("React app detected ✅");
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ElementInspector>
      <App />
    </ElementInspector>
  </StrictMode>
);
