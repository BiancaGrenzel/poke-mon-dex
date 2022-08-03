import { render, fireEvent, getByText } from "@testing-library/react";
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

  it("should render all typographys with correct variant", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Typography variant="title">Variant: title</Typography>
        <Typography variant="subtitle">Variant: subtitle</Typography>
        <Typography variant="body">Variant: body</Typography>
      </ThemeProvider>
    );
    expect(getByText("Variant: title")).toHaveStyleRule(
      "font-size",
      Theme.sizes.xl
    );
    expect(getByText("Variant: subtitle")).toHaveStyleRule(
      "font-size",
      Theme.sizes.md
    );
    expect(getByText("Variant: body")).toHaveStyleRule(
      "font-size",
      Theme.sizes.sm
    );
  });

  it("should render all typographys with correct color", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Typography color="black">Color: black</Typography>
        <Typography color="gray">Color: gray</Typography>
        <Typography color="red">Color: red</Typography>
        <Typography color="white">Color: white</Typography>
      </ThemeProvider>
    );
    expect(getByText("Color: black")).toHaveStyleRule(
      "color",
      Theme.colors.black
    );
    expect(getByText("Color: gray")).toHaveStyleRule(
      "color",
      Theme.colors.darkGray
    );
    expect(getByText("Color: red")).toHaveStyleRule("color", Theme.colors.red);
    expect(getByText("Color: white")).toHaveStyleRule(
      "color",
      Theme.colors.white
    );
  });

  it("should render all typographys with correct weight", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <Typography weight="bold">Weight: bold</Typography>
        <Typography weight="normal">Weight: normal</Typography>
        <Typography weight="light">Weight: light</Typography>
      </ThemeProvider>
    );
    expect(getByText("Weight: bold")).toHaveStyleRule(
      "font-weight",
      Theme.fontWeights.bold
    );
    expect(getByText("Weight: normal")).toHaveStyleRule(
      "font-weight",
      Theme.fontWeights.normal
    );
    expect(getByText("Weight: light")).toHaveStyleRule(
      "font-weight",
      Theme.fontWeights.light
    );
  });
});
