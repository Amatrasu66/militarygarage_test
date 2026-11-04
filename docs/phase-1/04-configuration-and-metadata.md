# Military Car Service (MCS) — Configuration & Metadata
**Phase 1: Design System & Foundational Architecture**  
**Status:** Implemented & Verified  
**Date:** November 2026  
**Document:** `docs/phase-1/04-configuration-and-metadata.md`

---

## 1. Overview & Single Source of Truth

To eliminate drift and ensure consistency across the entire digital footprint, all business data, URLs, SEO descriptors, and contact credentials are centralized into two canonical configuration files:
1. `src/config/site.ts` — Canonical site metadata, domain settings, social handles, and SEO properties.
2. `src/lib/constants.ts` — Operational workshop parameters, verified contact points, opening hours, legal registrations, and disclaimers.

No component or page may hardcode telephone numbers, physical workshop addresses, or domain URLs.

---

## 2. Canonical Site Configuration (`src/config/site.ts`)

```typescript
export const siteConfig = {
  name: "Military Car Service (MCS)",
  shortName: "MCS",
  description:
    "Expert automotive repair, maintenance, and vehicle purchasing for US military personnel, NATO forces, and expatriates stationed in the Stuttgart and Böblingen military community.",
  url: "https://www.militarycarservice.com", // Canonical verified production domain (NOT .de)
  links: {
    instagram: "https://instagram.com/themechanicdom",
    facebook: "https://facebook.com/militarycarservice",
    youtube: "https://youtube.com/@themechanicdom",
  },
  contact: {
    phone: "+49 7157 5377196",
    phoneDisplay: "+49 (0) 7157 5377196",
    whatsapp: "+49 171 732 5983",
    whatsappDisplay: "+49 (0) 171 732 5983",
    email: "appointments@militarycarservice.com",
    address: {
      street: "Karl-Benz-Str. 17",
      postalCode: "71093",
      city: "Weil im Schönbuch",
      country: "Germany",
      formatted: "Karl-Benz-Str. 17, 71093 Weil im Schönbuch, Germany",
    },
    hours: {
      weekday: "Mon - Fri: 08:00 - 17:00",
      saturday: "Saturday: By appointment",
      sunday: "Sunday: Closed",
    },
  },
} as const;
```

---

## 3. Operational Business Constants (`src/lib/constants.ts`)

The operational constants in `src/lib/constants.ts` codify verified details extracted from the original live website `militarycarservice.com`:

```typescript
export const MCS_CONFIG = {
  businessName: "Military Car Service",
  legalEntity: "Military Car Service e.K.",
  tagline: "Your Car. Our Mission.",
  founder: "Dom Hagemann (TheMechanicDom)",
  address: {
    street: "Karl-Benz-Str. 17",
    city: "Weil im Schönbuch",
    state: "Baden-Württemberg",
    postalCode: "71093",
    country: "Germany",
    mapsUrl: "https://maps.google.com/?q=Karl-Benz-Str.+17,+71093+Weil+im+Schönbuch,+Germany",
  },
  contact: {
    phone: "+49 7157 5377196",
    phoneFormatted: "+49 (0) 7157 5377196",
    whatsapp: "+49 171 732 5983",
    whatsappFormatted: "+49 (0) 171 732 5983",
    whatsappUrl: "https://wa.me/491717325983",
    email: "appointments@militarycarservice.com",
    emergencyEmail: "dom@militarycarservice.com",
  },
  hours: {
    regular: "Monday - Friday: 08:00 - 17:00",
    saturday: "Saturday: By appointment only",
    sunday: "Sunday: Closed",
  },
  legal: {
    vatId: "DE328906323",
    registerCourt: "Amtsgericht Stuttgart",
    registerNumber: "HRA 738902",
  },
  militaryInstallationsServed: [
    "Panzer Kaserne (Böblingen)",
    "Patch Barracks (Stuttgart-Vaihingen)",
    "Kelley Barracks (Stuttgart-Möhringen)",
    "Robinson Barracks (Stuttgart-Zuffenhausen)",
    "Stuttgart Army Airfield",
  ],
} as const;
```

---

## 4. Metadata & SEO Setup (`src/app/layout.tsx`)

The root layout injects standards-compliant OpenGraph, Twitter Cards, robots rules, and canonical link elements:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Automotive Repair & We Buy Cars`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Military Car Service",
    "MCS Stuttgart",
    "Car repair Panzer Kaserne",
    "Patch Barracks auto repair",
    "Kelley Barracks mechanic",
    "USAREUR inspection prep",
    "We Buy Cars Germany",
    "American car specialist Stuttgart",
  ],
  authors: [{ name: "Dom Hagemann", url: siteConfig.links.instagram }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Corrections Applied in Phase 1
- **Domain Normalization (MCS-020):** Corrected legacy references pointing to `militarycarservice.de` or `placeholder.com`. All URLs now resolve strictly to the canonical `https://www.militarycarservice.com`.
- **404 Page Realignment (MCS-031):** Fixed `src/app/not-found.tsx` which previously referred to a "vehicle record not found" (an artifact of the unapproved car sales marketplace). The page now provides clear, automotive-oriented navigation back to workshop services and appointment booking.
- **Asset Cleanup (MCS-032):** Removed 5 unreferenced default Next.js starter SVGs (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) from the `public/` directory.

---

## 5. Remaining Business Confirmations Required

While foundational metadata is now fully verified against the original website, the following operational details require final sign-off from Dom Hagemann / MCS ownership before Phase 2 & 3 content rollout:

| Claim / Field | Current Status in Audit | Verification Action Needed |
|---|---|---|
| **Direct Base Shuttle Service** | Mentioned in marketing drafts | Confirm exact pickup/drop-off schedule between Panzer Kaserne / Patch Barracks and Weil im Schönbuch. |
| **Loaner / Rental Vehicle Policy** | Mentioned in customer FAQs | Confirm fleet availability, daily rates, and military insurance requirements. |
| **USAREUR Re-test Fee Coverage** | Marketing guarantee proposed | Confirm whether MCS guarantees a first-time pass or covers re-inspection fees if failed. |
| **VAT-Free Form Procedures** | Standard military benefit | Confirm accepted tax forms (Abwicklungsauftrag / VAT Relief Form) and processing turnaround. |

