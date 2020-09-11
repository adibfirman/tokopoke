import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useFetch, getImgPokemon, capitalizeText } from "utils";
import { useStore } from "Stores";
import { Get_Detail } from "../API_URL";
import * as Types from "../types";

const PROMPT_TEXT = "Gotcha...!! you catch me, give me an awesome nickname...";
const MAP_NAME_STAT = ["SPD", "DEF-S", "ATT-S", "DEF", "ATT", "HP"];

export default function DetailPage({
  match,
  history,
}: RouteComponentProps<{ name: string }>) {
  const { params } = match;
  const URL = Get_Detail(params.name);
  const { isLoading, result } = useFetch<Types.IResponseAPI>(URL);
  const { generateChance, addNewCollections } = useStore();
  const [isCatching, setIsCatching] = useState(false);

  function catchPoke() {
    const isAChance = generateChance();

    setIsCatching(true);
    setTimeout(() => {
      setIsCatching(false);

      if (!isAChance) alert("Sorry, try again.. :(");
      else {
        const nickname = prompt(PROMPT_TEXT);
        if (nickname) {
          addNewCollections({
            id: result?.id ?? 0,
            name: result?.name ?? "",
            nickname,
          });

          history.push("/my-list");
        }
      }
    }, 1500);
  }

  if (isLoading) return <>Loading...</>;
  else
    return (
      <div className="p-4 relative">
        {isCatching && (
          <img
            className="absolute left-0 w-full h-full object-cover opacity-75"
            alt="loading..."
            width="100%"
            src={require("assets/pokeball.gif")}
          />
        )}
        <div className="grid grid-flow-col justify-between">
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
          <button
            onClick={catchPoke}
            className="bg-mycolor-60 text-white font-bold py-2 px-4 rounded"
          >
            Catch Me
          </button>
        </div>
        <img
          width="157px"
          height="157px"
          className="m-auto object-contain mt-6"
          alt={result?.name}
          src={getImgPokemon(result?.id)}
        />
        <p className="text-white font-bold text-center text-3xl mt-12">
          {capitalizeText(result?.name ?? "")}
        </p>
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          {result?.stats.map((stat, i) => (
            <div
              key={i.toString()}
              className="grid grid-flow-row content-evenly justify-center rounded"
            >
              <p className="text-center w-16 border-b-2 border-mycolor-90">
                {stat.base_stat}
              </p>
              <p className="text-center font-semibold text-mycolor-80">
                {MAP_NAME_STAT[i]}
              </p>
            </div>
          ))}
          <div className="grid grid-flow-row content-evenly justify-center rounded">
            <p className="text-center w-16 border-b-2 border-mycolor-90">
              {result?.height ?? 0}
              <span className="text-center font-semibold text-mycolor-90">
                m
              </span>
            </p>
            <p className="text-center font-semibold text-mycolor-80">HEIGHT</p>
          </div>
          <div className="grid grid-flow-row content-evenly justify-center rounded">
            <p className="text-center w-16 border-b-2 border-mycolor-90">
              {result?.weight ?? 0}
              <span className="text-mycolor-90">kg</span>
            </p>
            <p className="text-center font-semibold text-mycolor-80">WEIGHT</p>
          </div>
        </div>
      </div>
    );
}
