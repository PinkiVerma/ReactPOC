import React, { useReducer } from "react";

const initialState = 0;
const initialStateTwo = 10;


const reducer = (state, action) => {
  
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
       return state-1<0? 0 : state-1;
      case "reset":
        return initialState;
      default:
        return state;
    
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialStateTwo);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>CountTwo - {countTwo}</div>
      <button onClick={() => dispatchTwo("increment")}>Increment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
