import {Menu} from "../components/menu/Menu.tsx";
import {RoutesComponent} from "../routes/Routes.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <RoutesComponent/>
        </div>
    );
};
