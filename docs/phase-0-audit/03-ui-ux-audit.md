# 03 — Page-by-Page UI/UX & Design System Audit
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/03-ui-ux-audit.md`  
**Date:** November 2026  
**Auditor:** Senior Product Designer, UI/UX Auditor & Frontend Architect  
**Status:** Complete & Verified  

---

## 1. Design System & Brand Direction Alignment

The agreed brand direction established for the MCS redesign is a calibrated hybrid:
- **60% MCS Performance:** Bold, confident, automotive-focused, dark foundation.
- **25% Precision Automotive:** Clean layout, technical detail, engineering-inspired typography.
- **15% American Heritage:** Subtle nods to classic and modern American automotive culture.

### Brand Token Compliance Matrix

| Token Name | Specification Value | Implemented Value in Code | Compliance Status | Audit Findings & Required Action |
|---|---|---|---|---|
| **Primary Background (Obsidian)** | `#111418` | `#111418` | Compliant | Correctly established as page baseline and section canvas. |
| **Secondary Background (Graphite)** | `#202830` | `#202830` | Compliant | Used consistently for elevated cards, headers, and form containers. |
| **Primary Text (Warm Ivory)** | `#F5F4EF` | `#F5F4EF` | Compliant | Used for high-contrast display headings and primary text. |
| **Secondary Text (Steel)** | `#AAB2B8` | `#AAB2B8` | Compliant | Used for descriptive paragraphs, technical labels, and muted copy. |
| **Border / Divider (Iron)** | `#343C43` | `#343C43` | Compliant | Consistent structural border token across sections and cards. |
| **Accent Red** | **`#E23B3B`** | **`#D83A3A`** / `#BA2E2E` | **NON-COMPLIANT** | The codebase hardcodes `#D83A3A` (a darker, desaturated crimson) across all buttons, badges, hover states, and SVGs, deviating from the approved vibrant `#E23B3B`. Must normalize to `#E23B3B`. |
| **Light Surface** | **`#F2F0EA`** | `#F5F4EF` / `#EDEDE8` | **NON-COMPLIANT** | `SellYourVehicleSection.tsx` uses `#F5F4EF` (identical to primary text token) and `#EDEDE8` in SVGs rather than dedicated light surface token `#F2F0EA`. |
| **Display Font** | Barlow Condensed | Barlow Condensed (`600`, `700`, `800`) | Compliant | Correctly loaded via `next/font/google` and mapped to `--font-display`. |
| **Interface Font** | Inter | Inter (`400`, `500`, `600`, `700`) | Compliant | Correctly loaded and mapped to `--font-sans`. |
| **Technical Label Font** | IBM Plex Mono | IBM Plex Mono (`400`, `500`, `600`) | Compliant | Correctly mapped to `--font-mono` for kickers, tags, and micro-copy. |

---

## 2. Page-by-Page Detailed Inspection

Because the current redesign implements only a single page (`/`), this audit evaluates every constituent section sequentially, along with the standalone 404 page.

---

### A. Global Header & Navigation (`SiteHeader.tsx`, `MobileNavigation.tsx`)

#### Visual & Layout Inspection
- **Desktop (1440px):** Sticky 80px bar with `bg-[#111418]/95 backdrop-blur-md` and bottom border `#343C43`. Left-aligned MCS logo, center-aligned 8-item navigation link set, and right-aligned phone CTA with primary action button.
- **Mobile (390px):** Logo, compact "Book" button, and hamburger menu icon.

#### Defect & Usability Analysis
1. **Invalid HTML Button Nesting (P0):** In `SiteHeader.tsx`, `<Button asChild><Link href="#book-service">Book a Service</Link></Button>` renders `<button><a href="...">...</a></button>`. This is invalid HTML5, causing hydration errors and confusing screen readers and keyboard tabbing.
2. **Unclickable Phone Display (P1):** The phone number `+49 631 ••• ••••` in the header is an unclickable `<div>` with an ad-hoc CSS hover tooltip rather than a standard accessible `tel:` link. On mobile, this phone notice is hidden (`hidden sm:flex`), depriving mobile users of immediate calling access.
3. **Unapproved Marketplace Link (P0):** The desktop navigation and mobile drawer explicitly include "Vehicles" (`href="#vehicles"`), promoting the unapproved vehicle marketplace.
4. **Mobile Navigation Trapping & Transitions (P1):** `MobileNavigation.tsx` does not implement a focus trap. Pressing Tab while the mobile drawer is open causes focus to escape into hidden background DOM elements. It also lacks a smooth slide-in transition, snapping abruptly into view.

---

### B. Hero Section (`HeroSection.tsx`)

#### Visual & Layout Inspection
- **Dimensions:** High-impact full-width container (`min-h-[85vh]` on mobile, `90vh` on desktop).
- **Typography:** Display headline `"YOUR CAR. OUR MISSION."` rendered in Barlow Condensed 900 at 96px on desktop (6.7vw) with leading `0.92`. Very strong visual hierarchy.
- **Dual CTAs:** "Book a Service" (primary red button) and "Sell Your Vehicle" (secondary graphite button).

#### Defect & Usability Analysis
1. **Hand-Coded SVG Vehicle Artifice (P1 — Rule E):** Lines 26–136 contain 110 lines of hardcoded SVG coordinates drawing a stylized American off-road truck. While technically impressive, this violates Rule E: authentic photography of genuine customer or workshop vehicles must replace artificial illustrations.
2. **Contrast & Readability on Medium Viewports (P2):** On viewports between 768px and 1024px (tablets), the SVG truck graphic collides with the left-aligned hero copy, reducing text readability despite the gradient vignette.
3. **Misleading Pre-Owned Inventory Copy (P1):** Supporting copy states: *"Specialized diagnostics, certified maintenance, parts sourcing, and quality pre-owned vehicle sales..."* Incorporates the unapproved vehicle sales concept into the hero statement.

---

### C. Trust Bar (`TrustBar.tsx`)

#### Visual & Layout Inspection
- **Layout:** 4-column strip with subtle borders separating capabilities.
- **Pillars:** 1. U.S. Military Friendly, 2. American Vehicles, 3. Full-Service Workshop, 4. Vehicle Sales.

#### Defect & Usability Analysis
1. **Unapproved Pillar (P0 — Rule B):** Pillar 4 is titled *"Vehicle Sales: Buy or sell with confidence. Transparent purchase process, PCS buyouts, and verified pre-owned American vehicles."* This reinforces the false inventory sales model.
   - **Correction:** Re-anchor this pillar purely to **"We Buy Cars"** or **"PCS Vehicle Buyouts"** (*"Immediate cash offers and hassle-free German deregistration for departing personnel"*).
2. **Omission of Founding Year & Awards (P2):** The trust strip fails to highlight MCS's 18-year legacy (Founded 2008) or its Best Auto Repair Shop award in Stuttgart.

---

### D. Services Overview (`ServicesOverview.tsx`, `ServiceCard.tsx`)

#### Visual & Layout Inspection
- **Layout:** 2x2 grid of elevated graphite cards (`#202830`) with `#343C43` borders.
- **Cards:** Maintenance & Service, Repairs & Diagnostics, Tires & Wheels, Performance & Upgrades.

#### Defect & Usability Analysis
1. **Unverified Service Offering (P1 — Rule C):** Card 4 (*"Performance & Upgrades"*) lists *"Cat-back exhaust & intake systems, Truck leveling kits & lift packages, German TÜV registration guidance."* None of these claims appear on the original website. Publishing performance tuning without business confirmation creates severe operational risk.
2. **Missing Authentic Services (P1):** Towing recovery, vehicle inspection pre-checks, loaner vehicles, and German deregistration paperwork are omitted from the main service grid.
3. **Dead Action Triggers (P2):** Each card footer includes a "View Details" text link pointing to `#services` (the same section on the page). Clicking these links does nothing.

---

### E. Sell Your Vehicle Feature (`SellYourVehicleSection.tsx`)

#### Visual & Layout Inspection
- **Canvas:** Full-width light ivory section (`#F5F4EF`) providing visual punctuation in an otherwise dark theme.
- **Composition:** 2-column grid. Left: White American muscle car (Dodge Challenger) graphic in dark box. Right: Kicker, headline, value proposition, and 3 process steps.

#### Defect & Usability Analysis
1. **Critical CTA Routing Bug (P0):** The primary button *"Get a Vehicle Evaluation"* has `href="#book-service"`. Clicking this scrolls the user down to the **mechanical repair booking form** instead of a vehicle valuation funnel!
2. **Hand-Coded SVG Muscle Car (P2 — Rule E):** Uses a 50-line SVG illustration with hardcoded red LED taillight paths instead of real photography of an acquired customer vehicle.
3. **Unverified "Consignment" Claim (P1):** Section overlay states *"Immediate Cash or Consignment"*. Consignment was never offered or verified on the original website. MCS offers direct buyouts.
4. **Color Token Deviation (P2):** Section background uses `#F5F4EF` instead of the specified light surface token `#F2F0EA`.

---

### F. Why Choose MCS (`WhyChooseSection.tsx`)

#### Visual & Layout Inspection
- **Layout:** 3-column value proposition container on obsidian canvas.
- **Pillars:** Specialized Expertise, Transparent & Fair, Convenient & Reliable.

#### Defect & Usability Analysis
1. **Generic Stock Copy (P2):** The copy relies on generic automotive phrases (*"Dedicated knowledge of American and European vehicles..."*) rather than highlighting MCS's authentic strengths: English-speaking American military brat mechanics, German economy location near Panzer Kaserne, and direct US parts sourcing.
2. **Visual Monotony (P3):** Simple text cards with Lucide icons. Would benefit from authentic facility imagery or technical data badges.

---

### G. Vehicle Sales Inventory Showcase (`VehicleInventorySection.tsx`, `VehicleCard.tsx`)

#### Visual & Layout Inspection
- **Layout:** Section heading, 5-column filter bar (Make, Model, Price, Year, Search/Reset), 3 sample vehicle cards (`SAMPLE_VEHICLES`).

#### Defect & Usability Analysis
1. **CRITICAL VIOLATION OF RULE B (P0 — UNAPPROVED INVENTED FEATURE):**
   - The entire section is an invented marketplace catalog displaying pre-owned vehicles with prices (€49,900, €46,900, €38,900), mileage, fuel type, and transmission specs.
   - `VehicleCard.tsx` includes an interactive favorite heart button (`Save vehicle to favorites`).
   - Filter dropdowns allow filtering by Ford, Chevrolet, Dodge, and price ranges.
   - **Impact:** Misrepresents the business model. MCS buys cars; it does not operate an online car sales catalog.
   - **Mandatory Action:** **Remove this section entirely from the redesign scope.**

---

### H. About Section (`AboutSection.tsx`)

#### Visual & Layout Inspection
- **Layout:** 2-column asymmetric layout. Left: Narrative and 3 feature highlight cards. Right: "Operational Standards" badge box.

#### Defect & Usability Analysis
1. **Erasure of Founder Identity & History (P0):** The section omits Dom Hagemann, his background as a certified mechanic and military brat from Hanau, his AAFES Auto Exchange service, the 2008 founding date, and the April 2020 move to Stuttgart/Böblingen.
2. **Invented Regional Scope (P1):** Operational standards box lists *"Serving Military Communities In: Ramstein Air Base, Landstuhl, Vogelweh, Kleber Kaserne, Sembach, Baumholder..."* This is geographically false. The workshop is in Weil im Schönbuch (Stuttgart/Panzer Kaserne community).

---

### I. Customer Reviews Section (`ReviewsSection.tsx`, `ReviewCard.tsx`)

#### Visual & Layout Inspection
- **Layout:** 3-card grid on dark canvas with a yellow disclaimer banner beneath.

#### Defect & Usability Analysis
1. **Fabricated Testimonials (P0 — Rule D):** Renders three fake customer reviews with fabricated USAF, US Army, and DoD Civilian identities and locations (Ramstein, Kaiserslautern, Baumholder).
2. **Production Developer Banner (P1):** Renders an alert box: *"Phase One Quality Notice: Testimonials displayed above are developmental sample cards..."* Exposing development caveats in customer-facing UI damages credibility.
3. **Disconnection from Real Review Authority (P1):** MCS possesses an outstanding **4.9-star Google rating based on over 300 reviews**, but this section does not display this score or provide a link to the official Google Maps review listing.

---

### J. Workshop & Facility Gallery (`WorkshopGallery.tsx`)

#### Visual & Layout Inspection
- **Layout:** Asymmetric 5-card grid (1 large 16:9 card, 4 smaller 4:3 cards).

#### Defect & Usability Analysis
1. **Repetitive Vector Lift Artifice (P1 — Rule E):** Every card in the gallery displays the exact same hand-coded SVG vector illustration of a car on a hydraulic lift post.
2. **Dead Zoom Triggers (P2):** Card overlays feature a `ZoomIn` icon with hover transitions, suggesting an interactive lightbox. Clicking the cards or icons produces no action.
3. **Excessive Vertical Height (P2):** On mobile viewports, the 5 cards stack vertically, creating 1,200px of repetitive placeholder artwork.

---

### K. Booking Appointment Section (`BookingAppointmentSection.tsx`, `FormField.tsx`)

#### Visual & Layout Inspection
- **Layout:** 12-column grid. Left 8 cols: 3-step interactive booking form. Right 4 cols: Workshop location and operating hours summary card.

#### Defect & Usability Analysis
1. **Disconnected Prototype Form (P0):** The 410-line form is a local state machine that collects service, vehicle, and personal data, but upon step 3 submission, it merely displays an inline success message. It does not persist data to a database, dispatch emails, or connect to MCS's active booking engine (**eTermin**).
2. **Wrong Location & Service Area in Sidebar (P0):** Sidebar displays placeholder Kaiserslautern address and lists KMC installations instead of Weil im Schönbuch / Panzer Kaserne.
3. **Missing Shop Cancellation & Late Policies (P1):** Fails to inform customers of MCS's mandatory 48-hour cancellation policy, late arrival terms, and 18.50€/day storage fees established on the original site.

---

### L. Frequently Asked Questions (`FAQSection.tsx`, `FAQAccordion.tsx`)

#### Visual & Layout Inspection
- **Layout:** Category filter pills (All, Military & VAT, Workshop & Repairs, Vehicle Sales) and vertical accordion list.

#### Defect & Usability Analysis
1. **Hand-Written State Machine (P2):** Uses a custom React state array rather than accessible Radix UI Accordion primitives, missing keyboard navigation standards.
2. **Category Filter Pill Jitter (P3):** Filtering categories instantly changes the vertical height of the section, causing noticeable layout shift for the footer below.

---

### M. Closing CTA Banner (`CTASection.tsx`)

#### Visual & Layout Inspection
- **Layout:** Full-width rounded card container on dark background with gradient styling.
- **CTAs:** Dual buttons: "Book a Service" (primary red) and "Sell Your Vehicle" (secondary graphite).

#### Defect & Usability Analysis
1. **Invalid Button Nesting (P0):** Both buttons wrap `<Link>` inside `<Button asChild>`, triggering the nested `<button><a>` DOM bug.
2. **Hardcoded Unverified Phone (P1):** Displays `+49 631 ••• ••••` with an inline verification note.

---

### N. Global Footer (`SiteFooter.tsx`)

#### Visual & Layout Inspection
- **Layout:** Multi-column layout with brand column, 3 navigation link columns, and 1 workshop info column.

#### Defect & Usability Analysis
1. **Dead Legal Anchors (P0):** All legal links (*Impressum*, *Privacy Policy*, *Terms of Service*) point to `href="#legal"`. Because `#legal` does not exist on the page, clicking these links does nothing. This fails German legal disclosure requirements.
2. **Production Verification Warning Banner (P1):** Displays an active yellow alert box: *"Business Details Pending Client Verification: Opening hours, exact workshop street address, and direct phone lines are formatted as placeholders..."*
3. **Incorrect Geographic Details (P0):** Workshop column displays Kaiserslautern / Ramstein placeholders instead of Weil im Schönbuch.

---

### O. Custom 404 Page (`not-found.tsx`)

#### Visual & Layout Inspection
- **Layout:** Clean centered error page with "Error 404", "Off Track" headline, and "Back to Workshop" button.

#### Defect & Usability Analysis
1. **Invalid Button Nesting (P0):** Wraps `<Link href="/">` inside `<Button asChild>`.
2. **Residual Marketplace Copy (P2):** Subtitle text states: *"The page or vehicle record you are looking for does not exist or has been relocated."* Copy should reflect automotive workshop services, not inventory records.

---

## 3. Comprehensive UI/UX Issue Register

| ID | Component / Area | Defect Description | User / Business Impact | Recommended Correction | Priority |
|---|---|---|---|---|---|
| **UI-001** | `Button.tsx` (Global) | `asChild` prop is ignored, nesting `<a>` inside `<button>`. | Invalid HTML5, broken keyboard accessibility, screen reader confusion. | Install `@radix-ui/react-slot`, rewrite Button to use `Slot` when `asChild` is true. | **P0** |
| **UI-002** | `SellYourVehicleSection.tsx` | Primary CTA button links to `#book-service` (mechanical repair). | Severe UX breakdown: vehicle sellers are routed to service booking form. | Change link target to dedicated valuation route `/sell-your-vehicle`. | **P0** |
| **UI-003** | `VehicleInventorySection.tsx` | Implemented pre-owned vehicle sales catalog, filters, and favorite buttons. | Violates business model (Rule B). MCS buys cars; it is not a car sales dealer. | Remove section, components, and vehicle data completely. | **P0** |
| **UI-004** | `SiteFooter.tsx` | Legal links (*Impressum*, *Privacy*, *Terms*) link to dead `#legal` anchor. | Legal liability under German TMG § 5 and EU GDPR. | Implement dedicated `/impressum`, `/privacy`, and `/terms` routes. | **P0** |
| **UI-005** | `BookingAppointmentSection.tsx` | 410-line form is a local prototype with no submission or eTermin link. | Customers cannot book real appointments; submissions vanish. | Connect to official eTermin booking workflow or direct API. | **P0** |
| **UI-006** | `AboutSection.tsx` | Founder Dom Hagemann, 2008 founding, and Stuttgart move omitted. | Erases brand heritage, personal authority, and customer trust. | Restore authentic founder biography and award history. | **P0** |
| **UI-007** | `ReviewsSection.tsx` | Displays 3 fabricated customer quotes from Ramstein/Baumholder. | Violates Rule D, risks deceptive advertising penalties. | Replace with verified Google Reviews (4.9 stars, 300+ reviews). | **P0** |
| **UI-008** | `BookingAppointmentSection.tsx` | Sidebar lists Kaiserslautern / Ramstein address and service areas. | Misinforms customers of workshop location (shop is in Weil im Schönbuch). | Correct address to Karl-Benz-Str. 17, 71093 Weil im Schönbuch. | **P0** |
| **UI-009** | `SiteHeader.tsx` | Phone display is an unclickable text element; hidden on mobile. | Mobile users cannot tap to call the workshop. | Convert to clickable `tel:+4971575377196` link with phone icon. | **P1** |
| **UI-010** | `MobileNavigation.tsx` | Lacks focus trap and smooth entry transition. | Keyboard and screen reader users can navigate behind open menu. | Refactor using shadcn `Sheet` / Radix Dialog. | **P1** |
| **UI-011** | `ServicesOverview.tsx` | "Performance & Upgrades" card makes unverified TÜV/tuning claims. | Violates Rule C; creates false service expectations. | Hold card pending owner verification or replace with verified Towing. | **P1** |
| **UI-012** | `WorkshopGallery.tsx` | 5 cards repeat identical SVG hydraulic lifts; zoom buttons are dead. | Visually repetitive, confusing interactive dead ends. | Convert to carousel; obtain authentic workshop photos; add lightbox. | **P1** |
| **UI-013** | Design Tokens (Global) | Hardcodes crimson `#D83A3A` instead of specified accent `#E23B3B`. | Inconsistent brand identity across buttons, borders, and SVGs. | Normalize all accent colors to `#E23B3B`. | **P2** |
| **UI-014** | `HeroSection.tsx` | Uses 110-line SVG truck illustration instead of real photography. | Feels synthetic and generic rather than an authentic workshop. | Replace with high-resolution photography of real customer vehicles. | **P2** |
| **UI-015** | `FAQAccordion.tsx` | Hand-rolled toggle lacks keyboard navigation and smooth animation. | Fails WAI-ARIA accordion accessibility standards. | Replace with official shadcn Accordion (`@radix-ui/react-accordion`). | **P2** |
| **UI-016** | `not-found.tsx` | 404 error copy references "vehicle record". | Reflects obsolete car sales marketplace model. | Update copy to "service or page". | **P3** |

