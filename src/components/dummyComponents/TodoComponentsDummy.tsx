import {useEffect, useState} from "react";
import {getDummyModel} from "../../services/api.service.ts";
import {IDummy_Todo, IResponse} from "../../models/dummy_model.ts";
import {TodoComponentDummy} from "./TodoComponentDummy.tsx";


export const TodoComponentsDummy = () => {
    const [item, setItem] = useState<IDummy_Todo[]>([]);

    useEffect(() => {
        const fetchDataDummy = async () => {
            const response: IResponse = await getDummyModel();
            const todos: IDummy_Todo[] = response.todos;
            setItem(todos);

        };

        fetchDataDummy();

    }, []);

    return (
        <div className='unique'>
            {
                item.map((item: IDummy_Todo) => <TodoComponentDummy key={item.id} item={item}/>)
            }
        </div>
    );
};


