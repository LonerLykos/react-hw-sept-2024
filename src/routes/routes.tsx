import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UsersPage32} from "../pages/UsersPage-3-2.tsx";
import {UsersPage33} from "../pages/UsersPage-3-3.tsx";
import {UserCartsPage} from "../pages/UserCartsPage.tsx";
import {pathHW} from "../constants/urls.ts";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: pathHW.hwTask3.main, element: <UsersPage33/>},
            {path: pathHW.hwTask3.cart, element: <UserCartsPage/>},
            {
                path: pathHW.hwTask2.main, element: <UsersPage32/>, children: [
                    {path: pathHW.hwTask2.cart, element: <UserCartsPage/>}
                ]
            },
        ]
    },

]);