import CoinGeckoURL from "./coin-gecko-url";

interface FetchResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function getCoinById<T>(id: string): Promise<FetchResult<T>> {
  const url = CoinGeckoURL(id);
  url.searchParams.append("sparkline", "true");

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching coin data:", (error as Error).message);

    return { success: false, error: (error as Error).message };
  }
}
