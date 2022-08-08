import { PokemonTypes } from "../../types";
import Chip from "../Chip";
import { BoxChips } from "./style";

export type ChipListProps = {
  pokemonType: PokemonTypes[];
};

const ChipList = ({ pokemonType }: ChipListProps) => {
  return (
    <BoxChips data-testid="container-chip-list">
      {pokemonType.map((type) => {
        return <Chip pokemonType={type} key={type} />;
      })}
    </BoxChips>
  );
};

export default ChipList;
