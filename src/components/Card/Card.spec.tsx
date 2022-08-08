import { render, fireEvent, getByText } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Card from ".";
import * as Theme from "../../styles/tokens/index";

const makeSut = () =>
  render(
    <ThemeProvider theme={Theme}>
      <Card
        idPhoto="1"
        altPhoto="squirtle"
        srcPhoto="https://i.pinimg.com/originals/3d/76/31/3d763132c30ac83eb777293699bf60a7.png"
        pokemonNumber="1"
        pokemonName="squirtle"
        pokemonType={["water"]}
      />
    </ThemeProvider>
  );

describe("Card Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();

    expect(getByTestId("container-card")).toBeTruthy();
  });

  it("should render texts", () => {
    const { getByText } = makeSut();

    expect(getByText("1")).toBeTruthy();
    expect(getByText("squirtle")).toBeTruthy();
    expect(getByText("water")).toBeTruthy();
  });

  it("should render correct style on title", () => {
    const { getByText } = makeSut();

    expect(getByText("squirtle")).toHaveStyleRule("color", Theme.colors.black),
      expect(getByText("squirtle")).toHaveStyleRule(
        "font-weight",
        Theme.fontWeights.bold
      ),
      expect(getByText("squirtle")).toHaveStyleRule(
        "font-size",
        Theme.sizes.md
      );
  });

  it("should render correct style on number", () => {
    const { getByText } = makeSut();

    expect(getByText("1")).toHaveStyleRule("color", Theme.colors.darkGray),
      expect(getByText("1")).toHaveStyleRule(
        "font-weight",
        Theme.fontWeights.normal
      ),
      expect(getByText("1")).toHaveStyleRule("font-size", Theme.sizes.sm);
  });
});
