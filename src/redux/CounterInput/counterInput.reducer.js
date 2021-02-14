// import { INCREMENT, DECREMENT } from "./counter.types";

const INITIAL_STATE = {
  input: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        input: (action.payload !== "NaN") ? (state.input = action.payload) : (state.input = 0),
      };
    default:
      return state;
  }
};

export default reducer;
