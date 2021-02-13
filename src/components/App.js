import React, { useState } from "react";
import "../style/App.scss";

import { connect } from "react-redux";
import Test from "./Test";
import { increaseCounter, decreaseCounter } from "../redux/Counter/counter.actions";

function App(reduxProps) {
  return (
    <div className="App">
      <div>Count: {reduxProps.count}</div>
      <Test />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
