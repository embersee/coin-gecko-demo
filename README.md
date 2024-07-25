# CoinGecko demo app

## Getting Started

Firstly, run the installation process:

```bash
npm install
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
npm run dev
or for better performance -> npm run build + npm run start
```
---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Shadcn\ui components & chart

- SSR loaded -> SSE to routes api -> GET coingecko-api -> back to client

- Uses 10 seconds SSE polling interval.

---

⚠️ CoinGeckos "Data Freshness" at the demo tier starts from 60 sec onwards. I've seen it stale for about 2-3 mins on average.

⚠️⚠️⚠️ My charting lib of choice recharts has an open issue for a warning popping up in the browser console – harmless for this demo. Read more: https://github.com/recharts/recharts/issues/3615
