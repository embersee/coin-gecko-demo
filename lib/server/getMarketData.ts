import CoinGeckoURL from "./coin-gecko-url";

interface FetchResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function getMarketData<T>(): Promise<FetchResult<T>> {
  const url = CoinGeckoURL("markets");
  url.searchParams.append("vs_currency", "usd");
  url.searchParams.append("order", "market_cap_desc");
  url.searchParams.append("per_page", "14");
  url.searchParams.append("page", "1");
  url.searchParams.append("sparkline", "false");

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Network response was not ok: ${res.statusText}`);
      return { success: false, error: "BAD JSON FORMATTING FROM COINGECKO" };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching market data:", (error as Error).message);

    return { success: false, error: (error as Error).message };
  }
}
