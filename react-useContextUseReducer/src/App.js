import { createContext } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import CounterOne from "./components/reducer/CounterOne";
import CounterTwo from "./components/reducer/CounterTwo";
import CounterThree from "./components/reducer/CounterThree";
import AppContextReducer from "./contextwithReducer/AppContextReducer";
import HookTimer from "./useRef/HookTimer";
import DocTitleOne from "./customHooks/DocTitleOne";


export const UserContext = createContext()
export const CounterContext = createContext()

function App() {

  return (
    
    // <div className="App">
    // <UserContext.Provider value={'pinki'}>
    // <ComponentC/>
    // </UserContext.Provider>
    // <CounterOne/>
    // <CounterTwo/>
    // <CounterThree/>
    // </div>

    // <div className="App">
    // <AppContextReducer/>
    // </div>

    // <div className="App">
    // <HookTimer/>
    // </div>

    <div className="App">
    <DocTitleOne/>
  
    </div>
  );
}

export default App;
