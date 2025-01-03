import {simpsons} from "../../data/simpsons.tsx";
import {CharacterComponent} from "../characterComponent/CharacterComponent.tsx";


function Map() {

    return (
        <div>
            {
                simpsons.map((simpson, index :number) => <CharacterComponent key={index} item={simpson}>
                    {simpson.info}
                </CharacterComponent>)
            }
        </div>
    )
}

export default Map;