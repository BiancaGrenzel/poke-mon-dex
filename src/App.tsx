import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as Theme from "../src/styles/tokens/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
