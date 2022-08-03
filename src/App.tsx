import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import * as Theme from "../src/styles/tokens/index";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <nav>
        <Link to="home">Home</Link>
        <Link to="pokemon">Pokemon</Link>
      </nav>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
