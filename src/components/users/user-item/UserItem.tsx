import {FC} from "react";
import {IUsers} from "../../../models/IUsers.ts";
import "./UserItem.css"


//пропси для юзера
type Props = {
    item: IUsers,
}

//розмітка юзера
export const UserItem: FC<Props> = ({item}) => {
    return (
        <div className='wrapper-user'>
            <h3>Name: {item.firstName} {item.lastName}</h3>
            <p>Age: {item.age}</p>
            <p className='bold'>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
        </div>
    );
};