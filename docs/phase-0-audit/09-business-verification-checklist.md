# 09 — Business Verification Checklist
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/09-business-verification-checklist.md`  
**Date:** November 2026  
**Auditor & Technical Lead:** Senior Product Designer & Frontend Architect  
**Recipient / Reviewer:** Dom Hagemann (Founder & Managing Director, Military Car Service)  
**Status:** Actionable Verification Document — Requires Owner Sign-Off  

---

## 1. Executive Context

During the Phase 0 Discovery and Audit, several discrepancies, missing data points, and conflicting records were identified between the current redesign prototype and the original live website (`https://www.militarycarservice.com/`). 

In strict adherence to **Rule A** (*The original website is the primary source of truth*) and **Rule C** (*Do not invent services or business claims*), no unverified assumptions have been committed to code. This document compiles all items requiring formal business verification from Dom Hagemann before Phase 1 implementation begins.

---

## 2. Master Verification Checklist

```
┌────────────────────────────────────────────────────────────────────────┐
│                      BUSINESS VERIFICATION MATRIX                      │
├─────┬──────────────────────────┬───────────────────────────┬───────────┤
│ Ref │ Topic / Item             │ Current Evidence / Status │ Priority  │
├─────┼──────────────────────────┼───────────────────────────┼───────────┤
│ BVC1│ Operating Hours          │ Discrepancy / Incomplete  │ P0        │
│ BVC2│ Phone Numbers & Channels │ Confirmed, needs sign-off │ P0        │
│ BVC3│ Booking Engine Workflow  │ eTermin vs Native Form    │ P0        │
│ BVC4│ We Buy Cars Data Routing │ JotForm vs Email Endpoint │ P0        │
│ BVC5│ Confirmed Service Scope  │ Repair vs Tuning claims   │ P1        │
│ BVC6│ Towing & Geographic Area │ Local vs Germany-wide     │ P1        │
│ BVC7│ Authentic Customer Quotes│ Google Reviews Selection  │ P1        │
│ BVC8│ Workshop & Team Photos   │ Provision of Media Assets │ P1        │
│ BVC9│ VAT Form & Payment Terms │ Form 1903 Processing      │ P1        │
│BVC10│ Brand Logo Asset Choice  │ Modern Vector vs Shield   │ P2        │
└─────┴──────────────────────────┴───────────────────────────┴───────────┘
```

---

### Item BVC-1: Official Operating & Customer Reception Hours

- **Current Prototype Text:** `Monday – Friday: 08:00 – 17:00 [Estimated]`, `Saturday: By appointment`, `Sunday: Closed`.
- **Original Website Status:** Exact hours are not published in plain text; bookings are handled dynamically through eTermin.
- **Why Confirmation is Needed:** Publishing incorrect operating hours will result in stranded military customers arriving at the facility outside of business hours or before technicians are available. German labor and shop hours must be legally accurate on the website.
- **Questions for Business Owner:**
  1. What are your exact customer reception / drop-off hours on weekdays (Monday through Friday)?
  2. Are you open for vehicle drop-offs or appointments on Saturdays, or strictly by prior appointment?
  3. Are you open during German public holidays or U.S. federal / military training holidays?

---

### Item BVC-2: Direct Communication Channels & Phone Routing

- **Current Prototype Text:** `+49 (0) 631 ••• ••••` (Kaiserslautern area placeholder prefix).
- **Original Website Status:**
  - Front Desk / Landline: `+49 7157 5377196` (07157 is the Weil im Schönbuch / Böblingen local code).
  - Mobile / WhatsApp: `+49 171 732 5983`.
  - Email: `appointments@militarycarservice.com` and `dom@militarycarservice.com`.
- **Why Confirmation is Needed:** The redesign previously displayed a non-functional Kaiserslautern phone number. We need to confirm whether the front desk landline and WhatsApp lines above remain the primary active customer communication channels.
- **Questions for Business Owner:**
  1. Should both the shop landline (`07157 5377196`) and the WhatsApp line (`+49 171 732 5983`) be displayed prominently in the site header and mobile menu?
  2. Is `appointments@militarycarservice.com` the preferred address for general customer inquiries, or should distinct email addresses be used for service versus vehicle selling?

---

### Item BVC-3: Appointment Booking Engine Architecture

- **Current Prototype Text:** A custom 410-line 3-step form (`BookingAppointmentSection.tsx`) that acts as an in-memory prototype.
- **Original Website Status:** Links directly to an external eTermin portal: `https://www.etermin.net/militarycarservice`.
- **Why Confirmation is Needed:** Building a disconnected local booking form prevents real appointments from reaching the shop management system. We must establish whether MCS intends to continue using eTermin or replace it with direct email/API bookings.
- **Questions for Business Owner:**
  1. Do you want the redesign to integrate seamlessly with your existing **eTermin** system (via an embedded widget, modal, or branded direct link)?
  2. If keeping eTermin, do customers need to log in, or can we configure deep links directly into specific service appointment categories (e.g., Oil Service, Inspection, Tire Change)?
  3. Are the workshop terms (48h cancellation notice, 10/20 minute late arrival policy, 18.50€/day storage fee) strictly active and required on the booking page?

---

### Item BVC-4: "We Buy Cars" Submission & Lead Routing

- **Current Prototype Text:** A 3-step marketing graphic with an SVG muscle car whose button mistakenly routes to the repair booking section.
- **Original Website Status:** Links to `/sellmycar`, which embeds a 14-field JotForm (`https://form.jotform.com/260212217151037`).
- **Why Confirmation is Needed:** The vehicle acquisition journey is a core business pillar for MCS (purchasing vehicles from rotating or PCSing military personnel). We need to confirm how valuation leads should be delivered.
- **Questions for Business Owner:**
  1. Should we build a modern native multi-step valuation wizard directly into `/sell-your-vehicle` that emails you the 14 data fields (VIN, green registration status, payoff, asking price)?
  2. Or do you prefer forwarding vehicle data directly into your existing JotForm account via webhook / embed?
  3. What is your typical turnaround time for providing a valuation offer to a customer (e.g. "Within 24 hours")?

---

### Item BVC-5: Confirmed Automotive Service Scope & Technical Claims

- **Current Prototype Text:** Claims specialized services for:
  - Cat-back exhaust systems and truck leveling/lift kits.
  - German TÜV compliance / modification registration assistance.
  - 40-point safety inspections.
- **Original Website Status:** Focuses on honest repair, diagnostic scanning, fast turnaround, stocked US parts, towing, tires, and routine maintenance for US-spec cars, trucks, SUVs, and minivans. No mention of custom performance tuning or lift kits.
- **Why Confirmation is Needed:** Under **Rule C**, we must not invent service capabilities. Offering performance tuning or lift kit installations if the shop focuses strictly on repair and maintenance creates serious operational friction.
- **Questions for Business Owner:**
  1. Do you officially offer aftermarket performance upgrades (truck leveling kits, cat-back exhaust systems) as standard services, or should we remove this category?
  2. Is Towing and Roadside Transport a core offering that should be added to the primary services menu?
  3. Do you provide loaner / rental vehicles to customers while their car is being repaired, and are the conditions (Stuttgart area only, 1000€ deductible) currently accurate?

---

### Item BVC-6: Geographic Coverage & Military Installation Service Area

- **Current Prototype Text:** Lists Ramstein Air Base, Landstuhl, Vogelweh, Kleber Kaserne, Sembach, Baumholder, and Rhine Ordnance Barracks (all in the Kaiserslautern / Baumholder military region).
- **Original Website Status:** States the shop is in Stuttgart / Böblingen near Panzer Kaserne, but mentions that the team drives weekly to military installations across Germany to buy, sell, and tow cars.
- **Why Confirmation is Needed:** Stating that MCS's primary workshop is in Ramstein misinforms customers in the Kaiserslautern Military Community (KMC) who might drive to a non-existent Ramstein facility.
- **Questions for Business Owner:**
  1. For daily workshop repairs, is your primary local customer base concentrated in the Stuttgart military community (Panzer Kaserne, Patch Barracks, Kelley Barracks, Robinson Barracks)?
  2. For vehicle purchasing ("We Buy Cars") and towing, which bases do you regularly service (e.g. KMC/Ramstein, Baumholder, Spangdahlem, Grafenwöhr, Vilseck, Wiesbaden)?

---

### Item BVC-7: Approved Customer Review Quotes & Google Integration

- **Current Prototype Text:** Displays 3 fabricated placeholder testimonials ("Stationed Service Member", "DoD Civilian") with a yellow development warning.
- **Original Website Status:** Directly links to official Google Reviews where MCS holds an extraordinary **4.9 out of 5.0 stars with over 300 reviews**.
- **Why Confirmation is Needed:** Under **Rule D**, placeholder testimonials must be removed. We want to feature real, verified customer quotes alongside the official Google aggregate rating badge.
- **Questions for Business Owner:**
  1. Do you approve linking directly to your verified Google Reviews page?
  2. Are there 4 to 6 specific customer review quotes from Google or Facebook that you would like featured prominently on the homepage?
  3. Would you like a direct "Leave a Google Review" button for returning customers?

---

### Item BVC-8: Provision of Authentic Media & Workshop Photography

- **Current Prototype Text:** Zero real photographs; uses 92 inline SVG elements (truck drawing, Challenger muscle car, repeated hydraulic lifts).
- **Original Website Status:** Uses real photos of acquired vehicles (`IMG_4486`, `IMG_1973`), orientation maps, and Best of Germany award graphics.
- **Why Confirmation is Needed:** Under **Rule E**, the final website must prioritize authentic photography. Hand-drawn vector cars do not meet the standard of a premium automotive workshop.
- **Questions for Business Owner:**
  1. Can you provide high-resolution photos of:
     - Dom Hagemann (portrait in workshop / service bay).
     - Workshop facility exterior and signage at Karl-Benz-Str. 17.
     - Active service bays showing lifts and vehicles being serviced.
     - Diagnostic equipment in use (scan tablets, tools).
     - Representative customer vehicles (Ford trucks, Dodge muscle cars, Jeeps).
  2. Can you provide a high-resolution scan or photo of your official "Best Auto Repair Shop in Stuttgart" award certificate?

---

### Item BVC-9: VAT Relief Form & Billing Protocols

- **Current Prototype Text:** Mentions German VAT Form 1903 (Mehrwertsteuer relief) saving 19% VAT on qualifying parts and labor.
- **Original Website Status:** Mentions VAT assistance and expertise in German paperwork.
- **Why Confirmation is Needed:** Military tax exemption forms (Abwicklung von Mehrwertsteuer-Befreiungen) have strict legal requirements in Germany (customs office approval, military identification, valid SOFA status). Clear customer instructions prevent invoicing disputes.
- **Questions for Business Owner:**
  1. Do you accept both standard hard-copy German VAT forms (Form 1903 / Abwicklungsformular) and electronic VAT processing?
  2. Are there specific requirements customers must fulfill prior to repair drop-off (e.g. form must be presented before parts are ordered)?
  3. Do you accept U.S. credit cards (Visa, MasterCard, American Express, Star Card)?

---

### Item BVC-10: Brand Identity & Logo Asset Selection

- **Current Prototype Text:** Uses a custom modern vector monogram (`MCSLogo.tsx`) with an angular geometric "M" and central red chevron.
- **Original Website Status:** Uses a circular shield emblem featuring an eagle, American flag motifs, and "Military Car Service / TheMechanicDom".
- **Why Confirmation is Needed:** We must ensure brand alignment between the digital interface, physical shop signage, business cards, work orders, and apparel.
- **Questions for Business Owner:**
  1. Do you approve the modern vector monogram (`MCSLogo.tsx`) as the primary digital brand mark for the redesign?
  2. Would you like to retain your circular heritage seal as an "Authentic Heritage Badge" (e.g. on the About page and footer)?
  3. Is the official tagline "Your Car. Our Mission." approved for all primary marketing banners?

