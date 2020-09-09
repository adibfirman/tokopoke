import React, { createContext, useContext, useState } from "react";

interface IOwnedPokemon {
  pokemons: Array<{ id: number; nickname: string }>;
  setPokemons: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        nickname: string;
      }[]
    >
  >;
}

const Context = createContext({} as IOwnedPokemon);

export function Provider({ children }: React.PropsWithChildren<{}>) {
  const [pokemons, setPokemons] = useState<IOwnedPokemon["pokemons"]>([]);

  return (
    <Context.Provider value={{ pokemons, setPokemons }}>
      {children}
    </Context.Provider>
  );
}

export function useStore() {
  const data = useContext(Context);

  if (!data) throw new Error("Cannot using this context value");
  else return data;
}
