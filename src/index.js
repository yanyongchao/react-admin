import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.less";
import "@/styles/index.less";
import "./mock";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
