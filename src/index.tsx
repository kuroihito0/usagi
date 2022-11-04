import React from "react";
import ReactDOM from "react-dom";
import App  from "./App";
import {AnimateSharedLayout, motion} from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <AnimateSharedLayout>
    <App />
    </AnimateSharedLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
