import { connect } from "react-redux";
import { increaseCounter, decreaseCounter, resetCounter, increaseCounterBy } from "../redux/Counter/counter.actions";
import { updateInput } from "../redux/CounterInput/counterInput.actions";

function Test(reduxProps) {
  return (
    <div>
      <button onClick={() => reduxProps.increaseCounter()}>Increase Count</button>
      <button onClick={() => reduxProps.decreaseCounter()}>Decrease Count</button>
      <button onClick={() => reduxProps.resetCounter()}>Reset Count</button>
      <input
        type="text"
        pattern="[0-9]{10}"
        placeholder="test"
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
          reduxProps.updateInput(e.target.value);
        }}
      />
      <button onClick={() => reduxProps.increaseCounterBy(reduxProps.input)}>Increase Count By </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    input: state.input.inputVal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    resetCounter: () => dispatch(resetCounter()),
    increaseCounterBy: (nr) => dispatch(increaseCounterBy(nr)),
    updateInput: (payload) => dispatch(updateInput(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
