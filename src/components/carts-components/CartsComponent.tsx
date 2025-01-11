import {CartsFetchComponent} from "./CartsFetchComponent.tsx";
import {CartComponent} from "./CartComponent.tsx";
import {ICarts} from "../../models/carts-models/carts-models.ts";
import {useLocation} from "react-router-dom";


export const CartsComponent = () => {
    const {cart} = CartsFetchComponent();
    const {state} = useLocation()
    const name: string = state.name;

    if (typeof cart !== "object") {
        return <div className='text-center'>
            <h2 className='font-bold text-xl'>{name} current cart is empty.</h2>
        </div>;
    }else {
        return (
            <div>
                {
                    cart.map((cart: ICarts) => {
                        return <CartComponent key={cart.id} cart={cart}/>
                    })
                }
            </div>
        );
    }

};
