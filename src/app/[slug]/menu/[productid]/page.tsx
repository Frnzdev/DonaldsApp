import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

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
    <div className="relative w-full h-[300px]">
    <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
      >
        <ChevronLeft />
      </Button>

      
        <Image
        src={prodcut.imageUrl}
        alt={prodcut.name}
        fill
        className="object-contain"
        />

<Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
    </div>
    <h1>Product Page</h1>
    {slug}
    {productid}   
    </>;
}
 
export default ProductPage;