import { Separator } from "@radix-ui/react-select";
import { StarIcon, Link, LinkIcon, Tally2Icon } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { CoinDetail } from "@/types/CoinDetail";
import Image from "next/image";

export default function SidebarTwo({ props }: { props: CoinDetail }) {
  return (
    <Card className="w-full max-w-md  bg-background text-foreground md:block hidden">
      <CardHeader className=" p-4">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={props.image.large}
              alt={props.name}
              width={150}
              height={150}
            />
            <h3 className="text-lg font-semibold">{props.name}</h3>
            <p className="text-sm text-muted-foreground">
              ${props.symbol.toUpperCase()}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Rating</p>
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
        </div>
        <Separator />
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">24h Volume</p>
          <p className="font-medium">
            ${props.market_data.high_24h.usd.toLocaleString()}
          </p>
        </div>
        <Separator />
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Market Cap</p>
          <p className="font-medium">
            ${props.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
        <Separator />
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Total Supply</p>
          <p className="font-medium">
            {props.market_data.total_supply.toLocaleString()}{" "}
            {props.symbol.toUpperCase()}
          </p>
        </div>

        <Separator />
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Contract</p>
          <p className="font-medium">
            <a href="#">0x1234567890abcdef1234567890abcdef12345678</a>
          </p>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/5 p-4 grid gap-2">
        <a href="#" className="flex items-center gap-2 text-sm ">
          <LinkIcon className="w-4 h-4" />
          Website
        </a>
        <a href="#" className="flex items-center gap-2 text-sm ">
          <Tally2Icon className="w-4 h-4" />
          Tether
        </a>
      </CardFooter>
    </Card>
  );
}
