import './App.css'
import {LeftBranch} from "./components/left-branch/LeftBranch.tsx";
import {RightBranch} from "./components/right-branch/RightBranch.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


function App() {

    const [currentState, setCurrentState] = useState<boolean>(init.state);

    return (
        <div className={!currentState ? "dark-theme" : "light-theme"}>
            <MyContext.Provider value={{
                state: currentState,
                changeState:(state) => {
                    state = !state;
                    setCurrentState(state);
            }
            }}>
            <LeftBranch/>
            <hr/>
            <RightBranch/>
            </MyContext.Provider>
        </div>
    )
}

export default App
