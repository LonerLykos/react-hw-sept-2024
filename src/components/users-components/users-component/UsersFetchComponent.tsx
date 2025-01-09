import {IUsers, IUsersResponse} from "../../../models/users-models/users-models.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../../../api/get-dummy-data/api.service.ts";

export const UsersFetchComponent = () => {
    const [item, setItem] = useState<IUsers[]>([]);

    useEffect(() => {
        const fetchDataDummy = async () => {
            const response: IUsersResponse = await getUsers();
            const item: IUsers[] = response.users;
            setItem(item);

        };

        fetchDataDummy();

    }, []);

    return item;
};
