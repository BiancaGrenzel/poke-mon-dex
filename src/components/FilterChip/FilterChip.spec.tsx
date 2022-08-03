import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Theme from "../../styles/tokens/index";
import FilterChip from "./index";

describe("FilterChip Component", () => {
  it("should render text", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <FilterChip pokemonType="dragon" />
      </ThemeProvider>
    );

    expect(getByTestId("typography-component")).toHaveTextContent("Dragon");
  });

  it("should click on filter chip", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <FilterChip pokemonType="dragon"/>
      </ThemeProvider>
    );

    fireEvent.click(getByTestId("filterchip-component"));
  });
});
