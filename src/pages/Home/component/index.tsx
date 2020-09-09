import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";

import { useFetch } from "utils";
import { GET_LIST } from "../API_URL";
import * as Types from "../types";
import { useStore } from "Stores";

export default function HomePage() {
  const { isLoading, result } = useFetch<Types.IResultAPI>(GET_LIST);

  if (isLoading) return <>Loading...</>;
  else
    return (
      <>
        {result?.results.map((pokemon, i) => (
          <Pokemon key={i.toString()} {...pokemon} />
        ))}
      </>
    );
}

function Pokemon({ name }: Types.ResultsType) {
  const history = useHistory();
  const { pokemons } = useStore();
  const countOwned = useMemo(() => {
    return pokemons.filter((pokemon) => pokemon.name === name).length;
  }, [name, pokemons]);

  return (
    <div onClick={() => history.push(`/detail/${name}`)}>
      <div>Name: {name}</div>
      <p>Owned: {countOwned}</p>
    </div>
  );
}
