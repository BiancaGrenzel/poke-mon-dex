import { useState, createContext, useContext } from "react";
import { Pokemon, PokemonTypes } from "../types";

// Context
export const DataContext = createContext({});

// Provider
interface IContext {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: IContext) => {
  const [filteredTypes, setFilteredTypes] = useState<PokemonTypes[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>("");

  return (
    <DataContext.Provider
      value={{
        filteredTypes,
        setFilteredTypes,
        filteredPokemons,
        setFilteredPokemons,
        allPokemons,
        setAllPokemons,
        search,
        setSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Context Hook
interface IDataContext {
  filteredTypes: PokemonTypes[];
  setFilteredTypes: (filteredType: PokemonTypes[]) => void;
  filteredPokemons: Pokemon[];
  setFilteredPokemons: (filteredPokemons: Pokemon[]) => void;
  allPokemons: Pokemon[];
  setAllPokemons: (allPokemons: Pokemon[]) => void;
  search: string;
  setSearch: (search: string) => void;
}

export const useDataContext = () => useContext(DataContext) as IDataContext;
