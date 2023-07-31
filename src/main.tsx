import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "virtual:uno.css";
// preset
import "@unocss/reset/sanitize/sanitize.css";
// electron css functionality
import "./electron.css";
// context
import NavTitleProvider from "./contexts/navTitle.tsx";
import AsideShrankProvider from "./contexts/asideShrank.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavTitleProvider title="Cookie">
      <AsideShrankProvider shrank={false}>
        <App />
      </AsideShrankProvider>
    </NavTitleProvider>
  </React.StrictMode>,
);

postMessage({ payload: "removeLoading" }, "*");
