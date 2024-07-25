import CoinSSE from "@/components/CoinTable/CoinSSE";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/sidebar";
import { getMarketData } from "@/lib/server/getMarketData";
import { Coin } from "@/types/Coin";

export default async function Home() {
  const { data: coins, success, error } = await getMarketData<Coin[]>();

  if (!success && !coins && error)
    return <h1>Please reload the page, an error occured</h1>;

  if (!coins) return <></>;

  return (
    <div className="p-4 dark:bg-black bg-background">
      <div className="flex-1 text-foreground p-4 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Pulse</h2>
          <p className="text-lg">
            Discover the latest crypto assets and manage your portfolio with
            ease.
          </p>
          <div className="space-x-4">
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <CoinSSE ssCoins={coins} />
        <Sidebar />
      </div>
    </div>
  );
}
