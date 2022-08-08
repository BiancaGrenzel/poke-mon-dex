import { Pokemon, PokemonTypes } from "../types";

export type Props = {
  allPokemons: Pokemon[];
  text: string;
  type: PokemonTypes[];
};

export const filterPokemons = ({ allPokemons, text, type }: Props) => {
  if (text === "" && type.length === 0) {
    return allPokemons;
  }
  if (text !== "" && type.length === 0) {
    return allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(text)
    );
  }
  if (text === "" && type.length > 0) {
    return allPokemons.filter(
      (pokemon) =>
        pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
    );
  }
  if (text !== "" && type.length > 0) {
    return allPokemons.filter(
      (pokemon) =>
        pokemon.name.includes(text) &&
        pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
    );
  }
};
