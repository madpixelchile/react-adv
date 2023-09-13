import { useContext } from "react";
import { ProductContext } from "../ProductCard/ProductCard";
import styles from '../../styles/styles.module.scss';

export interface Props{
    title?: string;
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const ProductTitle = ({ title,  className = '', style }: Props ) => {
    const { product } = useContext(ProductContext);
    let productTitle: string;
    if(title){
        productTitle = title;
    }else if(product.title){
        productTitle = product.title;
    }else{
        productTitle = ''
    }
    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{ productTitle }</span>
    )
}



