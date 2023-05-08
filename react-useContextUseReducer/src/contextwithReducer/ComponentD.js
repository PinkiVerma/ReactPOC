import React, {useContext} from 'react'
import { CounterContext } from './AppContextReducer'

function ComponentD() {
    const counterContext = useContext(CounterContext)
  return (
    <div>
    ComponentD
    <div>Count - {counterContext.countState}</div>
      <button onClick={() => counterContext.countDispatch("increment")}>Increment</button>
      <button onClick={() =>  counterContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() =>  counterContext.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentD