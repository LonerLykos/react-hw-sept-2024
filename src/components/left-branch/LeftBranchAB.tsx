import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


export const LeftBranchAB = () => {


    const {state} = useContext(MyContext)


    return (
        <div>
            Left Branch child from child
            <p>{!state ? 'Dark theme' : 'Light Theme'}</p>
        </div>
    );
};
