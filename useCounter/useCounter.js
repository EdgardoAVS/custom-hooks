import { useState } from "react";

const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((current ) => current + value);
  };
  const decrement = (value) => {
    if (counter < 1) return;
    setCounter((current) => current - value);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export { useCounter };
