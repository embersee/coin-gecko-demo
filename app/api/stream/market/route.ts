import { getMarketData } from "@/lib/server/getMarketData";
import { Coin } from "@/types/Coin";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  let intervalId: NodeJS.Timeout;

  const stream = new ReadableStream({
    async start(controller) {
      const sendData = async () => {
        try {
          const { data, success, error } = await getMarketData<Coin[]>();

          if (!success || data == undefined) {
            throw new Error(error || "Unknown error");
          }
          const message = `data: ${JSON.stringify(data)}\n\n`;
          controller.enqueue(message);
        } catch (error) {
          console.error("Error sending data:", error);
          const message = `data: ${JSON.stringify({ error: "Failed to fetch data" })}\n\n`;
          controller.enqueue(message);
        }
      };

      sendData();
      intervalId = setInterval(sendData, 10000);

      req.signal.addEventListener("abort", () => {
        clearInterval(intervalId);
        controller.close();
      });
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
