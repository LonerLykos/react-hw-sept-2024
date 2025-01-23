import {useFetch} from "../../../hooks/useFetch.tsx";
import {IUser} from "../../../models/IUser.ts";


export const UserList = () => {

    const data = useFetch<IUser[]>('/users', 'users');
    console.log(data);

    return (
        <div>
            {/*{data.map((user: IUser) => <div key={user.id}>{user.firstName}</div>)}*/}
        </div>
    )
};
