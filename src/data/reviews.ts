import { ReviewItem } from "@/types";

/**
 * Customer reviews structure.
 * STATUS: Sample placeholders for UI demonstration during Phase One development.
 * Awaiting verified Google Reviews or customer testimonial export from business owner.
 */
export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: "sample-rev-1",
    author: "Stationed Service Member",
    rankOrRole: "USAF",
    location: "Ramstein Air Base",
    rating: 5,
    date: "Pending Verification",
    vehicle: "2020 Ford F-150",
    serviceType: "USAREUR Inspection & Brake Overhaul",
    quote:
      "Having an English-speaking shop that actually understands American trucks made our PCS transition infinitely smoother. Handled the USAREUR inspection readiness and VAT form with zero friction.",
    isVerifiedReview: false,
    source: "Sample Placeholder (Verification Pending)",
  },
  {
    id: "sample-rev-2",
    author: "Military Community Member",
    rankOrRole: "DoD Civilian",
    location: "Kaiserslautern Military Community",
    rating: 5,
    date: "Pending Verification",
    vehicle: "2018 Jeep Grand Cherokee",
    serviceType: "Diagnostics & Transmission Service",
    quote:
      "German dealerships quoted 6 weeks to source parts from the States. MCS diagnosed the issue within 24 hours and had the correct OEM components in hand rapidly.",
    isVerifiedReview: false,
    source: "Sample Placeholder (Verification Pending)",
  },
  {
    id: "sample-rev-3",
    author: "U.S. Army Personnel",
    rankOrRole: "US Army",
    location: "Baumholder",
    rating: 5,
    date: "Pending Verification",
    vehicle: "2019 Dodge Challenger R/T",
    serviceType: "Vehicle Purchase / Consignment",
    quote:
      "Sold my Challenger before shipping back CONUS. Fair evaluation, clean paperwork handled in English and German, and payment cleared without any headaches.",
    isVerifiedReview: false,
    source: "Sample Placeholder (Verification Pending)",
  },
];
