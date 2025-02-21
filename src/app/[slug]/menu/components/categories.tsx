"use client";

import { MenuCategory, Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: { menuCategories: { include: { products: true } } };
  }>;
}
const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory>(restaurant.menuCategories[0]);
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
      <div className="p-5">
      <div className="flex items-center gap-3 p-5">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          height={45}
          width={45}
        />
        <div>
          <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          <p className="text-xs opacity-55">{restaurant.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
        <ClockIcon size={12}>
          <p>Aberto!</p>
        </ClockIcon>
      </div>
      
      </div>
      <ScrollArea className="w-full p-3">
        <div className="flex w-max space-x-4 px-4 pt-0">
            {restaurant.menuCategories.map(category =>(
                <Button className="rounded-full" key={category.id} variant="secondary" size="sm">
                    {category.name}
                </Button>
            ))}
        </div>
        <ScrollBar orientation="horizontal"></ScrollBar>
      </ScrollArea>
    </div>
  );
};

export default RestaurantCategories;
