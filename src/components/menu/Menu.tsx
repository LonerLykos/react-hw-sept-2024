import {Link} from "react-router-dom";
import {AppRoutes} from "../../routes/constants.ts";
import "./Menu.css"

export const Menu = () => {
    return (
        <div className="wrapper">
            <p><Link to={AppRoutes.home}>Home</Link></p>
            <p><Link to={AppRoutes.cars}>Cars</Link></p>
            <p><Link to={AppRoutes.addNewCar}>Add new car</Link></p>
        </div>
    );
};