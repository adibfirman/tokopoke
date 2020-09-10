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
      <div className="p-4">
        <div className="grid grid-flow-col justify-between">
          <button
            onClick={() => props.history.push("/")}
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
          <button
            onClick={catchPoke}
            className="bg-mycolor-60 text-white font-bold py-2 px-4 rounded"
          >
            Catch Me
          </button>
        </div>
        <img
          width="55%"
          className="m-auto object-contain"
          alt={result?.name}
          src={getImgPokemon(result?.id)}
        />
      </div>
    );
}
