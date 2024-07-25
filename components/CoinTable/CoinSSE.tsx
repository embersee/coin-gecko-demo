"use client";

import { Coin } from "@/types/Coin";
import { RTable } from "./RTable";
import CoinRow from "./CoinRow";
import useStream from "@/lib/hooks/useStream";

export default function CoinSSE(props: { ssCoins: Coin[] }) {
  const { data: coins } = useStream<Coin[]>(
    "/api/stream/market",
    props.ssCoins,
  );

  return (
    <RTable
      headers={["Rank", "Name", "Price", "Market Cap", "24h Change"]}
      data={coins}
      renderRow={(coin) => CoinRow(coin)}
    />
  );
}
