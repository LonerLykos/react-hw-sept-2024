import {useRoutes} from "react-router-dom";
import {lazy} from "react";
import {AppRoutes} from "./constants.ts";
import {MainLayout} from "../layouts/MainLayout.tsx";


const Home = lazy(() => import ('../pages/home/HomePage.tsx'));
const Cars = lazy(() => import ('../pages/cars/CarsPage.tsx'))


export const RoutesComponent = () => useRoutes([
    {
        element: (
            <MainLayout/>
        ),
        path: AppRoutes.root,
        index: true,
        children: [{
            element: <Home/>,
            path: AppRoutes.home,
            index: true
        }]
    },
    {
        element: (
            <Home/>
        ),
        path: AppRoutes.home,
        index: true
    },
    {
        element: (
            <Cars/>
        ),
        path: AppRoutes.cars,
        index: true
    },
    {
        element: (
            <MainLayout/>
        ),
        path: AppRoutes.addNewCar,
        index: true
    },

]);