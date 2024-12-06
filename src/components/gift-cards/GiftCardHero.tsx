import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { Button } from "../ui/button";

// import { giftCards } from "../../lib/gift-cards-data";
// console.log(giftCards)

export function GiftCardHero() {
  return (
    <div className="relative bg-[#1E3932] text-white py-24 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <img
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80"
          alt="Gift cards background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Gift className="h-12 w-12 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Starbucks Gift Cards</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Share the love with a Starbucks Gift Card. Perfect for any occasion.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-green-900 hover:bg-gray-100">
              Buy now
            </Button>
            <Button className="bg-white text-green-900 hover:bg-gray-100">
              Check balance
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}