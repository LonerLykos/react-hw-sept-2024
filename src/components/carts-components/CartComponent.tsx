import {FC} from "react";
import {ICarts} from "../../models/carts-models/carts-models.ts";
import {ProductsComponent} from "../products-components/ProductsComponent.tsx";
import {useLocation} from "react-router-dom";

type CartPropType = {
    cart: ICarts
}

export const CartComponent: FC<CartPropType> = ({cart}) => {
    const {state} = useLocation()

    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='font-bold text-xl'>Cart of {state.name}</h3>
            <p>Total products: {cart.totalProducts}</p>
            <p className='italic'>Total price: {cart.total}</p>
            <div>
                <ProductsComponent/>
            </div>
        </div>
    );
};
