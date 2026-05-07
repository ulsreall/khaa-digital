# Khaa Digital Service

Landing page & demo portfolio untuk **Khaa Digital Service** — jasa branding simple, copy promosi, dan landing page untuk UMKM, jasa lokal, dan project kecil.

🌐 **Live:** [khaa.web.id](https://www.khaa.web.id/)

## Demo Pages

3 contoh landing page siap present:

| Demo | Kategori | Link |
|------|----------|------|
| Kedai Kopi Senja | UMKM makanan/minuman | [khaa.web.id/demo/kedai-kopi](https://www.khaa.web.id/demo/kedai-kopi) |
| Rapiin Barbershop | Jasa lokal | [khaa.web.id/demo/barbershop](https://www.khaa.web.id/demo/barbershop) |
| Creative Youth Meetup | Event/komunitas | [khaa.web.id/demo/event-komunitas](https://www.khaa.web.id/demo/event-komunitas) |

## Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Radix UI
- Wouter (routing)
- pnpm 9.15.4 (via corepack)

## Local Setup

```bash
corepack enable
corepack prepare pnpm@9.15.4 --activate
corepack pnpm install
corepack pnpm run dev
```

Buka `http://localhost:5173`

## Build

```bash
corepack pnpm run typecheck
corepack pnpm run build
```

Output production ada di folder `dist/`.

## Deploy

Project ini deploy otomatis dari GitHub ke Vercel.

Setting Vercel:

- Framework: **Vite**
- Build Command: `pnpm run build`
- Output Directory: `dist`
- Install Command: `corepack enable && corepack prepare pnpm@9.15.4 --activate && corepack pnpm install --frozen-lockfile`
- Node.js Version: **20.x** atau **22.x**

Push ke branch `main` → auto re-deploy.

## Struktur

```
khaa-digital/
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vercel.json
├── public/
│   ├── khaa-digital-service-logo.png
│   └── demo-assets/              # Gambar demo
└── src/
    ├── App.tsx                   # Router
    ├── main.tsx                  # Entry point
    ├── index.css                 # Global styles + theme
    ├── pages/
    │   ├── Home.tsx              # Homepage utama
    │   ├── DemoLanding.tsx       # Halaman demo
    │   └── not-found.tsx
    ├── components/ui/            # UI components
    ├── hooks/                    # Custom hooks
    └── lib/utils.ts              # Utilities
```
