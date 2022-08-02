import React from "react";
import { BrowserRouter, Route, Routes as RoutesWrapper  } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route
            path="*"
            element={
              <div>
                <p>There's nothing here!</p>
              </div>
            }
          />
        </Route>
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
