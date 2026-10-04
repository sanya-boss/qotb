# Handoff: Queen of the Baltic — marketing site (Home + Gallery)

## Overview
Marketing website for **Queen of the Baltic International** (qotb.eu), a beauty & self-expression contest from Tallinn with a charity mission. Season 2026 has ended; the site celebrates two winners (1st and 3rd category), shows contestants, galleries and partners, and invites applications for 2027.

Pages:
- `Queen of the Baltic.dc.html` — Home (single long scroll page).
- `404.dc.html` — Not-found page.

## About the design files
The files here are **design references built in HTML** — working prototypes showing intended look, motion and behaviour, **not production code to ship**. Recreate them in the target stack (recommended if starting fresh: Next.js/Astro + React, CSS modules or Tailwind, GSAP/ScrollTrigger or Motion for scroll animations). Open any `.dc.html` directly in a browser (serve the folder over a local server, e.g. `npx serve .`) to see the reference.

Format notes for reading the source:
- Each `.dc.html` = template markup (inline styles, `{{ holes }}`, `<sc-if>` / `<sc-for>` control flow) + a logic class (`class Component extends DCLogic`) at the bottom that behaves like a React class component (`state`, `setState`, `componentDidMount`, `renderVals()` → template values). `support.js` is the tiny runtime — don't port it.
- All content/data lives in `siteContent.v4.js` (event, founder, contestants, winners, partners, contacts, links, media registry). Port it as a CMS/JSON source.

## Fidelity
**High-fidelity.** Final colours, type, spacing, copy and motion. Recreate pixel-accurately; motion timings below are final.

## Design tokens
Colours
- Navy page `#041E3A` (`--qb-navy-800`), deep navy panel `#020F1F` / overlay `rgba(2,15,31,.8)`
- Paper / white text `#F6F5F2`; body text on navy `var(--qb-navy-100)`, muted `var(--qb-navy-200)`
- Accent pearl blue `#9FC6EC` (`--qa`), light accent `#D3E5F6` (`--qa2`)
- Accent on light sections `#2F5E92` (dark blue — italic keywords, nav numerals on light)
- Ink (nav & buttons on light sections) `#0B0D10`
- Hairlines `rgba(246,245,242,.18)`; error text `#F2B8AC`
Full token set: `_ds/.../tokens/*.css`.

Typography
- Serif display: **EB Garamond** 400 (`--qs`; Instrument Serif / Newsreader optional via tweak), italic `<em>` in pearl blue for emphasis. Hero/section titles `clamp(52px,7.6vw,132px)`, line-height .8–.9, letter-spacing −.02 to −.03em.
- UI sans: **Manrope** 500–700 — nav 13px/600 uppercase .06em; labels 12px/500 uppercase .16em; buttons 15px/600 .06em.
- Body: **Geist Mono** 15–19px, line-height 1.6–1.7, letter-spacing .02em, max 600px / 40ch.
- A global "all caps" toggle uppercases the page (default on).

Shape
- Pill buttons: height 56px (48px small), radius 999px, padding `0 6px 0 26px`, trailing 44px circle icon.
- Side panels: radius `28px 0 0 28px`; media radius 10–16px.
- Gutters `clamp(16px,1.8vw,32px)`. Header height 76px.
- Easing: `cubic-bezier(.22,.61,.36,1)` (out), `cubic-bezier(.76,0,.24,1)` (in-out for panels/curtains), `cubic-bezier(.65,0,.35,1)` (counter).

## Screens — Home
1. **Loader** — full-screen navy overlay: top row labels "Queen of the Baltic" / "Tallinn · 2026" (12px Manrope pearl), centred glowing crown (`assets/crown-light.svg`), bottom-left huge serif percentage `clamp(96px,16vw,260px)` 0→100, 1px progress bar (pearl fill, scaleX). Progress = real readiness (fonts, window load, hero/about images) clamped to min 1.8s, max 6s, eased. At 100: number blurs out, overlay slides up (1000ms in-out), scroll unlocks, hero intro starts. Skipped with reduced motion.
2. **Header** — desktop: numbered nav (About 01 … Contact 06, numerals 10px pearl superscript) **fixed** to viewport, transparent; turns ink `#0B0D10` with `#2F5E92` numerals over light (inverted) sections; scroll-spy highlights current section in pearl only on dark. Right side "See you next season" label (aligned with nav baseline). Mobile: fixed burger (crown) → full-screen menu with links + "Privacy policy" link.
3. **Hero (#top)** — background video, giant wordmark, "2026"→"2027" odometer (last digit rolls up, 3.2s, starts at 1.8s, no blur). Bottom row (desktop 3 cols `auto minmax(0,40ch) auto`, space-between): serif tagline "Where true / beauty *is born.*" (2 lines desktop), mono paragraph "More than a beauty contest…", buttons **Apply for 2027** (solid paper) + **See the winners** (ghost) → smooth-scroll to winners at 60% of their pinned progress. Elements fade in with blur(22px)→0 stagger.
4. **About** — pinned centred statement with QB logo.
5. **Purpose / In the name of charity** — "True beauty lives at *the heart* of our contest"; photo "rain" of floating photos at native aspect ratios (4:5 portrait / 5:4 landscape); page background inverts to paper here (scroll-driven, nav/emphasis recolour).
6. **Founder** — Kseniya Petrova portrait + quote.
7. **Contestants** — portrait 4:5 cards with hover reveal; vertical names; desktop has no "View all" button, mobile keeps it.
8. **Winners (#winners)** — pinned scroll sequence: Juta Bendi and Luiza Romanova photos rise vertically out of their contestant cells, then move to centre; captions blur-in; vertical names blur in/out (both directions); crown + "Two queens." + Facebook post button; transparent blue mermaid in background; desktop progress indicator with pearl bar. Mobile: gallery rotates to winner, photos under "View all contestants".
9. **Gallery teaser** — carousel (not pinned) + "View the gallery" button → `Gallery.dc.html`. Centre slots accept user images.
10. **Partners / Friends & Partners**, **Season 2027 join**, **Contact**, **Footer** ("See you *next season.*" card, © + Privacy policy, "Designed by Mežennõi" → https://sanya-boss.github.io/cv.html, Back to top).
11. **Side panel (dialog)** — right-aligned 640px panel, slides in from +56px with blur, backdrop blur 6px. Variants: Apply form, Partner form, Event ("Season 2026 is over — thank you…"), **Privacy policy** (7 numbered GDPR sections; opened from footer, cookie banner, mobile menu, form consent link — never a separate page), Contestant profile.
12. **Cookie banner** — bottom-left, Accept / Essential only; analytics load only after Accept.

## Screens — Gallery (not included; nav “Gallery 04” link target to be built separately)
Fixed header (logo left, chapter nav centred, "Main page" pill right; mobile burger menu). Hero with blurred background + floating blue-tinted photos and **Shuffle** button (button bg = icon-circle navy, white text, white circle with blue icon; shuffle animates without changing photo formats). Chapters in uniform layout (same as "Finals 2025"): numbered label (Manrope) · title · caps description · Instagram-linked photographer handles · carousel/lightbox. Chapters: Finals 2025, September shootings, China Fashion Week, Elitcar & Hearts *Diamonds*, Harley-Davidson, Yacht. All photos shown uncropped at native ratio. Lightbox with larger images on mobile. Closing "See you next season" + back to main.

## Interactions & behaviour
- Anchor links smooth-scroll (custom), `#apply` `#partner` `#attend` `#privacy` open the side panel.
- Forms: client validation (required, email regex, message ≤ 800 chars, consent when privacy URL set), inline errors with `aria-invalid`; endpoints in `siteContent.forms` (null = preview mode, nothing sent).
- Reduced motion → no loader, no scroll pins, final states shown.
- Analytics events via `data-track` attributes.

## State
`dialog` (apply|partner|event|privacy|profile|null), `menuOpen`, `lightbox`, `consent`, `content` (loaded data), viewport flags (`navFull`, `navCompact`), form errors/status.

## Assets
`assets/` — brand marks (crown, monogram, wordmarks, mermaid), partner logos, photos (`assets/photos/webp/*` optimised WebP, `season/`, founder, winners). Fonts from Google Fonts + `_ds` tokens. Hero video is external (YouTube embed) — replace with self-hosted MP4/WebM in production.

## Files
- `Queen of the Baltic.dc.html`, `404.dc.html` — design references
- `siteContent.v4.js` — content/data
- `_ds/` — design-system tokens & components bundle
- `assets/`, `robots.txt`, `sitemap.xml`
- `support.js`, `image-slot.js` — prototype runtime only (do not port)
