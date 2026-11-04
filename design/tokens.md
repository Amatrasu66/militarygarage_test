# Military Car Service (MCS) — Design Tokens & Implementation Guide

This document defines the formal mapping between the canonical MCS brand specification (`design.md`) and the CSS/Tailwind implementation tokens for Phase 1 and beyond.

---

## 1. Brand Color Palette

| Token Variable | Hex Value | Semantic Role | Tailwind Class Mapping |
|---|---|---|---|
| `--mcs-obsidian` | `#111418` | Primary dark background, deepest surface | `bg-mcs-obsidian`, `text-mcs-obsidian` |
| `--mcs-graphite` | `#202830` | Secondary dark background, cards, panels | `bg-mcs-graphite`, `text-mcs-graphite` |
| `--mcs-red` | `#E23B3B` | Primary brand accent, key CTAs, highlights | `bg-mcs-red`, `text-mcs-red`, `border-mcs-red` |
| `--mcs-red-hover` | `#C52B2B` | Hover/active state for primary actions | `hover:bg-mcs-red-hover` |
| `--mcs-ivory` | `#F5F4EF` | High-contrast primary text, crisp contrast | `bg-mcs-ivory`, `text-mcs-ivory` |
| `--mcs-steel` | `#AAB2B8` | Secondary body text, muted metadata, subtext | `text-mcs-steel`, `border-mcs-steel` |
| `--mcs-iron` | `#343C43` | Borders, subtle dividers, dark surface strokes | `border-mcs-iron`, `divide-mcs-iron` |
| `--mcs-light-surface` | `#F2F0EA` | Contrasting light section background (We Buy Cars) | `bg-mcs-light-surface` |

### Functional Status Tokens
| Token Variable | Hex Value | Purpose |
|---|---|---|
| `--mcs-success` | `#27865C` | Operational confirmation, verified badge |
| `--mcs-warning` | `#D69B32` | Attention, pending verification note |
| `--mcs-error` | `#E23B3B` | Form validation error, critical alert |
| `--mcs-info` | `#347DA5` | Informational callouts, specification notes |

---

## 2. shadcn/ui Semantic Token Mapping

All shadcn/ui components map to these CSS variables in `src/app/globals.css`:

| shadcn Token | CSS Variable | Mapped Brand Value | Usage Context |
|---|---|---|---|
| `background` | `--background` | `var(--mcs-obsidian)` (`#111418`) | Page shell and section canvas |
| `foreground` | `--foreground` | `var(--mcs-ivory)` (`#F5F4EF`) | Primary headings and text |
| `card` | `--card` | `var(--mcs-graphite)` (`#202830`) | Card containers, panels, modals |
| `card-foreground`| `--card-foreground` | `var(--mcs-ivory)` (`#F5F4EF`) | Text on cards |
| `popover` | `--popover` | `var(--mcs-graphite)` (`#202830`) | Dropdown menus, tooltips, sheets |
| `popover-foreground` | `--popover-foreground` | `var(--mcs-ivory)` (`#F5F4EF`) | Text in popovers |
| `primary` | `--primary` | `var(--mcs-red)` (`#E23B3B`) | Key buttons, active tabs, focus ring |
| `primary-foreground` | `--primary-foreground` | `#FFFFFF` | Text on red buttons |
| `secondary` | `--secondary` | `var(--mcs-graphite)` (`#202830`) | Secondary buttons, muted panels |
| `secondary-foreground` | `--secondary-foreground` | `var(--mcs-ivory)` (`#F5F4EF`) | Text on secondary buttons |
| `muted` | `--muted` | `var(--mcs-graphite)` (`#202830`) | Muted areas, disabled tabs |
| `muted-foreground` | `--muted-foreground` | `var(--mcs-steel)` (`#AAB2B8`) | Secondary descriptions, captions |
| `accent` | `--accent` | `var(--mcs-graphite)` (`#202830`) | Hover background on dropdowns/tabs |
| `accent-foreground` | `--accent-foreground` | `var(--mcs-ivory)` (`#F5F4EF`) | Hover text in menus |
| `destructive` | `--destructive` | `var(--mcs-red)` (`#E23B3B`) | Error states, destructive buttons |
| `destructive-foreground` | `--destructive-foreground` | `#FFFFFF` | Text on destructive buttons |
| `border` | `--border` | `var(--mcs-iron)` (`#343C43`) | Card and section borders |
| `input` | `--input` | `var(--mcs-iron)` (`#343C43`) | Form input borders |
| `ring` | `--ring` | `var(--mcs-red)` (`#E23B3B`) | Focus rings |

### Light Surface Context (`.surface-light`)
For contrasting sections such as "Sell Your Vehicle" / "We Buy Cars":
- `--background`: `#F2F0EA` (Warm Light Surface)
- `--foreground`: `#111418` (Obsidian)
- `--card`: `#FFFFFF`
- `--card-foreground`: `#111418`
- `--muted-foreground`: `#5C6770`
- `--border`: `#D0D4D8`

---

## 3. Typography System

Google Fonts configured in `src/app/layout.tsx`:

- **Display Headlines:** Barlow Condensed (`600`, `700`, `800`) mapped to `--font-display`.
- **UI, Body, Navigation, Buttons & Forms:** Inter (`400`, `500`, `600`, `700`) mapped to `--font-sans`.
- **Technical Labels, Metadata & Specs:** IBM Plex Mono (`400`, `500`, `600`) mapped to `--font-mono`.

### Type Hierarchy
| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| **Hero Desktop** | Barlow Condensed | 64px – 96px (`text-5xl` to `text-7xl`) | 800 / 900 | 0.92 – 1.05 | `tracking-tight` / uppercase |
| **Section Heading** | Barlow Condensed | 36px – 52px (`text-3xl` to `text-5xl`) | 700 / 800 | 1.05 – 1.1 | `tracking-tight` / uppercase |
| **Kicker / Badge** | Inter / IBM Plex Mono | 11px – 13px (`text-xs`) | 700 | 1.2 | `tracking-widest` / uppercase |
| **Card Heading** | Inter / Barlow Condensed | 20px – 24px (`text-lg` to `text-xl`) | 600 / 700 | 1.25 | normal / uppercase |
| **Body Standard** | Inter | 16px – 18px (`text-base`) | 400 (Regular) | 1.6 | normal |
| **Small UI / Captions** | Inter | 13px – 14px (`text-sm`) | 400 / 500 | 1.4 | normal |
| **Technical Specs** | IBM Plex Mono | 11px – 13px (`text-xs` / `text-sm`) | 500 (Medium) | 1.3 | `tracking-wide` |

---

## 4. Spacing, Grid & Layout Tokens

- **Base unit:** 8px grid (4px for micro-adjustments).
- **Maximum content width:** 1280px (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
- **Standard Desktop Grid:** 12-column layout.
- **Section Vertical Padding:**
  - Standard Section: `py-16 md:py-24` (64px to 96px).
  - Compact / Hero adjustment: `py-12 md:py-16` (48px to 64px).

---

## 5. Component Styling Guidelines

### Buttons (`src/components/ui/button.tsx`)
- Standardized with `class-variance-authority` and Radix `Slot.Root`.
- Supports `asChild` composition without invalid nested `<button><a>` tags.
- Variants:
  - `default` / `primary`: `bg-primary text-primary-foreground hover:bg-primary/90`
  - `secondary`: `bg-secondary text-secondary-foreground border border-border hover:border-steel/50`
  - `destructive`: `bg-destructive text-destructive-foreground hover:bg-destructive/90`
  - `outline`: `border border-border bg-transparent text-foreground hover:border-primary hover:bg-white/5`
  - `ghost`: `bg-transparent text-foreground hover:bg-white/5`
  - `link`: `text-primary underline-offset-4 hover:underline`
- Minimum touch target: 44px on mobile devices.
