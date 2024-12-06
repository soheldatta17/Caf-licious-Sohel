"use client";

import { Star, Gift, Coffee, Zap, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Star className="h-8 w-8 text-green-700" />,
    title: "Earn Stars",
    description: "Earn Stars with every purchase and redeem them for free drinks and food."
  },
  {
    icon: <Gift className="h-8 w-8 text-green-700" />,
    title: "Birthday Reward",
    description: "Get a free drink on your birthday, every year."
  },
  {
    icon: <Coffee className="h-8 w-8 text-green-700" />,
    title: "Free Refills",
    description: "Enjoy free refills of brewed coffee during your visit."
  },
  {
    icon: <Zap className="h-8 w-8 text-green-700" />,
    title: "Mobile Order & Pay",
    description: "Skip the line and order ahead with our mobile app."
  },
  {
    icon: <Clock className="h-8 w-8 text-green-700" />,
    title: "Early Access",
    description: "Be the first to try new seasonal beverages and food items."
  }
];

export default function Rewards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="text-center mb-12">
            <span className="text-green-700 font-medium">REWARDS PROGRAM</span>
            <h2 className="text-4xl font-bold mb-4">Cafélicious® Rewards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join Cafélicious Rewards to earn Stars for free food and drinks, get access
              to mobile ordering, and exclusive member benefits.
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            
          ))}
        </div>
      </div>
    </section>
  );
}