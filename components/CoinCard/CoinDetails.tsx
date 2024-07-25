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
import SidebarTwo from "../ui/sidebartwo";

export default function CoinDetails(props: { coin: CoinDetail }) {
  const { data } = useStream<CoinDetail>(
    `/api/stream/coin/${props.coin.id}`,
    props.coin,
  );
  return (
    <div className="flex gap-2 md:m-12 m-2">
      <SidebarTwo props={data} />
      <Card className="dark:bg-black bg-background text-foreground w-full h-full">
        <BackButton />
        <CardHeader className="flex-row gap-4 items-center">
          <Image
            src={data.image.small}
            alt={data.name}
            width={50}
            height={50}
          />
          <CardTitle className="text-2xl font-bold">
            {data.name} ${data.symbol.toUpperCase()}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center">
          <CoinChart price={data.market_data.sparkline_7d.price} />
          <div className="max-w-5xl mx-auto">
            <p className="text-lg mb-2">
              <span className="font-semibold">Current Price:</span> $
              {data.market_data.current_price.usd.toLocaleString()}
            </p>
            {/* there are links in the descriptions of coins, so for them to render properly, for this demo i'll allow it */}
            <CardDescription
              dangerouslySetInnerHTML={{ __html: data.description.en }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
