import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useFetch, getImgPokemon } from "utils";
import { useStore } from "Stores";
import { Get_Detail } from "../API_URL";
import * as Types from "../types";

const PROMPT_TEXT = "Gotcha...!! you catch me, give it an awesome nickname...";

export default function DetailPage(
  props: RouteComponentProps<{ name: string }>
) {
  const { params } = props.match;
  const URL = Get_Detail(params.name);
  const { isLoading, result } = useFetch<Types.IResponseAPI>(URL);
  const { generateChance, addNewCollections } = useStore();

  function catchPoke() {
    const isAChance = generateChance();
    if (isAChance) {
      const nickname = prompt(PROMPT_TEXT);

      if (nickname) {
        addNewCollections({
          id: result?.id ?? 0,
          name: result?.name ?? "",
          nickname,
        });
      }
    }
  }

  if (isLoading) return <>Loading...</>;
  else
    return (
      <div>
        <button onClick={() => props.history.push("/")}>go back</button>
        <img
          width="100px"
          height="100px"
          alt={result?.name}
          src={getImgPokemon(result?.id)}
        />
        <button onClick={catchPoke}>catch me</button>
      </div>
    );
}
