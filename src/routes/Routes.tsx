import {useRoutes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {AppRoutes} from "./constants.ts";


const Home = lazy(() => import ('../pages/home/HomePage.tsx'));
const Cars = lazy(() => import ('../pages/cars/CarsPage.tsx'))
const AddCar = lazy(() => import ('../pages/add-car/AddCarPage.tsx'));

export const RoutesComponent = () => useRoutes([
    {
        element: (
            <Suspense>
                <Home/>
            </Suspense>
        ),
        path: AppRoutes.home,
        index: true
    },
    {
        element: (
            <Suspense>
                <Cars/>
            </Suspense>
        ),
        path: AppRoutes.cars,
        index: false
    },
    {
        element: (
            <Suspense>
                <AddCar/>
            </Suspense>
        ),
        path: AppRoutes.addNewCar,
        index: false
    },

]);