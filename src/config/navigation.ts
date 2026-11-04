import { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "#services" },
  { title: "Sell Your Vehicle", href: "#sell-your-vehicle" },
  { title: "Why MCS", href: "#why-mcs" },
  { title: "Vehicles", href: "#vehicles" },
  { title: "Reviews", href: "#reviews" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

export const FOOTER_NAV = {
  services: [
    { title: "Maintenance & Service", href: "#services" },
    { title: "Repairs & Diagnostics", href: "#services" },
    { title: "Tires & Wheels", href: "#services" },
    { title: "Performance & Upgrades", href: "#services" },
    { title: "USAREUR Inspection Readiness", href: "#faq" },
  ],
  company: [
    { title: "About MCS", href: "#about" },
    { title: "Why Choose Us", href: "#why-mcs" },
    { title: "Workshop Gallery", href: "#gallery" },
    { title: "Customer Reviews", href: "#reviews" },
    { title: "Location & Hours", href: "#contact" },
  ],
  military: [
    { title: "VAT Form Information", href: "#faq" },
    { title: "PCS Vehicle Assistance", href: "#sell-your-vehicle" },
    { title: "U.S. Spec Diagnostics", href: "#services" },
  ],
  legal: [
    { title: "Impressum (Legal Notice)", href: "#legal" },
    { title: "Privacy Policy (Datenschutz)", href: "#legal" },
    { title: "Terms of Service", href: "#legal" },
  ],
};
