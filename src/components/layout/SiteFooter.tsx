import React from "react";
import Link from "next/link";
import { MCSLogo } from "@/components/ui/MCSLogo";
import { FOOTER_NAV } from "@/config/navigation";
import { BRAND, CONTACT_STATUS, DISCLAIMER } from "@/lib/constants";
import { ShieldAlert, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#111418] border-t border-[#343C43] text-[#AAB2B8] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="MCS Home">
              <MCSLogo size="lg" />
            </Link>

            <div className="pt-2">
              <p className="font-display font-bold uppercase text-lg text-[#F5F4EF] tracking-tight">
                {BRAND.tagline}
              </p>
              <p className="text-xs text-[#AAB2B8] mt-1 font-sans">
                {BRAND.supportingLine}
              </p>
            </div>

            <p className="text-xs text-[#AAB2B8] max-w-sm leading-relaxed">
              Specialized maintenance, diagnostics, parts sourcing, and vehicle
              sales serving U.S. service members, DoD employees, and families
              across Germany.
            </p>

            {/* Verification Status Alert */}
            <div className="p-3 rounded bg-[#202830] border border-[#343C43] text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#D69B32] font-semibold text-[11px] uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Business Details Pending Client Verification</span>
              </div>
              <p className="text-[11px] text-[#AAB2B8] leading-normal">
                Opening hours, exact workshop street address, and direct phone lines
                are formatted as placeholders pending confirmation from the business
                owner.
              </p>
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-xs text-[#F5F4EF] mb-4 flex items-center gap-1.5">
              <span className="text-[#D83A3A] font-mono">{"///"}</span>
              <span>Services</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5F4EF] transition-colors focus-mcs"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Company & Military */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider text-xs text-[#F5F4EF] mb-4 flex items-center gap-1.5">
              <span className="text-[#D83A3A] font-mono">{"///"}</span>
              <span>Military & About</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_NAV.military.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5F4EF] transition-colors focus-mcs"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              {FOOTER_NAV.company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F5F4EF] transition-colors focus-mcs"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Workshop Info & Hours */}
          <div className="space-y-3">
            <h3 className="font-display font-bold uppercase tracking-wider text-xs text-[#F5F4EF] mb-4 flex items-center gap-1.5">
              <span className="text-[#D83A3A] font-mono">{"///"}</span>
              <span>Workshop</span>
            </h3>
            <div className="text-xs space-y-2.5 text-[#AAB2B8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D83A3A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#F5F4EF] font-medium">{CONTACT_STATUS.address.street}</p>
                  <p>{CONTACT_STATUS.address.city}, {CONTACT_STATUS.address.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D83A3A] shrink-0 mt-0.5" />
                <div>
                  <p>{CONTACT_STATUS.hours.weekdays}</p>
                  <p className="text-[11px] text-[#7B8792]">{CONTACT_STATUS.hours.sunday}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#D83A3A] shrink-0" />
                <span>{CONTACT_STATUS.phone.display}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Phase One Boundary */}
        <div className="mt-12 pt-8 border-t border-[#343C43] space-y-4 text-xs text-[#7B8792]">
          <p className="leading-relaxed">{DISCLAIMER.militaryAffiliation}</p>
          <p className="leading-relaxed italic">{DISCLAIMER.phaseOneNotice}</p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#343C43]/40 text-[11px]">
            <p>
              &copy; {currentYear} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {FOOTER_NAV.legal.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hover:text-[#F5F4EF] transition-colors focus-mcs"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
