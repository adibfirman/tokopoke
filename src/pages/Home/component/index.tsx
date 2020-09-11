import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

import { useFetch, getImgPokemon, getIDPokemon, capitalizeText } from "utils";
import { GET_LIST } from "../API_URL";
import * as Types from "../types";
import { useStore } from "Stores";

export default function HomePage() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const { pokemons } = useStore();
  const { isLoading, result } = useFetch<Types.IResultAPI>(GET_LIST);
  const filterableList = useMemo(() => {
    const regex = new RegExp(search, "gi");
    return result?.results.filter(({ name }) => name.search(regex) > -1);
  }, [result, search]);

  const disableMyList =
    pokemons.length === 0 && `bg-mycolor-180 cursor-not-allowed`;

  if (isLoading) return <>Loading...</>;
  else
    return (
      <>
        <div className="py-5 px-8">
          <input
            className="w-full px-3 py-2 appearance-none leading-normal rounded text-mycolor-100 focus:outline-none"
            type="text"
            placeholder="Find your awesome pokemon and catch it...!!"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-4 px-10 h-24">
          <div className="bg-mycolor-60 font-bold py-2 px-4 rounded items-center text-center flex justify-center">
            <svg
              className="fill-current w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>
            <span>Total in here ({result?.results.length ?? 0})</span>
          </div>
          <button
            className={`bg-mycolor-60 font-bold py-2 px-4 rounded items-center text-center flex justify-center ${disableMyList}`}
            onClick={() => history.push("/my-list")}
            disabled={pokemons.length === 0}
          >
            <svg
              className="fill-current w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>Your Own ({pokemons.length})</span>
          </button>
        </div>
        <div className="p-4 grid grid-cols-3 gap-4">
          {(filterableList ?? []).map((pokemon, i) => (
            <Pokemon key={i.toString()} {...pokemon} />
          ))}
        </div>
      </>
    );
}

function Pokemon({ name, url }: Types.ResultsType) {
  const history = useHistory();
  const { pokemons } = useStore();
  const id = getIDPokemon(url);
  const countOwned = useMemo(() => {
    return pokemons.filter((pokemon) => pokemon.name === name).length;
  }, [name, pokemons]);

  const isAvailable = countOwned > 0;
  const disableColor = isAvailable ? "bg-mycolor-180 cursor-not-allowed" : "";

  return (
    <button
      disabled={isAvailable}
      className={`p-2 bg-mycolor-150 rounded ${disableColor}`}
      onClick={() => history.push(`/detail/${name}`)}
    >
      <div className="grid grid-flow-col justify-between items-center">
        <p>{capitalizeText(name)}</p>
        <input type="checkbox" defaultChecked={isAvailable} />
      </div>
      <img
        className="m-auto mt-2"
        width="100px"
        height="100px"
        alt={name}
        src={getImgPokemon(id)}
      />
    </button>
  );
}
