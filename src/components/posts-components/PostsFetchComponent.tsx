import {useEffect, useState} from "react";
import {getPosts} from "../../api/get-dummy-data/api.service.ts";
import {IPosts, IPostsResponse} from "../../models/posts-models/posts-models.ts";

export const PostsFetchComponent = () => {
    const [item, setItem] = useState<IPosts[]>([]);

    useEffect(() => {
        const fetchDataDummy = async () => {
            const response: IPostsResponse = await getPosts();
            const item: IPosts[] = response.posts;
            setItem(item);

        };

        fetchDataDummy();

    }, []);

    return item;
};