"use client";

import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function RewardsHero() {
  return (
    <div className="bg-green-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Star className="h-12 w-12 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Starbucks® Rewards</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Starbucks Rewards to earn Stars for free food and drinks, get access
            to mobile ordering, and more.
          </p>
          <Button className="bg-white text-green-900 hover:bg-gray-100 text-lg">
            Join now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}