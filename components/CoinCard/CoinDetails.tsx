"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";
import Image from "next/image";
import { CoinDetail } from "@/types/CoinDetail";
import useStream from "@/lib/hooks/useStream";
import { BackButton } from "../ui/back-button";
import CoinChart from "./CoinChart";

export default function CoinDetails(props: { coin: CoinDetail }) {
  const { data } = useStream<CoinDetail>(
    `/api/stream/coin/${props.coin.id}`,
    props.coin,
  );
  return (
    <Card className="max-w-lg mx-auto my-12">
      <BackButton />
      <CardHeader>
        <Image src={data.image.small} alt={data.name} width={50} height={50} />
        <CardTitle className="text-2xl font-bold">
          {data.name} ${data.symbol.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CoinChart price={data.market_data.sparkline_7d.price} />
        <p className="text-lg mb-2">
          <span className="font-semibold">Current Price:</span> $
          {data.market_data.current_price.usd.toLocaleString()}
        </p>
        {/* there are links in the descriptions of coins, so for them to render properly, for this demo i'll allow it */}
        <CardDescription
          dangerouslySetInnerHTML={{ __html: data.description.en }}
        />
      </CardContent>
    </Card>
  );
}
