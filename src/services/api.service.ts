import {IJsonPH_Todo} from "../models/jsonPH_model.ts";
import {IResponse} from "../models/dummy_model.ts";


export const getJsonPHModel = async ():Promise<IJsonPH_Todo[]> => {
    return await fetch(import.meta.env.VITE_API_JSON_P_H_URL)
        .then(value => value.json());
}

export const getDummyModel = async ():Promise<IResponse> => {
    return await fetch(import.meta.env.VITE_API_DUMMY_URL)
        .then(item => item.json());

}
