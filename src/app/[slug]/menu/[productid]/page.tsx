import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
 params: Promise<{ slug: string; productid: string }>;
}

const ProductPage = async({params}: ProductPageProps) => {
    const { slug, productid } = await params;
    const prodcut = await db.product.findUnique({where: {id: productid}});
    if (!prodcut) {
        return notFound();
    }
    return <>
   <ProductHeader  prodcut={prodcut}/>
    <h1>Product Page</h1>
    {slug}
    {productid}   
    </>;
}
 

export default ProductPage;