# Queen of the Baltic — Design System

**Queen of the Baltic International** (qotb.eu) is an international beauty and self-expression contest for women, founded in Tallinn, Estonia by Kseniya (Ksenia) Petrova. It carries a charitable mission — partnering with foundations to support children in difficult life situations. The brand should feel like a fashion-magazine spread: elegant, editorial, understated, confident and welcoming.

**Product surface:** one — the marketing website (qotb.eu, currently built on Tilda). Primary actions: **Apply now**, **Buy a ticket**, **Become a Partner**.

## Sources
- `uploads/Opera Снимок_…_www.qotb.eu.png` — full-page screenshot of the live site. **Primary visual reference.** Colours sampled from it (navy `#041E3A`, off-white `#E6E6E6`); partner logos, event photos and the founder portrait were cropped from it.
- `uploads/6659bfdacb7f2545930129.mp4` — **not QOTB footage**: the awwwards L'Oréal "Future of Beauty" mood clip (→ `assets/reference/future-of-beauty-reference.mp4`, reference only, never ship). **Real QOTB hero video still needed** — the kit uses `gallery-4.jpg` (grayscale) under the overlay meanwhile.
- `uploads/QOB*/QB*/Logo*/Crown*@4x.png`, `QB_logotype@4x.png` — official brand marks.
- `uploads/Lumiere Logo.png` — "LUMIERE DI FEMINA" lettering (event backdrop).
- Mood references (not the brand): missuniverse.com (collage + sponsor wall), jesperlandberg.com and awwwards "Future of Beauty" (editorial italic display, cinematic dark grounds).
- No codebase, Figma or font files were provided.

---

## CONTENT FUNDAMENTALS
- **Voice:** confident, warm, sophisticated. Talks about women as whole people — *character, individuality, talent, kindness* — never only looks. Charity is framed as purpose, not guilt.
- **Person:** "we" for the organisation ("We created this project…"), "you/your" when addressing partners and applicants ("Your support is more than a contribution…"). The founder speaks in first person in quotes.
- **Casing:** section titles in ALL CAPS (set in Cane Nero): ABOUT, OUR PARTNERS & SPONSORS, CONTACTS. Nav in uppercase sans. Italic serif lines in sentence case with a full stop: *In the name of Charity.* Buttons: sans sentence case (Jost 500, 14px, no tracking), refined rectangles with 6px radius — Apply now, Buy a ticket, Become a Partner.
- **Rhythm:** big italic statement → short caps title → 2–3 plain paragraphs. Em dashes for emphasis ("— she's a force."). Guillemets «…» for the founder's manifesto.
- **Brand name** in running text is set italic serif: *Queen of the Baltic*.
- **Signature lines:** "More than a beauty contest, we are a movement that celebrates both outer and inner radiance." · "She's not just a queen — she's a force." · "True beauty lives at the heart of our contest." · "Beauty, empowered by kindness, has the strength to change the world."
- **No emoji.** Exclamation marks only on CTAs/links ("Apply now!", "Take a look at the Gallery!") — use sparingly.
- Fix source typos when reusing copy ("CONTESTANS" → Contestants, "Take a look at a Gallery" → the Gallery).

## VISUAL FOUNDATIONS
> **Luxe (night) is now the default system.** `:root` aliases are dark: `--surface-page` navy-950, `--surface-panel` navy-900, `--surface-well` navy-800, white headings, navy-100 body, navy-300 muted, pearl labels, 12–28% white hairlines. Panels 16px radius, inner media 10px, cards/buttons 6px. Cormorant (italic) for serif voice, Jost for sans, Geist Mono for meta, Cane Nero for caps. Component `tone` defaults are now `dark`; logos render as white silhouettes (`invert`). Wrap light pages in `.theme-paper`. Notes below describe the original light site and remain valid inside `.theme-paper`.

- **Colour:** two grounds only — deep navy (`--qb-navy-800 #041E3A`) and soft off-white paper (`--qb-paper-100`; the site's `#E6E6E6` is `--qb-paper-200`). Text is navy on paper, paper on navy, near-black ink for long body. No accent hue, no gold, no gradients. A thin black strip is acceptable only for legal/credit bars.
- **Type:** three voices. *Engraved caps* (Cane Nero; Marcellus fallback) for section titles; *italic serif* (Cormorant Italic) for lead statements, names, roles and links; *clean sans* (Jost) for body, nav and forms. Body 16–19px / 1.7, never below 13px, measure ≤ 66ch and ≥ 40ch. Headings `text-wrap: balance`.
- **Layout:** centred, symmetrical compositions for statements; 2-column split (title left, copy right) for Partners. Max width 1200px, narrow column 760px. Section padding fluid 72–128px — no dead gaps. Generous but purposeful whitespace.
- **Backgrounds:** full-bleed hero video (placeholder: grayscale event photo) with a 62% navy overlay (`--surface-overlay`); solid navy blocks; plain paper. No textures, patterns or illustrations.
- **Imagery:** black-and-white event reportage (stage, crowning, backstage), high contrast, square corners, no frames, often scattered collage-style. Colour only in the hero video. Portraits cropped to circles.
- **Borders:** 1px navy hairlines — rules above section titles, logo-grid dividers, underline form fields. Short 48px rule before quotes.
- **Radii:** 6px buttons, 10–16px panels, circles (portraits, social icons), 0 everywhere else. **No cards.**
- **Shadows:** none. No elevation system; hierarchy comes from type and space. Focus ring: `--shadow-focus`.
- **Transparency/blur:** only the navy overlay on video/photo, and the navy-94% lightbox. No glass/blur.
- **Motion:** restrained. `--ease-out` cubic-bezier(.22,.61,.36,1), 180/280/640ms. Fades-up on reveal, button fill-inversion, link underline retract + arrow nudge 6px, logo-grid dims siblings to 45%, marquee 40s linear. Respect reduced-motion. No bounces.
- **Hover:** outline button → fills (navy/paper swap); solid button → empties; links → underline retracts; icons invert to outline; generic `<a>` → 70% opacity.
- **Press:** no shrink; state change is the colour inversion.
- **Fixed elements:** nav is transparent over hero, `solid` navy after. Mobile: 44px hamburger → full-screen navy overlay with large caps links and stacked full-width CTAs.
- **Mobile:** body 17px, CTA buttons full-width (max 360px) stacked with 16px gap, logo grid 2 columns, collage becomes 3-col photo strip.

## ICONOGRAPHY
- The site uses only a handful of glyphs: filled navy **circle social/contact buttons** (mail, phone, Instagram, Spotify; Instagram/Facebook/LinkedIn in contacts) and **unicode arrows** in text (`→` after links, `↓` in "Scroll ↓").
- No icon files were provided. **Substitution:** `Icon` renders [Lucide](https://lucide.dev) (lucide-static@0.468.0, 1.5–2px stroke) and [Simple Icons](https://simpleicons.org) (Spotify, TikTok) from jsDelivr via CSS mask, tinted `currentColor`. Flagged — swap for the site's originals if available.
- The **crown** (`assets/brand/crown-*.png`) acts as the brand's ornamental divider. The **mermaid figure** is the hero emblem.
- No emoji, no icon font, no decorative illustration.

## FONT SUBSTITUTION (flag)
No font files supplied. Google Fonts substitutes: **Cane Nero** (Michele Casanova, SIL OFL) for EN/ET headings — file `assets/fonts/CaneNero.otf`. It has **no Õ Ä Ö Ü Š Ž, no accented letters and no `&`** — those fall back per-glyph to **Marcellus**. For Estonian headings heavy in diacritics consider setting the whole line in Marcellus, **Cormorant** (used mainly in italic, 500) (accent voice — replaces the site's serif italic by client request). Loaded via `@import` in `tokens/fonts.css`. Please send licensed originals if different.

---

## Index
- `styles.css` — entry; imports `tokens/fonts.css, colors.css, typography.css, spacing.css, base.css`.
- `assets/brand/` — trimmed transparent marks: `wordmark-*`, `wordmark-mermaid-*`, `monogram-*`, `mermaid-*`, `crown-*` (navy + light). `assets/logo/`, `assets/crown/` — original uploads (some with baked backgrounds).
- `assets/partners/` — 24 partner logos (transparent, original proportions) + `lumiere.png`.
- `assets/photos/` — `gallery-1…9.jpg` (low-res crops from screenshot), `founder-kseniya-petrova.png`, `assets/reference/` — `hero-frame.jpg` (old-site screenshot crop with baked-in UI — reference only, never use as a background) and — mood-reference media (not brand).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (below), one `card.html` per folder.
- `ui_kits/website/` — click-through site: Home, Gallery, Apply, Tickets, Become a Partner.
- `ui_kits/website-editorial/` — **Editorial direction (current main)**: studio-index layout — giant wordmark, numbered sans nav (mono superscripts), statement + service grid, sticky bar, asymmetric work grid, WHY NOT? split, value list + photo stack, scroll-lit manifesto (dim navy-600 words brighten to paper, italic keywords to pearl), centred founder quote, partner letters, form grid, cropped giant wordmark closing the footer. Giant wordmark title block with numbered nav, sticky mono bar. Headings are serif only — Cormorant 500 (italic for emphasis) or Cane Nero caps; Jost for body, Geist Mono for nav/labels. Navy night palette, 10px media radius.
- `ui_kits/website-luxe/` — **Luxe direction**: modern premium redesign (editorial index, pearl numerals, action rows). 
- `ui_kits/website-sea/` — **Baltic Sea direction**: new sea palette (`tokens/colors-sea.css`, `.theme-sea`), capsule media, corner nav.
- `SKILL.md` — Agent Skill manifest.

## Components
Namespace: `window.QueenOfTheBalticDesignSystem_68b937`
- **core/** — `Button`, `TextLink`, `Icon`, `IconCircle`
- **brand/** — `Wordmark`
- **typography/** — `SectionHeading`, `Lead`
- **content/** — `Marquee`, `PartnerFeature`, `LogoGrid`, `PhotoCollage`, `Quote`
- **navigation/** — `SiteNav`, `SiteFooter`
- **forms/** — `TextField`, `SelectField`, `Checkbox`
- **surfaces/** — `Panel`, `FeaturePanel`, `Tile`, `ListRow`, `FilterTabs`, `MediaCard`, `IndexLabel`, `Badge` (Luxe system)

No source component library existed; the set was derived from patterns on qotb.eu. **Intentional additions:** `Icon` (wraps the CDN glyph substitutes), forms (`TextField`, `SelectField`, `Checkbox`) — needed for the Apply / Partner flows, which the live site links out for.
