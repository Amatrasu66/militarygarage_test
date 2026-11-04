/**
 * Canonical brand constants for Military Car Service (MCS)
 * In accordance with Phase One specification, all business facts
 * requiring verification are flagged with VERIFICATION_REQUIRED.
 */

export const BRAND = {
  name: "Military Car Service",
  shortName: "MCS",
  tagline: "YOUR CAR. OUR MISSION.",
  supportingLine: "American Automotive Expertise. German Precision.",
  targetAudience: "U.S. Military Community in Germany",
  specialization: "American-Spec & European Vehicles",
} as const;

export const CONTACT_STATUS = {
  // Flagged for verification as instructed: do not invent fake live numbers
  phone: {
    display: "+49 (0) 631 ••• ••••",
    raw: "",
    isVerified: false,
    verificationNote: "Pending official phone number verification with business owner",
  },
  email: {
    display: "service@militarycarservice.de [Pending Verification]",
    raw: "",
    isVerified: false,
    verificationNote: "Pending official email verification with business owner",
  },
  address: {
    street: "Kaiserslautern / Ramstein Area",
    city: "Rhineland-Palatinate",
    country: "Germany",
    isVerified: false,
    verificationNote: "Pending physical workshop address verification",
  },
  hours: {
    weekdays: "Monday – Friday: 08:00 – 17:00 [Estimated]",
    saturday: "Saturday: By appointment [Pending Verification]",
    sunday: "Sunday & German Holidays: Closed",
    isVerified: false,
  },
} as const;

export const DISCLAIMER = {
  militaryAffiliation:
    "Military Car Service is an independent commercial automotive specialist proudly serving members of the U.S. Armed Forces, DoD civilians, and NATO personnel stationed in Germany. MCS is not an agency of the U.S. Department of Defense or any official military organization.",
  phaseOneNotice:
    "This interface is an initial frontend release (Phase One). Booking and valuation submissions are frontend prototypes and do not record production appointments.",
} as const;
