export const increaseCounter = () => {
  return {
    type: "INCREMENT",
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};

export const increaseCounterBy = (by) => {
  return {
    type: "INCREMENT_BY",
    payload: by,
  };
};
