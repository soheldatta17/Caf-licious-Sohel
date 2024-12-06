"use client";

import { Card } from "../ui/card";
import { Coffee, Cake, Gift } from "lucide-react";

const tiers = [
  {
    stars: 25,
    icon: <Coffee className="h-8 w-8" />,
    rewards: ["Customize your drink", "Extra espresso shot", "Dairy substitute"]
  },
  {
    stars: 50,
    icon: <Cake className="h-8 w-8" />,
    rewards: ["Hot coffee", "Hot tea", "Select bakery items"]
  },
  {
    stars: 150,
    icon: <Gift className="h-8 w-8" />,
    rewards: ["Handcrafted drink", "Hot breakfast", "Parfait"]
  }
];

export function RewardsTiers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <h2 className="text-3xl font-bold text-center mb-4">Rewards Tiers</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            See all the ways your Stars can add up to rewards.
          </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
          
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-4">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.stars} Stars</h3>
                </div>
                <ul className="space-y-3">
                  {tier.rewards.map((reward) => (
                    <li key={reward} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-700" />
                      {reward}
                    </li>
                  ))}
                </ul>
              </Card>
            
          ))}
        </div>
      </div>
    </section>
  );
}