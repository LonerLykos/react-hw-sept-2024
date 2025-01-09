import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div className="flex flex-row gap-20 justify-center bg-blue-200">
            <p><Link to={''}>Home</Link></p>
            <p className='text-red-600'><Link to={'users'}>Users</Link></p>
            <p className='text-fuchsia-700'><Link to={'posts'}>Posts</Link></p>
        </div>
    );
};
