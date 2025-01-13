import {getSomeModel} from "../utils/apiUtil.ts";
import {urls} from "../constants/urls.ts";
import {IUsersResponse} from "../models/users-models.ts";


export const getUsers = (skip:string): Promise<IUsersResponse> => getSomeModel<IUsersResponse>(urls.paginationUsers(skip));
