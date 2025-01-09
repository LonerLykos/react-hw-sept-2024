import {getSomeModel} from "../../utils/apiUtils.ts";
import {urls} from "../../constants/urls.ts";
import {IUsersResponse} from "../../models/users-models/users-models.ts";
import {IPostsResponse} from "../../models/posts-models/posts-models.ts";

export const getUsers = (): Promise<IUsersResponse> => getSomeModel<IUsersResponse>(urls.users);
export const getPosts = (): Promise<IPostsResponse> => getSomeModel<IPostsResponse>(urls.posts);
// export const getCartsById = getSomeModel(urls.carts.byUserId(id));




