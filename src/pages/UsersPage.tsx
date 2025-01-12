import {UsersList} from "../components/users/users-list/UsersList.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {pathHW} from "../constants/urls.ts";


export const UsersPage = () => {
    const location = useLocation().pathname;
    if (location !== `/${pathHW.hwTask3.main}`) {

        return (
            <div className='grid grid-cols-2 gap-10'>
                <UsersList/>
                <Outlet/>
            </div>
        );

    } else {

        return (
            <div>
                <UsersList/>
            </div>
        );

    }

};
