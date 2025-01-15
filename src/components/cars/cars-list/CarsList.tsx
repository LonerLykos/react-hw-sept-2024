import {GetAllCars} from "../cars-fetch/GetAllCars.tsx";
import {ICars} from "../../../models/cars-model.ts";
import {CarItem} from "../car-item/CarItem.tsx";

export const CarsList = () => {
    return (
        <div>
            {GetAllCars().map((car: ICars) => <CarItem key={car.id} car={car} />)}
        </div>
    );
};
