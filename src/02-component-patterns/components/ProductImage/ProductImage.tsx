import { useContext } from "react";
import { ProductContext } from "../ProductCard/ProductCard";
import noImage from '../../assets/no-image.jpg';
import styles from '../../styles/styles.module.scss';

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const ProductImage = ({ img = '', className = '', style }: Props) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            className={`${styles.productImg} ${className}`}
            style={style}
            src={imgToShow} alt={!product.img ? 'No image' : product.img}
        />
    )
}