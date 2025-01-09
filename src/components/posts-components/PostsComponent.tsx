import {PostsFetchComponent} from "./PostsFetchComponent.tsx";
import {IPosts} from "../../models/posts-models/posts-models.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            {
                PostsFetchComponent().map((item: IPosts) => <PostComponent key={item.id} item={item}/>)
            }
        </div>
    );
};
