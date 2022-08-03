import { StyledChip } from "./style";
import { ChipProps } from "./types";

const Chip = ({ pokemonType }: ChipProps) => {
  const pokemonTypeCaptalized = pokemonType && pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1);
  return (
    <StyledChip pokemonType={pokemonType} data-testid="chip-component">
      <div data-testid="chip-text">{pokemonTypeCaptalized}</div>
    </StyledChip>
  );
};

export default Chip;
