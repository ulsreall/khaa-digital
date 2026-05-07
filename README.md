# Khaa Digital Creative

Landing page React/Vite untuk brand jasa digital kreatif **Khaa Digital Creative**.

## Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Radix UI
- Wouter

## Local setup

```bash
npm install
npm run dev
```

Buka:

```text
http://localhost:3000
```

## Build check

```bash
npm run typecheck
npm run build
```

Output production ada di folder `dist/`.

## Deploy ke Vercel

Project ini sudah disiapkan untuk Vercel.

Setting yang disarankan di Vercel:

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: sudah diatur di `vercel.json`
- Node.js Version: **20.x** atau **22.x**

Kalau deploy dari GitHub, push semua file di root repo ini. Jangan taruh project di folder dobel seperti `khaa-digital/khaa-digital`.
