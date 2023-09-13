import { ProductCard as ProductCardHOC} from "./ProductCard/ProductCard";
import { ProductButtons } from "./ProductButtons/ProductButtons";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductTitle } from "./ProductTitle/ProductTitle";
import { ProductCardHOCProps } from "../interfaces/ProductInterfaces";

export {
    ProductButtons,
    ProductImage,
    ProductTitle
}

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})

export default ProductCard;