import { Pokemon, PokemonTypes } from "../types";

export type Props = {
  allPokemons: Pokemon[];
  text: string;
  type: PokemonTypes[];
};

export const filterPokemons = ({ allPokemons, text, type }: Props) => {
  const textToLower = text.charAt(0).toLowerCase();
  if (text === "" && type.length === 0) {
    return allPokemons;
  }
  if (text !== "" && type.length === 0) {
    return allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(textToLower)
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
        pokemon.name.includes(textToLower) &&
        pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
    );
  }
};
