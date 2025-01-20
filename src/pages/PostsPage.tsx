import {Menu} from "../components/menu/Menu.tsx";
import {PostsList} from "../components/posts/posts-list/PostsList.tsx";


export const PostsPage = () => {
    return (
        <div>
            <Menu/>
            <PostsList/>
        </div>
    );
};

