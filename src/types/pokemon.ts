export type PokemonTypes =
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

export type Pokemon = {
  national_number: string;
  evolution: any;
  sprites: Sprites;
  name: string;
  type: PokemonTypes[];
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
};

export type Sprites = {
  normal: string;
  large: string;
  animated: string;
};
