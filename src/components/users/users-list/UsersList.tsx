import {useEffect, useState} from "react";
import {loadAuthUsers, refresh} from "../../../services/api.service.ts";
import {IUsers} from "../../../models/IUsers.ts";
import {UserItem} from "../user-item/UserItem.tsx";


const UsersList = () => {

    //useState для визначення юзерів
    const [users, setUsers] = useState<IUsers[]>([])

    useEffect(() => {

        //витягаємо дані з апі і пакуємо їх в юзера
        loadAuthUsers().then(users => {
            setUsers(users);
        }).catch(reason => {
            //у випадку помилки від апі на наш запит виводимо її в консоль
            console.log(reason);

            // застосовуємо рефреш для заміни нашої поточної пари токенів на новий екземпляр
            refresh()

                //після чого повторюємо запит але вже з новим access токеном
                .then(() => loadAuthUsers())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <div>
            {
                users.map((user: IUsers) => <UserItem item={user} key={user.id} />)
            }
        </div>
    );
};

export default UsersList;