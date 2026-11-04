import { BRAND, CONTACT_STATUS, DISCLAIMER } from "@/lib/constants";

export const siteConfig = {
  name: BRAND.name,
  legalName: BRAND.legalName,
  shortName: BRAND.shortName,
  tagline: BRAND.tagline,
  supportingLine: BRAND.supportingLine,
  description:
    "Military Car Service (MCS) provides specialized U.S.-spec automotive care, diagnostics, maintenance, and vehicle buying assistance for the U.S. military community in Germany.",
  url: "https://www.militarycarservice.com",
  contact: CONTACT_STATUS,
  disclaimer: DISCLAIMER,
  links: {
    home: "/",
    services: "/services",
    sellVehicle: "/sell-your-vehicle",
    bookService: "/book-appointment",
    about: "/about",
    reviews: "/reviews",
    gallery: "/gallery",
    contact: "/contact",
    jobs: "/jobs",
    impressum: "/impressum",
    privacy: "/privacy",
    terms: "/terms",
    eTermin: "https://www.etermin.net/militarycarservice",
    googleReviews:
      "https://www.google.com/search?client=firefox-b-d&q=Military+Car+Service#lrd=0x4799e7dfa53f5363:0x489c9d1eec0e03d7,1,,,",
    facebook: "https://facebook.com/Military-Car-Service-594773097614583",
    instagram: "https://instagram.com/militarycarservice",
  },
};
