import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import ElementInspector from "../src/utils/ElementInspector.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <ElementInspector>
    <App />
      </ElementInspector>
  </StrictMode>
);