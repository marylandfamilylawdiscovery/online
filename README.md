# Maryland Family Law Discovery — Website

This is a Vite + React + TypeScript + Tailwind project preloaded with your site content.

## Local dev
```bash
npm install
npm run dev
```
Open the printed localhost URL.

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel (recommended)
1. Push this folder to a new GitHub repo.
2. In Vercel: **New Project → Import** your repo.
3. Build command: `npm run build` ; Output dir: `dist`.
4. After deploy, add your domain:
   - `www.marylandfamilylawdiscovery.com` (and optionally the apex)
5. Follow Vercel’s DNS instructions in Squarespace → **Domains → DNS settings**.
6. Verify domain in Vercel and set your preferred primary domain/redirect.

## Deploy to Netlify
1. In Netlify: **Add new site → Import from Git**.
2. Build: `npm run build` ; Publish: `dist`
3. Add your custom domain in Netlify, then copy DNS into Squarespace.

## Squarespace DNS (summary)
- For `www`: add a **CNAME** to the host Vercel/Netlify shows.
- For apex: add **A**/**ALIAS** records shown by your host.
- Save, then verify in your host’s Domain panel.
