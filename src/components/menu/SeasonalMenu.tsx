"use client";

import { Card } from "../ui/card";
import { Sparkles } from "lucide-react";

const seasonalItems = [
  {
    name: "Winter Collection",
    description: "Discover our limited-time winter beverages and treats.",
    image: "https://images.unsplash.com/photo-1577595166653-c4b06b30fa18?auto=format&fit=crop&q=80",
    items: ["Peppermint Mocha", "Gingerbread Latte", "Snowman Cookie"]
  }
];

export function SeasonalMenu() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-12">Seasonal Specials</h2>
        
        {seasonalItems.map((collection, index) => (
          
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{collection.name}</h3>
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                  <ul className="space-y-3">
                    {collection.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-yellow-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          
        ))}
      </div>
    </section>
  );
}