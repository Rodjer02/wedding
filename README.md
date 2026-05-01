# Wedding Vite — қысқа нұсқа

Vite + React 19 + SCSS Modules.

## Стек
- Vite 6 + React 19 + TypeScript
- React Router 6
- SCSS Modules + CSS Variables (темы)
- React Hook Form + Zod (валидация RSVP)
- EmailJS (отправка писем прямо из браузера)

## Запуск
```bash
npm install
cp .env.example .env.local   # вписать ключи EmailJS
npm run dev
```

Открой `http://localhost:5173`.

## Роуты
- `/` — главная (выбор стиля)
- `/style/classic | /style/floral | /style/traditional`

## EmailJS
Регистрация → service + template + public key. Подробно — `EMAILJS_SETUP.md` (или Aisha-проект). Public Key безопасен в клиенте.

Ключи в `.env.local`:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_RSVP_TO_EMAIL` (опционально)

Без ключей форма уйдёт в `mailto:` fallback.

## Деплой Vercel
Settings → Environment Variables → пропиши те же `VITE_EMAILJS_*`. Передеплой. Серверные функции не нужны — всё клиент.
