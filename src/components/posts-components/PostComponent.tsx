import {FC} from "react";
import {IPosts} from "../../models/posts-models/posts-models.ts";


type PostPropType = {
    item: IPosts,
}

export const PostComponent: FC<PostPropType> = ({item}) => {
    return (
        <div className='border-2 border-emerald-500 mb-5 text-center'>
            <h3 className='font-bold text-xl'>Title: {item.title}</h3>
            <p>Text: {item.body}</p>
            <p className='italic'>Likes: {item.reactions.likes}</p>
        </div>
    );
};