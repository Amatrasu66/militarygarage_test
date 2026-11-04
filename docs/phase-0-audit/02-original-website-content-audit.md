# 02 — Original Website Content & Business Audit
## Military Car Service (MCS) Website Redesign — Phase 0

**Document Reference:** `docs/phase-0-audit/02-original-website-content-audit.md`  
**Date:** November 2026  
**Source of Truth:** [https://www.militarycarservice.com/](https://www.militarycarservice.com/) (Live Ionos/1&1 CMS installation)  
**Auditor:** Senior Product Designer, UI/UX Auditor & Technical Lead  
**Status:** Complete & Verified  

---

## 1. Executive Summary

A comprehensive live audit of the official Military Car Service (MCS) website (`https://www.militarycarservice.com/`) was conducted. The audit established the actual, authentic business identity, legal ownership, geographic location, service capabilities, customer-facing booking mechanics, vehicle buying workflow, and operational terms of MCS.

The findings reveal a stark divergence between the **genuine business reality** and the **current redesign prototype**:
1. **True Geographic Location:** The business is physically located in **Weil im Schönbuch** (Baden-Württemberg, postcode 71093) near **Stuttgart / Böblingen** (adjacent to Panzer Kaserne). The redesign mistakenly placed the workshop in the **Kaiserslautern / Ramstein Area** (Rhineland-Palatinate), inventing non-existent service areas and regional phone prefixes (`0631`).
2. **Founder & Business Identity:** MCS was founded in **2008** by **Dom Hagemann** ("TheMechanicDom"), an American certified mechanic and former military brat from Hanau who previously worked for AAFES Auto Exchange. The business relocated to Stuttgart/Böblingen in April 2020 and was voted **Best Auto Repair Shop in Stuttgart (2021)**. The current redesign completely erased Dom's name, story, and award credentials.
3. **Core Business Mechanics:**
   - **Service Appointments:** MCS uses an established third-party SaaS booking platform (**eTermin**: `https://www.etermin.net/militarycarservice`) featuring a strict 48-hour cancellation policy, late arrival rules, and storage fee policies.
   - **We Buy Cars:** MCS operates a dedicated vehicle purchasing service for U.S. and European spec vehicles, powered by a 14-field **JotForm** (`https://form.jotform.com/260212217151037`). MCS **does not operate a vehicle sales marketplace, car lot inventory, or online showroom**.
4. **Original Site Quality & Artifacts:** The original website suffers from severe Ionos website builder template remnants: broken slideshow placeholders ("Slide title Write your caption here Button"), placeholder contact headers ("555-555-5555 mymail@mailservice.com"), broken gallery button links, and poorly structured subpages (`/newpage`, `/newpage8cdfb866`, `/impressumbebf9ab2`).

---

## 2. Complete Original Website Page Audit

| Original Page URL | Page Title / Role | Existing Content & Purpose | Business Functionality | Important Details to Preserve | Outdated / Broken Items | Status in Current Redesign |
|---|---|---|---|---|---|---|
| `https://www.militarycarservice.com/` | `militarycarservice` (Homepage) | Core marketing page. Introduces MCS as U.S.-spec specialists for the U.S. Military Community in Germany. Highlights award-winning status, fast turnaround, stocked US parts, and fair pricing. | Primary CTAs: "📅 BOOK AN APPOINTMENT" (links to eTermin), "🚗 GET MY FREE OFFER" (links to `/sellmycar`), "Click to Call the Shop" (`tel:071575377196`), and WhatsApp chat. | "Trusted by the U.S. Military Community", U.S.-spec focus, Stuttgart award credentials, 2008 founding, fast parts sourcing. | Ionos template headers ("555-555-5555", "mymail@mailservice.com"), 3 broken slide cards with generic text. | Partially implemented, but business location, phone, and founder identity were distorted. |
| `/sellmycar` | `sellmycar` (We Buy Cars) | Dedicated vehicle acquisition page. Targets military members PCSing, selling damaged cars, or offloading unwanted vehicles. | Iframe embedding JotForm (`id="JotFormIFrame-260212217151037"`, title "Quote Request Form"). Collects complete vehicle specs, German green paper status, VIN, payoff, asking price. | Fast payout, assistance with German paperwork, deregistration, and towing coordination. Seamless selling experience. | Ionos placeholder banners above the iframe. | **Missing dedicated page.** Redesign reduced this to a marketing block on the homepage with CTA erroneously pointing to repair booking. |
| `/location` | `militarycarservice` (Location & Directions) | Dedicated facility location page. Features shop entrance instructions and Google Maps link. | Google Maps link (`https://maps.app.goo.gl/VhHwBRYCvFCTU4uq7`), direct phone call link (`+49 7157 5377196`). | Exact address: `71093 Weil im Schönbuch, Karl-Benz-Str. 17`. Note: "Entrance across from the Car Wash". | Static map graphic is low-resolution ("How to find us"). | **Missing dedicated page.** Footers and sidebars in redesign incorrectly list Kaiserslautern / Ramstein. |
| `/impressum` | `militarycarservice` (About Us) | Detailed company biography, founder background, operational philosophy, and service area. | Links to Facebook page reviews, direct phone call trigger. | Founder Dom Hagemann biography: American military brat in Hanau, certified mechanic, AAFES Exchange background, founded in 2008, opened Stuttgart location in April 2020. Weekly vehicle purchasing runs to other German military installations. | Misleading URL (`/impressum` used for About Us narrative rather than legal notice). | **Missing dedicated page.** Current redesign omits Dom Hagemann entirely in favor of generic copy. |
| `/impressumbebf9ab2` | `militarycarservice` (Legal Information / Impressum) | Mandatory German legal notice conforming to TMG § 5. | None (static legal compliance text). | Legal name: `Military Car Service / TheMechanicDom`. Owner/Managing Director: `Dom Hagemann`. Legal form: `sole proprietorship (Einzelunternehmen)`. Address: `Karl-Benz-Str. 17, 71093 Weil im Schoenbuch`. Tax ID: `DE223014684`. Phone: `+49 (0)7157 5377196`. | Cryptic Ionos URL hash (`impressumbebf9ab2`). | **Completely Missing.** Footer links point to dead `#legal` hash. |
| `/newpage8cdfb866` | `militarycarservice` (Terms & Conditions) | Comprehensive workshop operational terms, customer policies, and legal disclaimers. | None (contractual agreement for shop customers). | Detailed cancellation rules (48h notice), late arrival policy (10/20 mins limit), parts policy (no return on special orders, no customer-supplied parts), vehicle storage fee (18.50€/day), loaner vehicle rules (Stuttgart area only, 1000€ deductible, 200€ cleaning fee). | Cryptic Ionos URL hash (`newpage8cdfb866`). | **Completely Missing.** Critical business protection terms omitted from redesign. |
| `/newpage` | `militarycarservice` (Data Protection & Privacy / Datenschutz) | Mandatory GDPR / DSGVO privacy policy and data processing notice. | External links to EU dispute resolution platform. | Data controller identity, user rights regarding personal data, eTermin and JotForm data collection notices. | Cryptic Ionos URL hash (`newpage`). | **Completely Missing.** Footer links point to dead `#legal` hash. |
| `/jobs` | `Oben jobs in Stuttgart at Military Car Service / TheMechnicDom` | Recruitment page listing active employment opportunities for English speakers with SOFA cards or work visas. | "APPLY NOW" triggers linking to `mailto:appointments@militarycarservice.com`. | 3 active positions: 1. Full Time Service Advisor, 2. Part Time Front Desk Receptionist (Mondays/Fridays), 3. Part Time Parts Manager. Requirements: SOFA status / work visa, native English. | Typo in page title ("Oben jobs" instead of "Open jobs"). Template placeholders. | **Completely Missing.** No recruitment information exists in current redesign. |
| `/galerie` | `militarycarservice` (Gallery) | Image showcase of customer vehicles, shop projects, and workshop operations. | "View more" button (non-functional). | Real visual records of customer vehicles serviced at the German facility. | Broken gallery architecture: dozens of empty "Button" text labels generated by corrupted Ionos gallery widget. | Partially implemented on homepage, but uses 5 identical hand-drawn SVG hydraulic lifts instead of real photos. |
| `/kontakt` | `militarycarservice` (Contact) | Secondary contact page with direct phone and email channels. | Direct phone link (`tel:071575377196`), mailto link (`appointments@militarycarservice.com`). | Clear English instructions: "Choose how you would like to contact us: Call the Shop, Send an email". | Redundant secondary contact route; contains placeholder text "New Paragraph". | **Missing dedicated page.** |

---

## 3. Business Information Verification & Contradiction Report

| Business Attribute | Original Live Website (Source of Truth) | Current Redesign Implementation | Conflict Classification | Authoritative Analysis & Resolution |
|---|---|---|---|---|
| **Business Name** | Military Car Service / TheMechanicDom | Military Car Service (MCS) | Present but modified | "Military Car Service (MCS)" is acceptable for modern branding, but legal documents and Impressum must state "Military Car Service / TheMechanicDom". |
| **Founder / Owner** | **Dom Hagemann** (American military brat, certified mechanic, ex-AAFES) | *Unmentioned / Omitted* | **Missing Information (P0)** | Dom Hagemann is the personal brand authority behind MCS. Omitting Dom erases customer trust and history. Restore founder profile. |
| **Founding Year** | **2008** (relocated to Stuttgart in 2020) | *Unspecified / Vague* | Missing Information | Original site proves 18 years of service to U.S. military community. Must be prominently featured in Trust and About sections. |
| **Workshop Location** | **Karl-Benz-Str. 17, 71093 Weil im Schönbuch** (Baden-Württemberg) | **Kaiserslautern / Ramstein Area** (Rhineland-Palatinate) | **Direct Contradiction (P0)** | The redesign location is **factually false**. The shop is in Weil im Schönbuch (near Stuttgart/Böblingen, Panzer Kaserne). Correct immediately. |
| **Service Area** | Stuttgart / Böblingen Military Community (plus weekly buying/towing runs across Germany) | Ramstein Air Base, Landstuhl, Vogelweh, Kleber, Sembach, Baumholder | **Direct Contradiction (P0)** | Redesign invented the Kaiserslautern Military Community (KMC) service area. Primary local workshop area is Stuttgart/Böblingen. Towing and vehicle buying runs travel Germany-wide. |
| **Phone Number** | **+49 (0)7157 5377196** (Shop Desk)<br>Mobile/WhatsApp: **+49 171 732 5983** | `+49 (0) 631 ••• ••••` (Placeholder Kaiserslautern prefix) | **Direct Contradiction (P0)** | Replace fabricated 0631 placeholder with verified phone numbers: Landline `+49 (0)7157 5377196` and WhatsApp `+49 171 732 5983`. |
| **Email Address** | `appointments@militarycarservice.com`<br>`dom@militarycarservice.com` | `service@militarycarservice.de [Pending Verification]` | **Direct Contradiction (P0)** | Official domain is `.com`, not `.de`. Replace placeholder with `appointments@militarycarservice.com`. |
| **Operating Hours** | Not explicitly published in text on original site; appointments booked via eTermin. | Monday–Friday: 08:00–17:00 [Estimated] | Missing Information Requiring Confirmation | Current hours are estimated. Confirm exact customer reception and workshop hours with Dom Hagemann. |
| **Legal Status & Tax ID** | Sole proprietorship (*Einzelunternehmen*), Tax ID: `DE223014684` | Unspecified corporate entity | Missing Information (P1) | Required for German legal compliance (*Impressum*). Must be integrated. |
| **Vehicle Sales Model** | **We Buy Cars only.** No sales showroom, no inventory lot, no pre-owned catalog. | **Pre-Owned Vehicle Sales Marketplace** (with filters, prices, and favorite buttons) | **Unapproved Invented Feature (P0 — Rule B)** | Violates business model. MCS purchases vehicles from military members. It does not sell an online catalog of cars. Remove inventory catalog. |
| **Vehicle Buying Process** | 14-field structured questionnaire (JotForm) capturing VIN, US/EU spec, green papers, payoff, price. | 3-step marketing graphic pointing to repair booking. | Incomplete Implementation (P1) | Must build a dedicated valuation submission flow mirroring the JotForm fields. |
| **Appointment Booking** | **eTermin integration** (`https://www.etermin.net/militarycarservice`) | Local prototype React form (does not save or send data) | Conflicting Functionality (P0) | Redesign built a disconnected prototype form. Must integrate official eTermin booking flow or direct API integration. |
| **Customer Reviews** | **Google Reviews (4.9 stars, 300+ reviews)** + Facebook Reviews | 3 fabricated customer quotes from Ramstein, Baumholder, KMC | **Fabricated Content (P0 — Rule D)** | Remove fabricated placeholder testimonials. Link directly to Google Reviews and embed verified customer ratings. |

---

## 4. Required Content & Page Inventory Comparison

In accordance with Section 4 of the audit specification, this authoritative comparison matrix accounts for every page and customer-facing function:

| Original Page / Function | Exists in Current Redesign? | Current Route / Location | Content Accuracy | Required Action |
|---|---|---|---|---|
| **Homepage** | Yes | `/` (`src/app/page.tsx`) | Partially accurate; distorted location and phone. | **Preserve & Improve Presentation.** Correct address to Weil im Schönbuch, update phone/email, add Dom Hagemann biography, replace SVG illustrations with authentic photos. |
| **Car Services & Appointments** | Partial | `#services` and `#book-service` on homepage | Inaccurate. Invented unverified performance upgrades; booking form is disconnected prototype. | **Restore Missing Dedicated Page & Reorganize.** Build dedicated `/services` route; align offerings with OEM repair/maintenance; integrate official eTermin booking workflow. |
| **We Buy Cars (`/sellmycar`)** | Partial | `#sell-your-vehicle` on homepage | Incomplete. Section button mistakenly routes to `#book-service`; lacks vehicle data collection fields. | **Preserve & Improve Presentation.** Create dedicated `/sell-your-vehicle` route with full multi-step valuation form mirroring original JotForm. |
| **Location & Directions (`/location`)** | Partial | Footer and sidebar of `#book-service` | Incorrect. Lists Kaiserslautern / Ramstein area instead of Stuttgart / Weil im Schönbuch. | **Restore Missing Dedicated Page & Correct Information.** Build `/location` route with Weil im Schönbuch address, directions ("across from car wash"), and interactive Google Maps embed. |
| **About Us (`/impressum`)** | Partial | `#about` on homepage | Inaccurate. Generic military copy; omits founder Dom Hagemann and 2008 founding date. | **Restore Missing Dedicated Page & Preserve History.** Build `/about` route honoring Dom Hagemann's story, 2008 founding, AAFES heritage, and Best of Stuttgart 2021 award. |
| **Customer Reviews** | Partial | `#reviews` on homepage | Fabricated. Contains 3 fake testimonials and a yellow developer notice. | **Reorganize & Connect Authentic Source.** Remove fabricated reviews; link to Google Reviews (4.9 stars, 300+ reviews); embed verified testimonials. |
| **Jobs at MCS (`/jobs`)** | **No** | *None* | Completely omitted. | **Restore Missing Legitimate Page.** Build dedicated `/jobs` route listing the 3 verified roles (Service Advisor, Front Desk, Parts Manager) with SOFA / Visa requirements. |
| **Workshop Gallery (`/galerie`)** | Partial | `#gallery` on homepage | Poor. Uses 5 repetitive SVG lift illustrations; zoom buttons are dead. | **Restore Missing Dedicated Page & Improve.** Create `/gallery` route; convert to responsive carousel; replace SVGs with real photos. |
| **Legal Notice / Impressum (`/impressumbebf9ab2`)** | **No** | Broken `#legal` anchor | Completely omitted. Legal violation under German TMG § 5. | **Restore Missing Dedicated Page.** Build `/impressum` route with Dom Hagemann, sole proprietorship, Tax ID `DE223014684`, Weil im Schönbuch address. |
| **Terms & Conditions (`/newpage8cdfb866`)** | **No** | Broken `#legal` anchor | Completely omitted. Critical shop operational terms omitted. | **Restore Missing Dedicated Page.** Build `/terms` route containing 48h cancellation, late policy, parts terms, storage fees (18.50€/day), loaner vehicle rules. |
| **Privacy Policy / Datenschutz (`/newpage`)** | **No** | Broken `#legal` anchor | Completely omitted. Legal violation under EU GDPR / DSGVO. | **Restore Missing Dedicated Page.** Build `/privacy` route covering customer data, booking privacy, and cookies. |
| **Contact (`/kontakt`)** | Partial | Footer only | Inaccurate. Unverified placeholder phone and email. | **Restore Missing Dedicated Page.** Build `/contact` route with direct phone, WhatsApp link, email, and contact form. |
| **Vehicle Inventory Marketplace** | **Yes (Invented)** | `#vehicles` on homepage (`VehicleInventorySection.tsx`) | **Invented / Unapproved (Rule B).** MCS buys cars; it does not operate a pre-owned sales catalog. | **REMOVE.** Delete vehicle inventory section, vehicle card, mock vehicle data, and "Vehicles" navigation link. |

---

## 5. Service Offering Verification Audit (Rule C)

Every service claim across both websites was audited against verified business capabilities:

| Claimed Service / Feature | Original Site Status | Current Redesign Status | Authoritative Classification | Recommendation |
|---|---|---|---|---|
| **U.S.-Spec Vehicle Repairs & Diagnostics** | Verified (Core specialization since 2008) | Present (`ServicesOverview.tsx`) | **Verified Fact** | Retain as primary core service pillar. |
| **We Buy Cars / PCS Buyouts** | Verified (Core offering, JotForm driven) | Present (`SellYourVehicleSection.tsx`) | **Verified Fact** | Retain as primary customer journey; improve valuation form. |
| **German Paperwork & Deregistration Assistance** | Verified ("Experts when it comes to paperwork") | Present in copy | **Verified Fact** | Highlight prominently in We Buy Cars and Military services. |
| **Towing & Vehicle Recovery** | Verified ("buying, selling, towing and repairing cars") | Absent from services grid | **Missing Original Service** | Restore towing and roadside transport as a recognized capability. |
| **Tires, Mounting, Balancing & Storage** | Verified (Public business records & social channels) | Present (`SERVICES_DATA[2]`) | **Verified Fact** | Retain; confirm exact seasonal tire storage pricing with owner. |
| **Loaner / Rental Vehicles** | Verified (Detailed in terms: Stuttgart area, 1000€ deductible) | Absent from services | **Missing Original Offering** | Add loaner vehicle availability notice for shop customers. |
| **German VAT Relief Forms (Form 1903)** | Verified (Public business records & FAQ) | Present (`FAQS_DATA[0]`, `AboutSection`) | **Verified Fact** | Retain; verify exact VAT form processing instructions with owner. |
| **USAREUR Safety Pre-Inspection Readiness** | Mentioned in customer reviews & social records | Highlighted as key offering | **Requires Business Confirmation** | Confirm specific inspection checklist protocols with Dom Hagemann. |
| **Performance Upgrades & Tuning** | *Not found on original website* | Present (`SERVICES_DATA[3]`: lift kits, exhaust) | **Unverified Claim (Rule C)** | Flag for owner confirmation. Do not publish without explicit business sign-off. |
| **Rapid US Parts Procurement** | Verified ("Stocked inventory and direct US suppliers") | Present in copy | **Verified Fact** | Retain; emphasize genuine OEM American parts sourcing. |
| **Pre-Owned Vehicle Sales Catalog** | *Not present on original site* | Present (`VehicleInventorySection.tsx`) | **Invented Feature (Rule B)** | **Remove completely.** |

---

## 6. Review & Testimonial Authenticity Audit (Rule D)

1. **Current Redesign Implementation:**
   - Contains 3 reviews in `src/data/reviews.ts`:
     - *"Stationed Service Member (USAF, Ramstein Air Base)"* — Fabricated.
     - *"Military Community Member (DoD Civilian, Kaiserslautern)"* — Fabricated.
     - *"U.S. Army Personnel (US Army, Baumholder)"* — Fabricated.
   - A yellow developer warning banner in `ReviewsSection.tsx` acknowledges: *"Testimonials displayed above are developmental sample cards... Real customer ratings and verified Google reviews will be connected upon client verification."*
   - **Finding:** Violates Rule D. Fake customer identities and invented military assignments must not be published.
2. **Authentic Source of Truth:**
   - Original site links directly to Google Reviews: `https://www.google.com/search?client=firefox-b-d&q=Military+Car+Service#lrd=0x4799e7dfa53f5363:0x489c9d1eec0e03d7,1,,,`.
   - Verified Google Maps entity: `Military Car Service / TheMechanicDom` (Place ID: `0x4799e7dfa53f5363:0x489c9d1eec0e03d7`).
   - Official Rating: **4.9 out of 5.0 stars based on over 300 verified customer reviews**.
   - Verified Facebook Page: `https://facebook.com/Military-Car-Service-594773097614583`.
3. **Actionable Recommendation:**
   - Remove all fabricated sample review data from `src/data/reviews.ts`.
   - Highlight the authentic **4.9 / 5.0 Star Rating (300+ Verified Google Reviews)**.
   - Provide a prominent CTA linking directly to Google Reviews.
   - For on-page quote cards, extract 4–6 genuine, public, 5-star Google review excerpts (with permission / public attribution) once approved by Dom Hagemann.

---

## 7. We Buy Cars (JotForm) Specification Audit

To properly replace the disconnected prototype button on `#sell-your-vehicle` in Phase 5, the exact 14 form fields from the live JotForm (`https://form.jotform.com/260212217151037`) were documented:

1. **Year** (Text / Select, Required)
2. **Make** (Text, Required)
3. **Model** (Text, Required)
4. **Vehicle Specification** (Select, Required: `U.S. Spec` | `EU Spec`)
5. **HSN** (German Registration Key 2.1, Optional)
6. **TSN** (German Registration Key 2.2, Optional)
7. **German "Green" Registration Paperwork** (Select, Required: `I still have the "green" German registration!` | `No, I DON'T have the "green" former German registration anymore or never had it!` | `I am not sure or know what that is?`)
8. **VIN** (Text, 17 characters, Required)
9. **Mileage** (Number, Required: "read off your odometer")
10. **Mileage Type** (Radio / Select, Required: `Miles` | `Kilometers (KM)`)
11. **Financed or Paid Off** (Radio, Required: `Financed` | `Paid off`)
12. **Payoff Amount & Lienholder** (Text / Currency, Optional if financed)
13. **Asking Price & Currency** (Number + Currency Select, Required: `USD ($)` | `EUR (€)`)
14. **Reason for Sale** (Text / Select, Required: `PCSing` | `Damaged` | `Unwanted` | `Upgrading`)

**Conclusion:** The customer-facing vehicle selling funnel is a vital revenue generator for MCS. Implementing this exact workflow in a dedicated `/sell-your-vehicle` page is mandatory.

