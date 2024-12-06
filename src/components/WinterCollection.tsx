import React from "react";
import { Card } from "./ui/card";
import { Snowflake, Star } from "lucide-react";
import { CARD_SIZES, WINTER_DRINKS } from "../lib/constants";

// Define the structure of the drink object (if needed for type safety)
interface Drink {
  name: string;
  description: string;
  price: string;
  image: string;
  isNew: boolean;
  badge: string;
}

const WinterCollection: React.FC = () => {
  return (
    <section className="py-16 bg-[#1E3932] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Snowflake className="h-8 w-8 text-blue-200 animate-pulse" />
          <Star className="h-8 w-8 text-yellow-400" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">Winter Collection</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-200">
          Discover our festive winter beverages, crafted to warm your holiday season.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WINTER_DRINKS.map((drink: Drink, index: number) => (
            <Card
              key={index}
              className={`${CARD_SIZES.DEFAULT.height} group overflow-hidden bg-white/10 backdrop-blur-lg border-white/20`}
            >
              <div className="relative">
                <img
                  src={drink.image}
                  alt={drink.name}
                  loading="lazy"
                  className={`w-full ${CARD_SIZES.DEFAULT.imageHeight} object-cover transition-transform duration-300 group-hover:scale-110`}
                />
                {drink.isNew && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </span>
                )}
                <span className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {drink.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">{drink.name}</h3>
                <p className="text-gray-200 mb-4">{drink.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{drink.price}</span>
                  <button className="text-white hover:text-green-200 transition-colors font-medium">
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
};

export default WinterCollection;
