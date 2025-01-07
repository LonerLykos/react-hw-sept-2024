import {FC} from "react";
import {IDummy_Todo} from "../../models/dummy_model.ts";

type TodoPropType = {
    item: IDummy_Todo
};

export const TodoComponentDummy: FC<TodoPropType> = ({item}) => {
    return (
        <div className='pack'>
            <h3>Id: {item.id}</h3>
            <p>UserId: {item.userId}</p>
            <p className='italic'>Title: {item.todo}</p>
            <p>Completed: {item.completed.toString()}</p>
        </div>
    );
};

