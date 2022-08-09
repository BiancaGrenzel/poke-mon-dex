import { PokemonTypes } from "../../types";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  idPhoto?: string;
  altPhoto?: string;
  srcPhoto?: string;
  pokemonNumber?: string;
  pokemonName: string;
  pokemonType: PokemonTypes[];
}
