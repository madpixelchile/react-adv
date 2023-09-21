import { Props as ProductButtonsProps } from "../components/ProductButtons/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle/ProductTitle";

export interface Product {
    id: string;
    img?: string;
    title: string;
}

export interface ProductContextProps {
    className: string | Object;
    counter: number;
    increaseBy: (arg: number) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductButtonProps {
    counter: number;
    increaseBy: (arg: number) => void;
}

export interface ProductCardHOCProps{
    ({ children, product, onChangeProduct }: ProductCardProps): JSX.Element;
    Buttons: ({ className }:ProductButtonsProps) => JSX.Element;
    Image: ({ img, className }: ProductImageProps) => JSX.Element;
    Title: ({ title, className }: ProductTitleProps) => JSX.Element;
}

export interface OnChangeArgs{
    product: Product;
    count: number;
}

export interface ProductCartInitialValues{ 
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers{
    count: number;
    isMaxCountReached?: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number )=> void;
    reset: ()=> void;
}