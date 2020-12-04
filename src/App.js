import React from "react";
import { connect } from "react-redux";
import { changeTextActionCreator } from "./redux/reducers/appReducer";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <p>{props.appPage}</p>
      <button
        onClick={() => props.dispatch(changeTextActionCreator("Jopix"))}
      ></button>
    </div>
  );
}

let mapStateToProps = (state) => ({
  appPage: state.App.text,
});
let mapDispatchToProps = (dispatch) => ({});
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
