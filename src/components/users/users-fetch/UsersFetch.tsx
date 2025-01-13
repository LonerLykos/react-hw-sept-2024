
import {useEffect, useState} from "react";
import {IUsers, IUsersResponse} from "../../../models/users-models.ts";
import {getUsers} from "../../../api/api.service.ts";
import {useSearchParams} from "react-router-dom";


export const UsersFetch = () => {
    const [item, setItem] = useState<IUsers[]>([]);
    const [query] = useSearchParams();



    useEffect(() => {
        const pg = query.get('page');
        if (pg) {
            const skip = ((+pg)-1) * 10;

            const fetchData = async () => {
                const response: IUsersResponse = await getUsers(skip.toString());
                const item: IUsers[] = response.users;
                setItem(item);

            };

            fetchData();
        }

    }, [query]);

    return item;
};
