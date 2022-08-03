import { StyledFilterChip } from "./style";
import { FilterChipProps } from "./types";

const FilterChip = ({ pokemonType, onClick }: FilterChipProps) => {
  const pokemonTypeCaptalized = pokemonType && pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1);
  return (
    <StyledFilterChip data-testid="filterchip-component" onClick={() => onClick}>
      <div data-testid="filterchip-text">{pokemonTypeCaptalized}</div>
    </StyledFilterChip>
  );
};

export default FilterChip;
