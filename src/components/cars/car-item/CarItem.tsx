import {ICars} from "../../../models/cars-model.ts";
import {FC} from "react";
import "./CarItem.css"

type Props = {
    car: ICars;
}

export const CarItem:FC<Props> = ({car}) => {
    return (
        <div className='info'>
            <h2>Brand: {car.brand}</h2>
            <p>Year: {car.year}</p>
            <p>Price: {car.price}</p>
        </div>
    );
};
