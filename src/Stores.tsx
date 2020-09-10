import React, { createContext, useContext, useState } from "react";

type PokemonType = { id: number; nickname: string; name: string };

interface IOwnedPokemon {
  pokemons: Array<PokemonType>;
  addNewCollections: ({ id, nickname, name }: PokemonType) => void;
  generateChance: () => boolean;
  removeCollections: (id: number) => void;
}

const Context = createContext({} as IOwnedPokemon);

export function Provider({ children }: React.PropsWithChildren<{}>) {
  const [pokemons, setPokemons] = useState<IOwnedPokemon["pokemons"]>([]);

  function generateChance() {
    const getRandomNum = Math.random() * 100;
    const successChance = 50;
    if (getRandomNum <= successChance) return true;
    else return false;
  }

  function addNewCollections(params: PokemonType) {
    setPokemons((prevPokemons) => [...prevPokemons, params]);
  }

  function removeCollections(id: number) {
    const filterList = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemons(filterList);
  }

  return (
    <Context.Provider
      value={{ pokemons, addNewCollections, generateChance, removeCollections }}
    >
      {children}
    </Context.Provider>
  );
}

export function useStore() {
  const data = useContext(Context);

  if (!data) throw new Error("Cannot using this context value");
  else return data;
}
