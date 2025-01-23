import axios from 'axios';
import {IResponse} from "../models/IResponse.ts";

export const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{},
});


export const getDataFromApi = async <T>(urls: string, ourData:string): Promise<T> => {
    const { data } = await axiosInstance.get<IResponse & Record<string, T>>(urls);
    return data[ourData];
}


