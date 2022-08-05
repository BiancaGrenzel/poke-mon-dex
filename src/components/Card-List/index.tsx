import { useEffect, useState } from "react";
import { IPokemon } from "../../pages/Home/types";
import { getPokemons } from "../../services/api";
import { useDataContext } from "../../store/context";
import Card from "../Card/index";
import { ContainerCards } from "./style";

const CardList = () => {
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { oldOffsetHeight } = useDataContext();
  let postsForPage = 25;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    getPokemons().then((data) => {
      setTotalPage(data.length / postsForPage);
      let newPokemons = data.splice(0, postsForPage);
      setAllPokemons([...allPokemons, ...newPokemons]);
    });
  }, [page]);

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - oldOffsetHeight
    ) {
      setPage(page + 1);
    }
    return;
  }

  return (
    <ContainerCards>
      {allPokemons.map((pokemon, index) => {
        return (
          <Card
            key={index}
            pokemonNumber={pokemon.national_number}
            pokemonName={pokemon.name}
            srcPhoto={pokemon.sprites.animated}
            altPhoto={pokemon.name}
            pokemonType={pokemon.type}
          />
        );
      })}
    </ContainerCards>
  );
};

export default CardList;
