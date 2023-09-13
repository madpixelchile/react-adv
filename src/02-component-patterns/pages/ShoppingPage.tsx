import { ProductButtons, ProductImage, ProductTitle, ProductCard } from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Producto uno',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
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
                    <ProductCard product={product} className={'bg-dark text-white'}>
                        <ProductCard.Image className="custom-image"/>
                        <ProductCard.Title />
                        <ProductCard.Buttons className={'custom-buttons'} />
                    </ProductCard>

                    <ProductCard 
                        product={product}
                        className={'bg-dark text-white'}
                    >
                        <ProductImage className="custom-image"/>
                        <ProductTitle className={'text-bold'}/>
                        <ProductButtons className={'custom-buttons'} />
                    </ProductCard>

                    <ProductCard 
                        product={product}
                        className={'bg-dark text-white'}
                        style={{border: 'solid 1px #444'}}
                    >
                        <ProductImage className="custom-image"/>
                        <ProductTitle className={'text-bold'}/>
                        <ProductButtons className={'custom-buttons'} style={{backgroundColor: '#222'}} />
                    </ProductCard>
                </div>
            </div>
        </>
    )
}

