import { useContext } from "react";
import { ProductContext } from "../ProductCard/ProductCard";
import styles from '../../styles/styles.module.scss';

export interface Props {
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const ProductButtons = ({ className = '', style }: Props) => {

    const { counter, increaseBy } = useContext(ProductContext);

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} style={style}>-</button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)} style={style}>+</button>
        </div>
    )
}