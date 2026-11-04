# 08 — Phased Implementation Roadmap (Phase 1 to Phase 9)
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/08-phase-1-to-final-roadmap.md`  
**Date:** November 2026  
**Auditor & Technical Lead:** Senior Product Designer & Frontend Architect  
**Status:** Actionable Proposal — Pending Client Approval Before Execution  

---

## 1. Roadmap Architecture & Execution Principles

This roadmap translates the Phase 0 audit findings into a sequenced, nine-phase engineering plan. Each phase represents a self-contained, verifiable increment that addresses critical business inaccuracies, restores genuine functionality, installs modern component infrastructure, and establishes production quality.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     IMPLEMENTATION SEQUENCE ROADMAP                     │
├─────────────────────────────────────────────────────────────────────────┤
│ Phase 0: Audit & Discovery (Complete & Documented)                      │
│    ↓                                                                    │
│ Phase 1: Design System, Tokens & Foundational Architecture              │
│    ↓                                                                    │
│ Phase 2: Global Navigation, Header, Footer & Legal Foundations          │
│    ↓                                                                    │
│ Phase 3: Homepage Redesign (Authentic Identity, Remove Marketplace)     │
│    ↓                                                                    │
│ Phase 4: Services & Business Information Pages                          │
│    ↓                                                                    │
│ Phase 5: Dedicated We Buy Cars Valuation Journey                        │
│    ↓                                                                    │
│ Phase 6: Integrated Booking Experience & eTermin Workflow               │
│    ↓                                                                    │
│ Phase 7: Reviews, Media Carousel, FAQ & Supporting Sections             │
│    ↓                                                                    │
│ Phase 8: Responsive Refinement, Accessibility (WCAG AA) & Motion        │
│    ↓                                                                    │
│ Phase 9: SEO, Performance Optimization & Production Cutover             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1 — Design System & Foundational Architecture

### 1. Objective
Establish the authentic design token system, initialize official `shadcn/ui` with Radix primitives, eliminate the invalid HTML `asChild` button bug, and configure the multi-page App Router architecture.

### 2. Pages & Components Affected
- Configuration: `package.json`, `components.json`, `src/app/globals.css`, `src/config/site.ts`.
- Primitives: `src/components/ui/Button.tsx`, `Card.tsx`, `Badge.tsx`, `Separator.tsx`.
- Utilities: `src/lib/constants.ts`, `src/lib/utils.ts`.
- Cleanup: Removal of unreferenced boilerplate SVGs in `public/`.

### 3. Issues Being Resolved
- `MCS-001`: Lack of official shadcn/ui and Radix primitives.
- `MCS-007`: Broken `asChild` implementation nesting `<a>` inside `<button>`.
- `MCS-009`: Incorrect canonical domain URL (`.de` $\rightarrow$ `.com`).
- `MCS-015`: Broken image paths in configuration.
- `MCS-016`: Empty directory stubs (`src/app/book-appointment/`, `(marketing)/`).
- `MCS-020`: Hardcoded `#D83A3A` normalized to brand accent `#E23B3B`.
- `MCS-021`: Normalization of light surface canvas token `#F2F0EA`.
- `MCS-031`, `MCS-032`: Cleanup of 404 copy and boilerplate SVGs.

### 4. Dependencies
- Formal sign-off on Phase 0 Audit.

### 5. Expected Deliverables
- `components.json` initialized conforming to Next.js App Router and Tailwind v4.
- Installed dependencies: `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`.
- True shadcn `Button` utilizing Radix `Slot`.
- Standardized color tokens in `globals.css` with verified `#E23B3B` red accent and `#F2F0EA` light surface.
- Corrected site metadata pointing to `https://www.militarycarservice.com/`.

### 6. Acceptance Criteria
- Running `npm run build` completes with 0 errors.
- Invoking `<Button asChild><Link href="...">Text</Link></Button>` outputs `<a class="...">Text</a>` with zero nested `<button>` tags.
- Design tokens evaluate cleanly in CSS variables without hardcoded `#D83A3A` fallbacks.

### 7. Risks & Outstanding Questions
- Verify compatibility of latest `@radix-ui` releases with React 19.3.0 and Next.js 16.4.5 Turbopack compiler.

---

## Phase 2 — Global Navigation, Header, Footer & Legal Foundations

### 1. Objective
Re-architect global site navigation for multi-page routing, implement accessible mobile drawer, eliminate unapproved marketplace links, and deploy legally compliant German Impressum, Privacy Policy, and Terms & Conditions pages.

### 2. Pages & Components Affected
- Components: `src/components/navigation/SiteHeader.tsx`, `MobileNavigation.tsx`, `src/components/layout/SiteFooter.tsx`.
- Configuration: `src/config/navigation.ts`.
- New Pages: `src/app/impressum/page.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`.

### 3. Issues Being Resolved
- `MCS-002`: Removal of "Vehicles" nav link from header and footer.
- `MCS-003`: Inclusion of verified address (Weil im Schönbuch) in footer.
- `MCS-008`: Resolution of dead `#legal` anchor links; deployment of legally compliant pages.
- `MCS-012`: Conversion of phone display to accessible `tel:+4971575377196` link with mobile visibility.
- `MCS-013`: Implementation of accessible focus-trapped mobile drawer with smooth slide transitions.
- `MCS-030`: Removal of yellow developer disclaimers from header and footer UI.

### 4. Dependencies
- Phase 1 complete (shadcn `Sheet` / Dialog primitives available).

### 5. Expected Deliverables
- Responsive `SiteHeader` with verified phone CTA, WhatsApp direct trigger, and multi-page links.
- Accessible `MobileNavigation` using shadcn `Sheet` (`@radix-ui/react-dialog`) with focus trap and Escape handler.
- Comprehensive `SiteFooter` displaying verified Weil im Schönbuch location, hours, and legal links.
- Published `/impressum` route fulfilling German TMG § 5 requirements (Dom Hagemann, Tax ID `DE223014684`).
- Published `/privacy` route fulfilling EU GDPR / DSGVO standards.
- Published `/terms` route publishing verified workshop policies (cancellation, late arrival, storage fee, loaner cars).

### 6. Acceptance Criteria
- All header and footer links resolve to HTTP 200 routes (no 404s, no dead anchor jumps).
- Tapping the phone number on a smartphone triggers native phone dialer with `+4971575377196`.
- Keyboard Tab navigation through mobile drawer stays trapped inside dialog; Escape key closes drawer.
- German legal compliance verified for commercial online operations.

### 7. Risks & Outstanding Questions
- Final review of privacy policy text to ensure proper disclosures for eTermin and JotForm data processing.

---

## Phase 3 — Homepage Redesign

### 1. Objective
Redesign the homepage to authentically represent MCS as a premier U.S.-spec service workshop, eliminate the unapproved vehicle marketplace, restore founder Dom Hagemann's identity and award history, and replace artificial SVG illustrations.

### 2. Pages & Components Affected
- Page: `src/app/page.tsx`.
- Sections: `HeroSection.tsx`, `TrustBar.tsx`, `WhyChooseSection.tsx`, `AboutSection.tsx`, `CTASection.tsx`.
- Removals: Deletion of `VehicleInventorySection.tsx`, `VehicleCard.tsx`, and `src/data/vehicles.ts`.

### 3. Issues Being Resolved
- `MCS-002`: Deletion of pre-owned car sales inventory showcase.
- `MCS-006`: Removal of fake customer reviews and production warning banner.
- `MCS-011`: Re-establishment of Dom Hagemann's personal authority, AAFES background, and 2008 founding.
- `MCS-022`: Removal of 110-line SVG truck artifice; preparation of responsive hero image container.
- `MCS-030`: Removal of all developer disclaimers from homepage sections.

### 4. Dependencies
- Phase 1 and Phase 2 complete.
- High-resolution photography obtained from business owner (or high-quality curated workshop placeholders pending photoshoot).

### 5. Expected Deliverables
- Refocused, high-impact homepage layout reducing mobile scroll height from 17,373px to under 7,500px.
- Hero section featuring bold typography ("YOUR CAR. OUR MISSION."), clear value proposition, dual CTAs ("Book a Service", "Sell Your Vehicle"), and authentic automotive photography.
- Updated Trust Bar and Why Choose sections highlighting 18-year heritage, Stuttgart award, and US-spec diagnostic capabilities.
- Authentic About section honoring Dom Hagemann's personal military community story.

### 6. Acceptance Criteria
- Zero instances of pre-owned vehicle inventory, prices, or favorite buttons exist on the homepage.
- Mobile page height reduced by over 50%.
- Authentic founder story and award credentials prominently displayed.
- All primary CTAs function smoothly without invalid button nesting.

### 7. Risks & Outstanding Questions
- Delivery of approved high-resolution photos of Dom Hagemann and the workshop.

---

## Phase 4 — Services & Business Information Pages

### 1. Objective
Deploy a dedicated, comprehensive `/services` route detailing verified repair capabilities, restore verified Towing services, and establish the `/about`, `/contact`, and `/jobs` pages.

### 2. Pages & Components Affected
- New Routes: `src/app/services/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/jobs/page.tsx`, `src/app/location/page.tsx`.
- Components: `src/components/services/ServiceDetailCard.tsx`, `src/components/sections/ServicesOverview.tsx`.
- Data: `src/data/services.ts`.

### 3. Issues Being Resolved
- `MCS-003`: Accurate workshop address and directions published on dedicated `/contact` and `/location` pages.
- `MCS-010`: Deconstruction of monolithic homepage into structured multi-page architecture.
- `MCS-014`: Removal of unverified "Performance Upgrades" claims; restoration of verified Towing & Recovery services.
- `MCS-018`: Restoration of the missing `/jobs` recruitment page for SOFA card and visa holders.
- `MCS-025`: Resolution of dead "View Details" service card links.

### 4. Dependencies
- Phase 1 and Phase 2 complete.

### 5. Expected Deliverables
- Dedicated `/services` page with deep-link category anchors:
  1. Maintenance & Routine Service (oil, fluids, factory schedules).
  2. Repairs & Diagnostics (OBD-II North American scanning, check engine, electrical, engine/transmission).
  3. Tires, Wheels & Seasonal Changeovers (US & EU specs, TPMS, road-force balancing, seasonal storage).
  4. Towing & Emergency Transport (vehicle recovery across German military communities).
  5. German Paperwork & Inspection Readiness (USAREUR pre-checks, VAT Form 1903 handling).
- Dedicated `/contact` & `/location` page featuring interactive Google Maps embed, driving directions ("across from car wash"), direct shop line, and WhatsApp button.
- Dedicated `/jobs` page presenting the 3 authentic openings: Full Time Service Advisor, Part Time Front Desk Receptionist, Part Time Parts Manager.

### 6. Acceptance Criteria
- Every service offering matches verified business capabilities (Rule C).
- Dedicated pages load with full semantic hierarchy and unique meta titles/descriptions.
- Google Maps embed accurately centers on coordinates `48.6187603, 9.0362095` in Weil im Schönbuch.

### 7. Risks & Outstanding Questions
- Owner confirmation on whether custom performance upgrades (lift kits, exhaust) should be offered as custom inquiries.

---

## Phase 5 — Dedicated We Buy Cars Valuation Journey

### 1. Objective
Create a dedicated, high-converting `/sell-your-vehicle` funnel that enables military personnel to submit vehicle details for immediate cash offers, directly replicating and improving the original 14-field JotForm workflow.

### 2. Pages & Components Affected
- New Route: `src/app/sell-your-vehicle/page.tsx`.
- Components: `src/components/sections/SellYourVehicleSection.tsx` (homepage teaser), `src/components/forms/VehicleValuationWizard.tsx`.
- Libraries: `react-hook-form`, `zod`.

### 3. Issues Being Resolved
- `MCS-004`: Primary homepage CTA correctly routed to `/sell-your-vehicle`.
- `MCS-017`: Implementation of structured 14-field vehicle evaluation form capturing VIN, US/EU spec, green papers, payoff, and asking price.
- `MCS-023`: Replacement of SVG muscle car illustration with authentic acquired vehicle photography.

### 4. Dependencies
- Phase 1 complete (`zod`, `react-hook-form` installed).
- Phase 2 complete.

### 5. Expected Deliverables
- Multi-step, accessible vehicle valuation wizard:
  - Step 1: Vehicle Basics (Year, Make, Model, US/EU Spec, Mileage & unit).
  - Step 2: Documentation & Condition (VIN, German "green" paperwork status, vehicle condition, reason for sale: PCS / upgrade / damage).
  - Step 3: Financials & Asking Price (Financed vs Paid off, payoff amount, asking price in USD or EUR).
  - Step 4: Contact & Submission (Name, email, phone number, military affiliation).
- Backend submission handling: Secure transmission to `appointments@militarycarservice.com` or direct webhook integration with JotForm / CRM.
- Homepage teaser section updated with authentic copy and direct link to the wizard.

### 6. Acceptance Criteria
- Valuation form enforces client-side and server-side Zod validation on required fields (e.g. 17-character VIN).
- Users receive clear instant on-screen confirmation upon successful submission.
- Mobile experience is smooth, frictionless, and easily navigable.

### 7. Risks & Outstanding Questions
- Confirm whether valuation inquiries should be emailed directly to `appointments@militarycarservice.com` or forwarded into an existing JotForm webhook endpoint.

---

## Phase 6 — Integrated Booking Experience & eTermin Workflow

### 1. Objective
Replace the disconnected 410-line prototype form with an integrated, production appointment scheduling flow seamlessly connected to MCS's established booking system (**eTermin**).

### 2. Pages & Components Affected
- Route: `src/app/book-appointment/page.tsx`.
- Components: `src/components/sections/BookingAppointmentSection.tsx`, `src/components/booking/ETerminEmbed.tsx`, `BookingPolicyNotice.tsx`.

### 3. Issues Being Resolved
- `MCS-005`: Disconnected prototype form replaced with active production booking mechanism.
- `MCS-008`: Integration of mandatory 48-hour cancellation policy, late arrival rules, and daily storage fees.
- `MCS-016`: Resolution of empty `src/app/book-appointment/` directory stub.

### 4. Dependencies
- Phase 1, Phase 2, and Phase 4 complete.
- eTermin embedding parameters confirmed with Dom Hagemann.

### 5. Expected Deliverables
- Dedicated `/book-appointment` route providing:
  1. Direct, embedded or modal eTermin booking interface (`https://www.etermin.net/militarycarservice`).
  2. Clear preparation instructions for military customers (bring VAT Form 1903, vehicle registration papers, keys).
  3. Transparent disclosure of shop policies: 48h cancellation notice, late arrival thresholds (10/20 mins), parts payment terms, loaner car conditions.
  4. Fallback direct calling option (`+49 (0)7157 5377196`) and WhatsApp chat for urgent breakdowns.
- Homepage booking section streamlined to guide users into the booking portal.

### 6. Acceptance Criteria
- Customers can successfully schedule genuine workshop appointments without data loss.
- All cancellation and late arrival terms are clearly acknowledged before booking.
- Works responsively across mobile and desktop without iframe horizontal scrolling bugs.

### 7. Risks & Outstanding Questions
- Verify if eTermin allows responsive iframe embedding or if an external modal redirect is preferred by the vendor.

---

## Phase 7 — Reviews, Media Carousel, FAQ & Supporting Sections

### 1. Objective
Deploy authentic customer reviews linking to verified Google ratings, replace static media grids with a responsive touch carousel, and upgrade the FAQ section to official accessible shadcn Accordion primitives.

### 2. Pages & Components Affected
- Route: `src/app/gallery/page.tsx`, `src/app/reviews/page.tsx`.
- Components: `src/components/sections/ReviewsSection.tsx`, `src/components/sections/WorkshopGallery.tsx`, `src/components/sections/FAQSection.tsx`.
- Primitives: Installation of shadcn `Carousel` (`embla-carousel-react`) and shadcn `Accordion` (`@radix-ui/react-accordion`).
- Data: `src/data/faqs.ts`, removal of fake reviews from `src/data/reviews.ts`.

### 3. Issues Being Resolved
- `MCS-006`: Replacement of fabricated testimonials with authentic Google Reviews badge (4.9 stars, 300+ reviews) and verified customer quotes.
- `MCS-019`: Replacement of repetitive SVG hydraulic lifts with a swipeable, responsive photographic carousel with lightbox.
- `MCS-024`: Replacement of custom hand-rolled accordion with accessible Radix Accordion.

### 4. Dependencies
- Phase 1 complete.
- Authentic workshop and vehicle photography delivered.
- Approved customer review excerpts confirmed with business owner.

### 5. Expected Deliverables
- Verified Customer Reviews container prominently showcasing Google Reviews aggregate rating (4.9 / 5.0) with direct link to Google Maps reviews.
- Responsive Workshop & Vehicle Gallery using Embla Carousel:
  - Desktop: 3 visible cards with manual Prev/Next arrows.
  - Mobile: 1.1 visible cards with touch swipe and peek preview.
  - Interactive accessible image lightbox on click.
  - Zero auto-scroll by default.
- Modernized FAQ Accordion supporting full keyboard navigation (arrows, Home, End), smooth height animation, and WAI-ARIA conformance.

### 6. Acceptance Criteria
- Carousel operates smoothly with finger swipe on mobile and arrow keys on desktop.
- Zero fake reviews remain anywhere in the codebase.
- Accordion passes all automated accessibility checks for expandable regions.

### 7. Risks & Outstanding Questions
- Confirmation from Dom Hagemann on specific customer quotes approved for homepage highlight cards.

---

## Phase 8 — Responsive Refinement, Accessibility (WCAG AA) & Motion

### 1. Objective
Conduct rigorous cross-device visual polish, resolve all WCAG 2.2 Level AA accessibility defects, ensure touch target compliance, and implement subtle, purposeful micro-interactions.

### 2. Pages & Components Affected
- Global styles: `src/app/globals.css`.
- All layouts and interactive controls across desktop, tablet, and mobile breakpoints.

### 3. Issues Being Resolved
- `MCS-013`: Mobile menu drawer animations and keyboard trap refinement.
- `MCS-026`: Contrast compliance for red accent elements on dark surfaces.
- `MCS-027`: Contrast compliance for footer legal and secondary text.
- Touch target compliance across all mobile buttons, tags, and links ($\ge$44x44px).

### 4. Dependencies
- Phase 1 through Phase 7 complete.

### 5. Expected Deliverables
- Dual-color, high-contrast accessible focus ring (`outline: 2px solid #F5F4EF; outline-offset: 2px;`).
- Normalized contrast ratios: All normal body text strictly $\ge$4.5:1; large text strictly $\ge$3.0:1.
- Fully verified responsive layouts across target viewports:
  - 1440 × 900 (Desktop)
  - 1280 × 800 (Small Desktop / Laptop)
  - 1024 × 768 (Tablet Landscape)
  - 768 × 1024 (Tablet Portrait)
  - 390 × 844 (Mobile)
  - 360 × 800 (Small Mobile)
- Verified `@media (prefers-reduced-motion: reduce)` compliance disabling non-essential transitions.

### 6. Acceptance Criteria
- Automated axe-core accessibility audit reports 0 critical and 0 serious violations.
- Zero horizontal overflow (`overflow-x`) on any tested viewport.
- All interactive touch targets measure at least 44x44px or have equivalent padding.

### 7. Risks & Outstanding Questions
- Verification on real iOS Safari and Android Chrome hardware.

---

## Phase 9 — SEO, Performance Optimization & Production Readiness

### 1. Objective
Implement local business structured data (Schema.org), configure XML sitemaps and robots directives, optimize images with `next/image`, benchmark production builds, and prepare for deployment.

### 2. Pages & Components Affected
- Metadata & SEO: `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`.
- Image components: Implementation of `next/image` with WebP/AVIF generation.
- Build configuration: `next.config.ts`.

### 3. Issues Being Resolved
- `MCS-015`: Generation of production OpenGraph social sharing card (1200x630).
- `MCS-028`: Implementation of `AutoRepair` Schema.org JSON-LD structured data.
- `MCS-029`: Deployment of programmatic `sitemap.ts` and `robots.ts`.
- Optimization of First Load JS and Core Web Vitals (LCP, CLS, INP).

### 4. Dependencies
- Phase 1 through Phase 8 complete.

### 5. Expected Deliverables
- Validated `schema.org/AutoRepair` structured data declaring shop address, phone, geographic coordinates, opening hours, and aggregate rating.
- Dynamic `sitemap.ts` generating canonical URLs for all published pages.
- Production OpenGraph and Twitter card metadata with high-resolution brand asset.
- Lighthouse performance audit score $\ge$90 across Performance, Accessibility, Best Practices, and SEO.
- Zero hydration errors, console warnings, or broken assets in production build.

### 6. Acceptance Criteria
- Rich Results Test confirms valid `AutoRepair` schema without warnings.
- `npm run build` completes with all routes statically pre-rendered or ISR-configured.
- Final production sign-off delivered to project stakeholders.

### 7. Risks & Outstanding Questions
- Final DNS and domain propagation schedule from Ionos hosting to production Vercel/cloud infrastructure.

