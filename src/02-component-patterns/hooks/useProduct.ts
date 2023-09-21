import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, ProductCartInitialValues } from "../interfaces/ProductInterfaces";

interface UseProductArgs{
    product: Product;
    onChangeProduct?: (args: OnChangeArgs)=> void;
    value?: number;
    initialValues?: ProductCartInitialValues;
}

export const useProduct = ( { onChangeProduct, product, value = 0, initialValues }:UseProductArgs ) => {
    
    const [counter, setCounter] = useState(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {

        let newValue = Math.max( counter + value, 0 );
        if(initialValues?.maxCount){
            newValue = Math.min( newValue, initialValues?.maxCount );
        }

        setCounter( newValue );
        onChangeProduct && onChangeProduct({count: newValue, product});

    }

    useEffect(()=>{
        if(!isMounted.current) return;
        setCounter(value);
    },[value]);

    useEffect(()=>{
        isMounted.current = true;
    })

    const reset = ()=>{
        setCounter(initialValues?.count || value);
    }

    return {
        counter, 
        increaseBy,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset
    }
}

