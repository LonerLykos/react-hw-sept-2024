import {Link} from "react-router-dom";
import {AppRoutes} from "../../routes/constants.ts";

export const Menu = () => {
    return (
        <div className="flex flex-row gap-20 justify-center bg-blue-200">
            <p><Link to={AppRoutes.home}>Home</Link></p>
            <p><Link to={AppRoutes.cars}>Cars</Link></p>
            <p className='text-red-600'><Link to={AppRoutes.addNewCar}>Add new car</Link></p>
        </div>
    );
};