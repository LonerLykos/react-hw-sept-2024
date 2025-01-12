import {useEffect, useState} from "react";
import {ICarts, ICartsResponse, IProducts} from "../../../models/carts-models/carts-models.ts";
import {useLocation} from "react-router-dom";
import {getCartsById} from "../../../api/get-dummy-data/api.service.ts";

export const CartsFetch = () => {
    const [cart, setCart] = useState<ICarts[] | number>([]);
    const [products, setProducts] = useState<IProducts[] | number>([]);

    const {state} = useLocation()
    const id: number = +state.id;

    useEffect(() => {
        const fetchData = async () => {
            const response: ICartsResponse = await getCartsById(id);
            const cart: ICarts[] = response.carts;
            if (cart.length === 0) {
                setCart(0);
                setProducts(0);
            } else {
                const products: IProducts[] = cart[0].products

                setCart(cart);
                setProducts(products);
            }

        };

        fetchData();

    }, [id]);

    return {cart, products};

};
