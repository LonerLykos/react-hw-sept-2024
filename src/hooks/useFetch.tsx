import {getDataFromApi} from "../api/api.service.ts";
import {useEffect, useState} from "react";
import {IResponse} from "../models/IResponse.ts";

export const useFetch = <T,>(url:string, ourData:string) => {

    const [data, setData] = useState<T>();

    useEffect(() => {

        const fetchData = async () => {
            const result: T = await getDataFromApi<IResponse & T>(url, ourData);
            setData(result);
        }
        fetchData();
    },[url, ourData]);

    return {data};


}

