import {FC} from "react";
import {IJsonPH_Todo} from "../../models/jsonPH_model.ts";

type TodoPropType = {
    item: IJsonPH_Todo
};

export const TodoComponentJson: FC<TodoPropType> = ({item}) => {
    return (
        <div className='pack'>
            <h3>Id: {item.id}</h3>
            <p>UserId: {item.userId}</p>
            <p className='italic'>Title: {item.title}</p>
            <p>Completed: {item.completed.toString()}</p>
        </div>
    );
};
