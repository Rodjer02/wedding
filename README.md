# Wedding Vite — қысқа нұсқа (Vite клон)

Vite + React 19 + SCSS Modules. Полный клон `wedding-simple` (Next.js) на Vite.

## Стек
- Vite 6 + React 19 + TypeScript
- React Router 6 (вместо App Router)
- SCSS Modules + CSS Variables (для тем)
- React Hook Form + Zod (RSVP)
- Resend (email через dev middleware Vite)
- 2GIS iframe (карта)

## Запуск
```bash
npm install
cp .env.example .env.local   # вписать RESEND_API_KEY
npm run dev
```

Открыть `http://localhost:5173`.

## Роуты
- `/` — главная (выбор стиля)
- `/style/classic` | `/style/floral` | `/style/traditional`
- `POST /api/rsvp` — приём RSVP, отправка email через Resend (dev middleware Vite)

## Отличия от Next-версии
- `next/image` → обычный `<img>`
- `next/link` → `<Link>` из `react-router-dom`
- `next/font/google` → `<link>` в `index.html` + CSS-переменные в `:root`
- `app/api/rsvp/route.ts` → `server/rsvp.js` (middleware в `vite.config.ts`)
- Алиас `@/*` → `./src/*` (был `./*`)

## Прод
Для прода нужен отдельный сервер для `/api/rsvp` (`npm run server` поднимает Express).
