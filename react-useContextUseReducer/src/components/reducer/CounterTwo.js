import React, { useReducer } from "react";

const initialState = {
    firstCounter:0
};

const reducer = (state, action) => {
  
    switch (action.type) {
      case "increment":
        return {firstCounter: state.firstCounter+action.value};
      case "decrement":
       return state.firstCounter-action.value<0? {firstCounter:0} : {firstCounter: state.firstCounter-action.value};
      case "reset":
        return initialState;
      default:
        return state.firstCounter;
    
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>FirstCounter - {count.firstCounter}</div>
      <button onClick={() => dispatch({type:"increment",value:1})}>Increment</button>
      <button onClick={() => dispatch({type:"decrement",value:1})}>Decrement</button>
      <button onClick={() => dispatch({type:"increment",value:5})}>Incrementby5</button>
      <button onClick={() => dispatch({type:"decrement",value:5})}>Decrementby5</button>
      <button onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
  );
}

export default CounterTwo;
