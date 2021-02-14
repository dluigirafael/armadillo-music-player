import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import counterInputReducer from "./CounterInput/counterInput.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  input: counterInputReducer,
});

export default rootReducer;
