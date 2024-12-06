"use client";

import { Card } from "@/components/ui/card";
import { Gift, ChevronRight } from "lucide-react";
import { CARD_SIZES, CHRISTMAS_OFFERS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { FadeIn } from "../animations/FadeIn";

export function ChristmasOffers() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="h-8 w-8 text-red-300 animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Christmas Exclusives</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-200">
            Limited time holiday offers and gift sets perfect for the festive season.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHRISTMAS_OFFERS.map((offer, index) => (
            <FadeIn key={offer.title} delay={index * 0.1}>
              <Card className={`${CARD_SIZES.DEFAULT.height} group overflow-hidden bg-white/10 backdrop-blur-lg border-white/20`}>
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className={`w-full ${CARD_SIZES.DEFAULT.imageHeight} object-cover transition-transform duration-300 group-hover:scale-110`}
                  />
                  <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {offer.savings}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-200 mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">{offer.price}</span>
                    <Button className="bg-white/20 hover:bg-white/30 text-white group">
                      Shop now
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}