import { useState, useEffect } from "react";

type StreamResult<T> = {
  data: T;
  // ...errs & messages etc
};

interface ErrorObject {
  error: string;
}

function isErrorObject(obj: any): obj is ErrorObject {
  return obj && typeof obj === "object" && "error" in obj;
}

function useStream<T>(url: string, initialData: T): StreamResult<T> {
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    const eventSource = new EventSource(url);

    const handleMessage = (event: MessageEvent) => {
      try {
        const receivedData: T | ErrorObject = JSON.parse(event.data);

        if (isErrorObject(receivedData)) {
          console.error("Received error data:", receivedData.error);
          return;
        }

        setData(receivedData);
      } catch (error) {
        console.error("Error parsing event data:", error);
      }
    };

    const handleError = (error: Event) => {
      console.error("EventSource error:", error);
      eventSource.close();
    };

    eventSource.onmessage = handleMessage;
    eventSource.onerror = handleError;

    return () => {
      eventSource.removeEventListener("message", handleMessage);
      eventSource.removeEventListener("error", handleError);
      eventSource.close();
      console.log("EventSource closed");
    };
  }, [url]);

  return { data };
}

export default useStream;
