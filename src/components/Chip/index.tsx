import { Typography } from "../Typography";
import { StyledChip } from "./style";
import { ChipProps } from "./types";
import { StyledChipProps } from "./style";

const Chip = ({ pokemonType }: ChipProps) => {
  const pokemonToLowerCase = pokemonType?.toLowerCase() ?? "fire";

  return (
    <StyledChip
      pokemonType={pokemonToLowerCase as StyledChipProps["pokemonType"]}
      data-testid={`chip-${pokemonType}`}
    >
      <Typography data-testid="chip-text" variant="body" weight="normal">
        {pokemonType}
      </Typography>
    </StyledChip>
  );
};

export default Chip;
