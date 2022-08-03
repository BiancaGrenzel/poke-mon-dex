import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Theme from "../../styles/tokens/index";
import Chip from "./index";

describe("Chip Component", () => {
  it("should render text", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Chip pokemonType="dragon"/>
      </ThemeProvider>
    );

    expect(getByTestId("typography-component")).toHaveTextContent("Dragon");
  });

  it("should render with correct color", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Chip pokemonType="dragon" children="Teste" />
      </ThemeProvider>
    );

    expect(getByTestId("chip-component")).toHaveStyleRule(
      "background-color",
      Theme.colors.dragon
    );

    expect(getByTestId("chip-component")).toHaveStyleRule(
      "color",
      Theme.colors.white
    );
  });
});
