import { render, fireEvent, getByText } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Theme from "../../styles/tokens/index";
import ChipList from "./index";

const makeSut = () =>
  render(
    <ThemeProvider theme={Theme}>
      <ChipList pokemonType={["water", "dragon"]} />
    </ThemeProvider>
  );
describe("CardList Component", () => {
  it("should render", () => {
    const { getByTestId } = makeSut();
    //TODO: simular a requisição do cardlist
    expect(getByTestId("container-chip-list")).toBeTruthy();
  });

  it("should map pokemonType to chips", () => {
    
  })
});
