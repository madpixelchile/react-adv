import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/ProductInterfaces";

interface UseProductArgs{
    product: Product;
    onChangeProduct?: (args: OnChangeArgs)=> void;
    value?: number;
}

export const useProduct = ( { onChangeProduct, product, value = 0 }:UseProductArgs ) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChangeProduct );

    const increaseBy = (value: number) => {

        // console.log('isControlled:', isControlled.current );

        if(isControlled.current){
            return onChangeProduct!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );
        onChangeProduct && onChangeProduct({count: newValue, product});
    }

    useEffect(()=>{
        setCounter(value);
        // console.log(value);
    },[value]);

    return {
        counter, 
        increaseBy
    }
}

