import "./tailwind.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./Stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <div className="app">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
