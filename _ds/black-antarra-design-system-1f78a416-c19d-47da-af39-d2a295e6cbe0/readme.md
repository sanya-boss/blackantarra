# Black Antarra — Design System

Black Antarra is an Estonian home cattery of **Oriental and Siamese cats**, run by breeder **Tatjana Raisp** (+372 5809 4779 · info@antarra.ee). The only product is the website **antarra.ee**: an emotional, photo-led introduction to the cattery, the breeds and the individual cats, whose one goal is a **personal contact with the breeder** (no cart, no booking, no payments). Languages: **Estonian (default), English, Russian**.

This system keeps what makes the current site recognisable — light mist canvas, dusty pastel blue, expressive italic serif headlines, the blue and black oriental-cat illustrations, large real photographs — and fixes its weaknesses: white-on-pastel contrast, italic body paragraphs, text over blurred photos, a tall empty news block, repeated sections on mobile, mixed-language buttons ("MORE INFO" on Estonian cards).

## Sources
- `uploads/Black-Antarra-Design-System-Brief.md` — owner brief (RU), the requirements base. All numbers there are proposals, not extracted CSS.
- `uploads/Opera Снимок_2026-09-28_135849_www.antarra.ee.png` — full desktop capture of https://www.antarra.ee/ (1860×8359).
- `uploads/screenshot-1790593174699.png` — full mobile capture (786×21394).
- `uploads/original-….webp`, `uploads/e06c….webp`, `uploads/d74e….webp` — third-party mood references (italic serif + photo cards, spacious layouts). Used for tone only; nothing copied.
- No codebase, Figma, or original asset files were provided. The live site is built on Tilda.

**Logo, illustrations and partner logos in `assets/` were cropped from the desktop screenshot** — low-resolution stand-ins until the owner sends originals. **There are no photos in the system yet:** every photo position renders a labelled *photo slot* (`Photo` without `src`) stating what goes there and its ratio.

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, personal, unhurried. The breeder speaks in first person ("Tere, minu nimi on Tatjana…"); the cattery speaks as "we" ("Meie kassid", "Omadused, mille üle oleme uhked"). The visitor is addressed politely — Estonian *teie*, Russian *вы*, English "you". Never salesy: no urgency, prices, "buy now", or discounts. The target action is always *get in touch*.

**What copy does.** Introduces character and appearance of breeds and individual cats; explains, doesn't claim. Distinguishing features are written out ("suured kõrvad, pikk kael") rather than left to images.

**Casing.** Sentence case everywhere — headings, buttons, nav ("Vaata meie kasse", not "VAATA MEIE KASSE"). The old all-caps buttons are retired. Uppercase only for small tracked eyebrows ("KASVATAJA", "TÕUG") and the brand band.

**Italics.** Headlines are italic serif; body, contact details and terms are upright sans. One accent word in a headline may be blue (`<em>`): "Tutvustame kassiloomade *elegantsi.*"

**Names.** "Black Antarra" and cat names are never translated. The tagline "Siamese & Oriental Cattery" stays English in all locales. Benya/Benjamin is one cat (call name / official name).

**Emoji:** never. Paw icons, hearts, exclamation clusters: never. One "!" is fine in the contact headline.

**Honesty rules (from the brief).** Don't invent testimonials, titles, available kittens, prices, birth dates, health results or news. Status badges ("Saadaval", "Broneeritud", "Uues kodus", "Kasvatuse kass") only with confirmed data. Store birth date, not age. Missing facts show as "— lisatakse" or are hidden. Membership wording (FIFe / club "Felix") must be confirmed before publishing. Purchase terms are transferred verbatim from the owner.

**Core UI strings**

| | ET | EN | RU |
|---|---|---|---|
| About | Meist | About us | О питомнике |
| Cats | Kassid | Our cats | Наши кошки |
| Gallery | Galerii | Gallery | Галерея |
| Contact | Kontaktid | Contact | Контакты |
| Learn more | Loe lähemalt | Learn more | Подробнее |
| Meet our cats | Vaata meie kasse | Meet our cats | Посмотреть кошек |
| Get in touch | Võta ühendust | Get in touch | Связаться |
| Show more | Näita rohkem | Show more | Показать ещё |

Full dictionary: `ui_kits/website/data.js`. Russian runs ~20–30% longer — never fix text-box heights.

---

## VISUAL FOUNDATIONS

**Overall.** A long light page, generous but not empty. Asymmetric hero (copy left, huge blue cat right), then calmer centred/2-column sections. Photographs carry all the colour; the UI itself stays mist, white, ink and one blue.

**Colour.** Canvas `#F7F8F8`, surfaces white, one quiet tint `#EDF3F7` for alternating sections. Brand blue `#9CBBD2` for illustrations, the band, and primary button fills **with ink text (7.9:1)**. Deep blue `#426780` for links, eyebrows, accents, and "strong" buttons with white text (6.0:1). Ink `#202322` text; slate `#596166` secondary. Status colours are muted (green/amber/red) and always paired with text. No gradients as decoration; no gold/black luxury; no acid colours. The studio blues/violets in photos are *not* UI colours.

**Type.** **Sentient** (Indian Type Foundry, Fontshare) *italic* for display/H1 (Bold 700) and H2/H3 (Medium 500) — the face used on the live site, confirmed by the owner. Sentient is Latin-only, so Russian headings fall back to **PT Serif** italic. Manrope 400–700 for body, UI, nav, buttons. Fluid sizes via `clamp()`: display 40→72 (Sentient is wide), H1 36→56, H2 30→44, H3 22→28, body 16 (17 for long reads), small 14, label 13. Body measure ≤ 66ch. Logo name: Sentient Medium Italic.

**Spacing & layout.** 4-px scale (4…128). Container 1240px (wide 1440 for gallery), gutters 16→56px, section rhythm 56→112px, card padding 20→32px. Grid: 4 / 6 / 8 / 12 columns at 320 / 480 / 768 / 1024+. Components switch layout by **container queries**, so they behave the same in a phone frame or a sidebar.

**Backgrounds.** Flat mist or white; alternating `--bg-subtle` for the cats section. No textures, patterns or full-page photo backgrounds. The blue cat illustration is the only large graphic.

**Imagery.** Until originals arrive, photos are shown as slots: pale blue-50 fill, dashed blue-200 inner frame, image icon, label + ratio. Real photos of this cattery only — never generated cats, never recoloured coats. Warm-neutral natural interiors and cool blue/violet studio backdrops; no grain, no filters, no duotone. Every photo has a focal point (`focus`) that keeps ears and eyes in frame; catalogue ratio 4:5, breed/news 4:3 / 3:2, gallery mixes square/wide/tall. Text over photos only with a local gradient or its own panel — the old full-blur overlay is retired.

**Illustration.** Cut-out oriental cats with the characteristic ears, long neck and slender body: blue (hero) and black line/fill (advantages, footer lockup). Shared optical height, bottom-aligned. Decorative → `alt=""`. Never swap for a generic house-cat icon; never cartoonish.

**Corner radii.** 8 small surfaces/inputs, 12 partner tiles, 16 cards & photos, 24 dialogs, pill for buttons, chips, badges, language switch.

**Cards.** White, 16px radius, soft blue-tinted shadow (`--shadow-card`), no border. Photos inset 12px inside breed/news cards with 10px radius; breeder and featured-cat cards bleed the photo to the edge. Never a coloured left border.

**Shadows.** Two-layer, low-contrast, blue-tinted (`rgba(40,68,87,…)`). sm → card → raised (hover) → overlay (dialogs). Don't shadow every section.

**Borders.** 1px `#D5DFE5` dividers; 1.5px deep-blue outline on secondary buttons; form fields 1px slate `#7A848A` (3.8:1).

**Hover.** Buttons shift one step darker (blue 300→400); secondary gets a blue-50 fill; cat cards raise the photo shadow and turn the arrow blue — photos **never zoom** (would crop ears). Links darken and their underline goes solid.

**Press.** 1px downward nudge + one more step darker; icon buttons scale .96.

**Focus.** Always visible: 2px `#285C85` outline, 3px offset.

**Motion.** Calm and short: 150ms colour, 220ms buttons/menus, 360ms photo change; `cubic-bezier(.2,0,0,1)`. Fades only — no bounces, parallax, scroll-jacking or intro splashes. The brand band scrolls slowly (40s loop) with a pause button and stops under `prefers-reduced-motion`. Content never depends on animation.

**Transparency & blur.** Only the sticky header (92% canvas + 10px blur) and dialog/lightbox scrims. No frosted cards.

**Fixed elements.** Optional sticky header; `scroll-padding-top` keeps anchors clear of it. Nothing else is fixed.

**Density.** Airy editorial rhythm, but no huge empty gaps between news, partners and contacts (use `--section-y-tight`).

---

## ICONOGRAPHY

The live site uses almost no icons: two round blue social buttons (Facebook, WhatsApp) and slider chevrons. No icon font or sprite was available.

- **UI icons:** a small set drawn with **Lucide geometry** (24px grid, 1.6 stroke, round caps) inside `components/core/Icon.jsx` — menu, x, chevrons, arrows, phone, mail, map-pin, image, calendar, check, alert, loader, expand, newspaper, globe, plus. *Substitution — flagged:* Lucide chosen as the closest calm line style; swap if the owner has a set.
- **Social glyphs:** Facebook / WhatsApp / Instagram copied from **Simple Icons** v13 (CC0) as inline paths in `Icon.jsx`, filled with `currentColor`.
- Icons are functional only (contact rows, nav, arrows). No decorative icons, no paws, no emoji, no unicode pictographs (except `·` separators and `→` in prose).
- The breed illustrations (`assets/illustrations/`) are the brand's "icons" for concepts — used at large sizes only.

---

## Index

- `styles.css` — entry point (imports only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css` (Sentient self-hosted from `assets/fonts/`, 4 weights + italics; PT Serif + Manrope via Google Fonts), `base.css` (resets, focus, keyframes), `tokens.json` (same values, structured).
- `components/` — React primitives + their class CSS (one CSS per group, imported by `styles.css`).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/logo/` wordmark + cat lockup · `assets/illustrations/` hero cat (blue) + advantage cats 1–3 (black) · `assets/partners/` Pontu, Tessa.lv Photography.
- `ui_kits/website/` — interactive site: home, cats catalogue, cat profile, terms dialog; ET/EN/RU; desktop/mobile toggle.
- `thumbnail.html`, `SKILL.md`.

### Components
- **core/** — `Button` (primary · strong · secondary · text · on-photo; M/L; hover, focus-visible, pressed, disabled, loading), `IconButton`, `TextLink` (internal/external), `Icon`, `StatusBadge`, `SectionHeading`, `EmptyState` (+ `Skeleton`).
- **brand/** — `Logo` (full · compact · lockup), `Hero`, `BrandBand`.
- **navigation/** — `SiteHeader` (desktop + mobile drawer), `LanguageSwitcher`, `SiteFooter`.
- **cards/** — `BreederCard`, `BreedCard`, `CatCard`, `AdvantageCard`, `NewsCard` (+ loading).
- **media/** — `Photo` (slot · loading · error), `Slider`, `FeaturedCat`, `Gallery`, `Lightbox`.
- **contact/** — `ContactBlock` (map with fallback), `PartnerGrid` (2/4/6).
- **forms/** — `TextField` (+ `FormNote`) — optional contact form.
- **content/** — `Dialog`, `Prose` (purchase terms / long text).

### Intentional additions
- `Icon` — wrapper for the substituted Lucide/Simple Icons set.
- `Skeleton`, `FormNote` — loading and submit-feedback states the brief requires.

### Missing from owner (to request)
Original logo files (vector), hero illustration source, advantage illustrations, full-res photos with captions/cat links, Siamese breed photo, per-cat data (official name, sex, birth date, colour, status), confirmed membership wording, partner list + URLs, social URLs, approved purchase-terms text in 3 languages, address policy for the map.
