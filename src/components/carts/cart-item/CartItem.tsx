import {FC} from "react";
import {ICarts} from "../../../models/carts-models/carts-models.ts";
import {ProductsList} from "../../products/products-list/ProductsList.tsx";
import {useLocation} from "react-router-dom";

type Props = {
    cart: ICarts
}

export const CartItem: FC<Props> = ({cart}) => {
    const {state} = useLocation()

    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='font-bold text-xl'>Cart of {state.name}</h3>
            <p>Total products: {cart.totalProducts}</p>
            <p className='italic'>Total price: {cart.total}</p>
            <div>
                <ProductsList/>
            </div>
        </div>
    );
};
