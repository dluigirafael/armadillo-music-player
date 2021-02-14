// import { INCREMENT, DECREMENT } from "./counter.types";

const INITIAL_STATE = {
  input: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        input: (state.input = action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
