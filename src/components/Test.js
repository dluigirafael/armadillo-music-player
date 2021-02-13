import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../redux/Counter/counter.actions";

function Test(reduxProps) {
  return (
    <div>
      <button onClick={() => reduxProps.increaseCounter()}>Increase Count</button>
      <button onClick={() => reduxProps.decreaseCounter()}>Decrease Count</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
