# Tuấn Anh Design System

A personal-brand design system for **Vũ Đức Anh Tuấn** (brand name: **Tuấn Anh**) — an operations & training specialist in education (Sales, Đào tạo, Quản lý dự án). Built for a one-page portfolio site and any future personal-brand collateral (decks, one-pagers, social cards).

## Sources
- `porforlios/Portfolio_VuDucAnhTuan.md` — the resume/portfolio content this system is built around (career history, metrics, skills, courses, contact). All portfolio copy is taken verbatim from this file.
- `porforlios/DESIGN-bmw-m.md` — a third-party brand analysis of BMW M's marketing site. **Not used as literal branding** (this is not a BMW project) — it informed only the *structural* idea of a bold, editorial, weight-contrasted type system and a restrained, single-accent color story. No BMW colors, marks, or naming were carried over.
- No codebase, Figma file, or logo was provided. Every visual decision (palette, type pairing, component set) was made from scratch for this brand, confirmed with the user via questions.

## Visual direction (confirmed with user)
Warm, editorial, humanist — light paper canvas with dark ink type, a single terracotta accent, serif/sans pairing (Lora + Source Sans 3), soft rounded shapes (not sharp/automotive), no photography (type- and graphic-driven), wordmark-only brand mark (no logo file exists).

## CONTENT FUNDAMENTALS
- **Language:** Vietnamese throughout.
- **Voice:** First-person, direct, matter-of-fact confidence — e.g. *"9+ năm trong Sales, Đào tạo và Quản lý dự án"*. Opens with a hook contrasting rare combinations of skills ("Hiếm ai vừa đứng lớp, vừa chốt sales, vừa vận hành cả một học viện").
- **Casing:** Sentence case throughout — no uppercase shouting, no title-case headers.
- **Numbers as proof:** Every claim is backed by a concrete metric (9+ years, 1.7–2.1 tỷ revenue, 35–55 students/cohort, 10+ staff managed). Metrics are a core content pattern, not decoration.
- **Emoji:** The source resume uses emoji as informal section markers (👋 📊 🧭 🛠️ 📚 🎓 💬 📩). The design system does **not** carry this into the portfolio UI — headers use `SectionLabel` + a small line-icon set instead, for a more polished editorial feel. Emoji remain fine for casual/internal docs but are not part of the on-brand UI vocabulary.
- **Tone:** Practical and builder-oriented ("xây dựng từ con số 0" — built from zero) rather than aspirational or salesy.

## VISUAL FOUNDATIONS
- **Colors:** Warm paper canvas (`--paper` #f4eee0) with warm-black ink (`--ink` #241f1a). One primary accent — terracotta (`--accent` #b5563c) — used for CTAs, links, and highlight numbers. Gold (`--gold` #b98a2e) is a secondary accent for rare highlight moments. Max two accent hues; neutrals do the rest.
- **Type:** Serif display (Lora, 600/700) paired with sans body (Source Sans 3, 400/600) — a weight-contrast pairing (heavy display vs. light-normal body) inspired structurally by the BMW M analysis's display/body contrast, but executed in a warm editorial serif rather than a technical sans.
- **Spacing:** 4px base unit; scale from 4px to a 96px section rhythm. Generous vertical spacing between page sections (96px), 24px card padding.
- **Backgrounds:** Flat paper color throughout — no gradients, no photography, no textures. Cards sit on paper as slightly-lighter surfaces (`--surface-card`).
- **Animation:** None beyond standard CSS transitions on hover/press (150ms ease) — no bounces, no page-load animation.
- **Hover states:** Buttons darken (primary) or invert (outline fills solid on hover); ghost buttons underline. No opacity fades.
- **Press states:** No shrink/scale — color change only, consistent with hover.
- **Borders:** 1px hairline (`--hairline` #ddd0b4) on cards and dividers — subtle, warm-toned, never harsh black.
- **Shadows:** One soft, warm-toned card shadow (`--shadow-card`) — no hard drop shadows, no colored glows.
- **Corners:** Soft, not sharp — cards/inputs at 16px (`--radius-lg`), buttons and tags fully pill-shaped. This is a deliberate departure from BMW M's 0px-everywhere language, chosen for a warmer, more approachable "coach/educator" feel.
- **Transparency/blur:** Used only on the sticky nav bar (translucent paper + blur) for a modern feel while scrolling.
- **Imagery:** None — the brand is type- and graphic-driven by design decision (no photography provided or wanted).
- **Layout:** Single-column editorial layout, max content width ~1040px, generous side padding.

## ICONOGRAPHY
No icon library, icon font, or SVG set was provided in the source material. The one icon specimen in this system (`guidelines/iconography.card.html`) uses a small set of **Lucide-style line icons** (24px grid, 1.6 stroke) as a **substitution** — flagged here, not sourced from the brand. If the real brand later adopts an icon system, replace this specimen and update any UI kit usage. Emoji are not used in the UI (see Content Fundamentals) even though the source resume uses them informally.

## Fonts
Lora and Source Sans 3 are loaded from Google Fonts via `@import` in `tokens/typography.css` (no local font files needed — both are freely available web fonts, not a substitution for a proprietary typeface).

## Intentional additions
No component inventory was defined by any source (no Figma, no codebase), so this system authors a small standard set sized to a one-page personal portfolio: `Button`, `Tag`, `StatCard`, `SectionLabel`, `Card`, `TimelineEntry`. These are not a generic "design system default" — each was chosen because the portfolio content needs it (metrics need `StatCard`, career history needs `TimelineEntry`, etc).

## Index

```
styles.css              → root stylesheet (@import list only)
tokens/                 → colors.css, typography.css, spacing.css, radius.css, shadows.css
components/core/
  Button/               → primary/outline/ghost pill CTA
  Tag/                  → skill & category pills
  StatCard/             → metric number + label
  SectionLabel/         → uppercase eyebrow label
  Card/                 → generic content card
  TimelineEntry/        → career-history row
ui_kits/portfolio/      → index.html — full interactive one-page portfolio
guidelines/             → foundation specimen cards (colors, type, spacing, shape, brand, iconography)
thumbnail.html          → project homepage tile
SKILL.md                → Claude Code-portable skill file
```

## Contact form (Google Apps Script)
The contact form in `index.html` (`Contact` component) submits via `fetch()` in `no-cors` mode directly to a Google Apps Script Web App — no backend needed.
- Script source: `google-apps-script/Code.gs` (paste into Extensions > Apps Script on the destination Google Sheet).
- Deploy as Web app, execute as "Me", access "Anyone".
- Update `APPS_SCRIPT_URL` in `index.html` if the deployment URL ever changes.
- Includes a hidden honeypot field (`website`) for basic bot filtering.
- Email field is optional by design (phone/other fields are the primary contact channel).

## Caveats & ask
- **No logo file exists.** The brand mark is type-only ("Tuấn Anh" wordmark). If a real logo/mark exists, please attach it and I'll swap the wordmark specimen and thumbnail.
- **No headshot/photography** was provided or wanted per your answer — the whole system is intentionally type/graphic-driven. If that changes, I'll add an `image_slot`-based hero treatment.
- Icons are a CDN-style substitution (Lucide-inspired), not sourced from any brand material — flag if you want a different icon direction.
- This is a from-scratch personal brand (no existing codebase/Figma), so the component set (Button, Tag, StatCard, SectionLabel, Card, TimelineEntry) was sized to what a one-page portfolio needs — tell me if you want more (e.g. a nav/header component, a blog-post card) and I'll add them.
