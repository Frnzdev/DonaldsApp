import { Product, Restaurant } from "@prisma/client";
import Image from "next/image";

interface ProductDetailsProps {
    restaurant: Pick<Restaurant, "name" | "avatarImageUrl">;
    product: Product
}

const ProductDetails = ({restaurant, product}: ProductDetailsProps) => {
    return ( <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem]">
        <div>
            {/*RESTAURAT */}
            <div className="flex items-center gap-1 px-5">
                <Image src={restaurant.avatarImageUrl} alt={restaurant.name} width={16} height={16}/>
            </div>
        </div>
    </div> );
}
 
export default ProductDetails;  