/**
 * Canonical brand constants for Military Car Service (MCS)
 * Updated in Phase 1 with verified business data from official sources (Phase 0 Audit).
 */

export const BRAND = {
  name: "Military Car Service",
  legalName: "Military Car Service / TheMechanicDom",
  shortName: "MCS",
  owner: "Dom Hagemann",
  foundingYear: 2008,
  tagline: "YOUR CAR. OUR MISSION.",
  supportingLine: "American Automotive Expertise. German Precision.",
  targetAudience: "U.S. Military Community in Germany",
  specialization: "American-Spec & European Vehicles",
} as const;

export const CONTACT_STATUS = {
  phone: {
    display: "+49 (0)7157 5377196",
    raw: "+4971575377196",
    isVerified: true,
    note: "Shop Front Desk Landline (Weil im Schönbuch / Stuttgart)",
    verificationNote: "Verified Shop Front Desk Line (Weil im Schönbuch / Stuttgart)",
  },
  whatsapp: {
    display: "+49 171 732 5983",
    raw: "+491717325983",
    isVerified: true,
    url: "https://wa.me/491717325983",
    note: "Official WhatsApp messaging channel",
    verificationNote: "Official WhatsApp messaging channel",
  },
  email: {
    display: "appointments@militarycarservice.com",
    raw: "appointments@militarycarservice.com",
    isVerified: true,
    note: "Primary service & appointment enquiries",
    verificationNote: "Verified official appointments email",
  },
  ownerEmail: {
    display: "dom@militarycarservice.com",
    raw: "dom@militarycarservice.com",
    isVerified: true,
    note: "Direct management contact",
  },
  address: {
    street: "Karl-Benz-Str. 17",
    postalCode: "71093",
    city: "Weil im Schönbuch",
    state: "Baden-Württemberg",
    country: "Germany",
    landmark: "Entrance across from the Car Wash (near Stuttgart / Böblingen, Panzer Kaserne)",
    isVerified: true,
    verificationNote: "Karl-Benz-Str. 17, 71093 Weil im Schönbuch (opp. Car Wash)",
    mapsUrl: "https://maps.app.goo.gl/VhHwBRYCvFCTU4uq7",
    coordinates: {
      latitude: 48.6187603,
      longitude: 9.0362095,
    },
  },
  legal: {
    legalForm: "Sole Proprietorship (Einzelunternehmen)",
    managingDirector: "Dom Hagemann",
    taxId: "DE223014684",
    isVerified: true,
  },
  hours: {
    weekdays: "Monday – Friday (Drop-off & Workshop hours pending owner confirmation)",
    saturday: "Saturday: By appointment",
    sunday: "Sunday & German Holidays: Closed",
    isVerified: false,
    verificationNote: "Official customer reception hours pending sign-off with Dom Hagemann",
  },
} as const;

export const DISCLAIMER = {
  militaryAffiliation:
    "Military Car Service is an independent commercial automotive specialist proudly serving members of the U.S. Armed Forces, DoD civilians, and NATO personnel stationed in Germany. MCS is not an agency of the U.S. Department of Defense or any official military organization.",
  phaseNotice:
    "Military Car Service — Professional automotive care, diagnostics, and vehicle evaluations.",
  phaseOneNotice:
    "Military Car Service — Professional automotive care, diagnostics, and vehicle evaluations.",
} as const;
