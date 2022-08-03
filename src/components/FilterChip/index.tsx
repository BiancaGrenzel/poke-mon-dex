import { Typography } from "../Typography";
import { StyledFilterChip } from "./style";
import { FilterChipProps } from "./types";

const FilterChip = ({ pokemonType, onClick }: FilterChipProps) => {
  const pokemonTypeCaptalized =
    pokemonType && pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1);

  return (
    <StyledFilterChip
      data-testid="filterchip-component"
      onClick={() => onClick}
    >
      <Typography variant="body" weight="normal">
        {pokemonTypeCaptalized}
      </Typography>
    </StyledFilterChip>
  );
};

export default FilterChip;
