import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/ProductInterfaces";

interface UseProductArgs{
    product: Product;
    onChangeProduct?: (args: OnChangeArgs)=> void;
    value?: number;
}

export const useProduct = ( { onChangeProduct, product, value = 0 }:UseProductArgs ) => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );
        onChangeProduct && onChangeProduct({count: newValue, product});
    }

    useEffect(()=>{
        setCounter(value);
    },[value]);

    return {
        counter, 
        increaseBy
    }
}

