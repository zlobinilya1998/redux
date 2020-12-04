const appInitialState = {
  text: "Я стейт",
};
const CHANGE_TEXT = "CHANGE_TEXT";

export const changeTextActionCreator = (text) => ({
  type: CHANGE_TEXT,
  payload: text,
});
const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT: {
      state.text += action.payload;
    }
  }
  return state;
};

export default appReducer;
