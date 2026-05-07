# Khaa Digital Service

Jasa branding simple, copy promosi, dan landing page untuk UMKM, jasa lokal, dan project kecil.

🌐 **Live:** [khaa.web.id](https://www.khaa.web.id/)

## Tentang

Khaa Digital Service bantu usaha kecil terlihat lebih rapi, jelas, dan gampang dihubungi secara online.

**Yang ditawarkan:**
- Branding dasar (tagline, tone, warna)
- Copywriting promosi yang natural
- Landing page 1 halaman, mobile-friendly
- Tombol WhatsApp dengan pesan otomatis

**Paket Starter:** Rp299K — Brand Starter Page

## Demo Pages

Website ini juga punya 3 contoh landing page siap present:

| Demo | Kategori | Link |
|------|----------|------|
| Kedai Kopi Senja | UMKM makanan/minuman | [Lihat demo](https://www.khaa.web.id/demo/kedai-kopi) |
| Rapiin Barbershop | Jasa lokal | [Lihat demo](https://www.khaa.web.id/demo/barbershop) |
| Creative Youth Meetup | Event/komunitas | [Lihat demo](https://www.khaa.web.id/demo/event-komunitas) |

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
# Aktifkan corepack + pnpm
corepack enable
corepack prepare pnpm@9.15.4 --activate

# Install dependencies
corepack pnpm install

# Jalankan dev server
corepack pnpm run dev
```

Buka `http://localhost:5173`

## Build & Check

```bash
corepack pnpm run typecheck
corepack pnpm run build
```

Output production ada di folder `dist/`.

## Deploy ke Vercel

Project ini deploy otomatis dari GitHub ke Vercel.

Setting Vercel:

- Framework: **Vite**
- Build Command: `pnpm run build`
- Output Directory: `dist`
- Install Command: `corepack enable && corepack prepare pnpm@9.15.4 --activate && corepack pnpm install --frozen-lockfile`
- Node.js Version: **20.x** atau **22.x**

Push ke branch `main` → Vercel auto re-deploy.

## Struktur

```
khaa-digital/
├── index.html                    # Entry HTML
├── package.json                  # Dependencies & scripts
├── pnpm-lock.yaml                # Lock file
├── vercel.json                   # Vercel config
├── public/
│   ├── khaa-digital-service-logo.png
│   └── demo-assets/              # Gambar demo (9 file)
└── src/
    ├── App.tsx                   # Router
    ├── main.tsx                  # Entry point
    ├── index.css                 # Global styles + theme
    ├── pages/
    │   ├── Home.tsx              # Homepage utama
    │   ├── DemoLanding.tsx       # Halaman demo (kedai-kopi, barbershop, event)
    │   └── not-found.tsx
    ├── components/ui/            # UI components (button, toast, dll)
    ├── hooks/                    # Custom hooks
    └── lib/utils.ts              # Utility functions
```

## Contact

- 💬 WhatsApp: [wa.me/6281392340102](https://wa.me/6281392340102)
- 🌐 Website: [khaa.web.id](https://www.khaa.web.id/)
