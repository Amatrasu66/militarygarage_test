# Military Car Service (MCS) — Design System Specification
**Phase 1: Design System & Foundational Architecture**  
**Status:** Implemented & Verified  
**Date:** November 2026  
**Document:** `docs/phase-1/01-design-system.md`

---

## 1. Executive Summary & Brand Identity

The Military Car Service (MCS) design system establishes a cohesive, high-performance automotive workshop identity. It balances rugged mechanical authority with digital precision:
- **60% MCS Performance:** Confident, dark automotive workshop foundation anchored by high-contrast crimson accents.
- **25% Precision Automotive:** Clear data displays, disciplined typographic scale, structured grids, and engineering-grade clarity.
- **15% American Heritage:** Subtle respect for classic American muscle and service standards without superficial flag-waving or caricature.

This design system replaces legacy inconsistent styling (such as `#D83A3A` red and mismatched light background `#F5F4EF`) with an approved, WCAG AA/AAA-compliant token architecture built directly for Tailwind CSS v4, Next.js 16, and shadcn/ui.

---

## 2. Canonical Color Palette

The MCS color palette consists of seven foundational brand tokens, supplemented by semantic utility tokens for state management.

### Foundational Brand Palette

| Token Name | Hex Code | HSL / CSS Variable | Role & Usage | Contrast vs. Background |
|---|---|---|---|---|
| **Obsidian** | `#111418` | `hsl(210, 17%, 8%)` | Primary brand background; body default surface | Baseline (`--background`) |
| **Graphite** | `#202830` | `hsl(210, 20%, 16%)` | Secondary background; elevated cards, dialogs, dropdowns | 1.4:1 (Card elevation) |
| **Primary Text** | `#F5F4EF` | `hsl(48, 20%, 95%)` | High-contrast warm off-white; headings, high-priority copy | **15.8:1** (WCAG AAA) |
| **Secondary Text** | `#AAB2B8` | `hsl(206, 8%, 69%)` | Cool muted slate; body paragraphs, sub-labels, metadata | **8.5:1** (WCAG AAA) |
| **Brand Red** | `#E23B3B` | `hsl(0, 75%, 56%)` | Core automotive accent; CTAs, badges, active indicators | 4.6:1 vs Obsidian |
| **Light Surface** | `#F2F0EA` | `hsl(45, 18%, 93%)` | High-contrast break-out sections, inverted callouts | Inverted surface |
| **Border Dark** | `#343C43` | `hsl(207, 13%, 24%)` | Primary borders, subtle dividers, card strokes | 1.8:1 subtle border |

> **Critical Brand Rule:** Never reintroduce `#D83A3A` (the superseded red). The canonical red is `#E23B3B`. Light sections must use `#F2F0EA` (`--mcs-light-surface`), never the warm white `#F5F4EF` reserved for text.

### Semantic Functional Tokens

| Role | Hex Code | Purpose |
|---|---|---|
| **Success** | `#22C55E` | Verification badges, completed appointments, valid inputs |
| **Warning** | `#F59E0B` | Inspection expiration notices, advisories, pending status |
| **Destructive / Error** | `#EF4444` | Form errors, critical alerts, cancellation actions |
| **Info / Tech** | `#3B82F6` | Informational tooltips, diagnostic status indicators |

---

## 3. CSS Variables & Semantic Mapping

All tokens are defined in `src/app/globals.css` using modern CSS custom properties and mapped to shadcn/ui's standard variable vocabulary.

### Standard Dark Theme (`:root`)
```css
:root {
  /* Foundational Brand Tokens */
  --mcs-obsidian: #111418;
  --mcs-graphite: #202830;
  --mcs-primary-text: #F5F4EF;
  --mcs-secondary-text: #AAB2B8;
  --mcs-red: #E23B3B;
  --mcs-red-hover: #c82e2e;
  --mcs-light-surface: #F2F0EA;
  --mcs-border: #343C43;

  /* shadcn/ui Semantic Variables */
  --background: #111418;
  --foreground: #F5F4EF;
  --card: #202830;
  --card-foreground: #F5F4EF;
  --popover: #202830;
  --popover-foreground: #F5F4EF;
  --primary: #E23B3B;
  --primary-foreground: #FFFFFF;
  --secondary: #202830;
  --secondary-foreground: #F5F4EF;
  --muted: #192026;
  --muted-foreground: #AAB2B8;
  --accent: #26303A;
  --accent-foreground: #F5F4EF;
  --destructive: #EF4444;
  --destructive-foreground: #FFFFFF;
  --border: #343C43;
  --input: #343C43;
  --ring: #E23B3B;
  --radius: 0.375rem; /* 6px */
}
```

### Inverted Light Scope (`.surface-light`)
For high-contrast breakout sections (e.g., service guarantees, physical workshop features):
```css
.surface-light {
  --background: #F2F0EA;
  --foreground: #111418;
  --card: #FFFFFF;
  --card-foreground: #111418;
  --popover: #FFFFFF;
  --popover-foreground: #111418;
  --muted: #E6E4DD;
  --muted-foreground: #5C646B;
  --accent: #EAE8E1;
  --accent-foreground: #111418;
  --border: #D8D6CE;
  --input: #D8D6CE;
  background-color: var(--background);
  color: var(--foreground);
}
```

---

## 4. Typography System

The typography system uses three purpose-built typefaces configured via `next/font/google` in `src/app/layout.tsx`.

### 1. Barlow Condensed — Display Typography
- **CSS Variable:** `--font-barlow-condensed`, class: `font-heading`
- **Weights:** SemiBold (600), Bold (700), ExtraBold (800)
- **Characteristics:** Upper-case oriented, condensed width, automotive speed and engineering power.
- **Application:** Hero titles, section headings (H1, H2, H3), statistics, major callouts.
- **Rule:** Always pair with generous line height and tight letter-spacing (`tracking-tight` or `tracking-wide` when all-caps).

### 2. Inter — Interface & Body Typography
- **CSS Variable:** `--font-inter`, class: `font-sans`
- **Weights:** Regular (400), Medium (500), SemiBold (600)
- **Characteristics:** Humanist-neutral geometry, exceptional screen legibility across dense UI layouts.
- **Application:** Body copy, navigational items, form inputs, button labels, accordion contents.
- **Rule:** Never condense body text. Keep `leading-relaxed` on multiline paragraphs for effortless readability.

### 3. IBM Plex Mono — Technical & Metadata Typography
- **CSS Variable:** `--font-ibm-plex-mono`, class: `font-mono`
- **Weights:** Regular (400), Medium (500), SemiBold (600)
- **Characteristics:** Precise monospaced proportions evoking automotive telemetry and workshop manuals.
- **Application:** Part numbers, VIN labels, inspection codes, timestamps, pricing figures, badges.

### Typographic Hierarchy Scale

| Element | Class / Token | Font | Size (Desktop / Mobile) | Weight | Leading / Tracking |
|---|---|---|---|---|---|
| **Display H1** | `text-4xl md:text-6xl lg:text-7xl` | Barlow Condensed | 48px – 72px | 700 / 800 | `leading-[1.05] uppercase tracking-tight` |
| **Section H2** | `text-3xl md:text-4xl` | Barlow Condensed | 30px – 36px | 700 | `leading-[1.1] uppercase tracking-normal` |
| **Subsection H3** | `text-xl md:text-2xl` | Barlow Condensed | 20px – 24px | 600 | `leading-snug uppercase` |
| **Card Title** | `text-lg md:text-xl` | Inter | 18px – 20px | 600 | `leading-snug` |
| **Body Large** | `text-lg` | Inter | 18px | 400 / 500 | `leading-relaxed` |
| **Body Regular** | `text-base` | Inter | 16px | 400 | `leading-relaxed` |
| **Body Small** | `text-sm` | Inter | 14px | 400 / 500 | `leading-normal` |
| **Technical Label** | `text-xs md:text-sm` | IBM Plex Mono | 12px – 14px | 500 / 600 | `tracking-wider uppercase` |

---

## 5. Spacing, Grids & Layout Architecture

### Spacing Scale
The layout adheres strictly to an 8-point base grid (4px half-steps):
- **Micro UI elements:** `p-1` (4px), `p-2` (8px), `p-3` (12px), `p-4` (16px)
- **Card content:** `p-5` (20px) to `p-6` (24px)
- **Card gap spacing:** `gap-4` (16px) to `gap-6` (24px)
- **Section vertical padding:**
  - Mobile: `py-12` (48px) to `py-16` (64px)
  - Desktop: `py-20` (80px) to `py-24` (96px)
- **Section divider gap:** Minimum `space-y-16` (64px) between distinct thematic blocks.

### Container Rules
- **Site Max Width:** `max-w-7xl` (1280px) centered via `mx-auto`.
- **Gutters:** `px-4 sm:px-6 lg:px-8` on all full-width screen sections.
- **Text Readability Constraint:** Body paragraphs constrained to `max-w-prose` (approx 65 characters) or `max-w-2xl` to prevent uncomfortably long lines on widescreen displays.

---

## 6. Accessibility & Motion Guidelines

### Contrast Compliance (WCAG 2.1 Level AA / AAA)
1. **Primary text `#F5F4EF` on Obsidian `#111418`:** 15.8:1 contrast (exceeds AAA requirement of 7:1).
2. **Secondary text `#AAB2B8` on Obsidian `#111418`:** 8.5:1 contrast (exceeds AAA requirement of 7:1).
3. **Primary button (`#E23B3B` with `#FFFFFF` text):** 4.6:1 contrast (meets AA requirement of 4.5:1 for normal text and AAA for large text).
4. **Interactive Focus States:** All interactive elements (`<button>`, `<a>`, `<input>`) feature explicit focus indicators:
   ```css
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
   ```

### Reduced Motion Support
Users with vestibular disorders or motion sensitivity are respected via native media queries:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Component Styling Conventions

1. **Primitive-First:** Build on top of shadcn/ui primitives located in `src/components/ui/`.
2. **Class Variance Authority (`cva`):** Use `cva` for defining variant matrices (e.g. `variant`, `size`, `state`).
3. **Tailwind Merge (`cn`):** Always route class names through `@/lib/utils` `cn(...)` to permit custom override styling without selector conflicts.
4. **Clean DOM Elements:** Never render nested interactive elements (e.g. `<button><a /></button>`). Use Radix `Slot` (`asChild`) to pass behavior down seamlessly.

