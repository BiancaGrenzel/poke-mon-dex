import { PokemonTypes } from '../../types'

export interface FilterChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pokemonType?: PokemonTypes;
  isSelected?: boolean;
}
