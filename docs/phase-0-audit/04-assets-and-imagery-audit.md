# 04 — Assets & Imagery Audit
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/04-assets-and-imagery-audit.md`  
**Date:** November 2026  
**Auditor:** Senior Product Designer & Frontend Architect  
**Status:** Complete & Verified  

---

## 1. Executive Summary

An exhaustive audit of the `public/` directory, design reference directories, and all media/graphic references across the codebase was conducted. 

The audit reveals a critical deficit in visual authenticity:
1. **Total Absence of Real Photography in Production:** There is **zero real photography** rendered by the application. The project contains zero raster image files (`.jpg`, `.png`, `.webp`) in `public/` for vehicles, facility bays, or technicians.
2. **Reliance on Hand-Coded SVG Artifice:** The application relies entirely on 92 inline SVG elements, including extensive multi-layered vector drawings of an American off-road truck (`HeroSection.tsx`), a Dodge Challenger muscle car (`SellYourVehicleSection.tsx`), and five repeated hydraulic lift illustrations (`WorkshopGallery.tsx`). This directly conflicts with the project visual requirements to *"use authentic automotive photography"* and *"avoid generic vehicle illustrations replacing real photography"*.
3. **Broken and Missing Image References:** The codebase contains 4 hardcoded paths to non-existent image files (`/images/og-image.jpg`, `/images/vehicles/sample-f150.jpg`, `/images/vehicles/sample-silverado.jpg`, `/images/vehicles/sample-charger.jpg`).
4. **Boilerplate Leftovers:** The `public/` root contains 5 default SVGs from the Next.js starter template (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) that are completely unused.

---

## 2. Complete Asset Inventory & Classification

| Filename / Asset Name | File Path | Current Usage Location | Asset Type Classification | Current Purpose | Retain or Replace? | Recommended Action / Replacement |
|---|---|---|---|---|---|---|
| `mcs-monogram.svg` | `public/brand/logo/mcs-monogram.svg` | `src/app/layout.tsx` (favicon / icon) | **Logo (Vector)** | Browser tab icon and favicon representation. | **Retain** | High quality geometric monogram vector. Retain as canonical web icon. |
| `MCSLogo.tsx` | `src/components/ui/MCSLogo.tsx` | `SiteHeader.tsx`, `MobileNavigation.tsx`, `SiteFooter.tsx` | **Logo (Vector Component)** | Primary brand vector component supporting 4 variants (`full`, `horizontal`, `monogram`, `badge`). | **Retain** | Excellent clean SVG code. Verify final wordmark typography with business owner. |
| `file.svg` | `public/file.svg` | Unreferenced | **Placeholder (Boilerplate)** | Default Next.js starter asset. | **Remove** | Safe to delete in Phase 1 cleanup. |
| `globe.svg` | `public/globe.svg` | Unreferenced | **Placeholder (Boilerplate)** | Default Next.js starter asset. | **Remove** | Safe to delete in Phase 1 cleanup. |
| `next.svg` | `public/next.svg` | Unreferenced | **Logo (Boilerplate)** | Next.js framework brand logo. | **Remove** | Safe to delete in Phase 1 cleanup. |
| `vercel.svg` | `public/vercel.svg` | Unreferenced | **Logo (Boilerplate)** | Vercel platform brand logo. | **Remove** | Safe to delete in Phase 1 cleanup. |
| `window.svg` | `public/window.svg` | Unreferenced | **Placeholder (Boilerplate)** | Default Next.js starter asset. | **Remove** | Safe to delete in Phase 1 cleanup. |
| `og-image.jpg` | `/images/og-image.jpg` | `src/config/site.ts` | **Broken / Missing Asset** | Declared OpenGraph social sharing preview image. | **Create / Replace** | File does not exist on disk. Generate production OG image (1200x630) featuring MCS branding and authentic workshop visual. |
| `sample-f150.jpg` | `/images/vehicles/sample-f150.jpg` | `src/data/vehicles.ts` | **Broken / Missing Asset** | Declared image for unapproved Ford F-150 sample card. | **Remove** | Associated with unapproved vehicle inventory (Rule B). Remove along with vehicle sales section. |
| `sample-silverado.jpg` | `/images/vehicles/sample-silverado.jpg` | `src/data/vehicles.ts` | **Broken / Missing Asset** | Declared image for unapproved Silverado sample card. | **Remove** | Associated with unapproved vehicle inventory (Rule B). Remove along with vehicle sales section. |
| `sample-charger.jpg` | `/images/vehicles/sample-charger.jpg` | `src/data/vehicles.ts` | **Broken / Missing Asset** | Declared image for unapproved Charger sample card. | **Remove** | Associated with unapproved vehicle inventory (Rule B). Remove along with vehicle sales section. |
| `mcs-website-approved-reference.png` | `design/references/mcs-website-approved-reference.png` | Visual design guideline documentation | **Approved Reference Artwork** | User-approved directional visual benchmark (1536x1024). | **Retain in design/** | Core design reference artifact. Keep in `design/references/`. |
| `MCS Automotive Website Brand Presentation.png` | `design/MCS Automotive Website Brand Presentation.png` | Design documentation | **Brand Direction Presentation** | Comprehensive visual board outlining typography, palette, and card styles. | **Retain in design/** | Reference artifact. Keep in `design/`. |
| `HeroTruckSVG` | Inline code in `src/components/sections/HeroSection.tsx` | Hero backdrop (right 60% of viewport) | **SVG Illustration** | Simulates an American off-road truck parked outside workshop bay. | **Replace** | Replace with authentic high-resolution photograph of an American truck/vehicle at the German workshop facility. |
| `MuscleCarSVG` | Inline code in `src/components/sections/SellYourVehicleSection.tsx` | Left column visual in Sell Your Vehicle | **SVG Illustration** | Simulates a white Dodge Challenger with LED taillights. | **Replace** | Replace with authentic photograph of an acquired or inspected customer vehicle. |
| `WorkshopLiftSVG` | Inline code in `src/components/sections/WorkshopGallery.tsx` | All 5 cards in workshop gallery | **SVG Illustration (Repetitive)** | Simulates hydraulic lift post and vehicle undercarriage. | **Replace** | Replace with 5 distinct authentic photographs of MCS workshop bays, tire stations, diagnostic scanners, and tools. |
| `VehicleCardSVG` | Inline code in `src/components/vehicles/VehicleCard.tsx` | Card image container in VehicleCard | **SVG Illustration** | Stylized profile silhouette of muscle car with wheel wells. | **Remove** | Belongs to unapproved vehicle sales section. Remove with section. |
| Lucide Icons (40+ icons) | Imported across components | Throughout navigation, cards, forms, and headers | **Icon (Open Source)** | Standard UI glyphs (Wrench, Shield, Phone, MapPin, Clock, etc.). | **Retain** | Crisp, scalable open-source iconography. Retain. |

---

## 3. Original Live Website Asset Findings

Inspection of the media hosted on the live production website (`https://www.militarycarservice.com/`) revealed the following authentic business assets:

1. **Original Brand Logo (`New+Logo+31_08_2025-1920w.png`):**
   - High-resolution circular/shield emblem combining American automotive and military-themed cues ("Military Car Service / TheMechanicDom").
   - Status: Needs to be reviewed with Dom Hagemann to determine whether the new modern vector monogram (`MCSLogo.tsx`) completely supersedes it or if the legacy emblem should be preserved in badges/footers.
2. **Authentic Vehicle & Facility Photos:**
   - `IMG_4486-1920w.JPG` (Tagged "Offer Car"): Photograph of an authentic vehicle evaluated/purchased by MCS.
   - `IMG_1973-891e1762-1920w.png`: Authentic workshop / vehicle image.
   - `IMG_5898`: Facility and service visual.
   - `BestOfGermany2026-1920w.jpg`: Official award badge for Best of Germany / Stuttgart Military Community.
   - `How+to+find+us`: Photographic orientation map showing the workshop facility across from the car wash in Weil im Schönbuch.
3. **Corrupted Ionos Media Gallery:**
   - The `/galerie` page on the original site contains 56 corrupted button links and failed thumbnail embeds caused by an Ionos gallery widget malfunction. Many original photos exist in Ionos storage but fail to render cleanly on the public page.

---

## 4. Photography Requirements Specification

To achieve the agreed visual direction (bold automotive, precision engineering, authentic workshop atmosphere), the redesign requires authentic high-resolution photography.

### Specific Photography Needs by Section

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PHOTOGRAPHY REQUIREMENTS                        │
├────────────────────────────┬─────────────────────────────┬─────────────┤
│ Target Section             │ Visual Content Required     │ Recommended │
│                            │                             │ Aspect / Res│
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 1. Homepage Hero           │ High-impact dramatic photo  │ 16:9 or 3:2 │
│    (`HeroSection.tsx`)     │ of an American truck (Ford  │ min 2400px  │
│                            │ F-150 / RAM) or muscle car  │ width       │
│                            │ outside the MCS workshop    │             │
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 2. We Buy Cars Feature     │ Clean editorial shot of an  │ 4:3 or 16:10│
│    (`SellYourVehicle.tsx`) │ acquired vehicle or happy   │ min 1600px  │
│                            │ customer vehicle hand-off   │ width       │
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 3. About Us / Founder      │ Genuine portrait of Dom     │ 4:5 or 1:1  │
│    (`AboutSection.tsx`)    │ Hagemann in workshop attire │ min 1200px  │
│                            │ or with service team        │ width       │
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 4. Workshop Bay & Lifts    │ Wide-angle view of clean,   │ 16:10       │
│    (`WorkshopGallery.tsx`) │ active mechanical service   │ min 1600px  │
│                            │ bays with vehicles on lifts │ width       │
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 5. Diagnostics Station     │ Close-up of certified OBD-II│ 4:3         │
│    (`WorkshopGallery.tsx`) │ diagnostic tablet / scanner │ min 1200px  │
│                            │ plugged into US-spec vehicle│ width       │
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 6. Tire & Alignment Rack   │ Laser alignment equipment or│ 4:3         │
│    (`WorkshopGallery.tsx`) │ tire mounting machine with  │ min 1200px  │
│                            │ large all-terrain / US tire │ width       │
├────────────────────────────┼─────────────────────────────┼─────────────┤
│ 7. Facility Exterior       │ Clear orientation photo of  │ 16:9        │
│    (`LocationSection.tsx`) │ the building entrance in    │ min 1600px  │
│                            │ Weil im Schönbuch (opp. wash│ width       │
└────────────────────────────┴─────────────────────────────┴─────────────┘
```

---

## 5. Formal Business Photo Request List

The following photography checklist must be formally delivered to Dom Hagemann for provision before Phase 3 (Homepage implementation):

1. **Founder Portrait:** High-resolution photo of Dom Hagemann at the shop (natural, professional, authentic).
2. **Facility Exterior & Signage:** Clear daytime photograph of the workshop entrance at Karl-Benz-Str. 17, Weil im Schönbuch, showing customer parking and signage.
3. **Active Workshop Bays:** 2–3 photos of the interior workshop showing hydraulic lifts with customer vehicles being serviced.
4. **Diagnostic & Special Tooling:** 1–2 detailed shots of specialized diagnostic equipment (Snap-on, Autel, or factory scan tools) connected to American vehicles.
5. **Tire & Chassis Equipment:** 1 photo of the tire balancing / mounting station or alignment rack.
6. **Customer Vehicle Showcase:** 4–6 photos of representative vehicles serviced or acquired by MCS (Ford F-Series, Dodge Challenger/Charger, Jeep Wrangler, Chevrolet Tahoe/Silverado).
7. **Best of Stuttgart Award Plaque:** High-resolution photo or scan of the official Best Auto Repair Shop award certificate/plaque.

---

## 6. Logo & Typography Audit

### Logo Audit
- The vector `MCSLogo.tsx` is mathematically sound, responsive, and renders crisp SVG paths across all densities.
- The monogram features a bold angular "M" with a central red chevron accent.
- **Action:** Retain `MCSLogo.tsx` as the core vector asset for digital interfaces. Confirm with Dom Hagemann whether the traditional circular emblem should be retained as an "Authentic Heritage Seal" in the footer or about page.

### Typography Audit
- Display Typography: **Barlow Condensed** (weights 600, 700, 800) successfully conveys an aggressive, high-performance automotive presence.
- Interface Typography: **Inter** (weights 400, 500, 600, 700) provides exceptional legibility for dense technical specifications, form inputs, and body text.
- Technical Typography: **IBM Plex Mono** (weights 400, 500, 600) reinforces precision engineering in section kickers, vehicle VIN tags, and badge labels.
- **Finding:** Typography loaders in `src/app/layout.tsx` use `display: "swap"`, preventing Flash of Invisible Text (FOIT). Font configurations are production-ready.

