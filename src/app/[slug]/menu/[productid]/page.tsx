
import { notFound } from "next/navigation";

import {  db } from "@/lib/prisma";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
 params: Promise<{ slug: string; productid: string }>;
}

const ProductPage = async({params}: ProductPageProps) => {
    const { slug, productid } = await params;
    const restaurant = await db.restaurant.findUnique({where: {id: productid}});

    if (!prodcut) {
        return notFound();
    }
    return <>
   <ProductHeader  prodcut={prodcut}/>
   <ProductDetails product={prodcut}/>   
    </>;
}
 

export default ProductPage;