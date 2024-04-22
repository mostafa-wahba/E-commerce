import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MainContextProvider from "./Context/MainContext";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </MainContextProvider>
);
