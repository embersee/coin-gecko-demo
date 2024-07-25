export default function CoinGeckoURL(query: string) {
  const url = new URL(`https://api.coingecko.com/api/v3/coins/` + query);
  url.searchParams.append(
    "x_cg_demo_api_key",
    `${process.env.COIN_GECKO_API!}`,
  );
  return url;
}
