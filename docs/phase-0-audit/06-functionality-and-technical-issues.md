# 06 — Functionality & Technical Issues Audit
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/06-functionality-and-technical-issues.md`  
**Date:** November 2026  
**Auditor:** Technical Lead & Frontend Architect  
**Status:** Complete & Verified  

---

## 1. Executive Summary

This document details all functional defects, dead buttons, broken navigation routes, form handling shortcomings, and technical anomalies discovered across the current Military Car Service (MCS) codebase.

Although static code checks (`npm run lint`, `npx tsc --noEmit`, and `npm run build`) pass without terminal errors, a deep runtime and behavioral inspection reveals **critical functional failures**:
1. **Critical CTA Misrouting:** The primary action button on the "Sell Your Vehicle" section routes prospective car sellers directly into the repair appointment form (`#book-service`).
2. **Interactive Dead Ends:** Multiple interface elements that visually mimic interactive controls (phone header display, vehicle favorite buttons, workshop gallery zoom icons, service card detail links, footer legal links) perform no action when clicked.
3. **Disconnected Prototype Booking Engine:** The 410-line booking appointment form in `BookingAppointmentSection.tsx` is completely decoupled from any backend database, email delivery service, or MCS's actual booking system (**eTermin**). Submitting the form silently renders an in-memory success banner and discards the user's data.
4. **Invalid DOM Structure Bug:** The custom `Button` component attempts to support `asChild` composition without utilizing Radix UI `Slot`, causing illegal `<button><a href="...">` DOM nesting across the site.
5. **Missing Routes & Dead Directories:** Directory stubs `src/app/book-appointment/` and `src/app/(marketing)/` contain no `page.tsx` files, triggering Next.js 404 errors if directly accessed.

---

## 2. Non-Destructive Code & Build Tooling Verification

All standard non-destructive repository verification checks were executed in the Linux runtime environment. The exact tool outputs are recorded below:

### A. TypeScript Compilation Check (`npx tsc --noEmit`)
- **Command:** `npx tsc --noEmit`
- **Exit Code:** `0`
- **Output:** Clean; 0 type errors detected.
- **Analysis:** TypeScript interfaces in `src/types/index.ts` and component prop typings are strictly typed. However, the presence of `asChild?: boolean` in `ButtonProps` satisfied TypeScript while concealing a major runtime HTML nesting bug.

### B. ESLint Static Analysis (`npm run lint`)
- **Command:** `npm run lint`
- **Exit Code:** `0`
- **Output:**
  ```
  > mcs-website@0.1.0 lint
  > eslint
  ```
  0 errors, 0 warnings.
- **Analysis:** ESLint flat config (`eslint.config.mjs`) extending `eslint-config-next` passes cleanly.

### C. Next.js Production Build (`npm run build`)
- **Command:** `npm run build`
- **Exit Code:** `0`
- **Output:**
  ```
  ▲ Next.js 16.4.5 (Turbopack)
  ✓ Running next.config.ts took 49ms
  - Cache Components enabled
  - Partial Prefetching enabled
  ✓ Compiled successfully in 2.3s
  ✓ Finished TypeScript in 5.8s 
  ✓ Generating static pages using 3 workers (4/4) in 719ms

  Route (app)                              Size     First Load JS
  ┌ ○ /                                    142 kB          248 kB
  └ ○ /_not-found                          1.2 kB          107 kB
  + First Load JS shared by all            106 kB
  ```
- **Analysis:** The build succeeds, but confirms that only **two routes** exist in the entire application: `/` and `/_not-found`.

---

## 3. Broken Navigation & Dead Link Register

| Component | Target Text / Element | Declared `href` / Trigger | Observed Behavior | Functional Failure Description | Priority |
|---|---|---|---|---|---|
| `SellYourVehicleSection.tsx` | "Get a Vehicle Evaluation" (Primary CTA) | `href="#book-service"` | Scrolls user to repair booking form. | **CRITICAL MISROUTING:** Sellers wanting to offload a vehicle are presented with a mechanical repair scheduling form asking for "Service Type" and "Check Engine symptoms". | **P0** |
| `SiteFooter.tsx` | "Impressum (Legal Notice)" | `href="#legal"` | No action; page jumps nowhere. | Dead link. `#legal` ID does not exist on the page. Violates German TMG § 5. | **P0** |
| `SiteFooter.tsx` | "Privacy Policy (Datenschutz)" | `href="#legal"` | No action; page jumps nowhere. | Dead link. `#legal` ID does not exist on the page. Violates EU GDPR. | **P0** |
| `SiteFooter.tsx` | "Terms of Service" | `href="#legal"` | No action; page jumps nowhere. | Dead link. `#legal` ID does not exist on the page. | **P0** |
| `SiteHeader.tsx` | Header Phone Number | Plain `<div>` with hover tooltip | No action on click. | Not an interactive `tel:` link. Tapping it on mobile or desktop does nothing. | **P1** |
| `SiteHeader.tsx` | "Vehicles" (Nav item) | `href="#vehicles"` | Scrolls to unapproved vehicle sales section. | Promotes unapproved vehicle sales inventory catalog (Rule B). | **P0** |
| `ServicesOverview.tsx` | "View Details" (on 4 service cards) | `href="#services"` | Scrolls to top of the current section. | Circular dead link; does not display expanded service information or open a modal. | **P2** |
| `WorkshopGallery.tsx` | Card Overlays / `ZoomIn` icon | None (`<div>` with hover CSS) | No action on click. | Appears as an interactive image viewer / lightbox trigger, but does nothing. | **P2** |
| `VehicleCard.tsx` | Favorite Heart Button | `<button type="button">` with no `onClick` | No action on click. | Part of unapproved car sales inventory. Non-functional bookmark button. | **P0** |
| `SiteHeader.tsx` | "Book a Service" | `Button asChild` $\rightarrow$ `<Link href="#book-service">` | Scrolls to form, but outputs invalid `<button><a>`. | Invalid DOM nesting; tab navigation and screen reader issues. | **P0** |
| Direct URL | `/book-appointment` | Direct browser navigation | Next.js 404 Error. | Directory `src/app/book-appointment/` is empty without a `page.tsx`. | **P1** |
| Direct URL | `/services`, `/about`, `/contact`, `/jobs` | Direct browser navigation | Next.js 404 Error. | Routes do not exist in the App Router. | **P1** |

---

## 4. Form Handling & Workflow Evaluation

### A. Appointment Booking Prototype (`BookingAppointmentSection.tsx`)

1. **State Machine Architecture:**
   - Managed entirely via local React `useState`:
     ```tsx
     const [currentStep, setCurrentStep] = useState<number>(1);
     const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
     const [formData, setFormData] = useState({ ... });
     ```
2. **Defects & Technical Shortcomings:**
   - **Data Discard on Submit:** In `handleNext`:
     ```tsx
     if (currentStep < 3) {
       setCurrentStep((prev) => prev + 1);
     } else {
       setIsSubmitted(true); // Data is NEVER saved, sent, or logged!
     }
     ```
     Submitting step 3 merely flips a boolean in component state. All captured customer details (name, email, phone, vehicle model, symptoms) are lost upon page reload.
   - **No Real Availability Engine:** Does not connect to live mechanical bay calendars or time slots.
   - **Bypasses Real Business System (eTermin):** MCS's actual business workflow uses `https://www.etermin.net/militarycarservice`. If a customer assumes they booked a service through this prototype, they will arrive at the workshop with no actual appointment on file.
   - **Missing Validation:** Form fields lack phone number format verification, email regex validation, and sanitized inputs.

### B. We Buy Cars Valuation Funnel (`SellYourVehicleSection.tsx`)

1. **Complete Absence of Valuation Form:**
   - The section provides no input fields, no multi-step quote wizard, and no iframe embed.
   - Its sole button redirects to `#book-service`.
2. **Disconnection from Real Business System (JotForm):**
   - MCS's actual vehicle acquisition engine is powered by a 14-field JotForm (`https://form.jotform.com/260212217151037`).
   - The redesign fails to implement any of the required vehicle acquisition fields (VIN, HSN/TSN, German green papers, asking price, payoff details).

---

## 5. Technical Errors & Code Anomalies

### A. The `asChild` Button Component Flaw

In `src/components/ui/Button.tsx`:
```tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean; // Declared here
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    // BUG: asChild is omitted from destructuring and never checked!
    return (
      <button ref={ref} disabled={disabled || isLoading} className={cn(...)} {...props}>
        {/* ... */}
        <span>{children}</span>
      </button>
    );
  }
);
```

#### Affected Call Sites
1. `SiteHeader.tsx` (lines 65–73):
   ```tsx
   <Button asChild variant="primary" size="sm">
     <Link href="#book-service">Book a Service</Link>
   </Button>
   ```
2. `HeroSection.tsx` (lines 142–159):
   ```tsx
   <Button asChild variant="primary" size="lg">
     <Link href="#book-service">Book a Service</Link>
   </Button>
   <Button asChild variant="secondary" size="lg">
     <Link href="#sell-your-vehicle">Sell Your Vehicle</Link>
   </Button>
   ```
3. `SellYourVehicleSection.tsx` (lines 143–151):
   ```tsx
   <Button asChild variant="primary" size="lg">
     <Link href="#book-service">Get a Vehicle Evaluation</Link>
   </Button>
   ```
4. `CTASection.tsx` (lines 51–71): Both dual CTA buttons.
5. `not-found.tsx` (lines 24–26): "Back to Workshop" button.

#### Technical Impact
In all cases, the rendered DOM contains an interactive `<a>` element directly nested inside an interactive `<button>` element:
```html
<button class="..."><a href="#book-service">Book a Service</a></button>
```
- **W3C HTML5 Specification Violation:** Section 4.10.6 states: *"The button element must not contain any interactive descendants."*
- **Accessibility Breakdown:** Screen readers announce both "Button" and "Link", confusing visually impaired users. Pressing Space vs Enter triggers conflicting browser actions.
- **Tabbing Duplication:** Keyboard users must press Tab twice to navigate through what appears visually as a single button.

---

### B. Domain & Metadata Configuration Error

In `src/config/site.ts`:
```ts
export const siteConfig = {
  // ...
  url: "https://militarycarservice.de",
  ogImage: "/images/og-image.jpg",
};
```
In `src/app/layout.tsx`:
```ts
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};
```

1. **Incorrect TLD / Domain:** The official business domain verified on the live site is `https://www.militarycarservice.com/`. Setting `metadataBase` to `.de` breaks canonical URL resolution and points search engines to a non-existent or unmanaged domain.
2. **Missing OpenGraph Asset:** `/images/og-image.jpg` does not exist in `public/`. When links are shared on social platforms, the preview image fails to load.

---

### C. Unused Directories & Dead Artifacts

1. `src/app/book-appointment/`: Empty directory created during initial setup; never implemented.
2. `src/app/(marketing)/`: Empty route group directory created during initial setup; never implemented.
3. Boilerplate SVGs in `public/`: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` remain in version control.

