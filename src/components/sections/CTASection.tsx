import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Car, PhoneCall } from "lucide-react";
import { BRAND, CONTACT_STATUS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface CTASectionProps {
  className?: string;
}

export function CTASection({ className }: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className={cn(
        "relative py-16 md:py-24 bg-[#111418] border-t border-[#343C43] overflow-hidden",
        className
      )}
    >
      {/* Decorative Red Accent Slanted Bar in Background */}
      <div
        className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#D83A3A]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#202830] to-[#151B22] border border-[#343C43] rounded-xl p-8 sm:p-12 lg:p-16 text-center">
          {/* Kicker */}
          <div className="inline-flex items-center gap-1.5 mb-3 font-display font-bold tracking-wider text-xs uppercase text-[#D83A3A]">
            <span className="font-mono text-sm tracking-tighter">{"///"}</span>
            <span>READY FOR PRECISION SERVICE?</span>
          </div>

          {/* Main Headline */}
          <h2
            id="cta-heading"
            className="font-display font-black uppercase text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] tracking-tight max-w-4xl mx-auto"
          >
            {BRAND.tagline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#AAB2B8] max-w-2xl mx-auto leading-relaxed">
            {BRAND.supportingLine} Whether scheduling scheduled maintenance, resolving
            a check-engine light, or requesting an evaluation to sell your vehicle,
            our team is ready.
          </p>

          {/* Dual Primary Actions - Equal Importance */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base"
              leftIcon={<Wrench className="w-5 h-5" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              <Link href="#book-service">Book a Service</Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto text-base"
              leftIcon={<Car className="w-5 h-5" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              <Link href="#sell-your-vehicle">Sell Your Vehicle</Link>
            </Button>
          </div>

          {/* Verification / Contact Note */}
          <div className="mt-8 pt-6 border-t border-[#343C43]/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#AAB2B8]">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#D83A3A]" />
              <span>Workshop Line: {CONTACT_STATUS.phone.display}</span>
            </div>
            <span className="hidden sm:inline text-[#343C43]">•</span>
            <span className="text-[#D69B32] font-mono text-[11px]">
              {CONTACT_STATUS.phone.verificationNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
