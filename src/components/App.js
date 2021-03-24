import React from "react";
import "../style/app.scss";

import { connect } from "react-redux";
// import Test from "./Test";
// import { increaseCounter, decreaseCounter, resetCounter } from "../redux/Counter/counter.actions";

function App(reduxProps) {
  return (
    <div className="App">
      {/* <div>Count: {reduxProps.count}</div>
      <div>Input: {reduxProps.input}</div>
      <Test /> */}
      <h1>test</h1>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // count: state.counter.count,
    // input: state.input.inputVal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // increaseCounter: () => dispatch(increaseCounter()),
    // decreaseCounter: () => dispatch(decreaseCounter()),
    // resetCounter: () => dispatch(resetCounter()),
  };
};

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
