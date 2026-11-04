# Military Car Service (MCS) — Brand & UI Design System

**Document status:** Approved direction / Phase One foundation  
**Brand:** Military Car Service  
**Primary market:** U.S. military community in Germany  
**Website language:** English  
**Primary conversion goals:** Service bookings and vehicle-purchase enquiries (equal priority)

---

## 1. Brand foundation

### Brand positioning
Military Car Service (MCS) is an automotive service and vehicle-sales business serving the U.S. military community in Germany, with a particular focus on American-spec vehicles.

**Positioning statement:** Professional automotive care, clear communication and dependable service for customers navigating vehicle ownership in Germany.

**Brand promise:** Your vehicle is treated with expertise, care and a clear sense of responsibility.

### Identity decisions
- **Direction:** Hybrid — performance automotive + precision engineering + restrained American heritage.
- **Logo:** Redesign. Build a complete responsive logo family rather than one isolated mark.
- **Primary tagline:** **YOUR CAR. OUR MISSION.**
- **Supporting line:** **American Automotive Expertise. German Precision.**
- **Accent:** Performance red.
- **Tone:** Confident, precise, dependable, professional and approachable.

### Brand voice
- Confident, never boastful.
- Straightforward and transparent.
- Professional without sounding cold.
- Approachable and helpful.
- Mission-focused, without pretending MCS is a military organisation.

Avoid unsupported claims, exaggerated guarantees, fake urgency and jargon-heavy copy.

---

## 2. Visual direction

The website should feel like a premium, modern automotive performance brand with the clarity and trust of a precision service business.

### Visual balance
- 60% performance automotive: bold typography, dark surfaces, dramatic real vehicle photography and confident composition.
- 25% precision engineering: clean grids, readable content, technical labels, clear information hierarchy.
- 15% restrained heritage: established-business credibility and subtle references to the American vehicle audience.

### Do not use
- Camouflage patterns.
- Military insignia, official seals or service branch marks.
- Flags as the main design language.
- Generic car silhouettes as the main logo.
- Excessive gears, wrenches or automotive clip-art.
- Overly aggressive racing graphics.
- Generic AI-looking gradients, glassmorphism or template-like card layouts.

MCS is an automotive business serving a military community, not a military organisation or an auto-parts retailer.

---

## 3. Logo system

### Primary recommended concept: MCS monogram + wordmark
Create a custom angular MCS monogram with strong geometric construction and subtle mechanical/motion-inspired cuts. Pair it with the full name **MILITARY CAR SERVICE**.

### Supporting logo concepts
1. **Precision badge:** A restrained circular or shield-inspired lockup for workshop merchandise, stickers and physical applications.
2. **Performance wordmark:** A clean horizontal MCS wordmark with a small red graphic detail for navigation and compact spaces.

### Required logo variants
- Primary horizontal logo.
- Stacked logo.
- Standalone MCS monogram.
- Optional badge version.
- Light-on-dark version.
- Dark-on-light version.
- Single-colour version.

### Logo constraints
- Must remain legible at favicon and mobile-header sizes.
- Must work in monochrome.
- Must be supplied as clean SVG artwork.
- Do not rely on gradients, tiny detail or thin strokes.
- Do not use the gear icon as the primary brand mark.
- The visual logo concepts in the reference image are directional only; do not trace or reproduce them as final artwork.

---

## 4. Colour system

### Core brand colours

| Token | Hex | Use |
|---|---|---|
| `mcs-obsidian` | `#111418` | Primary dark background |
| `mcs-graphite` | `#202830` | Secondary dark surfaces, panels |
| `mcs-red` | `#D83A3A` | Primary accent, main actions |
| `mcs-ivory` | `#F5F4EF` | Light surfaces and high-contrast text |
| `mcs-steel` | `#AAB2B8` | Secondary text and neutral details |
| `mcs-iron` | `#343C43` | Borders, dividers and outlines |

### Functional colours
- Success: `#27865C`
- Warning: `#D69B32`
- Error: `#D83A3A`
- Information: `#347DA5`

### Usage guidance
- Approximate visual balance: 55% dark backgrounds/surfaces, 25% ivory/light surfaces, 15% neutral typography/details, 5% red accents.
- Red is a high-attention colour. Reserve it for primary CTAs, active states, important links and selected highlights.
- Never use red for every icon, border or heading.
- Maintain accessible text contrast. Do not assume the brand red is suitable for small text on every background; test contrast and use a darker red or a light text treatment where necessary.
- Support both dark and light sections. The site must not become one uninterrupted dark slab.

---

## 5. Typography

### Brand typefaces
- **Barlow Condensed:** display headlines, hero titles, campaign statements and large numeric highlights. Use bold/extra-bold weights.
- **Inter:** body copy, navigation, forms, buttons, labels and general interface text.
- **IBM Plex Mono:** technical labels, service identifiers, metadata and small specification details.

### Type hierarchy (desktop starting points)
| Element | Size | Weight |
|---|---:|---|
| Hero headline | 64–80px | Barlow Condensed Bold |
| Section heading | 40–52px | Barlow Condensed Bold |
| Card heading | 22–26px | Inter Semibold |
| Body | 16–18px | Inter Regular |
| Small text | 13–14px | Inter Regular |
| Technical label | 11–12px | IBM Plex Mono Medium |

Use fluid responsive sizing and comfortable line-height. Condensed type is for short display copy, not paragraphs or form labels. Keep body copy highly readable on mobile.

---

## 6. Photography and art direction

Use genuine MCS workshop, team, customer and vehicle photography wherever possible. Until supplied, use carefully selected automotive imagery as temporary placeholders and mark it for replacement.

### Preferred imagery
- American vehicles in Germany.
- Close-up vehicle details and strong front three-quarter angles.
- Real technicians working in a clean, active workshop.
- Diagnostics, maintenance and repair in progress.
- Genuine vehicle-sales inventory.
- Real staff portraits and workshop environment.

### Treatment
- Cinematic but believable lighting.
- Natural colour and realistic vehicle details.
- Dark overlays only where required for text legibility.
- Consistent image crops within a component.
- Avoid fake logos, fabricated customer photos and AI-generated workshop staff presented as actual MCS employees.

All temporary assets must be easy to replace. Track image source, licence and attribution where required.

---

## 7. UI foundations

### Layout
- Desktop content maximum width: approximately 1280px.
- 12-column desktop grid.
- 8px spacing base.
- Clear alignment and generous section spacing.
- Responsive-first implementation.
- Avoid unnecessary nested cards and excessive rounded containers.

### Spacing tokens
| Token | Value |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-24` | 96px |

### Shape and borders
- Use restrained corner radii; do not round every element.
- Cards may use a modest radius and subtle border.
- Use `#343C43` for dark-surface borders.
- Avoid heavy shadows on every component.
- Use clear focus rings and visible interactive states.

### Buttons
- Primary: `#D83A3A` with white text.
- Secondary: transparent/graphite with a subtle border.
- Tertiary: text link, optionally with a directional arrow.
- Minimum interactive target: 44px high.
- Include hover, focus-visible, active, disabled and loading states.
- Button copy should be specific: “Book a Service”, “Sell Your Vehicle”, “Explore Services”.

### Forms
- Visible labels above controls.
- Clear required/optional indication.
- Helpful examples and validation messages.
- Keyboard accessible and mobile-friendly.
- Preserve entered data between steps.
- Clear progress indication for multi-step journeys.
- Provide submission, error and confirmation states.
- Do not build a fake live booking or pretend to persist data in Phase One.

### Motion
- Use restrained transitions for hover, navigation and section reveal.
- Motion must support hierarchy, not distract.
- Respect `prefers-reduced-motion`.
- Avoid excessive parallax, scroll hijacking and magnetic interactions.

---

## 8. Website information architecture

Primary conversion goals have equal importance:
1. Service and repair bookings.
2. Vehicle purchase / sell-your-vehicle enquiries.

### Proposed sitemap
- Home
- Services
- Sell Your Vehicle
- Book Appointment
- About
- Reviews
- Gallery
- Contact
- Careers (only if current vacancies are verified)
- Legal: Impressum, Privacy Policy, Terms & Conditions

A separate military PCS / vehicle assistance page may be considered only after MCS confirms the exact services offered.

### Homepage section order
1. Header/navigation.
2. Hero: “American Auto Care in Germany.”
3. Two primary actions: “Book a Service” and “Sell Your Vehicle.”
4. Trust strip with verified credentials only.
5. Services overview.
6. Sell-your-vehicle feature.
7. Why choose MCS.
8. About MCS / team.
9. Customer reviews with verified source.
10. Workshop and vehicle gallery.
11. Location, opening hours and contact.
12. FAQ.
13. Final CTA.
14. Footer and legal links.

### Hero direction
- Dark, high-impact composition.
- Large Barlow Condensed headline.
- Authentic American vehicle/workshop photography.
- Red primary CTA and outlined secondary CTA.
- Supporting line that explains MCS serves the U.S. military community in Germany.

### Services
Potential categories to validate with the business:
- Maintenance and servicing.
- Repairs and diagnostics.
- Tyres and wheels.
- Performance and upgrades.

Do not publish service categories, prices, warranties or capabilities as confirmed until the owner verifies them.

### Vehicle sales / buying
Use a dedicated section and page with a clear process and enquiry CTA. Do not promise automatic valuations or guaranteed purchase offers.

---

## 9. Reusable component inventory

Build a coherent component system rather than one-off page elements.

- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `HeroSection`
- `TrustBar`
- `SectionHeading`
- `ServiceCard`
- `VehicleCard`
- `ReviewCard`
- `GalleryGrid`
- `LocationPanel`
- `FAQAccordion`
- `CTASection`
- `FormField`
- `ProgressIndicator`
- `BookingSummary` (UI only in Phase One)
- `ConfirmationPanel` (UI state only in Phase One)

Use consistent variants and tokens. Avoid duplicating styles across pages.

---

## 10. Content, trust and factual accuracy

The website must not invent business information. Confirm before publishing:
- Current phone number and email.
- Current address and opening hours.
- Exact service catalogue.
- Whether towing/roadside support is offered and under what conditions.
- Current vehicle inventory and purchase process.
- Current staff/team details.
- Current customer reviews and ratings.
- Current careers/vacancies.
- Correct social media account.
- Legal company details and privacy requirements.

The existing site has shown inconsistent/placeholder contact information in places. Do not carry over placeholder phone numbers, email addresses, outdated location copy or stale job listings. Use clearly labelled temporary content where verification is pending.

---

## 11. Technical design constraints for Phase One

The first phase is a frontend foundation and UI implementation only.

Recommended stack:
- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- shadcn/ui where appropriate.
- Lucide icons.
- Framer Motion only for purposeful, restrained motion.

Implementation rules:
- Use design tokens/CSS variables for brand values.
- Use reusable components and semantic HTML.
- Make layouts responsive and keyboard accessible.
- Keep content/data separate from presentation.
- Use local mock data for service cards, vehicle cards and reviews.
- No production backend, database, authentication, payment processing, email sending or live scheduling in Phase One.
- Do not connect a real booking system until its workflow and business rules are agreed.
- Do not add unnecessary dependencies.

---

## 12. Phase One definition of done

Phase One is complete when:
- The project structure is organised and documented.
- The requested agent skills are installed and verified for Antigravity.
- `design.md` and project instructions are present.
- The brand tokens and typography are implemented.
- The reusable UI foundations exist.
- The homepage is implemented against the approved reference direction.
- The homepage works at mobile, tablet and desktop breakpoints.
- No obvious console errors, broken links or placeholder contact details are presented as real.
- Accessibility basics and reduced-motion behaviour are covered.
- A README explains setup, scripts, structure and the next phase.
- No backend or live booking integration has been started.

**Phase One ends with a polished, responsive frontend foundation. Backend and production integrations are a later phase.**
