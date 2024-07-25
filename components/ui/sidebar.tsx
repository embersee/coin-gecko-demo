import {
  ChevronDownIcon,
  BitcoinIcon,
  ChevronRightIcon,
  MountainSnowIcon,
  TorusIcon,
  DollarSignIcon,
} from "lucide-react";
import { Button } from "./button";

export default function Sidebar() {
  return (
    <div className="md:flex flex-col items-center dark:bg-black bg-background text-foreground p-1 w-full max-w-md hidden">
      <div className="bg-background rounded-lg p-6 space-y-6 w-full">
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <button className="text-foreground border-b-2 border-white">
            Buy
          </button>
          <button>Sell</button>
          <button>Convert</button>
        </div>
        <div className="text-center space-y-2">
          <div className="text-6xl font-bold">$0</div>
          <div className="text-green-500">Eligible to earn 4.35% APY</div>
          <div className="relative inline-block">
            <button className=" py-2 px-4 rounded-full flex items-center space-x-2">
              <span>One time purchase</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BitcoinIcon className="w-8 h-8" />
              <div>
                <div className="font-semibold">Buy</div>
                <div className="text-gray-400">Binance | BNB</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">$260.31</div>
              <div className="text-gray-400">Price</div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MountainSnowIcon className="w-8 h-8" />
              <div>
                <div className="font-semibold">Pay With</div>
                <div>Avalanche | AVAX</div>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <Button variant="secondary" className="w-full">
          Trade
        </Button>
      </div>
      <div className="bg-background rounded-lg p-6 space-y-4 w-full mt-8">
        <div className="text-lg font-semibold">New on Pulse</div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TorusIcon className="w-8 h-8" />
              <div>
                <div className="font-semibold">VeThor Token</div>
                <div className="text-gray-400">Added 2 days ago</div>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BitcoinIcon className="w-8 h-8" />
              <div>
                <div className="font-semibold">vechain</div>
                <div className="text-gray-400">Added 2 days ago</div>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSignIcon className="w-8 h-8" />
              <div>
                <div className="font-semibold">PayPal USD</div>
                <div className="text-gray-400">Added 2 weeks ago</div>
              </div>
            </div>
            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
