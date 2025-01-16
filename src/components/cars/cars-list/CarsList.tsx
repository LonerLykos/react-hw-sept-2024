import {GetAllCars} from "../cars-axios/GetAllCars.tsx";
import {ICars, ICarId} from "../../../models/cars-model.ts";
import {CarItem} from "../car-item/CarItem.tsx";
import "./CarsList.css"

type CarsItems = ICars & ICarId;

export const CarsList = () => {


    return (
        <div className='wrapper-grid'>
            {GetAllCars().map((car: CarsItems) => <CarItem key={car.id} car={car} />)}
        </div>
    );
};
