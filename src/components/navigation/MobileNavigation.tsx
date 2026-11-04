"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MAIN_NAV } from "@/config/navigation";
import { MCSLogo } from "@/components/ui/MCSLogo";
import { Button } from "@/components/ui/Button";
import { X, ArrowRight, PhoneCall } from "lucide-react";
import { CONTACT_STATUS } from "@/lib/constants";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  // Prevent body scroll when mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#111418] text-[#F5F4EF]"
    >
      {/* Top Bar with Logo and Close */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#343C43]">
        <Link href="/" onClick={onClose} aria-label="MCS Home">
          <MCSLogo size="md" />
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded text-[#AAB2B8] hover:text-[#F5F4EF] hover:bg-[#202830] border border-[#343C43] focus-mcs"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
        <nav className="flex flex-col space-y-4">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className="font-display font-bold uppercase text-2xl tracking-tight text-[#F5F4EF] hover:text-[#D83A3A] transition-colors py-2 border-b border-[#343C43]/40 flex items-center justify-between"
            >
              <span>{item.title}</span>
              <span className="text-[#D83A3A] font-mono text-xs">{"///"}</span>
            </Link>
          ))}
        </nav>

        {/* Dual Actions and Contact Notice */}
        <div className="pt-6 mt-6 border-t border-[#343C43] space-y-4">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="w-full justify-between"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            <Link href="#book-service" onClick={onClose}>
              Book a Service
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="w-full justify-between"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            <Link href="#sell-your-vehicle" onClick={onClose}>
              Sell Your Vehicle
            </Link>
          </Button>

          <div className="pt-3 text-xs text-[#AAB2B8] bg-[#202830] p-3 rounded border border-[#343C43]">
            <div className="flex items-center gap-2 font-semibold text-[#F5F4EF]">
              <PhoneCall className="w-3.5 h-3.5 text-[#D83A3A]" />
              <span>{CONTACT_STATUS.phone.display}</span>
            </div>
            <p className="text-[10px] text-[#D69B32] font-mono mt-1">
              {CONTACT_STATUS.phone.verificationNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
