import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components";
import '../styles/custom-styles.css';
// import { useShopingCart } from "../hooks/useShopingCart";
import { products } from "../data/products";


const product = products[0];


export const ShoppingPage = () => {

    // const {
    //     shoppingCart,
    //     handleProductChange
    // } = useShopingCart();

    return (
        <>
            <div>
                <h1>Shopping Store</h1>
                <hr />
                <div
                    style={{
                        display: 'flex',
                        flexFlow: 'wrap'
                    }}
                >

                    <ProductCard
                        key={product.id}
                        product={product}
                        className={'bg-dark text-white'}
                        initialValues={{
                            count: 4,
                            maxCount: 10
                        }}
                    >
                        {
                            ({ count, increaseBy, reset, isMaxCountReached }) => (
                                <>
                                    <ProductImage className="custom-image" />
                                    <ProductTitle className={'text-bold'} />
                                    <ProductButtons className={'custom-buttons'} />
                                    {/* <span>{JSON.stringify(args)}</span> */}
                                    <button onClick={() => reset()}>
                                        Reset
                                    </button>
                                    {
                                        count > 0 && <button onClick={() => increaseBy(-2)}>
                                            -2
                                        </button>
                                    }

                                    <span>{count}</span>
                                    {
                                        !isMaxCountReached && <button onClick={() => increaseBy(2)} >
                                            +2
                                        </button>
                                    }

                                </>
                            )
                        }
                    </ProductCard>

                </div>
            </div>
        </>
    )
}

