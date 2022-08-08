import {
  BrowserRouter,
  Route,
  Routes as RoutesWrapper,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/Not-Found";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
