import { render, fireEvent, getByText } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import * as Theme from "../../styles/tokens/index";
import Chip from "./index";

describe("Chip Component", () => {
  it("should render text", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Chip pokemonType="dragon" />
      </ThemeProvider>
    );

    expect(getByTestId("typography-component")).toHaveTextContent("dragon");
  });

  it("should render all chips with correct style", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <Chip pokemonType="bug" />
        <Chip pokemonType="dark" />
        <Chip pokemonType="dragon" />
        <Chip pokemonType="electric" />
        <Chip pokemonType="fairy" />
        <Chip pokemonType="fighting" />
        <Chip pokemonType="fire" />
        <Chip pokemonType="flying" />
        <Chip pokemonType="ghost" />
        <Chip pokemonType="grass" />
        <Chip pokemonType="ground" />
        <Chip pokemonType="ice" />
        <Chip pokemonType="normal" />
        <Chip pokemonType="poison" />
        <Chip pokemonType="psychic" />
        <Chip pokemonType="rock" />
        <Chip pokemonType="steel" />
        <Chip pokemonType="water" />
      </ThemeProvider>
    );
    expect(getByTestId("chip-bug")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-bug")).toHaveStyleRule(
        "background-color",
        Theme.colors.bug
      );

    expect(getByTestId("chip-dark")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-dark")).toHaveStyleRule(
        "background-color",
        Theme.colors.dark
      );

    expect(getByTestId("chip-dragon")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-dragon")).toHaveStyleRule(
        "background-color",
        Theme.colors.dragon
      );

    expect(getByTestId("chip-electric")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-electric")).toHaveStyleRule(
        "background-color",
        Theme.colors.electric
      );

    expect(getByTestId("chip-fairy")).toHaveStyleRule(
      "color",
      Theme.colors.black
    ),
      expect(getByTestId("chip-fairy")).toHaveStyleRule(
        "background-color",
        Theme.colors.fairy
      );

    expect(getByTestId("chip-fighting")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-fighting")).toHaveStyleRule(
        "background-color",
        Theme.colors.fighting
      );

    expect(getByTestId("chip-fire")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-fire")).toHaveStyleRule(
        "background-color",
        Theme.colors.fire
      );

    expect(getByTestId("chip-flying")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-flying")).toHaveStyleRule(
        "background-color",
        Theme.colors.flying
      );

    expect(getByTestId("chip-ghost")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-ghost")).toHaveStyleRule(
        "background-color",
        Theme.colors.ghost
      );

    expect(getByTestId("chip-grass")).toHaveStyleRule(
      "color",
      Theme.colors.black
    ),
      expect(getByTestId("chip-grass")).toHaveStyleRule(
        "background-color",
        Theme.colors.grass
      );

    expect(getByTestId("chip-ground")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-ground")).toHaveStyleRule(
        "background-color",
        Theme.colors.ground
      );

    expect(getByTestId("chip-ice")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-ice")).toHaveStyleRule(
        "background-color",
        Theme.colors.ice
      );

    expect(getByTestId("chip-normal")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-normal")).toHaveStyleRule(
        "background-color",
        Theme.colors.normal
      );

    expect(getByTestId("chip-poison")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-poison")).toHaveStyleRule(
        "background-color",
        Theme.colors.poison
      );

    expect(getByTestId("chip-psychic")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-psychic")).toHaveStyleRule(
        "background-color",
        Theme.colors.psychic
      );

    expect(getByTestId("chip-rock")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-rock")).toHaveStyleRule(
        "background-color",
        Theme.colors.rock
      );

    expect(getByTestId("chip-steel")).toHaveStyleRule(
      "color",
      Theme.colors.black
    ),
      expect(getByTestId("chip-steel")).toHaveStyleRule(
        "background-color",
        Theme.colors.steel
      );

    expect(getByTestId("chip-water")).toHaveStyleRule(
      "color",
      Theme.colors.white
    ),
      expect(getByTestId("chip-water")).toHaveStyleRule(
        "background-color",
        Theme.colors.water
      );
  });
});
