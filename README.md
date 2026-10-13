# Coloring-Space website

Next.js static site: a home page plus one page per book at `/<book>` (the address the book's QR code opens, e.g. `/constellations`).

**Add a new book:** add an entry to `data/books.json` (slug = main title in lowercase with dashes). Its page is built automatically.

Per book:
- `coloring` / `companion`: title, subtitle, bullets, `amazonUrl` (empty shows "coming soon"), `samples` (list of `{ "src": "/samples/<slug>/coloring-01.jpg", "caption": "..." }`, files in `public/samples/<slug>/`; empty shows "coming soon").
- `overviewVideo`: a YouTube video id (empty shows "coming soon").
- `cover`: optional picture path; without it a simple drawing is shown.

Run locally: `npm install`, then `npm run dev`. `npm run build` writes the finished site to `out/`.
