import { useDataContext } from "../context";
import { Pokemon, PokemonTypes } from "../types";

export type Props = {
  allPokemons: Pokemon[];
  text: string;
  type: PokemonTypes[];
  favorites: string[];
  filterByFavorite: boolean;
};

export const filterPokemons = ({
  allPokemons,
  text,
  type,
  favorites,
  filterByFavorite,
}: Props) => {
  const isTextNumber = !isNaN(Number(text));
  const filteredByFavorite = allPokemons.filter((pokemon) =>
    favorites.includes(pokemon.name)
  );

  // Text: ❌, Type: ❌, Favorite: ❌
  if (text === "" && type.length === 0 && filterByFavorite === false) {
    return allPokemons;
  }

  // Text: ✅, Type: ❌, Favorites: ❌
  if (text !== "" && type.length === 0 && filterByFavorite === false) {
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

    // Text: ✅, Type: ❌, Favorites: ✅
    if (text !== "" && type.length === 0 && filterByFavorite === true) {
      if (isTextNumber === true) {
        return filteredByFavorite.filter(
          (pokemon) =>
            pokemon.national_number === text || pokemon.name.includes(text)
        );
      } else {
        return filteredByFavorite.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(text.toLowerCase())
        );
      }
    }

  // Text: ❌, Type: ✅, Favorites: ❌
  if (text === "" && type.length > 0 && filterByFavorite === false) {
    return allPokemons.filter(
      (pokemon) =>
        pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
    );
  }

  // Text: ❌, Type: ✅, Favorites: ✅
  if (text === "" && type.length > 0 && filterByFavorite === true) {
    return filteredByFavorite.filter(
      (pokemon) =>
        pokemon.type.sort().join(",").toLowerCase() === type.sort().join(",")
    );
  }

  // Text: ❌, Type: ❌, Favorites: ✅
  if (text === "" && type.length === 0 && filterByFavorite === true) {
    return filteredByFavorite;
  }

  // Text: ✅, Type: ✅, Favorites: ❌
  if (text !== "" && type.length > 0 && filterByFavorite === false) {
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

  // Text: ✅, Type: ✅, Favorites: ✅
  if (text !== "" && type.length > 0 && filterByFavorite === true) {
    return allPokemons.filter((pokemon) => {
      if (isTextNumber === true) {
        return (
          pokemon.national_number === text ||
          (pokemon.name.includes(text) &&
            pokemon.type.sort().join(",").toLowerCase() ===
              type.sort().join(",") &&
            favorites.includes(pokemon.national_number))
        );
      } else {
        return (
          pokemon.name.toLowerCase().includes(text.toLowerCase()) &&
          pokemon.type.sort().join(",").toLowerCase() ===
            type.sort().join(",") &&
          favorites.includes(pokemon.name)
        );
      }
    });
  }
};
