import {getDataFromApi} from "../api/api.service.ts";
import {useEffect, useState} from "react";
import {IResponse} from "../models/IResponse.ts";

export const useFetch = async <T,>(url:string, ourData:string) => {

    const [data, setData] = useState<T>();

    useEffect(() => {

            getDataFromApi<IResponse & T>(url, ourData)
                .then(data => {
                setData(data)
            })

    },[url, ourData]);
    console.log(data)
    return {data};

}

