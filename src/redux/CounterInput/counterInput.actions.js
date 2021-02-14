// import { INCREMENT, DECREMENT } from "./counter.types";

export const updateInput = (nr) => {
  return {
    type: "UPDATE_INPUT",
    payload: nr,
  };
};
