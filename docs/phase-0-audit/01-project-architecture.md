# 01 — Project Architecture & Technology Stack Audit
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/01-project-architecture.md`  
**Date:** November 2026  
**Auditor:** Senior Product Designer, Frontend Architect & Technical Lead  
**Status:** Complete & Verified  

---

## 1. Executive Summary

A comprehensive architectural inspection of the current Military Car Service (MCS) website codebase was performed. The repository represents an initial prototype (Phase One milestone) consisting of a single monolithic page with 13 vertical sections rendered sequentially at the root route (`/`). 

While the project utilizes modern Next.js 16 (App Router) and Tailwind CSS v4 tooling, significant architectural and technical deviations from production readiness and client specifications were identified:
1. **Absence of shadcn/ui and Radix Primitives:** Despite claims in project documentation, `shadcn/ui` is **not installed or configured**. All components in `src/components/ui/` are hand-written approximations lacking accessible Radix primitives, `class-variance-authority` (cva), and standard shadcn architecture.
2. **Monolithic Single-Page Architecture:** There is only one operational page route (`/`). All secondary destinations (`/services`, `/about`, `/contact`, `/gallery`, `/sell-your-vehicle`, `/impressum`, `/privacy`, `/terms`, `/jobs`) are absent. Directory stubs (`src/app/book-appointment`, `src/app/(marketing)`) exist as empty placeholders that return 404 errors.
3. **Invented Business Feature (Vehicle Sales Inventory):** An unapproved vehicle marketplace catalog (`VehicleInventorySection`, `VehicleCard`, `SAMPLE_VEHICLES`, filter controls, favorite bookmarks) was introduced into the core architecture, violating Rule B.
4. **Invalid HTML Nesting Bug:** The custom `Button` component accepts an `asChild` prop in TypeScript but completely ignores it in the implementation, resulting in `<button><a href="...">` invalid nested interactive markup across headers, CTAs, and footers.
5. **Zero Photography in DOM:** The application renders 92 vector SVGs and zero photographic `<img>` or Next.js `<Image>` elements, relying on hand-coded SVG vehicle illustrations.

---

## 2. Technology Stack Verification

| Layer | Declared / Target | Actual Installed Version | Status | Architectural Notes |
|---|---|---|---|---|
| **Framework** | Next.js 15+ (App Router) | `next@16.4.5` | Installed & Verified | App Router architecture with Turbopack enabled. |
| **Runtime / Library** | React 19 | `react@19.3.0`, `react-dom@19.3.0` | Installed & Verified | React 19 compiler-ready baseline. |
| **Language** | TypeScript 5+ | `typescript@^5` (5.x) | Installed & Verified | Strict mode enabled in `tsconfig.json`. |
| **Styling Engine** | Tailwind CSS v4 | `tailwindcss@^4`, `@tailwindcss/turbopack@^4` | Installed & Verified | Uses `@import "tailwindcss";` and `@theme` block in `globals.css`. |
| **UI Component Library** | **shadcn/ui** | **NOT INSTALLED** | **FAILED AUDIT** | `components.json` missing; zero Radix primitives; hand-written visual clones. |
| **Component Primitives** | Radix UI | **NOT INSTALLED** | **FAILED AUDIT** | No `@radix-ui/*` packages found in `package.json` or `node_modules`. |
| **Variant Management** | `class-variance-authority` | **NOT INSTALLED** | **FAILED AUDIT** | `cva` is absent; variant styling relies on fragile custom JS dictionaries. |
| **Utility Helpers** | `clsx`, `tailwind-merge` | `clsx@^2.1.1`, `tailwind-merge@^3.7.0` | Installed & Verified | Centralized in `src/lib/utils.ts` (`cn()` helper). |
| **Icon Library** | Lucide React | `lucide-react@^1.68.0` | Installed & Verified | Standard automotive and UI icons imported directly. |
| **Animation Library** | Framer Motion / Motion | None | Not Installed | Relies solely on CSS transitions and Tailwind utility classes. |
| **Form Management** | `react-hook-form` | **NOT INSTALLED** | Absent | Prototype forms use local React `useState` hooks. |
| **Schema Validation** | `zod` | **NOT INSTALLED** | Absent | No runtime schema validation for forms or API payloads. |
| **Carousel Library** | Embla Carousel | **NOT INSTALLED** | Absent | All repeated cards use static CSS grid layouts; no swipe/drag carousels. |
| **Image Optimization** | `next/image` | Configured in framework | **UNUSED** | Zero usages of `next/image` in `src/`. All vehicle art is hand-coded SVG. |
| **Typography Loader** | `next/font/google` | Configured in `src/app/layout.tsx` | Installed & Verified | Barlow Condensed, Inter, IBM Plex Mono configured with CSS variables. |
| **Linter / Formatter** | ESLint 9 | `eslint@^9`, `eslint-config-next@16.4.5` | Installed & Verified | Flat config `eslint.config.mjs` passes with 0 warnings. |

---

## 3. Project Structure & Directory Layout

```
Garage_freelance/
├── .agents/
│   └── skills/                         # Antigravity agent skills
│       ├── design-taste-frontend/      # Design taste & inspection tooling
│       ├── vercel-react-best-practices/# Performance guidelines
│       └── web-design-guidelines/      # UI review guidelines
├── .git/                               # Local Git version control repository
├── .taste-skill/
│   └── inspection/                     # CDP inspection output & screenshots
│       ├── desktop-fold.jpg
│       ├── desktop-page-01.jpg ...
│       └── report.json                 # Real-browser DOM inspection report
├── design/
│   ├── references/
│   │   └── mcs-website-approved-reference.png  # Visual direction benchmark
│   ├── assets.md                       # Phase One asset documentation
│   ├── design.md                       # Visual design specifications
│   └── tokens.md                       # Color and spacing tokens
├── docs/                               # Project audit & governance docs
│   └── phase-0-audit/                  # Phase 0 audit reports (this audit)
├── public/                             # Public static web assets
│   ├── brand/
│   │   └── logo/
│   │       └── mcs-monogram.svg        # Single brand SVG icon
│   ├── file.svg, globe.svg, ...        # Default create-next-app boilerplate SVGs (unused)
│   └── (NO photographs present)
├── src/
│   ├── app/                            # Next.js App Router root
│   │   ├── (marketing)/                # EMPTY DIRECTORY (architectural defect)
│   │   ├── book-appointment/          # EMPTY DIRECTORY (architectural defect)
│   │   ├── favicon.ico
│   │   ├── globals.css                 # Tailwind v4 theme, root variables, focus utilities
│   │   ├── layout.tsx                  # Root layout, Google fonts, metadata
│   │   ├── not-found.tsx               # Custom 404 page
│   │   └── page.tsx                    # Monolithic homepage assembling all 13 sections
│   ├── components/
│   │   ├── forms/
│   │   │   └── FormField.tsx           # Custom hand-written form input wrapper
│   │   ├── layout/
│   │   │   └── SiteFooter.tsx          # Multi-column footer, legal notice, disclaimer
│   │   ├── navigation/
│   │   │   ├── MobileNavigation.tsx    # Mobile drawer (custom hand-written div overlay)
│   │   │   └── SiteHeader.tsx          # Sticky desktop header & mobile hamburger trigger
│   │   ├── sections/                   # 12 homepage section components
│   │   │   ├── AboutSection.tsx        # Brand story, mission, operational highlights
│   │   │   ├── BookingAppointmentSection.tsx # 3-step prototype booking form
│   │   │   ├── CTASection.tsx          # Full-width closing dual-action CTA banner
│   │   │   ├── FAQSection.tsx          # Categorized FAQ container
│   │   │   ├── HeroSection.tsx         # Hero banner with hand-drawn SVG truck
│   │   │   ├── ReviewsSection.tsx      # Testimonial grid with verification warning
│   │   │   ├── SellYourVehicleSection.tsx # Light-surface selling feature with SVG muscle car
│   │   │   ├── ServicesOverview.tsx    # 4-card core services preview
│   │   │   ├── TrustBar.tsx            # 4 military capability badges
│   │   │   ├── VehicleInventorySection.tsx # UNAPPROVED INVENTED INVENTORY SHOWCASE
│   │   │   ├── WhyChooseSection.tsx    # 3-pillar value proposition
│   │   │   └── WorkshopGallery.tsx     # 5-card facility grid with lift SVGs
│   │   ├── services/
│   │   │   └── ServiceCard.tsx         # Domain card for workshop service offerings
│   │   ├── ui/                         # Supposed shadcn directory (hand-written clones)
│   │   │   ├── Button.tsx              # Custom button with defective asChild
│   │   │   ├── FAQAccordion.tsx        # Custom accordion using useState toggle
│   │   │   ├── MCSLogo.tsx             # Vector logo component (4 layout variants)
│   │   │   ├── ReviewCard.tsx          # Domain card for customer feedback
│   │   │   └── SectionHeading.tsx      # Standardized section header with kicker
│   │   └── vehicles/
│   │       └── VehicleCard.tsx         # UNAPPROVED INVENTED VEHICLE CARD (with favorite button)
│   ├── config/
│   │   ├── navigation.ts               # Primary & footer navigation items (all anchor hashes)
│   │   └── site.ts                     # Site metadata configuration (contains invalid domain)
│   ├── data/                           # Hardcoded TypeScript data fixtures
│   │   ├── faqs.ts                     # 6 FAQ entries (VAT, USAREUR, US parts, PCS, etc.)
│   │   ├── reviews.ts                  # 3 fabricated placeholder testimonials
│   │   ├── services.ts                 # 4 service categories (including unverified performance)
│   │   ├── trust.ts                    # Trust pillars and why-choose highlights
│   │   └── vehicles.ts                 # UNAPPROVED INVENTED VEHICLES (F-150, Silverado, Charger)
│   ├── lib/
│   │   ├── constants.ts                # Brand constants, unverified contact status, legal text
│   │   └── utils.ts                    # cn(), formatCurrency(), formatMileage()
│   └── types/
│       └── index.ts                    # TypeScript interface definitions
├── eslint.config.mjs                   # ESLint 9 configuration
├── next.config.ts                      # Next.js build configuration (Cache Components, PPP)
├── package.json                        # Dependency manifest
└── tsconfig.json                       # TypeScript compiler configuration
```

---

## 4. Route Inventory

| Route | File Path | Type | Purpose & Current State | Architectural Evaluation |
|---|---|---|---|---|
| `/` | `src/app/page.tsx` | Static Page (`○`) | Monolithic homepage containing all 13 sections stacked vertically. | **Architectural Bottleneck:** Page is 10,778px tall on desktop and 17,373px (20.6 viewport screens) on mobile. Contains all marketing, booking, inventory, and legal previews on a single URL. |
| `/_not-found` | `src/app/not-found.tsx` | Static Page (`○`) | Custom 404 handler with brand styling and "Back to Workshop" link. | Functioning correctly; however, copy mistakenly mentions "page or vehicle record". |
| `/book-appointment` | `src/app/book-appointment/` | **EMPTY DIRECTORY** | Intended dedicated booking route. | **Broken Route:** Missing `page.tsx`. Navigating to this URL triggers Next.js 404. |
| `/(marketing)` | `src/app/(marketing)/` | **EMPTY DIRECTORY** | Intended route group for content pages. | **Dead Artifact:** Contains no layout or pages. |
| `/services` | *None* | **MISSING** | Detailed service catalog page. | Primary navigation and footer link to `#services` anchor on homepage. No dedicated URL exists for SEO or deep-linking. |
| `/sell-your-vehicle` | *None* | **MISSING** | Dedicated We Buy Cars evaluation funnel. | Site config declares `siteConfig.links.sellVehicle: "/sell-your-vehicle"`, but the route is not implemented. Section button links to `#book-service`. |
| `/about` | *None* | **MISSING** | Dedicated company history and Dom Hagemann biography. | Declared in `siteConfig.links.about: "/about"`, but route does not exist. Navigation links to `#about` anchor. |
| `/reviews` | *None* | **MISSING** | Verified Google & community review archive. | Declared in `siteConfig.links.reviews: "/reviews"`, but route does not exist. Navigation links to `#reviews` anchor. |
| `/gallery` | *None* | **MISSING** | Workshop facility and vehicle media gallery. | Declared in `siteConfig.links.gallery: "/gallery"`, but route does not exist. Navigation links to `#gallery` anchor. |
| `/contact` | *None* | **MISSING** | Dedicated contact and location page. | Declared in `siteConfig.links.contact: "/contact"`, but route does not exist. Navigation links to `#contact` anchor. |
| `/impressum` | *None* | **MISSING** | Mandatory German legal notice (*Telemediengesetz* § 5). | Declared in `siteConfig.links.impressum: "/impressum"`, but route does not exist. Footer links point to dead `#legal` anchor. |
| `/privacy` | *None* | **MISSING** | Mandatory GDPR privacy policy (*Datenschutzerklärung*). | Declared in `siteConfig.links.privacy: "/privacy"`, but route does not exist. Footer links point to dead `#legal` anchor. |
| `/terms` | *None* | **MISSING** | Workshop terms, cancellation, parts, and loaner car policies. | Completely absent from current redesign codebase. |
| `/jobs` | *None* | **MISSING** | Career opportunities at MCS (Service Advisor, Front Desk, Parts). | Present on original live website; completely omitted from current redesign. |

---

## 5. Component Inventory & Classification

### A. UI Primitives (`src/components/ui/`)

| Component | File Path | shadcn Status | Usages | Architectural Assessment |
|---|---|---|---|---|
| `Button` | `src/components/ui/Button.tsx` | Hand-written clone | 8 | **Critical Defect:** Prop `asChild?: boolean` is accepted in the interface but completely omitted from implementation. When passed `asChild`, it wraps `<button>` around children (e.g. `<Link>`), producing invalid `<button><a href="...">` DOM structures. Hardcodes crimson `#D83A3A` instead of design token `#E23B3B`. |
| `SectionHeading` | `src/components/ui/SectionHeading.tsx` | Custom component | 8 | Solid reusable heading component supporting `kicker`, `title`, `subtitle`, and alignment. Follows brand typography rules. |
| `MCSLogo` | `src/components/ui/MCSLogo.tsx` | Custom SVG component | 3 | High-quality, clean vector SVG component supporting 4 variants (`full`, `monogram`, `badge`, `horizontal`). Ready for production. |
| `FAQAccordion` | `src/components/ui/FAQAccordion.tsx` | Hand-written clone | 1 | Custom React state implementation using an array of IDs. Lacks Radix UI keyboard navigation (Arrow Up/Down, Home, End), smooth height animations, and WAI-ARIA accordion conformance. |
| `ReviewCard` | `src/components/ui/ReviewCard.tsx` | Custom domain card | 1 | Well-styled presentation card with star rating, vehicle tag, and verification status pill. Displays fabricated sample reviews. |

### B. Navigation & Layout (`src/components/navigation/`, `src/components/layout/`)

| Component | File Path | Client/Server | Usages | Architectural Assessment |
|---|---|---|---|---|
| `SiteHeader` | `src/components/navigation/SiteHeader.tsx` | Client (`"use client"`) | 2 | Sticky navigation bar. Includes MCSLogo, desktop nav links, phone CTA with hover tooltip, and mobile hamburger button. Contains invalid button nesting when invoking `<Button asChild><Link ...>`. |
| `MobileNavigation` | `src/components/navigation/MobileNavigation.tsx` | Client (`"use client"`) | 1 | Fullscreen modal drawer. Lacks accessible focus trap, backdrop escape handling, and slide animations. Locks `body` scroll on mount. |
| `SiteFooter` | `src/components/layout/SiteFooter.tsx` | Server | 2 | Comprehensive footer with brand summary, legal disclaimer, and 4 link columns. All legal links route to nonexistent `#legal` anchor. Displays placeholder business verification alert in production UI. |

### C. Section Components (`src/components/sections/`)

| Component | File Path | Client/Server | Lines | Key Findings |
|---|---|---|---|---|
| `HeroSection` | `src/components/sections/HeroSection.tsx` | Server | 203 | Contains 110 lines of hand-coded SVG coordinates rendering an American off-road truck. Replaces authentic photography with vector art. |
| `TrustBar` | `src/components/sections/TrustBar.tsx` | Server | 53 | Clean 4-column trust strip highlighting military-friendly services. |
| `ServicesOverview` | `src/components/sections/ServicesOverview.tsx` | Server | 71 | 2x2 grid displaying 4 core service cards with view details action. |
| `SellYourVehicleSection` | `src/components/sections/SellYourVehicleSection.tsx` | Server | 162 | Contrasting ivory light surface (`#F5F4EF`). Contains 50-line SVG muscle car silhouette. **Critical Defect:** Primary CTA button "Get a Vehicle Evaluation" incorrectly links to `#book-service` instead of a vehicle evaluation workflow. |
| `WhyChooseSection` | `src/components/sections/WhyChooseSection.tsx` | Server | 67 | 3-column value proposition highlighting specialized expertise and upfront pricing. |
| `VehicleInventorySection` | `src/components/sections/VehicleInventorySection.tsx` | Client (`"use client"`) | 141 | **UNAPPROVED INVENTED FEATURE (Rule B):** Vehicle sales filter bar (Make, Model, Price, Year) and vehicle catalog display. Violates business model. Must be removed. |
| `AboutSection` | `src/components/sections/AboutSection.tsx` | Server | 116 | Generic military automotive copy. Completely omits founder Dom Hagemann, the 2008 founding story, and Stuttgart/Panzer Kaserne location. |
| `ReviewsSection` | `src/components/sections/ReviewsSection.tsx` | Server | 41 | Displays 3 fabricated customer testimonials with a yellow developer disclaimer warning in production UI. Does not link to real Google Reviews (4.9 stars, 300+ reviews). |
| `WorkshopGallery` | `src/components/sections/WorkshopGallery.tsx` | Server | 119 | 5-card grid rendering identical vector SVGs of hydraulic lift posts. Zoom icons do not trigger any modal or lightbox. |
| `BookingAppointmentSection` | `src/components/sections/BookingAppointmentSection.tsx` | Client (`"use client"`) | 410 | 410-line monolithic prototype form. Multi-step state machine (1: Service, 2: Info, 3: Review) with zero backend integration or email dispatch. Incorrectly lists Kaiserslautern/Ramstein service communities. |
| `FAQSection` | `src/components/sections/FAQSection.tsx` | Server | 33 | Wraps `FAQAccordion` and passes 6 questions from `src/data/faqs.ts`. |
| `CTASection` | `src/components/sections/CTASection.tsx` | Server | 89 | Closing full-width banner with dual action buttons ("Book a Service", "Sell Your Vehicle") and phone verification disclaimer. |

### D. Domain Cards & Forms (`src/components/services/`, `src/components/vehicles/`, `src/components/forms/`)

| Component | File Path | Usages | Architectural Assessment |
|---|---|---|---|
| `ServiceCard` | `src/components/services/ServiceCard.tsx` | 1 | Domain card for services with icon, title, description, and feature bullets. |
| `VehicleCard` | `src/components/vehicles/VehicleCard.tsx` | 1 | **UNAPPROVED INVENTED FEATURE:** Card for car sales with price, mileage, US-spec badge, and favorite heart button. Must be removed. |
| `FormField` | `src/components/forms/FormField.tsx` | 1 | Polymorphic input wrapper (`text`, `select`, `textarea`). Hand-rolled without accessible form semantics. |

---

## 6. Dependency & Package Analysis

### Declared Dependencies (`package.json`)

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^1.68.0",
    "next": "16.4.5",
    "react": "19.3.0",
    "react-dom": "19.3.0",
    "tailwind-merge": "^3.7.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### Dependency Audit Findings

1. **Extremely Sparse Production Runtime:** Only 6 direct dependencies are installed. While this yields a lightweight bundle, it is missing essential foundational packages expected for an enterprise Next.js automotive platform.
2. **Missing UI & Component Architecture Libraries:**
   - `@radix-ui/react-slot` (Required for proper `asChild` composition).
   - `@radix-ui/react-accordion` (Required for accessible FAQ).
   - `@radix-ui/react-dialog` (Required for accessible modals and mobile navigation).
   - `@radix-ui/react-select` (Required for custom styled accessible selects).
   - `class-variance-authority` (cva) (Standard for type-safe component variants).
3. **Missing Form & Validation Libraries:**
   - `react-hook-form` and `zod` are absent. The current form prototype in `BookingAppointmentSection.tsx` uses 150+ lines of uncontrolled `useState` logic without client-side or server-side schema validation.
4. **Missing Carousel Engine:**
   - `embla-carousel-react` is absent. This forces the workshop gallery and customer reviews into rigid static grids that cause extreme vertical height on mobile viewports.
5. **No Dead or Malicious Dependencies:** All installed packages are legitimate official releases. However, five unused boilerplate SVG assets (`public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`) remain in the repository.

---

## 7. Architectural Inconsistencies & Technical Risks

### A. The Single-Page vs Multi-Page Conflict
The project architecture suffers from an identity conflict:
- `src/config/site.ts` declares dedicated URLs for `/services`, `/sell-your-vehicle`, `/book-appointment`, `/about`, `/reviews`, `/gallery`, `/contact`, `/impressum`, and `/privacy`.
- Directories `src/app/book-appointment/` and `src/app/(marketing)/` were scaffolded to support a multi-page structure.
- However, all pages were abandoned and consolidated into a single monolithic 13-section homepage with hash-based anchor navigation (`#services`, `#vehicles`, `#about`, etc.).
- **Impact:** Substandard SEO indexing, broken deep-linking, impossibility of sharing specific service URLs on social/messaging channels, and severe mobile scroll fatigue (20.6 screen heights).

### B. The `asChild` Button Implementation Bug
In `src/components/ui/Button.tsx`:
```tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // ...
  asChild?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    // asChild is not even extracted or evaluated!
    return <button ref={ref} ...>{children}</button>;
  }
);
```
Across `SiteHeader.tsx`, `HeroSection.tsx`, `CTASection.tsx`, and `not-found.tsx`, developers wrote:
```tsx
<Button asChild variant="primary">
  <Link href="#book-service">Book a Service</Link>
</Button>
```
Because `Button` always renders `<button>`, the output HTML is:
```html
<button class="..."><a href="#book-service">Book a Service</a></button>
```
- **Technical Risk:** Invalid HTML5 (interactive element nested inside interactive element). Causes keyboard navigation tab stops to malfunction, fails screen readers, and triggers hydration mismatches.

### C. Client Component Sprawl
Components that only render static content (e.g. `SiteHeader.tsx`, `VehicleInventorySection.tsx`, `BookingAppointmentSection.tsx`) are marked with `"use client"`. Because `page.tsx` imports these client components directly without component boundaries, large portions of the client bundle are unnecessarily hydrated on initial load.

### D. Hardcoded Hex Values vs Design Tokens
While `src/app/globals.css` defines theme tokens (`--color-mcs-obsidian`, `--color-mcs-red`, etc.), almost every section component directly hardcodes inline hex strings (`bg-[#111418]`, `bg-[#202830]`, `border-[#343C43]`, `text-[#F5F4EF]`, `text-[#D83A3A]`). Furthermore, the code uses `#D83A3A` (crimson red) instead of the brand direction specification `#E23B3B`.

---

## 8. Summary of Architectural Recommendations

1. **Adopt Official shadcn/ui Foundation:** Initialize `components.json`, install `@radix-ui/react-slot`, `class-variance-authority`, and generate true accessible shadcn primitives (`Button`, `Card`, `Accordion`, `Dialog`, `Sheet`, `Input`, `Select`, `Badge`).
2. **Deconstruct Monolithic Homepage into Multi-Page Architecture:**
   - Keep a focused, high-impact homepage (`/`).
   - Implement dedicated routes: `/services` (with category anchors), `/sell-your-vehicle`, `/about`, `/contact` (with location & directions), `/gallery`, `/jobs`, `/impressum`, `/privacy`, and `/terms`.
3. **Decommission Vehicle Sales Inventory Feature:** Completely remove `src/components/sections/VehicleInventorySection.tsx`, `src/components/vehicles/VehicleCard.tsx`, and `src/data/vehicles.ts`. Remove all "Vehicles" links from `MAIN_NAV` and `FOOTER_NAV`.
4. **Transition from Vector Illustrations to Real Photography:** Deprecate 110-line SVG illustrations in `HeroSection` and `SellYourVehicleSection`. Implement standard responsive Next.js `<Image>` containers prepared for authentic workshop and vehicle photography.
5. **Integrate Real Booking & Valuation Endpoints:** Replace the prototype 410-line `BookingAppointmentSection` with an integrated eTermin appointment portal flow and a dedicated vehicle valuation submission form mirroring the business's actual JotForm requirements.

