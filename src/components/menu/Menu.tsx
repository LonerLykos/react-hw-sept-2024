import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div className="flex flex-row gap-20 justify-center bg-blue-200">
            <p><Link to={''}>Home</Link></p>
            <p className='text-red-600'><Link to={'hw-3-2'}>HW-3-2</Link></p>
            <p className='text-red-600'><Link to={'hw-3-3'}>HW-3-3</Link></p>
        </div>
    );
};
