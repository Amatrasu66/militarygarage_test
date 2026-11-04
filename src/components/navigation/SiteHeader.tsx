"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAV } from "@/config/navigation";
import { MCSLogo } from "@/components/ui/MCSLogo";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { Phone, Menu, ArrowRight } from "lucide-react";
import { CONTACT_STATUS } from "@/lib/constants";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#111418]/95 backdrop-blur-md border-b border-[#343C43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center focus-mcs rounded p-1 -m-1"
                aria-label="Military Car Service Home"
              >
                <MCSLogo size="md" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center space-x-7"
            >
              {MAIN_NAV.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="font-sans text-sm font-medium text-[#AAB2B8] hover:text-[#F5F4EF] transition-colors relative py-1 focus-mcs rounded"
                >
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Right: Phone CTA & Primary Action */}
            <div className="hidden sm:flex items-center space-x-5">
              {/* Phone indicator (marked with verification tooltip) */}
              <div
                className="group relative flex items-center gap-2 text-xs font-mono text-[#AAB2B8] hover:text-[#F5F4EF] transition-colors cursor-help"
                title={CONTACT_STATUS.phone.verificationNote}
              >
                <Phone className="w-3.5 h-3.5 text-[#D83A3A]" aria-hidden="true" />
                <span>+49 631 ••• ••••</span>
                <span className="sr-only">({CONTACT_STATUS.phone.verificationNote})</span>

                {/* Tooltip on hover */}
                <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-56 p-2 rounded bg-[#202830] border border-[#343C43] text-[10px] text-[#D69B32] shadow-xl z-50">
                  {CONTACT_STATUS.phone.verificationNote}
                </div>
              </div>

              {/* Primary Action Button */}
              <Button
                asChild
                variant="primary"
                size="sm"
                className="h-9 px-4 text-xs font-bold uppercase tracking-wider"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                <Link href="#book-service">Book a Service</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                asChild
                variant="primary"
                size="sm"
                className="sm:hidden h-8 px-3 text-[11px] font-bold uppercase"
              >
                <Link href="#book-service">Book</Link>
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open primary menu"
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded text-[#AAB2B8] hover:text-[#F5F4EF] hover:bg-[#202830] border border-[#343C43] focus-mcs cursor-pointer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
