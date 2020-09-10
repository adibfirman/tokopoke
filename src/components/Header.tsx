import React from "react";
import { useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory();

  return (
    <nav className="flex items-center justify-center flex-wrap bg-mycolor-80 p-3">
      <div
        className="flex items-center flex-shrink-0 text-white cursor-pointer"
        onClick={() => history.push("/")}
      >
        <img
          width="50px"
          height="50px"
          alt="pokeball"
          className="mr-2"
          src="https://vignette.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"
        />
        <span className="font-semibold text-xl tracking-tight">TokoPoke</span>
      </div>
    </nav>
  );
}
