# CoinGecko demo app

## Getting Started

Firstly, run the installation process:

```bash
bun install
```

Add this to your .env.local

```bash
touch .env.local
```
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
COIN_GECKO_API=
```

To start the app, run:
```bash
bun --bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Shadcn\ui components & chart

- SSR loaded -> SSE to routes api -> GET coingecko-api -> back to client

- Uses 10 seconds SSE polling interval.



⚠️ CoinGeckos "Data Freshness" at the demo tier starts from 60 sec onwards. I've seen it stale for about 2-3 mins on average.

⚠️⚠️⚠️ Apparently bun still has unimplemented workers(or their states) which throws in the terminal – harmless & safe to ignore for this demo. Read more: https://github.com/oven-sh/bun/issues?q=is:issue+is:open+worker_threads.Worker

⚠️⚠️⚠️ My charting lib of choice recharts has an open issue for a warning popping up in the browser console – harmless for this demo. Read more: https://github.com/recharts/recharts/issues/3615
