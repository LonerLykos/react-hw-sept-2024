import {getSomeModel} from "../../utils/apiUtils.ts";
import {urls} from "../../constants/urls.ts";
import {IUsersResponse} from "../../models/users-models/users-models.ts";
import {ICartsResponse} from "../../models/carts-models/carts-models.ts";


export const getUsers = (): Promise<IUsersResponse> => getSomeModel<IUsersResponse>(urls.users);
export const getCartsById = (id: number): Promise<ICartsResponse> => getSomeModel<ICartsResponse>(urls.carts.byUserId(id))





