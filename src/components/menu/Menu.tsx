import {Link} from "react-router-dom";

//створення навігаційного меню через компонент
export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>back to login</Link></li>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
            </ul>
            <hr/>

        </div>
    );
};

