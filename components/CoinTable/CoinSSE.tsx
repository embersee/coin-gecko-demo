"use client";

import { Coin } from "@/types/Coin";
import { RTable } from "./RTable";
import CoinRow from "./CoinRow";
import useStream from "@/lib/hooks/useStream";
import { Card } from "../ui/card";

export default function CoinSSE(props: { ssCoins: Coin[] }) {
  const { data: coins } = useStream<Coin[]>(
    "/api/stream/market",
    props.ssCoins,
  );

  return (
    <Card className="w-full p-4 xs:p-1 bg-background text-foreground border-0">
      <RTable
        headers={["Rank", "Name", "Price", "Market Cap", "24h Change", "", ""]}
        data={coins}
        renderRow={(coin) => CoinRow(coin)}
      />
    </Card>
  );
}
