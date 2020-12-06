import React from "react";
import { connect } from "react-redux";
import {
  changeTextActionCreator,
  incrementActionCreator,
  decrementActionCreator,
  valueDecrementActionCreator,
  valueIncrementActionCreator,
} from "./redux/reducers/appReducer";

import styles from "./App.module.css";

function App(props) {
  return (
    <div className={styles.App}>
      <h3>Счетчик: {props.counter} </h3>
      <hr></hr>
      <div>
        <h6>Увеличить счетчик на {props.value}</h6>
        <button onClick={() => props.valueIncrement()}>+</button>
        <button onClick={() => props.valueDecrement()}>-</button>
      </div>

      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button>

      <input
        placeholder="Введите текст"
        value={props.text}
        onChange={(e) => props.changeInputText(e.target.value)}
      ></input>
    </div>
  );
}

let mapStateToProps = (state) => ({
  text: state.app.text,
  counter: state.app.counter,
  value: state.app.value,
});
let mapDispatchToProps = (dispatch) => ({
  increment: (value) => dispatch(incrementActionCreator(value)),
  decrement: (value) => dispatch(decrementActionCreator(value)),
  valueIncrement: () => dispatch(valueIncrementActionCreator()),
  valueDecrement: () => dispatch(valueDecrementActionCreator()),
  changeInputText: (text) => dispatch(changeTextActionCreator(text)),
});
let mergeProps = (stateProps, dispatchProps) => {
  const { value } = stateProps;
  const { increment, decrement, changeInputText } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    increment: () => increment(value),
    decrement: () => decrement(value),
    changeInputText: () => changeInputText(),
  };
};
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(App);
export default ConnectedApp;
