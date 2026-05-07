# PRD — Patrycja & Adrian Wedding Website

## Original Problem Statement
Ultra-premium cinematic wedding website for Patrycja & Adrian. NOT a generic wedding template. Must feel like a luxury fashion campaign — Vogue editorial × Apple minimalism × cinematic storytelling. Black/ivory/champagne palette, refined editorial typography (Cormorant Garamond + Manrope), oversized headings, cinematic whitespace, soft grain texture, glassmorphism.

## User Choices (collected 2026-02)
- Date: 19 July 2026, 15:00
- Ceremony: Kościół Niepokalanego Serca NMP w Zabrzu
- Reception: Zamek Moszna
- Language: Polish
- Photos: placeholders for now (user will provide later)
- RSVP: simple form saving to MongoDB
- Kahoot: placeholder URL/QR

## Architecture
- Backend: FastAPI + MongoDB (motor). Routes prefixed with /api.
- Frontend: React 19, Tailwind, Lenis (smooth scroll), Framer Motion, Lucide icons, qrcode.react, Sonner.
- Single-page site with anchor sections.

## Implemented (2026-02-07)
### Backend (`/app/backend/server.py`)
- `GET /api/` — greeting
- `POST /api/rsvp` — create RSVP (validated)
- `GET /api/rsvp` — list (no `_id`)
- `GET /api/rsvp/stats` — yes/no/total guests counts

### Frontend
- Lenis cinematic smooth scrolling
- Global SVG grain overlay
- Transparent floating navigation w/ glassmorphism on scroll
- Sections (single page):
  1. **Hero** — fullscreen parallax, oversized italic serif "Patrycja & Adrian", scroll indicator
  2. **Countdown** — live counter to 19.07.2026 15:00
  3. **Story** — 4-milestone timeline w/ sticky editorial portrait
  4. **Details** — two cards (church + Zamek Moszna) + dress code/transport/duration
  5. **Schedule** — interactive timeline with detail panel
  6. **Gallery** — asymmetric editorial grid
  7. **Accommodation** — 3 hotel cards
  8. **RSVP** — form posting to `/api/rsvp` w/ success state
  9. **FAQ** — custom accordion (7 questions)
  10. **Kahoot** — placeholder QR + pin section
  11. **Footer** — shimmer "Do zobaczenia"

### Testing
- Backend: 8/8 pytest passed
- Frontend: 100% — all data-testids verified, RSVP submit working

## Backlog
### P1 — User-provided assets
- Replace hero/story/gallery placeholder images with real photos from couple
- Replace Kahoot placeholder URL with real PIN/quiz link

### P2 — Polish
- Add `aria-expanded` on FAQ toggle buttons (a11y)
- Migrate `@app.on_event('shutdown')` to FastAPI lifespan handler
- Store `created_at` as native BSON datetime
- Optional: simple `/api/admin/rsvp` view for couple to see RSVPs

### P3 — Optional features
- Confirmation email (Resend integration) on RSVP
- Multi-language toggle (PL/EN)
- Music player with subtle ambient track on hero
- Honeymoon registry section
