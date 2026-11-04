# Military Car Service (MCS) — Asset Inventory & Replacement Guide

This document catalogues all visual assets, logos, and photography used in the Military Car Service (MCS) project, specifying their origin, current status, and replacement guidelines.

---

## 1. Logo Assets

| Asset Name | Location | Format | Status | Replacement Instructions |
|---|---|---|---|---|
| **Approved Directional Artwork** | `design/references/mcs-website-approved-reference.png` | PNG (1536x1024) | Directional Reference | Approved reference from user. Used as art direction source of truth. |
| **MCS Monogram + Wordmark Component** | `src/components/ui/MCSLogo.tsx` | SVG Vector Code | Phase One Component | Designed as a clean vector SVG component with responsive variants (`full`, `monogram`, `badge`, `horizontal`). Ready to be swapped with official vector brand assets when finalized. |
| **Favicon & Web Icon** | `src/app/icon.svg` | SVG | Phase One Vector | Geometric angular MCS monogram rendered at 32x32 / vector. |

---

## 2. Photography & Media Assets

In accordance with Section 10 and 11 of the project specification, no fabricated photos or fake stock identities are presented as verified facts. All imagery is either referenced from the approved direction or curated as realistic automotive placeholders tagged for client replacement.

| Asset Role | Usage Location | Reference/Placeholder Description | Replacement Requirement |
|---|---|---|---|
| **Hero Vehicle Visual** | Homepage Hero (`HeroSection.tsx`) | High-impact front three-quarter view of American off-road truck (Ford F-150 / Raptor class) parked before an automotive service facility. | Replace with high-resolution photograph of customer or inventory vehicle at the German workshop facility. |
| **Sell-Your-Vehicle Visual** | Homepage Feature Section (`SellYourVehicleSection.tsx`) | Sleek white American muscle car (Dodge Challenger) rear-quarter view against architectural backdrop. | Replace with photograph of a recently acquired or inspected vehicle. |
| **Service Category Visuals** | Services Grid / Modal Prototypes | Realistic workshop shots: diagnostics scanner, vehicle lift, tire mounting, engine bay servicing. | Replace with genuine photos of MCS German facility technicians and equipment. |
| **Vehicle Inventory Showcase** | Vehicle Cards (`VehicleCard.tsx`) | High-resolution photographs representing typical US-spec vehicles (Ford F-150, Chevrolet Silverado, Dodge Charger). Marked as `[Sample Inventory]`. | Connect to real verified inventory photos and specs in Phase Two. |
| **Workshop & Facility Gallery** | Gallery Section (`WorkshopGallery.tsx`) | 6-photo editorial grid featuring German workshop bays, alignment racks, diagnostics, and American car details. | Replace with high-resolution photoshoot of the actual workshop in Germany. |

---

## 3. License, Attribution & Rights

- **Visual Direction:** MCS Brand Presentation approved reference (2026).
- **Icons:** Lucide Icons (ISC License / Open Source).
- **Fonts:** Google Fonts (`next/font/google`):
  - Barlow Condensed (OFL License)
  - Inter (OFL License)
  - IBM Plex Mono (OFL License)
- **Vectors / SVGs:** Custom built for MCS project in code.
