import { ServiceItem } from "@/types";

/**
 * Service categories based on approved visual reference.
 * STATUS: Unverified offerings pending confirmation with MCS workshop management.
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "maintenance-service",
    title: "Maintenance & Service",
    category: "maintenance",
    shortDescription: "Oil changes, scheduled inspections, fluid exchanges and manufacturer-recommended routine care.",
    features: [
      "OEM-specification oil & filter replacement",
      "Full 40-point safety inspection",
      "Brake fluid, coolant & transmission service",
      "Scheduled factory maintenance tracking",
    ],
    iconName: "Wrench",
    href: "/services#maintenance",
    isPendingVerification: true,
  },
  {
    id: "repairs-diagnostics",
    title: "Repairs & Diagnostics",
    category: "repairs",
    shortDescription: "Advanced computer diagnostics and mechanical repairs for American and European vehicle platforms.",
    features: [
      "Check engine light & electrical fault scanning",
      "Suspension, steering & braking systems",
      "Engine & transmission mechanical repair",
      "Air conditioning & heating service",
    ],
    iconName: "Cpu",
    href: "/services#diagnostics",
    isPendingVerification: true,
  },
  {
    id: "tires-wheels",
    title: "Tires & Wheels",
    category: "tires",
    shortDescription: "Tire sales, precision mounting, road-force balancing, alignment, and German seasonal changeovers.",
    features: [
      "US-spec and European-spec tire sizing",
      "Winter / All-Season German compliance checks",
      "Precision computerized 4-wheel alignment",
      "TPMS sensor replacement & calibration",
    ],
    iconName: "Disc",
    href: "/services#tires",
    isPendingVerification: true,
  },
  {
    id: "performance-upgrades",
    title: "Performance & Upgrades",
    category: "performance",
    shortDescription: "Exhaust systems, leveling kits, suspension tuning and accessories with German TÜV-compliance guidance.",
    features: [
      "Cat-back exhaust & intake systems",
      "Truck leveling kits & lift packages",
      "Lighting & accessory installations",
      "German TÜV registration guidance",
    ],
    iconName: "Gauge",
    href: "/services#performance",
    isPendingVerification: true,
  },
];
