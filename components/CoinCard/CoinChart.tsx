import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "../ui/chart";

const chartConfig = {
  desktop: {
    label: "Price",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function CoinChart({ price }: { price: number[] }) {
  const chartData = calculateDailyPrices(price);

  return (
    <ChartContainer config={chartConfig} className="h-ful w-full max-h-[700px]">
      <LineChart width={600} height={200} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis
          dataKey="price"
          tickFormatter={(value) => `$${value.toFixed(2)}`}
          domain={["auto", "auto"]}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          type="monotone"
          dataKey="price"
          color="#646cff"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
function calculateDailyPrices(
  price: number[],
): { time: number; price: number }[] {
  const dailyPrices: { time: number; price: number }[] = [];

  for (let i = 0; i < price.length; i++) {
    dailyPrices.push({
      time: i + 1,
      price: price[i] || 0,
    });
  }

  return dailyPrices;
}
