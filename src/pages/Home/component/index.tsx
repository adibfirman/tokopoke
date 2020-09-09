import React from "react";
import { useHistory } from "react-router-dom";

import { useFetch } from "utils";
import { GET_LIST } from "../API_URL";
import * as Types from "../types";

export default function HomePage() {
  const history = useHistory();
  const { isLoading, result } = useFetch<Types.IResultAPI>(GET_LIST);

  if (isLoading) return <>Loading...</>;
  else
    return (
      <div>
        {result?.results.map((pokemon, i) => (
          <div
            key={i.toString()}
            onClick={() => history.push(`/detail/${pokemon.name}`)}
          >
            <p>Name: {pokemon.name}</p>
            <p>Owned: 0</p>
          </div>
        ))}
      </div>
    );
}
