import { Typography } from "../Typography";
import { StyledChip } from "./style";
import { ChipProps } from "./types";

const Chip = ({ pokemonType }: ChipProps) => {
  const pokemonTypeCaptalized =
    pokemonType && pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1);
  return (
    <StyledChip pokemonType={pokemonType} data-testid="chip-component">
      <Typography data-testid="chip-text" variant="body" weight="normal">
        {pokemonTypeCaptalized}
      </Typography>
    </StyledChip>
  );
};

export default Chip;
