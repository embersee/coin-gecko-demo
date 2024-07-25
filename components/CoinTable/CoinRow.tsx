import { Coin } from "@/types/Coin";
import { TableCell } from "../ui/table";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CoinRow(coin: Coin) {
  const router = useRouter();

  const handleRowClick = (id: string) => {
    router.push(`/coin/${id}`);
  };

  return (
    <>
      <TableCell className="w-[100px]">{coin.market_cap_rank}</TableCell>
      <TableCell
        className="hover:underline cursor-pointer inline-flex gap-4"
        onClick={() => handleRowClick(coin.id)}
      >
        <Image src={coin.image} alt={coin.name} width={20} height={20} />
        {coin.name}
      </TableCell>
      <TableCell>${coin.current_price.toLocaleString()}</TableCell>
      <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
      <TableCell
        className={`text-right ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </TableCell>
    </>
  );
}
