
import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";

export const RightBranchBA = () => {
    
    const {state, changeState} = useContext(MyContext);


    return (
        <div>
            <p>Right Branch child from child</p>
            <button onClick={() => {
                changeState(state);
            }}>change theme</button>
        </div>
    );
};

