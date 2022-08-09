import { useEffect, useState } from "react";
import { getPokemons } from "../../services/api";
import { useDataContext } from "../../context";
import { Pokemon } from "../../types";
import { filterPokemons } from "../../utils/filterPokemons";
import Card from "../Card/index";
import { ContainerCards } from "./style";

const CardList = () => {
  const {
    filteredTypes,
    allPokemons,
    setAllPokemons,
    search,
    favoritePokemons,
    filterByFavorites,
  } = useDataContext();
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setAllPokemons(data);
    });
  }, []);

  useEffect(() => {
    const filtered = filterPokemons({
      allPokemons: allPokemons,
      text: search,
      type: filteredTypes,
      favorites: favoritePokemons,
      filterByFavorite: filterByFavorites,
    });
    setFilteredPokemons([...(filtered || allPokemons)]);
  }, [allPokemons, filteredTypes, search, filterByFavorites, favoritePokemons]);

  const renderPokemons = () => {
    return filteredPokemons.map((pokemon, index) => {
      return (
        <Card
          data-testid={`card-${index}`}
          key={index}
          pokemonNumber={pokemon.national_number}
          pokemonName={pokemon.name}
          srcPhoto={pokemon.sprites.animated}
          altPhoto={pokemon.name}
          pokemonType={pokemon.type}
        />
      );
    });
  };

  return (
    <ContainerCards data-testid="container-cards">
      {renderPokemons()}
    </ContainerCards>
  );
};

export default CardList;
