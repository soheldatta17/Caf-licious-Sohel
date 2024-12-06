"use client";

import { MenuCategories } from "./menu/MenuCategories";
import { FeaturedItems } from "./menu/FeaturedItems";
import { SeasonalMenu } from "./menu/SeasonalMenu";
import { ThemeProvider } from "./theme-provider";

export default function Menu() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-gray-50">
        <MenuCategories />
        <FeaturedItems />
        <SeasonalMenu />
      </main>
    </ThemeProvider>
  );
}