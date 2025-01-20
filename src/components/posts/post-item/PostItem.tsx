import {FC} from "react";
import {IPosts} from "../../../models/IPosts.ts";
import "./PostItem.css"


//пропси для постів
type Props = {
    item: IPosts,
}

//розмітка постів
export const PostItem: FC<Props> = ({item}) => {
    return (
        <div className='wrapper-post'>
            <h3>Title: {item.title}</h3>
            <p>Text: {item.body}</p>
            <p className='italic-font'>Likes: {item.reactions.likes}</p>
        </div>
    );
};