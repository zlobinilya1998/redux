import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ConnectedApp from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

let renderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
renderDOM();

store.subscribe(renderDOM);
