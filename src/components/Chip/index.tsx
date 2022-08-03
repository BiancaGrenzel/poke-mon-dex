import { StyledChip } from "./style";
import { ChipProps } from "./types";

const Chip = ({ children, pokemonType }: ChipProps) => {
  return (
    <StyledChip pokemonType={pokemonType} data-testid="chip-component">
      <div data-testid="chip-text">{children}</div>
    </StyledChip>
  );
};

export default Chip;
