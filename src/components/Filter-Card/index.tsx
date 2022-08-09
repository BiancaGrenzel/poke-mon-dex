import { useEffect } from "react";
import { Box } from "../../layouts";
import { useDataContext } from "../../context";
import { PokemonTypes } from "../../types";
import FilterChip from "../Filter-Chip";
import { Typography } from "../Typography";
import ReactSwitch from "react-switch";
import { colors } from "../../styles/tokens";

const Types = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const FilterCard = () => {
  const {
    filteredTypes,
    setFilteredTypes,
    filterByFavorites,
    setFilterByFavorites,
  } = useDataContext();

  const filterTypes = (types: PokemonTypes) => {
    const oldFilteredTypes = filteredTypes;
    const newFilteredTypes = oldFilteredTypes.includes(types)
      ? oldFilteredTypes.filter((type) => type !== types)
      : [...oldFilteredTypes, types];
    setFilteredTypes(newFilteredTypes);
  };

  return (
    <Box flexDirection="column">
      <Box flexDirection="column" gap="md">
        <Typography>Filtrar por Tipo</Typography>
        <Box gap="sm" width="190px" flexWrap="wrap">
          {Types.map((type) => {
            return (
              <FilterChip
                pokemonType={type as PokemonTypes}
                key={type}
                onClick={() => filterTypes(type as PokemonTypes)}
                isSelected={
                  filteredTypes.find((t) => t === type) ? true : false
                }
              />
            );
          })}
        </Box>
      </Box>
      <Box flexDirection="column">
        <Typography>Filtrar por Favoritos</Typography>
        <ReactSwitch
          onChange={() => setFilterByFavorites(!filterByFavorites)}
          checked={filterByFavorites}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={colors.red}
        />
      </Box>
    </Box>
  );
};

export default FilterCard;
