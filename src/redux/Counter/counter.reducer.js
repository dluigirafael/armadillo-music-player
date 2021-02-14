
const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case "RESET":
      return {
        ...state,
        count: (state.count = 0),
      };
    case "INCREMENT_BY":
      return {
        ...state,
        count: state.count + parseInt(action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
