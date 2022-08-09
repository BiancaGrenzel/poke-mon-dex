import { useState } from "react";
import Chip from "../Chip";
import ChipList from "../Chip-List";
import Photo from "../Photo";
import { Typography } from "../Typography";
import { Container, HeartBox } from "./style";
import { CardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FaHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as FaHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../context";

const Card = ({
  idPhoto,
  altPhoto,
  srcPhoto,
  pokemonNumber,
  pokemonName,
  pokemonType,
}: CardProps) => {
  const { favoritePokemons, setFavoritePokemons } = useDataContext();

  const handleFavorite = () => {
    if (favoritePokemons.includes(pokemonName)) {
      setFavoritePokemons(
        favoritePokemons.filter((pokemon) => pokemon !== pokemonName)
      );
    } else {
      setFavoritePokemons([...favoritePokemons, pokemonName]);
    }
  };

  const Favorite = () => {
    return (
      <>
        {favoritePokemons.includes(pokemonName) ? (
          <HeartBox onClick={handleFavorite}>
            <FontAwesomeIcon icon={FaHeartSolid} color="red" />
          </HeartBox>
        ) : (
          <HeartBox onClick={handleFavorite}>
            <FontAwesomeIcon icon={FaHeartRegular} color="red" />
          </HeartBox>
        )}
      </>
    );
  };

  return (
    <Container data-testid="container-card">
      <HeartBox onClick={handleFavorite}>
        <Favorite />
      </HeartBox>
      <Photo id={idPhoto} alt={altPhoto} src={srcPhoto} data-testid="photo" />
      <Typography variant="body" color="gray" weight="normal">
        {pokemonNumber}
      </Typography>
      <Typography variant="subtitle" color="black" weight="bold">
        {pokemonName}
      </Typography>
      <ChipList pokemonType={pokemonType} />
    </Container>
  );
};

export default Card;
