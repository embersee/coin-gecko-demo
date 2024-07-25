import { Coin } from "@/types/Coin";
import { TableCell } from "../ui/table";
import Image from "next/image";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function CoinRow(coin: Coin) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsFavorited(!isFavorited);
  };
  return (
    <>
      <TableCell className="w-[100px]">{coin.market_cap_rank}</TableCell>
      <TableCell className="hover:underline font-bold cursor-pointer inline-flex gap-4">
        <Image
          src={coin.image}
          alt={coin.name}
          width={20}
          height={20}
          className="aspect-square h-6 w-6 "
        />
        {coin.name}
      </TableCell>
      <TableCell>${coin.current_price.toLocaleString()}</TableCell>
      <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
      <TableCell
        className={`font-bold ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </TableCell>
      <TableCell className="py-0">
        <Button variant="secondary">Buy</Button>
      </TableCell>
      <TableCell className="py-0">
        <button
          className={`rounded-full p-2 transition-colors ${
            isFavorited
              ? "bg-accent text-background hover:bg-accent/80"
              : "bg-background text-muted-foreground hover:bg-muted"
          }`}
          onClick={(e) => handleFavoriteClick(e as any)}
        >
          <StarIcon className="h-5 w-5" />
        </button>
      </TableCell>
    </>
  );
}
