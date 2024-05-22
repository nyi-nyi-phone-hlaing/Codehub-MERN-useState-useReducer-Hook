import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const decreaseHandler = () => {
    setCount((prev) => prev - 1);
  };

  const increaseHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <div className='row'>
        <button onClick={decreaseHandler}>Decrease</button>
        <span>{count}</span>
        <button onClick={increaseHandler}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
