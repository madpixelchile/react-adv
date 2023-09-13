
import { createContext } from 'react';
import styles from '../../styles/styles.module.scss';

import { useProduct } from '../../hooks/useProduct';
import { Product, ProductContextProps } from '../../interfaces/ProductInterfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className: string | Object;
    style?: React.CSSProperties | undefined;
}

export const ProductCard = ({ children, product, className = '', style }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                className,
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
