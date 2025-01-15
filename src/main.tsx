import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";

import {AppRoutes} from "./routes/constants.ts";
import {MainLayout} from "./layouts/MainLayout.tsx";




createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={AppRoutes.root}>
        <MainLayout />
    </BrowserRouter>
)
