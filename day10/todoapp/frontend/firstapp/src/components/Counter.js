import React from "react";
import { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(100);
  let incrementCounter = () => {
    setCount(count + 1);
  };
  let decrementCounter = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={incrementCounter}>
        <h1>+</h1>
      </button>
      <h1>{count}</h1>
      <button onClick={decrementCounter}>
        <h1>-</h1>
      </button>
    </div>
  );
};

export default Counter;
