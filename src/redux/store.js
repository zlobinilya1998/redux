import { combineReducers, createStore } from "redux";
import messageReducer from "./reducers/messageReducer";
import appReducer from "./reducers/appReducer";

const reducers = combineReducers({
  App: appReducer,
  Chat: messageReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
