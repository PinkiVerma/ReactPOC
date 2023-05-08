import React, { useReducer, createContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CounterContext = createContext();

function AppContextReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      AppContextReducer
      <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  );
}

export default AppContextReducer;
