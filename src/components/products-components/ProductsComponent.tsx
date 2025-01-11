import {ProductComponent} from "./ProductComponent.tsx";
import {IProducts} from "../../models/carts-models/carts-models.ts";
import {CartsFetchComponent} from "../carts-components/CartsFetchComponent.tsx";

export const ProductsComponent = () => {
    const {products} = CartsFetchComponent();

    if (typeof products !== "object") {

    }else {
        return (
            <div className='grid grid-cols-2 gap-5'>
                {
                    products.map((item: IProducts) => <ProductComponent key={item.id} item={item}/>)
                }
            </div>
        );
    };

};
