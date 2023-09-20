import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components";
import '../styles/custom-styles.css';
import { useShopingCart } from "../hooks/useShopingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {

    const {
        shoppingCart,
        handleProductChange
    } = useShopingCart();

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

                    {

                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                className={'bg-dark text-white'}
                                onChangeProduct={handleProductChange}
                                value={shoppingCart[product.id]?.count || 0}
                            >
                                <ProductImage className="custom-image" />
                                <ProductTitle className={'text-bold'} />
                                <ProductButtons className={'custom-buttons'} />
                            </ProductCard>
                        ))

                    }

                </div>

                <div className="shopping-cart">
                    {/* {
                        Object.keys(shoppingCart).length ? Object.keys(shoppingCart).map((item) => {
                            const productItem = shoppingCart[item];
                            return <ProductCard
                                key={item}
                                product={productItem}
                                className={'bg-dark text-white'}
                                style={{ maxWidth: '90px' }}
                                value={productItem.count}
                                onChangeProduct={handleProductChange}
                            >
                                <ProductImage className="custom-image" />
                                <ProductButtons className={'custom-buttons'} />
                            </ProductCard>
                        })
                            :
                            null
                    } */}

                    {
                        Object.entries(shoppingCart).map(([key, product]) => {
                            return <ProductCard
                                key={key}
                                product={product}
                                className={'bg-dark text-white'}
                                style={{ maxWidth: '90px' }}
                                value={product.count}
                                onChangeProduct={handleProductChange}
                            >
                                <ProductImage className="custom-image" />
                                <ProductButtons className={'custom-buttons'} />
                            </ProductCard>
                        })
                         
                    }
                </div>

            </div>
        </>
    )
}

