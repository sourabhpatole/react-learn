import React, { useReducer, useState } from "react";
const initialState = 0;
function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      break;
  }
}

const ShoppingCart = () => {
  const [count, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default ShoppingCart;
