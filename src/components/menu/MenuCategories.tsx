"use client";

import { Coffee, Leaf, Cake, IceCream } from "lucide-react";
import { Card } from "../ui/card";

interface Category {
  name: string;
  icon: JSX.Element;
  items: string;
  color: string;
}

const categories: Category[] = [
  {
    name: "Hot Coffee",
    icon: <Coffee className="h-8 w-8" />,
    items: "20+ items",
    color: "#FFECB3"
  },
  {
    name: "Tea",
    icon: <Leaf className="h-8 w-8" />,
    items: "15+ items",
    color: "#C8E6C9"
  },
  {
    name: "Bakery",
    icon: <Cake className="h-8 w-8" />,
    items: "12+ items",
    color: "#FFE0B2"
  },
  {
    name: "Cold Drinks",
    icon: <IceCream className="h-8 w-8" />,
    items: "18+ items",
    color: "#BBDEFB"
  }
];

export function MenuCategories(): JSX.Element {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mt-4 mb-12">Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 cursor-pointer group hover:shadow-lg transition-all"
              style={{
                backgroundColor: category.color,
                borderRadius: "16px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-gray-600">{category.items}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
