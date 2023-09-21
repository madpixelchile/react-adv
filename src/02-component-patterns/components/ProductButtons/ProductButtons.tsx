import { useCallback, useContext, useEffect, useState } from "react";
import { ProductContext } from "../ProductCard/ProductCard";
import styles from '../../styles/styles.module.scss';

export interface Props {
    className?: string;
    style?: React.CSSProperties | undefined;
}

export const ProductButtons = ({ className = '', style }: Props) => {

    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    // const [maxReached, setMaxReached] = useState(false);

    const handleClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {

        if (currentTarget.name === 'more') {
            increaseBy(-1)
        }
        if (currentTarget.name === 'less') {
            increaseBy(1)
        }

    }


    const maxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    
    // console.log(maxCount, counter);

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>


            <button name={'more'} className={styles.buttonMinus} onClick={(e) => handleClick(e)} style={style}>-</button>

            <div className={styles.countLabel}>
                {counter}
            </div>


            <button
                name={'less'}
                className={`${styles.buttonAdd} ${ maxReached() ? styles.disabled : '' }`}
                onClick={(e) => handleClick(e)}
                style={style}
            >+</button>


        </div>
    )
}