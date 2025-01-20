import {useEffect, useState} from "react";
import {loadAuthPosts, refresh} from "../../../services/api.service.ts";
import {IPosts} from "../../../models/IPosts.ts";
import {PostItem} from "../post-item/PostItem.tsx";


export const PostsList = () => {

    //useState для визначення постів
    const [posts, setPosts] = useState<IPosts[]>([]);
    
    useEffect(() => {

        //витягаємо дані з апі і пакуємо їх в posts
        loadAuthPosts().then(posts => {
            setPosts(posts);
        }).catch(reason => {
            //у випадку помилки від апі на наш запит виводимо її в консоль
            console.log(reason);

            // застосовуємо рефреш для заміни нашої поточної пари токенів на новий екземпляр
            refresh()
                //після чого повторюємо запит але вже з новим access токеном
                .then(() => loadAuthPosts())
                .then(value => console.log(value))
        })

    }, []);

    return (
        <div>
            {
                posts.map((post: IPosts) => <PostItem item={post} key={post.id} />)
            }
        </div>
    );
};
