import {UsersItem} from "../users-item/UsersItem.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";


export const UsersList = () => {

    const [users, setUsers] = useState([]);

    //кешує функцію для уникнення рирендерингу
    const foo = useCallback(() => {
        console.log("test");
    }, []);

    //useMemo мемомізує(кешує/запам'ятовує) наш масив для уникнення рирендерингу компонента,
    //який залежить від цього масиву за умови, що масив не буде змінено в процесі
    const arr: number[] = useMemo(()=>{
        return [11,22,33];
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            setUsers(users);
        });

        return () => {

            //цей return буде спрацьовувати за умови знищення/закриття поточного компонента
            console.log('unsubscribe');
        }

    },[]);

    return (
        <div>
            <UsersItem foo={foo} arr={arr} />
        </div>
    );
};
