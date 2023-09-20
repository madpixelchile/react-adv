import { useState } from "react";
import { ProductInCart } from "../data/products";
import { Product } from "../interfaces/ProductInterfaces";

export const useShopingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({/* '1': { ...product1, count: 10 } */ });

    const handleProductChange = ({ count, product }: { count: number; product: Product }) => {
        // e:React.MouseEvent<HTMLButtonElement>
        // console.log('handleProductChange','evento:',count);
        // let productKey: string = product.id;

        setShoppingCart((oldShoppingCart?: {}) => {

            if (count === 0) {
                //A esto se le llama desestructuración con alias, estamos renombrando la key por x nombre
                //y esto como resultado la saca de la lógica establecida "la borra", manteniendo esparcido todos los demás ítems.
                const { [product.id]: toDeleteAlias, ...restOfItems } = oldShoppingCart;
                return restOfItems;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count }
            }
        });
    }

    console.log(shoppingCart);

    return {
        shoppingCart,
        handleProductChange
    }
}

