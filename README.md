# Military Car Service (MCS) — Website Frontend

> **"YOUR CAR. OUR MISSION."**  
> *American Automotive Expertise. German Precision.*

---

## 1. Project Overview

Military Car Service (MCS) is an automotive service, repair, diagnostics, and vehicle-sales business serving the U.S. military community stationed across Germany (including Ramstein Air Base, Landstuhl, Vogelweh, Kaiserslautern Military Community, and surrounding installations), with a focus on American-spec trucks, SUVs, and performance vehicles.

This repository contains the **Phase One Frontend Foundation** for the MCS web platform, built to establish architectural standards, install and verify agent design skills, implement canonical brand tokens, and deliver an initial responsive user interface.

### Two Equal Primary Conversion Goals
1. **Service and repair appointment enquiries** (routine maintenance, diagnostics, brakes, suspension, tires, USAREUR inspection readiness).
2. **Vehicle purchase / "Sell Your Vehicle" enquiries** (transparent vehicle evaluations, PCS vehicle sales, quality pre-owned US-spec inventory).

---

## 2. Technical Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables design tokens
- **Typography:** Google Fonts (`next/font/google`):
  - **Barlow Condensed:** Display headlines, hero banners, section titles
  - **Inter:** Body text, navigation, buttons, forms, and general UI
  - **IBM Plex Mono:** Technical specifications, vehicle metadata
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Skills CLI:** Vercel Agent Skills CLI with Antigravity integration

---

## 3. Installed Antigravity Skills

The project is configured with project-level agent skills located in `.agents/skills/`:

| Skill Name | Repository Source | Role | Status |
|---|---|---|---|
| `design-taste-frontend` | `https://github.com/Leonxlnx/taste-skill` | Frontend art direction, anti-slop guidelines, real-browser CDP inspection | Verified & Tested |
| `web-design-guidelines` | `https://github.com/vercel-labs/agent-skills` | Web interface guidelines, accessibility, design patterns | Verified |
| `vercel-react-best-practices` | `https://github.com/vercel-labs/agent-skills` | React 19 / Next.js performance and composition rules | Verified |

---

## 4. Brand Design Tokens & System

Canonical design specifications are documented in [`design.md`](./design.md) and mapped in [`design/tokens.md`](./design/tokens.md).

```css
:root {
  --mcs-obsidian: #111418;  /* Primary dark background */
  --mcs-graphite: #202830;  /* Secondary dark surfaces, cards */
  --mcs-red:      #D83A3A;  /* Primary accent, key CTAs */
  --mcs-ivory:    #F5F4EF;  /* Light contrasting surfaces */
  --mcs-steel:    #AAB2B8;  /* Secondary text & metadata */
  --mcs-iron:     #343C43;  /* Borders, dividers, subtle outlines */

  --mcs-success:  #27865C;  /* Verified badges, confirmations */
  --mcs-warning:  #D69B32;  /* Pending verification notices */
  --mcs-error:    #D83A3A;  /* Error alerts */
  --mcs-info:     #347DA5;  /* Informational specs */
}
```

Visual Balance: 60% performance automotive, 25% precision engineering, 15% restrained American heritage.

---

## 5. Getting Started & Development

### Prerequisites
- **Node.js:** v22.14.0 LTS or newer
- **Package Manager:** `npm` (v10.9.2+)
- **Browser:** Chromium / Brave / Chrome (for browser inspection workflow)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd Garage_freelance

# Install dependencies
npm install
```

### Development Scripts
```bash
# Start development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint

# Run Taste Skill browser inspector
CHROME_PATH=/usr/bin/brave-browser node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:3000 --out .taste-skill/inspection
```

---

## 6. Directory Structure

```
Garage_freelance/
├── .agents/
│   └── skills/                  # Project-level agent skills (taste-skill, vercel-skills)
├── design/
│   ├── references/              # Preserved visual direction references
│   │   └── mcs-website-approved-reference.png
│   ├── tokens.md                # CSS tokens & typography mapping
│   ├── assets.md                # Asset inventory & replacement guide
│   └── design.md                # Brand specification backup
├── public/
│   ├── brand/                   # SVG logo and monogram assets
│   └── images/                  # Automotive photography placeholders
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Global layout with font loaders
│   │   ├── globals.css          # Tailwind CSS v4 & root tokens
│   │   ├── page.tsx             # Homepage composition (13 sections)
│   │   └── not-found.tsx        # Branded 404 handler
│   ├── components/
│   │   ├── layout/              # SiteFooter, wrappers
│   │   ├── navigation/          # SiteHeader, MobileNavigation
│   │   ├── sections/            # Hero, TrustBar, Services, Sell, Why, Gallery, Booking, FAQ, CTA
│   │   ├── services/            # ServiceCard
│   │   ├── vehicles/            # VehicleCard
│   │   ├── forms/               # FormField
│   │   └── ui/                  # Button, MCSLogo, SectionHeading, ReviewCard, FAQAccordion
│   ├── config/                  # site.ts, navigation.ts
│   ├── data/                    # Typed mock data (services, vehicles, reviews, faqs, trust)
│   ├── lib/                     # utils.ts, constants.ts
│   └── types/                   # TypeScript interfaces
├── design.md                    # Canonical brand & UI specification
├── PROJECT_STATUS.md            # Phase One completion report & next steps
├── package.json
└── tsconfig.json
```

---

## 7. Scope Boundaries (Phase One)

- **Completed in Phase One:**
  - Full frontend architecture and component library.
  - Responsive homepage following the approved visual reference order.
  - Local typed mock data with explicit verification tags.
  - Interactive appointment booking and vehicle evaluation prototype UI.
  - Verification with ESLint, TypeScript compiler, production build, and browser screenshot inspection.
- **Explicitly Deferred to Phase Two:**
  - Backend API routes and database schemas.
  - User authentication and customer accounts.
  - Live appointment availability checking and persistence.
  - Production payment processing and email/SMS triggers.
  - External live inventory management system.
# militarygarage_test
