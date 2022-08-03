import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Routes from "./routes";
import { DataContextProvider } from "./store/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataContextProvider>
      <Routes/>
    </DataContextProvider>
  </React.StrictMode>
);
