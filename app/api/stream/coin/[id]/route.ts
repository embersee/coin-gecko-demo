import { NextResponse } from "next/server";
import { getCoinById } from "@/lib/server/getCoinById";
import { CoinDetail } from "@/types/CoinDetail";

export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { error: "Missing or invalid id parameter" },
      { status: 400 },
    );
  }

  let intervalId: NodeJS.Timeout;
  let isClosed = false; //handles cases when Stream is closed but writer still writes

  const stream = new ReadableStream({
    async start(controller) {
      const sendData = async () => {
        if (isClosed) return;
        try {
          const { data, success, error } = await getCoinById<CoinDetail>(id);

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
        if (!isClosed) {
          isClosed = true;
          controller.close();
        }
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
