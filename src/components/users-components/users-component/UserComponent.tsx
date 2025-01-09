import {FC} from "react";
import {IUsers} from "../../../models/users-models/users-models.ts";

type UserPropType = {
    item: IUsers,
}

export const UserComponent: FC<UserPropType> = ({item}) => {
    return (
        <div className='border-2 border-emerald-500 mb-5 text-center'>
            <h3 className='font-bold text-xl'>Name: {item.firstName} {item.lastName}</h3>
            <p>Age: {item.age}</p>
            <p className='italic'>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
        </div>
    );
};