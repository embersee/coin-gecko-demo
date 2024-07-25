import CoinSSE from "@/components/CoinTable/CoinSSE";
import { getMarketData } from "@/lib/server/getMarketData";
import { Coin } from "@/types/Coin";

export default async function Home() {
  const { data: coins, success, error } = await getMarketData<Coin[]>();

  if (!success || !coins || error) return <h1>Error: ${error}</h1>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">CoinGecko Market Api</h1>

      <CoinSSE ssCoins={coins} />
    </div>
  );
}
