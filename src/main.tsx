import React from "react";
import { MotionConfig } from "framer-motion";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./i18n";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>,
);
