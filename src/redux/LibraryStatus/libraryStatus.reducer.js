const INITIAL_STATE = {
  status: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SWITCH_LIBRARY_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
