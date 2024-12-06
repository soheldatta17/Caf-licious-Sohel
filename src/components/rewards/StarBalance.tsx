"use client";

import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Star } from "lucide-react";

export function StarBalance() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <Star className="h-8 w-8 text-yellow-500" />
              <div>
                <h2 className="text-2xl font-bold">Star Balance</h2>
                <p className="text-gray-600">You have 25 Stars</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Next Reward: 50 Stars</span>
                  <span className="text-green-700">25/50</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <p className="text-sm text-gray-600">
                Earn 2 Stars for every $1 spent using your registered Starbucks Card.
              </p>
            </div>
          </Card>
        
      </div>
    </section>
  );
}