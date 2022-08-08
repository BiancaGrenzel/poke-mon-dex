import Chip from "../Chip";
import ChipList from "../Chip-List";
import Photo from "../Photo";
import { Typography } from "../Typography";
import { Container } from "./style";
import { CardProps } from "./types";

const Card = ({
  idPhoto,
  altPhoto,
  srcPhoto,
  pokemonNumber,
  pokemonName,
  pokemonType,
}: CardProps) => {
  return (
    <Container data-testid="container-card">
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
