import {ProductItem} from "../product-item/ProductItem.tsx";
import {IProducts} from "../../../models/carts-models/carts-models.ts";
import {CartsFetch} from "../../carts/carts-fetch/CartsFetch.tsx";

export const ProductsList = () => {
    const {products} = CartsFetch();

    if (typeof products !== "object") {

    } else {
        return (
            <div className='grid grid-cols-2 gap-5'>
                {
                    products.map((item: IProducts) => <ProductItem key={item.id} item={item}/>)
                }
            </div>
        );
    }

};
