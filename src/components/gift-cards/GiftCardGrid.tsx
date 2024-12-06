import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { giftCards } from "../../lib/gift-cards-data";
import { Heart, Cake, Star, Coffee } from "lucide-react"; 


const iconMap: Record<string, JSX.Element> = {
  Cake: <Cake className="h-5 w-5" />,
  Heart: <Heart className="h-5 w-5" />,
  Coffee: <Coffee className="h-5 w-5" />,
  Star: <Star className="h-5 w-5" />,
};

export function GiftCardGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Gift Cards</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Choose from our collection of beautifully designed gift cards for any occasion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {giftCards.map((card, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                    {iconMap[card.icon]} {/* Render the correct icon dynamically */}
                    {card.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <div className="flex justify-between items-center">
                  <button className="text-green-700 font-medium hover:text-green-800 transition-colors flex items-center gap-2">
                    <Gift className="h-5 w-5" />
                    Select design
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
