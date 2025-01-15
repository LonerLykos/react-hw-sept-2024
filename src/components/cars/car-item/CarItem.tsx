import {ICars} from "../../../models/cars-model.ts";
import {FC} from "react";

type Props = {
    car: ICars;
}

export const CarItem:FC<Props> = ({car}) => {
    return (
        <div className='border-2 border-emerald-500 mb-5 text-center'>
            <h2>Brand: {car.brand}</h2>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};
