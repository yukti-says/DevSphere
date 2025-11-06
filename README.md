# DevSphere (Fullstack)

This repo contains a Vite + React client and an Express + TypeScript server.

Quick start (dev):

1. Install dependencies at the repo root (will install for client and server via workspaces):

```bash
npm install
```

2. Run both client and server in dev mode:

```bash
npm run dev
```

- Client dev server: http://localhost:8080
- Server dev API: http://localhost:5000/api

Production build:

```bash
npm run build
npm start
```

This will build the client (Vite) and the server (TypeScript), then start the server in production mode which serves the client from `client/dist`.

Notes:
- The client Vite dev server proxies `/api` to `http://localhost:5000`.
- Server already includes `CORS` and reads environment variables from `.env` in the `server/` folder.

If you want me to also:
- Add a PM2 or Docker setup for production
- Add stronger type definitions for external API responses
- Add tests and CI

Tell me which and I'll implement it.