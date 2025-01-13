import {UserItem} from "../user-item/UserItem.tsx";
import {UsersFetch} from "../users-fetch/UsersFetch.tsx";
import {IUsers} from "../../../models/users-models.ts";

export const UsersList = () => {

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                UsersFetch().map((item: IUsers) => <UserItem key={item.id} item={item}/>)
            }
        </div>
    );
};
