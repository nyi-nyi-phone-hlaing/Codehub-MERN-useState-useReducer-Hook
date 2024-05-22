import PropTypes from "prop-types";
import ACTIONS from "../utils/actions";

const Counter = ({ state, dispatch }) => {
  const decreaseHandler = () => {
    dispatch({ type: ACTIONS.DECREASE });
  };

  const increaseHandler = () => {
    dispatch({ type: ACTIONS.INCREASE });
  };

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <div className='row'>
        <button onClick={decreaseHandler}>Decrease</button>
        <span>{state.count}</span>
        <button onClick={increaseHandler}>Increase</button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Counter;
