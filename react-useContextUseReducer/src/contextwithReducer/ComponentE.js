import React, {useContext} from 'react'
import { CounterContext } from './AppContextReducer'

function ComponentE() {
    const counterContext = useContext(CounterContext)
  return (
    <div>
    ComponentE
    <div>Count - {counterContext.countState}</div>
      <button onClick={() => counterContext.countDispatch("increment")}>Increment</button>
      <button onClick={() =>  counterContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() =>  counterContext.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentE