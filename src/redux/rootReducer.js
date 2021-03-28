import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import counterInputReducer from "./CounterInput/counterInput.reducer";
import libraryStatusReducer from "./LibraryStatus/libraryStatus.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  input: counterInputReducer,
  libraryStatus: libraryStatusReducer,
});

export default rootReducer;
