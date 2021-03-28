const INITIAL_STATE = {
  inputVal: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        inputVal:
          action.payload !== "NaN" && action.payload !== ""
            ? (state.inputVal = action.payload)
            : (state.inputVal = 0),
      };
    default:
      return state;
  }
};

export default reducer;
