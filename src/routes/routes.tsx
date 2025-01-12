import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UserCartsPage} from "../pages/UserCartsPage.tsx";
import {pathHW} from "../constants/urls.ts";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: pathHW.hwTask3.main, element: <UsersPage/>},
            {path: pathHW.hwTask3.cart, element: <UserCartsPage/>},
            {
                path: pathHW.hwTask2.main, element: <UsersPage/>, children: [
                    {path: pathHW.hwTask2.cart, element: <UserCartsPage/>}
                ]
            },
        ]
    },

]);