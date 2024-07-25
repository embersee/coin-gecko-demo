import CoinDetails from "@/components/CoinCard/CoinDetails";
import { getCoinById } from "@/lib/server/getCoinById";
import { CoinDetail } from "@/types/CoinDetail";

export default async function CoinPage({ params }: { params: { id: string } }) {
  const {
    data: coin,
    success,
    error,
  } = await getCoinById<CoinDetail>(params.id);

  if (!success || !coin || error) return <h1>Error: ${error}</h1>;

  return <CoinDetails coin={coin} />;
}
