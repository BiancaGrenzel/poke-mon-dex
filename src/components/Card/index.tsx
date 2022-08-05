import Chip from "../Chip";
import Photo from "../Photo";
import { Typography } from "../Typography";
import { BoxChips, Container } from "./style";
import { CardProps } from "./type";

const Card = ({
  idPhoto,
  altPhoto,
  srcPhoto,
  pokemonNumber,
  pokemonName,
  pokemonType,
}: CardProps) => {
  const renderChips = () => {
    return pokemonType.map((type) => {
      return <Chip pokemonType={type} key={type} />;
    });
  };

  return (
    <Container>
      <Photo id={idPhoto} alt={altPhoto} src={srcPhoto} />
      <Typography variant="body" color="gray" weight="normal">
        {pokemonNumber}
      </Typography>
      <Typography variant="subtitle" color="black" weight="bold">
        {pokemonName}
      </Typography>
      <BoxChips>{renderChips()}</BoxChips>
    </Container>
  );
};

export default Card;
