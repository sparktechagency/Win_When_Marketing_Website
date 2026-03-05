# WinWhen — Marketing Website

A premium marketing landing page for **WinWhen**, a community app that connects people through verified profiles, smart matching, live events, and meaningful conversations.

Built with **React 18** + **TypeScript** + **Vite** — no UI frameworks, no CSS-in-JS, just handcrafted components and design tokens.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + build to `dist/` |
| `npm run preview` | Serve the production build locally |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed navbar — scroll-aware, pill nav, progress bar
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero with community illustration + floating glow
│   │   └── Sections.tsx        # Stats, Features, HowItWorks, Testimonials, CTA
│   └── ui/
│       └── AnimatedStat.tsx    # Count-up animation on scroll entry
├── data/
│   └── constants.ts            # All site copy — edit here, no component changes needed
├── hooks/
│   └── useIntersectionObserver.ts
├── styles/
│   └── globals.css             # Design tokens, reset, animations, utilities
├── types/
│   └── index.ts
└── App.tsx
public/
├── WinWhen_Community.svg
├── WinWhen_Onboarding.svg
├── WinWhen_Chat.svg
└── favicon.svg
```

---

## Features

### Navbar
- Transparent at top → frosted glass (`backdrop-filter: blur`) on scroll
- Teal gradient scroll progress bar pinned to the top edge
- Centered pill-shaped nav container with active section detection
- Glowing dot indicator under the active link
- Full-screen mobile menu with staggered slide-in animations and animated hamburger icon

### Hero Section
- Two-column layout: headline + CTAs on the left, community illustration on the right
- Floating animation on the illustration with radial glow behind it
- Availability badge with pulsing dot

### Stats Section
- Full-width glassmorphism strip with glowing top/bottom edge lines
- **Count-up animation** — numbers animate from 0 using an easeOutExpo curve on scroll entry
- Staggered per-stat delay (cascades left to right)
- Responsive: 4-column on desktop → 2×2 grid on mobile

### Features Section
- Auto-rotating cards every 3.5s with active teal highlight
- Clickable to manually select a feature

### Testimonials
- Cards lift on hover with teal border accent

### CTA Section
- Email capture form with success state
- App Store / Google Play download buttons

---

## Design Tokens

All colors, fonts, and effects are defined as CSS custom properties in `src/styles/globals.css`:

```css
--color-bg:             #020617
--color-elevated:       #0f172a
--color-accent:         #0d9488
--color-accent-mid:     #14b8a6
--color-accent-light:   #5eead4
--color-accent-lighter: #99f6e4
--color-text:           #e2e8f0
--color-text-secondary: #94a3b8
--font-display:         "Playfair Display", serif
--font-body:            "DM Sans", sans-serif
```

---

## Customization

All site content lives in [`src/data/constants.ts`](src/data/constants.ts).
Edit `NAV_LINKS`, `FEATURES`, `STATS`, `TESTIMONIALS`, `STEPS`, and `FOOTER_COLUMNS` without touching any component.

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5.4 |
| Bundler | Vite 5.4 |
| Fonts | Playfair Display, DM Sans (Google Fonts) |
| Styling | Vanilla CSS with custom properties |
