
import { createContext } from 'react';
import styles from '../../styles/styles.module.scss';

import { useProduct } from '../../hooks/useProduct';
import { Product, ProductContextProps, OnChangeArgs } from '../../interfaces/ProductInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className: string | Object;
    style?: React.CSSProperties | undefined;
    onChangeProduct?: (args:OnChangeArgs)=> void;
    value?: number;
}

export const ProductCard = ({ children, product, className = '', style, onChangeProduct, value }: Props) => {

    const { counter, increaseBy } = useProduct({onChangeProduct, product, value});

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                className
            }}
        >
            <div 
                className={`${styles.productCard} ${className}`} 
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}
