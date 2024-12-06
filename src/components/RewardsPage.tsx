import { RewardsHero } from "./rewards/RewardsHero";
import { StarBalance } from "./rewards/StarBalance";
import { RewardsTiers } from "./rewards/RewardsTiers";
import { ThemeProvider } from "./theme-provider";

export default function RewardsPage() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <RewardsHero />
        <StarBalance />
        <RewardsTiers />
      </main>
    </ThemeProvider>
  );
}