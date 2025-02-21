"use client";

import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import Products from "./products";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: { menuCategories: { include: { products: true } } };
  }>;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
    include: { products: true };
}>

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategoryWithProducts>(restaurant.menuCategories[0]);
    const handleCategoryclick = (category: MenuCategoryWithProducts) => {
        setSelectedCategory(category);
    }
    const getCategoryButtonVariant = (category: MenuCategoryWithProducts) => {
        return selectedCategory.id === category.id ? "default" : "secondary"   
    }
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
                <Button onClick={() => handleCategoryclick(category)} className="rounded-full" key={category.id} variant={
                   getCategoryButtonVariant(category)
                 } size="sm">
                    {category.name}
                </Button>
            ))}
        </div>
        <ScrollBar orientation="horizontal"></ScrollBar>
      </ScrollArea>

            <Products products={selectedCategory.products} />
      
    </div>
  );
};

export default RestaurantCategories;
