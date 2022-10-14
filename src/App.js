import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  //count up down
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const increase100 = () => {
    setCounter((count) => count + 100);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const decrease100 = () => {
    if (counter > 0 && counter < 100) {
      setCounter(0);
    } else if (counter > 0 && counter >= 100) {
      setCounter((count) => count - 100);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <h2>counter</h2>
      <span className="counter_output">{counter}</span>
      <div className="btns">
        <button className="plus" onClick={increase}>
          +
        </button>
        <button className="plus" onClick={increase100}>
          +100
        </button>
        <button className="minus" onClick={decrease}>
          -
        </button>
        <button className="minus" onClick={decrease100}>
          -100
        </button>
        <button className="reset" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}
