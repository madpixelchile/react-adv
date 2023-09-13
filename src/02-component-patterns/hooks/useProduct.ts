import { useState } from "react";

export const useProduct = (defaultValue: number = 0) => {
    const [counter, setCounter] = useState(0);
    const increaseBy = (value: number) => {
        setCounter(state => Math.max(state + value, 0));
    }
    return {
        counter, 
        increaseBy
    }
}

