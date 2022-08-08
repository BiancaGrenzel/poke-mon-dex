import { Pokemon, PokemonTypes } from "../types";

export type Props = {
  allPokemons: Pokemon[];
  text: string;
  type: PokemonTypes[];
};

export const filterPokemons = ({ allPokemons, text, type }: Props) => {
  const isTextNumber = !isNaN(Number(text));

  if (text === "" && type.length === 0) {
    return allPokemons;
  }
  if (text !== "" && type.length === 0) {
    if (isTextNumber === true) {
      return allPokemons.filter(
        (pokemon) =>
          pokemon.national_number === text || pokemon.name.includes(text)
      );
    } else {
      return allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
  if (text === "" && type.length > 0) {
    return allPokemons.filter(
      (pokemon) =>
        pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
    );
  }
  if (text !== "" && type.length > 0) {
    return allPokemons.filter((pokemon) => {
      if (isTextNumber === true) {
        return (
          pokemon.national_number === text ||
          (pokemon.name.includes(text) &&
            pokemon.type.sort().join(",").toLowerCase() ===
              type.sort().join(","))
        );
      } else {
        return (
          pokemon.name.toLowerCase().includes(text.toLowerCase()) &&
          pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
        );
      }
    });
  }
};
