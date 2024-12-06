"use client";

import { Card } from "./ui/card";
import { Coffee, Leaf, Snowflake } from "lucide-react";
import { CARD_SIZES } from "../lib/constants";

const drinks = [
  {
    name: "Iced Caramel Macchiato",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
    description: "Bold espresso marked with vanilla syrup, milk and caramel drizzle.",
    price: "$4.95",
    icon: <Coffee className="h-5 w-5" />,
    tags: ["Bestseller", "Iced"]
  },
  {
    name: "Matcha Green Tea Latte",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80",
    description: "Japanese green tea powder with steamed milk and a touch of sweetness.",
    price: "$5.45",
    icon: <Leaf className="h-5 w-5" />,
    tags: ["New", "Hot"]
  },
  {
    name: "Nitro Cold Brew",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80",
    description: "Velvety-smooth nitrogen-infused cold brew coffee.",
    price: "$4.45",
    icon: <Snowflake className="h-5 w-5" />,
    tags: ["Popular", "Cold"]
  }
];

export default function FeaturedDrinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <h2 className="text-3xl font-bold text-center mb-4">Featured Drinks</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover our baristas' favorite creations, crafted with premium ingredients and love.
          </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            
              <Card className={`${CARD_SIZES.DEFAULT.height} overflow-hidden group cursor-pointer`}>
                <div className="relative">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className={`w-full ${CARD_SIZES.DEFAULT.imageHeight} object-cover transition-transform duration-300 group-hover:scale-110`}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {drink.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {drink.icon}
                    <h3 className="text-xl font-semibold">{drink.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{drink.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-green-700 font-bold text-lg">{drink.price}</p>
                    <button className="text-green-700 font-medium hover:text-green-800 transition-colors">
                      Add to cart
                    </button>
                  </div>
                </div>
              </Card>
            
          ))}
        </div>
      </div>
    </section>
  );
}