# Billables — dark, brand-matched redesign

Rebrand the existing marketing site around the billables logo and rebuild the look and feel in the spirit of pointone.com, CRED, and the AI-platform Dribbble shot: a deep navy canvas, emerald highlights, oversized confident typography, generous negative space, and restrained precise motion.

## Brand

- Extract the clock mark from the uploaded logo, host it as an app asset, and use it in the navbar and footer next to a "billables" wordmark set in the site's display typeface (lowercase, tight tracking) — matching the logo's own lettering feel.
- Generate a square favicon from the same clock mark and replace the default one.

## Colour system (navy-dominant dark)

| Role | Value |
| --- | --- |
| Page canvas | `#0d1530` deep navy |
| Elevated surfaces / cards | `#16234a` |
| Accent / CTA / highlights | `#2f8f66` emerald |
| Text & light surfaces | `#eaf3ee` |

The site becomes dark by default (no light/dark toggle). Muted text, borders, glows, gradients, and the existing `surface-card` / `glass-panel` / `text-gradient-brand` utilities are all retuned to this palette — navy-to-emerald gradients replace the current indigo/lime pairing. All values stay as semantic tokens in `src/styles.css`; no hardcoded colours in components.

## Look-and-feel moves (from the references)

- **Hero**: near-black navy field with a slow emerald aurora glow, oversized headline, single high-contrast emerald CTA plus a quiet secondary link, and the dashboard mockup floating in a subtly reflective frame.
- **Surfaces**: thin 1px luminous borders, soft inner light on cards, deep shadows rather than heavy fills — the CRED "object in the dark" feel.
- **Typography**: larger scale jump between headline and body, tighter tracking, lowercase brand voice in eyebrows and labels.
- **Motion**: slower, more deliberate reveals; hover states that lift and brighten a border rather than change fill; counters and scroll-driven showcase retained but eased down.
- **Section rhythm**: more vertical breathing room, alternating full-bleed dark bands and inset cards so the page reads as chapters rather than a stack of boxes.
- The existing AI section, which is already dark, becomes an even deeper "black navy" moment with an emerald grid/glow so it still stands apart on a dark page.

## Scope

Every existing section is restyled in place — navbar, hero, problem, solution, showcase, features, AI, mobile, benefits, pricing, FAQ, CTA, footer. Structure and copy stay as-is unless a section needs layout changes to fit the new rhythm. Product screenshots stay in their device frames, with frames darkened so light screenshots sit comfortably on the dark canvas.

## Technical notes

- Rewrite the `:root` token block in `src/styles.css` to the dark palette and drop the separate `.dark` block; add `class="dark"`-free dark-by-default styling.
- Retune `--gradient-hero`, `--gradient-brand`, `--gradient-ink`, `--shadow-soft`, `--shadow-float`, `surface-card`, and `glass-panel`.
- Clock mark hosted via `lovable-assets`; favicon written to `public/` and wired into `src/routes/__root.tsx`, removing `public/favicon.ico`.
- Component edits limited to className/token changes plus the navbar/footer logo swap.
