import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/messageReducer";
import appReducer from "./reducers/appReducer";

const store = createStore(
  combineReducers({
    app: appReducer,
    chat: messageReducer,
  })
);

window.store = store;

export default store;
