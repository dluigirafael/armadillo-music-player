import React from "react";
import "../style/App.scss";

import { connect } from "react-redux";
import Test from "./Test";
// import { increaseCounter, decreaseCounter, resetCounter } from "../redux/Counter/counter.actions";

function App(reduxProps) {
  return (
    <div className="App">
      <div>Count: {reduxProps.count}</div>
      <div>Input: {reduxProps.input}</div>
      <Test />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    input: state.input.input,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//     resetCounter: () => dispatch(resetCounter()),
//   };
// };

export default connect(mapStateToProps, null)(App);
