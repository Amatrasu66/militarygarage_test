import { BRAND, CONTACT_STATUS, DISCLAIMER } from "@/lib/constants";

export const siteConfig = {
  name: BRAND.name,
  shortName: BRAND.shortName,
  tagline: BRAND.tagline,
  supportingLine: BRAND.supportingLine,
  description:
    "Military Car Service (MCS) provides specialized automotive care, diagnostics, maintenance, and vehicle sales for the U.S. military community in Germany.",
  url: "https://militarycarservice.de",
  ogImage: "/images/og-image.jpg",
  contact: CONTACT_STATUS,
  disclaimer: DISCLAIMER,
  links: {
    services: "/services",
    sellVehicle: "/sell-your-vehicle",
    bookService: "/book-appointment",
    about: "/about",
    reviews: "/reviews",
    gallery: "/gallery",
    contact: "/contact",
    impressum: "/impressum",
    privacy: "/privacy",
  },
};
