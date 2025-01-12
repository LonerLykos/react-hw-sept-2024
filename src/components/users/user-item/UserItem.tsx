import {FC} from "react";
import {IUsers} from "../../../models/users-models/users-models.ts";
import {generatePath, useNavigate} from "react-router-dom";


type Props = {
    item: IUsers,
}

export const UserItem: FC<Props> = ({item}) => {
    const navigate = useNavigate();
    const cartOfUser = () => {
        const path = generatePath(':id/cart', {id: `${item.id}`})
        navigate(path, {state: {id: `${item.id}`, name: `${item.firstName} ${item.lastName}`}})
    }

    return (
        <div className='border-2 border-emerald-500 mb-5 text-center'>
            <h3 className='font-bold text-xl'>Name: {item.firstName} {item.lastName}</h3>
            <p>Age: {item.age}</p>
            <p>ID: {item.id}</p>
            <p className='italic'>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <button className='border-2 border-black rounded-lg p-1 bg-indigo-300' onClick={cartOfUser}>User cart
            </button>
        </div>
    );
};