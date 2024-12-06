import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { giftCards } from "../../lib/gift-cards-data";
import { Heart, Cake, Star, Coffee } from "lucide-react";


const iconMap: Record<string, JSX.Element> = {
  Cake: <Cake className="h-5 w-5" />,
  Heart: <Heart className="h-5 w-5" />,
  Coffee: <Coffee className="h-5 w-5" />,
  Star: <Star className="h-5 w-5" />,
};

export function BulkGiftCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bulk Gift Cards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perfect for businesses, events, and large groups. Get special pricing and
            dedicated support for bulk orders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {giftCards.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4 text-green-700">
                {/* Dynamically render the icon */}
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              {/* <p className="text-gray-600">{feature.description}</p> */}
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-green-700 hover:bg-green-800 text-white text-lg group">
            Contact our sales team
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
