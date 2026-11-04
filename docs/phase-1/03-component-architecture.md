# Military Car Service (MCS) — Component Architecture
**Phase 1: Design System & Foundational Architecture**  
**Status:** Implemented & Verified  
**Date:** November 2026  
**Document:** `docs/phase-1/03-component-architecture.md`

---

## 1. Directory Structure

The project implements a clean separation of concerns between low-level accessible primitives (`src/components/ui/`), domain-specific compound blocks (`src/components/`), and global layout configurations (`src/config/`, `src/lib/`):

```
src/
├── app/                              # Next.js 16 App Router tree
│   ├── favicon.ico
│   ├── globals.css                   # Tailwind v4 theme, tokens & CSS variables
│   ├── layout.tsx                    # Root layout with fonts & providers
│   ├── not-found.tsx                 # Custom 404 page (automotive-aligned copy)
│   └── page.tsx                      # Current homepage entry point
├── components/                       # Application & domain components
│   ├── layout/                       # Site-wide persistent layout components
│   │   ├── site-header.tsx           # Global navigation bar & actions
│   │   ├── site-footer.tsx           # Global footer with verified hours & legal
│   │   ├── mobile-navigation.tsx     # Mobile slide-out drawer
│   │   └── legal-disclaimer-banner.tsx# Verification status alert banner
│   ├── sections/                     # Homepage & subpage content sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── BookingAppointmentSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ...
│   └── ui/                           # Headless, accessible shadcn/ui primitives
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── badge.tsx
│       ├── button.tsx                # Canonical Button (Radix Slot + CVA)
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── tooltip.tsx
├── config/                           # Static site configuration & metadata
│   ├── navigation.ts                 # Nav route definitions & CTAs
│   └── site.ts                       # Canonical metadata, business URLs & SEO
├── hooks/                            # Custom React hooks
│   └── use-mobile.ts
├── lib/                              # Core utilities & domain constants
│   ├── constants.ts                  # Single source of truth for business data
│   └── utils.ts                      # Canonical class-merger & formatters
└── types/                            # Global TypeScript type definitions
    └── index.ts
```

---

## 2. Component Layering Conventions

Components are structured in three distinct tiers:

### Tier 1: UI Primitives (`src/components/ui/`)
- **Responsibility:** Reusable, unopinionated, domain-agnostic UI widgets.
- **Rules:**
  - Must not import business constants (`MCS_CONFIG`, `PHONE_NUMBER`, etc.).
  - Must not hardcode business terminology or navigation links.
  - Strict lowercase naming (`button.tsx`, `dialog.tsx`, `card.tsx`).
  - Must export polymorphic props (e.g. `asChild`) via `@radix-ui/react-slot` where applicable.
  - Style variants defined using `class-variance-authority` (`cva`).
  - Class merge handled exclusively via `@/lib/utils` `cn()`.

### Tier 2: Application Layout & Compound Components (`src/components/layout/`, `src/components/sections/`)
- **Responsibility:** Domain-specific assemblies that orchestrate multiple UI primitives into feature sections.
- **Rules:**
  - Consume UI primitives from `@/components/ui/`.
  - Read business information exclusively from `@/lib/constants` or `@/config/site`.
  - Adhere to the approved typography hierarchy (`font-heading`, `font-sans`, `font-mono`).
  - Ensure all external links include appropriate `rel="noopener noreferrer"` and `target="_blank"`.

### Tier 3: Route Views (`src/app/`)
- **Responsibility:** Page layouts, metadata generation, server data fetching, and streaming boundaries.
- **Rules:**
  - Define route-level `generateMetadata` using `@/config/site`.
  - Compose high-level section components.

---

## 3. Composition Patterns

### 1. Radix Slot Pattern (`asChild`)
To prevent invalid HTML nesting (such as `<button><a href="...">Text</a></button>` which causes hydration defects and screen reader navigation traps), all actionable components implement the `asChild` pattern:

```tsx
// Correct pattern: renders a single <a> styled identically to a primary button
<Button asChild variant="primary" size="lg">
  <Link href="/services">Explore Workshop Services</Link>
</Button>
```

Under the hood in `src/components/ui/button.tsx`:
```tsx
const Comp = asChild ? Slot.Root : "button"
return (
  <Comp className={cn(buttonVariants({ variant, size, className }))} {...props}>
    {children}
  </Comp>
)
```

### 2. Compound Card Pattern
Cards are composed modularly, providing consistent borders, paddings, and typography:

```tsx
<Card className="bg-graphite border-border hover:border-primary/50 transition-colors">
  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="outline">USAREUR Certified</Badge>
      <span className="font-mono text-xs text-secondary-text">CODE: 01-INSP</span>
    </div>
    <CardTitle className="font-heading text-2xl uppercase mt-2">
      Annual Safety Inspection
    </CardTitle>
    <CardDescription className="text-secondary-text">
      Comprehensive pre-inspection to guarantee your vehicle passes German TUV standards.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm text-foreground">
      <li>• Headlamp alignment and beam intensity test</li>
      <li>• Brake line corrosion and pad thickness inspection</li>
    </ul>
  </CardContent>
  <CardFooter>
    <Button variant="primary" className="w-full">Book Pre-Inspection</Button>
  </CardFooter>
</Card>
```

---

## 4. Import Path Aliases

The project standardizes on `@/*` path mapping defined in `tsconfig.json` and mirrored in `components.json`:

| Alias | Absolute Target Directory | Typical Usage |
|---|---|---|
| `@/*` | `./src/*` | General root access |
| `@/components/ui/*` | `./src/components/ui/*` | Low-level design system primitives |
| `@/components/*` | `./src/components/*` | Layout blocks and domain sections |
| `@/lib/utils` | `./src/lib/utils.ts` | `cn()`, `formatCurrency()`, `formatMileage()` |
| `@/lib/constants` | `./src/lib/constants.ts` | Verified business info, address, phones, emails |
| `@/config/site` | `./src/config/site.ts` | Global metadata and canonical URLs |

---

## 5. Naming & Case-Sensitivity Hygiene

To guarantee complete portability across case-insensitive OS filesystems (macOS, Windows) and strict case-sensitive CI/CD runners (Linux, GitHub Actions, Vercel Build):
- **Every primitive in `src/components/ui/` must be lowercase** (e.g. `button.tsx`, `card.tsx`).
- Legacy capitalized filenames (such as `Button.tsx`) have been permanently removed to eliminate `TS1149: File name differs only in casing` compiler collisions.
- Call sites must consistently import using lowercase: `import { Button } from "@/components/ui/button"`.

