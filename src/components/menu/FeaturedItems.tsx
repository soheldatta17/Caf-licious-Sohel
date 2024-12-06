"use client";

import { Card } from "../ui/card";
import { Star, TrendingUp } from "lucide-react";

const featuredItems = [
  {
    name: "Caramel Frappuccino",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80",
    description: "Rich coffee blended with milk, caramel syrup, and ice.",
    price: "$5.95",
    badge: "Bestseller"
  },
  {
    name: "Chai Tea Latte",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80",
    description: "Black tea infused with cinnamon, clove, and other spices.",
    price: "$4.95",
    badge: "Staff Pick"
  },
  {
    name: "Pumpkin Spice Latte",
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80",
    description: "Signature espresso with pumpkin spice flavor.",
    price: "$5.45",
    badge: "Seasonal"
  }
];

export function FeaturedItems() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="h-6 w-6 text-yellow-500" />
            <TrendingUp className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Featured Items</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our most popular drinks and seasonal favorites.
          </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            
              <Card className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 font-bold">{item.price}</span>
                    <button className="text-green-700 font-medium hover:text-green-800 transition-colors">
                      Order now
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