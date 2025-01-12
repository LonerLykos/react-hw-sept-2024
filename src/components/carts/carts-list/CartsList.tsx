import {CartsFetch} from "../carts-fetch/CartsFetch.tsx";
import {CartItem} from "../cart-item/CartItem.tsx";
import {ICarts} from "../../../models/carts-models/carts-models.ts";
import {useLocation} from "react-router-dom";


export const CartsList = () => {
    const {cart} = CartsFetch();
    const name: string = useLocation().state.name;

    if (typeof cart !== "object") {
        return <div className='text-center'>
            <h2 className='font-bold text-xl'>{name} current cart is empty.</h2>
        </div>;
    } else {
        return (
            <div>
                {
                    cart.map((cart: ICarts) => {
                        return <CartItem key={cart.id} cart={cart}/>
                    })
                }
            </div>
        );
    }

};
