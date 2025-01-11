import {UserComponent} from "./UserComponent.tsx";
import {IUsers} from "../../models/users-models/users-models.ts";
import {UsersFetchComponent} from "./UsersFetchComponent.tsx";

export const UsersComponent = () => {

    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                UsersFetchComponent().map((item: IUsers) => <UserComponent key={item.id} item={item}/>)
            }
        </div>
    );
};
