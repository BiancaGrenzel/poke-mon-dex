import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Theme from "../../styles/tokens/index";
import { Typography } from "./index";

describe("Typography Component", () => {
  it("should render", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Typography variant="subtitle" color="black" weight="normal" />
      </ThemeProvider>
    );

    expect(getByTestId("typography-component")).toBeTruthy();
  });

  it("should render children", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Typography variant="subtitle" color="black" weight="normal">
          Teste
        </Typography>
      </ThemeProvider>
    );
    expect(getByTestId("typography-component")).toHaveTextContent("Teste");
  });

  it("should render with correct variant", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Typography variant="subtitle" color="black" weight="normal" />
      </ThemeProvider>
    );
    expect(getByTestId("typography-component")).toHaveStyleRule(
      "font-size",
      Theme.sizes.md
    );
  });

  it("should render with correct color", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Typography variant="subtitle" color="black" weight="normal" />
      </ThemeProvider>
    );
    expect(getByTestId("typography-component")).toHaveStyleRule(
      "color",
      Theme.colors.black
    );
  });

  it("should render with correct weight", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Typography variant="subtitle" color="black" weight="normal" />
      </ThemeProvider>
    );
    expect(getByTestId("typography-component")).toHaveStyleRule(
      "font-weight",
      Theme.fontWeights.normal
    );
  });
});
