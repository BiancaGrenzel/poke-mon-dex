export interface FilterChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pokemonType?:
    | "fire"
    | "normal"
    | "water"
    | "grass"
    | "ice"
    | "poison"
    | "ground"
    | "flying"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy"
    | "psychic"
    | "electric"
    | "fighting";
}
