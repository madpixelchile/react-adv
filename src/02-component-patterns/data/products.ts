import { Product } from "../interfaces/ProductInterfaces";

const product1 = {
    id: '1',
    title: 'Producto uno',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Producto dos',
    img: './coffee-mug2.png'
}

export const products: Product[] = [
    product1,
    product2
]

export interface ProductInCart extends Product {
    count: number;
}