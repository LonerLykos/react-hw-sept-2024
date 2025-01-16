import "./FormAddCar.css"
import {useForm} from "react-hook-form";
import {ICars} from "../../models/cars-model.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validator/car.validator.ts";
import {axiosInstance} from "../../api/api.cars.service.ts";


export const FormAddCar = () => {

    const {handleSubmit, register, formState: {errors, isValid}, reset}
        = useForm<ICars>({mode: 'all', resolver: joiResolver(carValidator)});

    const myHandler = async (car: ICars) => {
        try {
            await axiosInstance.post('/cars', car);
            reset()
        } catch (error) {
            console.error('Error while sending data:', error)
        }
    };
    return (
        <form onSubmit={handleSubmit(myHandler)}>
            <div className='wrap-input'>
                <label>
                    <input type="text" {...register('brand')}/>
                </label>

                <p className={!errors.brand ? 'hide' : 'view'}>{!errors.brand ? '' : errors.brand.message}</p>
            </div>
            <div className='wrap-input'>
                <label>
                    <input type="number" {...register('price')}/>
                </label>

                <p className={!errors.price ? 'hide' : 'view'}>{!errors.price ? '' : errors.price.message}</p>
            </div>
            <div className='wrap-input'>
                <label>
                    <input type="number" {...register('year')}/>
                </label>

                <p className={!errors.year ? 'hide' : 'view'}>{!errors.year ? '' : errors.year.message}</p>
            </div>

            <button disabled={!isValid}>Send your car</button>
        </form>
    );
};

