import { types } from "../types/types";
const appInitialState = {
  text: "",
  users: [],
  counter: 0,
  value: 1,
};

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case types.INC_VALUE:
      return { ...state, value: ++state.value };
    case types.DEC_VALUE:
      return { ...state, value: --state.value };
    case types.CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case types.INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case types.DECREMENT:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export default appReducer;
export const valueDecrementActionCreator = () => ({
  type: types.DEC_VALUE,
});
export const valueIncrementActionCreator = () => ({
  type: types.INC_VALUE,
});
export const decrementActionCreator = (value) => ({
  type: types.DECREMENT,
  payload: value,
});
export const incrementActionCreator = (value) => ({
  type: types.INCREMENT,
  payload: value,
});
export const changeTextActionCreator = (text) => ({
  type: types.CHANGE_TEXT,
  payload: text,
});
