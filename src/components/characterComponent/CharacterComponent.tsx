import {ISimpson} from "../../models/ISimpson.ts";
import {ReactNode} from "react";
import "./CharacterComponent.css";

interface CharacterComponentProps {
    item: ISimpson,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="flex flex-col centre">
            <img src={item.photo} alt={item.name}/>
            <h2 className="font-bold">{item.name} {item.surname}. Age:{item.age}</h2>
            <p className='italic'>{children}</p>
        </div>
    )
}


