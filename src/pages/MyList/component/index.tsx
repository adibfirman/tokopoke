import React from "react";

import { useStore } from "Stores";
import { getImgPokemon } from "utils";

export default function MyListPage() {
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
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <img alt={pokemon.name} src={getImgPokemon(pokemon.id)} />
          <button onClick={onRemoveClick(pokemon.id)}>Remove Me :(</button>
        </div>
      ))}
    </>
  );
}
