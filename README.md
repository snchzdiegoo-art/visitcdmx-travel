# VisitCDMX.travel

Independent Mexico City reservable experiences showcase operated by **SAT Mexico Tours & Travel**, built with **Astro 7 + Tailwind CSS v4 + Local Content Collections** for **$0/month hosting on Cloudflare Pages**.

## Architecture Highlights
- **Zero-CMS Static Speed:** Compiles to pure static HTML with `< 3 KB` custom JS, `llms.txt`, `sitemap-index.xml`, and Schema.org JSON-LD (`TouristTrip`, `FAQPage`, `BreadcrumbList`).
- **Bilingual + Multicurrency:** Default `EN / USD` at `/`, native `ES` (`MXN | USD`) at `/es/`, dynamically synchronized with `BokunWidgets.setLanguage()` and `BokunWidgets.setCurrency()`.
- **Clean 8-Product SAT Mexico Catalog:** Uses `#1230577` (direct web rate) and strictly excludes OTA duplicate `#701338`.
- **B2G Ready:** All brand, palette, neighborhoods, and taxonomy live in `src/config/theme.json` for fast cloning to Veracruz or Morelia.

## Quick Commands
```bash
npm install
npm run dev      # Local preview at http://localhost:4321
npm run build    # Production build into ./dist (Cloudflare Pages output)
```

## Activating Live Bókun Checkout
1. Copy `.env.example` to `.env` (or set Environment Variables in Cloudflare Pages).
2. Add your `PUBLIC_BOKUN_CHANNEL_UUID` from Bókun (`Settings > Booking channels > VisitCDMX.travel`).
3. Add `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_GTM_ID`, and `PUBLIC_GA4_ID`.
4. Redeploy — every tour page automatically replaces the Day-0 interactive demo widget with the live deferred Bókun Calendar Widget.
