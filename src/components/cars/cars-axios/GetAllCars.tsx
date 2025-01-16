import {axiosInstance} from "../../../api/api.cars.service.ts";
import {ICarId, ICars} from "../../../models/cars-model.ts";
import {useEffect, useState} from "react";



export const GetAllCars = () => {
    const [cars, setCars] = useState<(ICars & ICarId)[]>([]);

    useEffect(() => {
        const getAllCars = async () => {

            const {data} = await axiosInstance.get<(ICars & ICarId)[]>('/cars');
            setCars(data);

        };

        getAllCars();
    });
    return cars;
}
