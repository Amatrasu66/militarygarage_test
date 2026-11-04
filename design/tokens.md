# Military Car Service (MCS) — Design Tokens & Implementation Guide

This document defines the formal mapping between the canonical MCS brand specification (`design.md`) and the CSS/Tailwind implementation tokens.

---

## 1. Brand Color Palette

| Token Variable | Hex Value | Semantic Role | Tailwind Class Mapping |
|---|---|---|---|
| `--mcs-obsidian` | `#111418` | Primary dark background, deepest surface | `bg-mcs-obsidian`, `text-mcs-obsidian` |
| `--mcs-graphite` | `#202830` | Secondary dark background, cards, panels | `bg-mcs-graphite`, `text-mcs-graphite` |
| `--mcs-red` | `#D83A3A` | Primary brand accent, key CTAs, highlights | `bg-mcs-red`, `text-mcs-red`, `border-mcs-red` |
| `--mcs-red-hover` | `#BA2E2E` | Hover/active state for primary actions | `hover:bg-[#BA2E2E]` |
| `--mcs-ivory` | `#F5F4EF` | High-contrast light background, crisp contrast | `bg-mcs-ivory`, `text-mcs-ivory` |
| `--mcs-steel` | `#AAB2B8` | Secondary body text, muted metadata, subtext | `text-mcs-steel`, `border-mcs-steel` |
| `--mcs-iron` | `#343C43` | Borders, subtle dividers, dark surface strokes | `border-mcs-iron`, `divide-mcs-iron` |

### Functional Status Tokens
| Token Variable | Hex Value | Purpose |
|---|---|---|
| `--mcs-success` | `#27865C` | Operational confirmation, verified badge |
| `--mcs-warning` | `#D69B32` | Attention, pending verification note |
| `--mcs-error` | `#D83A3A` | Form validation error, critical alert |
| `--mcs-info` | `#347DA5` | Informational callouts, specification notes |

---

## 2. Typography System

The project loads Google Fonts using `next/font/google` with fallback sans-serif and monospace fonts:

```typescript
// Display Headlines
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

// UI, Body, Navigation, Buttons & Forms
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

// Technical Labels, Metadata & Specs
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});
```

### Type Hierarchy
| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| **Hero Desktop** | Barlow Condensed | 64px – 80px (`text-5xl` to `text-7xl`) | 800 (ExtraBold) | 0.95 – 1.05 | `tracking-tight` / uppercase |
| **Section Heading** | Barlow Condensed | 40px – 52px (`text-3xl` to `text-5xl`) | 700 (Bold) | 1.1 | `tracking-tight` / uppercase |
| **Kicker / Badge** | Inter / IBM Plex Mono | 12px – 13px (`text-xs`) | 700 | 1.2 | `tracking-widest` / uppercase |
| **Card Heading** | Inter | 22px – 26px (`text-xl` to `text-2xl`) | 600 (Semibold) | 1.25 | normal |
| **Body Standard** | Inter | 16px – 18px (`text-base`) | 400 (Regular) | 1.6 | normal |
| **Small UI / Captions** | Inter | 13px – 14px (`text-sm`) | 400 / 500 | 1.4 | normal |
| **Technical Specs** | IBM Plex Mono | 11px – 13px (`text-xs` / `text-sm`) | 500 (Medium) | 1.3 | `tracking-wide` |

---

## 3. Spacing, Grid & Layout Tokens

- **Base unit:** 8px grid (4px for micro-adjustments).
- **Maximum content width:** 1280px (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- **Standard Desktop Grid:** 12-column layout.
- **Section Vertical Padding:**
  - Standard Section: `py-16 md:py-24` (64px to 96px).
  - Compact / Hero adjustment: `py-12 md:py-16` (48px to 64px).

---

## 4. Component Rules

### Buttons
- **Primary Action:**
  - Background: `bg-[#D83A3A]`
  - Text: `text-white font-semibold text-sm sm:text-base`
  - Hover: `hover:bg-[#BA2E2E]`
  - Minimum height: 44px (`h-11 sm:h-12 px-6`)
  - Focus: visible outline ring (`focus-visible:ring-2 focus-visible:ring-[#D83A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111418]`)
- **Secondary Action:**
  - Background: `bg-transparent` / `bg-[#202830]`
  - Border: `border border-[#343C43]`
  - Text: `text-[#F5F4EF] hover:border-[#AAB2B8]`
- **Text Link:**
  - Accent red text `text-[#D83A3A]` or light text with hover transition, accompanied by `->` chevron.

### Cards & Panels
- **Dark Surface:**
  - Background: `bg-[#202830]`
  - Border: `border border-[#343C43]`
  - Rounded corners: `rounded-lg` (8px radius)
  - Hover transition: `hover:border-[#D83A3A]/40 transition-colors duration-200`
- **Contrasting Light Section (Sell-Your-Vehicle):**
  - Background: `bg-[#F5F4EF]`
  - Text: `text-[#111418]`
  - Border / divider: `border-[#E2E0D8]`
