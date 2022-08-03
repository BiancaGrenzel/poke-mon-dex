import { StyledChip } from "./style";
import { ChipProps } from "./types";

const Chip = ({ children, pokemonType }: ChipProps) => {
  return (
    <StyledChip pokemonType={pokemonType}>
      {children}
    </StyledChip>
  );
};

export default Chip;
