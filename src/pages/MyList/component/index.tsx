import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useStore } from "Stores";
import { getImgPokemon, capitalizeText } from "utils";

export default function MyListPage({ history }: RouteComponentProps) {
  const { pokemons, removeCollections } = useStore();

  function onRemoveClick(id: number) {
    return () => {
      const giveAnQuestion = window.confirm(
        "Are you sure, you want to remove me? :("
      );

      if (!giveAnQuestion) alert("Yess, we still being a friends :)");
      else {
        alert("Sorry to heard you let me go :(");
        removeCollections(id);
      }
    };
  }

  return (
    <div className="p-4">
      <div className="grid grid-flow-col justify-between mb-4">
        <button
          onClick={() => history.push("/")}
          className="flex items-center bg-transparent text-mycolor-90"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-none gap-4">
        {Array(5)
          .fill({ id: 1, name: "bulbasaur", nickname: "bulbasaur 123" })
          .map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-mycolor-150 rounded-lg p-2 grid"
            >
              <svg
                onClick={onRemoveClick(pokemon.id)}
                className="w-6 h-6 justify-self-end cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <img
                width="100px"
                height="100px"
                className="m-auto object-contain mb-10"
                alt={pokemon.name}
                src={getImgPokemon(pokemon.id)}
              />
              <p className="text-white font-bold text-center text-3xl">
                {pokemon.nickname}
              </p>
              <p className="text-center font-semibold text-mycolor-100">
                {capitalizeText(pokemon.name)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
