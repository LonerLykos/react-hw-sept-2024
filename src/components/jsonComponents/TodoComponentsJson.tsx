import {IJsonPH_Todo} from "../../models/jsonPH_model.ts";
import {TodoComponentJson} from "./TodoComponentJson.tsx";
import {getJsonPHModel} from "../../services/api.service.ts";
import {useEffect, useState} from "react";


export const TodoComponentsJson = () => {
    const [item, setItem] = useState<IJsonPH_Todo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getJsonPHModel();
            setItem(todos);
        };

        fetchData();
    }, []);

    return (
        <div className='unique'>
            {
                item.map((item: IJsonPH_Todo) => <TodoComponentJson key={item.id} item={item}/>)
            }
        </div>
    );
};



