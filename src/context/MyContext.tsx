import {createContext} from "react";

type MyContextType = {
    state: boolean;
    changeState: (newState: boolean) => void;
}

export const init = {
    state: false,
    changeState: (newState: boolean) => {
        console.log(newState);
    }
};
export const MyContext = createContext<MyContextType>(init);

