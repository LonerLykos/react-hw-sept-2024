import {UsersPage} from "../pages/UsersPage.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Pagination/>
            <UsersPage/>
        </div>
    );
};
