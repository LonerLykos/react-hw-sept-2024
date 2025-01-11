import {UsersComponent} from "../components/users-components/UsersComponent.tsx";
import {Outlet, useLocation} from "react-router-dom";


export const UsersPage32 = () => {
    const location = useLocation().pathname;
    console.log(location);

    return (
        <div className='grid grid-cols-2 gap-10'>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};
