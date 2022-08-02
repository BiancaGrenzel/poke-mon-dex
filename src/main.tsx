import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataContextProvider } from "./store/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContextProvider>
  </StrictMode>
);
