"use client";

import { GiftCardHero } from "./gift-cards/GiftCardHero";
import { GiftCardGrid } from "./gift-cards/GiftCardGrid";
import { BulkGiftCards } from "./gift-cards/BulkGiftCards";

export default function GiftCardsPage() {
  return (
      <>
        <GiftCardHero />
        <GiftCardGrid />
        <BulkGiftCards />
      </>
  );
}