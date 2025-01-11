import {FC} from "react";
import {IProducts} from "../../models/carts-models/carts-models.ts";

type ProductPropType = {
    item: IProducts;
}

export const ProductComponent: FC<ProductPropType> = ({item}) => {
    return (
        <div className='border-2 border-emerald-500 mb-5 text-center'>
            <h3 className='font-bold text-xl'>Title: {item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p className='italic'>Price: {item.price}</p>
        </div>
    );
};
