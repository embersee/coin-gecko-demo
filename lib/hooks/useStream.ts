import { useState, useEffect } from "react";

type StreamResult<T> = {
  data: T;
  //...errs & messages etc
};

function useStream<T>(url: string, initialData?: T): StreamResult<T> {
  const [data, setData] = useState<any>(initialData);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event: MessageEvent) => {
      try {
        const receivedData: T = JSON.parse(event.data);
        // parse if data is correct etc. etc.
        setData(receivedData);
      } catch (error) {
        console.error("Error parsing event data:", error);
      }
    };

    eventSource.onerror = (error: Event) => {
      console.error("EventSource error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close(); //clearning up
    };
  }, [url]);

  return { data };
}

export default useStream;
