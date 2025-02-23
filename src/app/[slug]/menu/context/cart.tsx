import { Product } from "@prisma/client";
import { createContext } from "vm";

interface CartProduct extends Product {
    quantity: number;
}

export interface IcartContext {
    isOpen: boolean,
    product: Product [],
    toggleCart: () => void;
}

export const CartContext = createContext<IcartContext>({
    isOpen: false,
})