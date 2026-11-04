import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Banknote, FileCheck } from "lucide-react";

export function SellYourVehicleSection() {
  const steps = [
    {
      icon: FileCheck,
      title: "1. Submit Vehicle Info",
      description: "Provide your year, make, mileage, and condition online or at our facility.",
    },
    {
      icon: ShieldCheck,
      title: "2. Transparent Inspection",
      description: "Our certified technicians conduct a rapid, honest 20-minute inspection.",
    },
    {
      icon: Banknote,
      title: "3. Direct Payout & Transfer",
      description: "Agree on the valuation, receive payment, and we manage German deregistration.",
    },
  ];

  return (
    <section
      id="sell-your-vehicle"
      aria-labelledby="sell-heading"
      className="py-16 md:py-24 bg-[#F5F4EF] text-[#111418] relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Representation of Muscle Car / Inventory (Dodge Challenger) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-lg overflow-hidden bg-[#111418] border-2 border-[#E2E0D8] shadow-2xl">
              {/* Graphic SVG depicting White American Muscle Car (Dodge Challenger rear three-quarter) */}
              <svg
                viewBox="0 0 500 340"
                className="w-full h-full object-cover"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="500" height="340" fill="#151A20" />
                {/* Modern Studio / Workshop Lighting Gradient */}
                <ellipse cx="250" cy="170" rx="220" ry="120" fill="#202830" opacity="0.6" />

                {/* White Muscle Car Body Silhouette */}
                <path
                  d="M50 250 L80 250 L110 210 L140 180 L220 150 L340 150 L420 190 L460 220 L460 250 Z"
                  fill="#EDEDE8"
                  stroke="#AAB2B8"
                  strokeWidth="2"
                />
                {/* Muscle Roofline & Fastback Window */}
                <path
                  d="M160 175 L220 152 L330 152 L390 190 L210 190 Z"
                  fill="#111418"
                />
                {/* Iconic Full-Width Red LED Tail Lamp Bar */}
                <rect x="70" y="210" width="130" height="14" rx="3" fill="#D83A3A" />
                <rect x="74" y="213" width="122" height="8" rx="2" fill="#FF4D4D" />

                {/* Dual Exhaust Tips */}
                <rect x="80" y="245" width="28" height="12" rx="4" fill="#343C43" stroke="#AAB2B8" />
                <rect x="130" y="245" width="28" height="12" rx="4" fill="#343C43" stroke="#AAB2B8" />

                {/* Wide Performance Wheels */}
                <circle cx="110" cy="250" r="34" fill="#111418" stroke="#343C43" strokeWidth="4" />
                <circle cx="110" cy="250" r="18" fill="#202830" />
                <circle cx="410" cy="250" r="34" fill="#111418" stroke="#343C43" strokeWidth="4" />
                <circle cx="410" cy="250" r="18" fill="#202830" />

                {/* Challenger Trunk Spoiler */}
                <path d="M60 205 L110 203 L190 205 Z" fill="#111418" />
              </svg>

              {/* Tag Overlays */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="bg-[#111418] text-[#F5F4EF] text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded">
                  PCS Relocation Ready
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#111418]/90 backdrop-blur-sm p-3 rounded border border-[#343C43] text-xs text-[#AAB2B8] flex items-center justify-between">
                <div>
                  <span className="text-white font-semibold">Immediate Cash or Consignment</span>
                  <p className="text-[11px] text-[#AAB2B8]">We buy US-spec and European-spec models</p>
                </div>
                <span className="font-mono text-[#D83A3A] font-bold text-xs uppercase">
                  Fast Turnaround
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Process Steps */}
          <div className="lg:col-span-6">
            {/* Kicker */}
            <div className="inline-flex items-center gap-1.5 mb-2 font-display font-bold tracking-wider text-xs uppercase text-[#D83A3A]">
              <span className="font-mono text-sm tracking-tighter">{"///"}</span>
              <span>Sell Your Vehicle</span>
            </div>

            {/* Headline */}
            <h2
              id="sell-heading"
              className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl text-[#111418] tracking-tight leading-[1.05]"
            >
              Looking to Sell Your Car?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#343C43] leading-relaxed">
              PCS orders, rotation back to CONUS, or simply upgrading your ride?
              We buy quality vehicles and make the process simple, transparent, and
              hassle-free.
            </p>

            {/* 3 Process Steps */}
            <div className="mt-8 space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white border border-[#E2E0D8] shadow-sm hover:border-[#D83A3A]/40 transition-colors"
                >
                  <div className="p-2.5 rounded bg-[#F5F4EF] border border-[#D0D4D8] text-[#D83A3A] shrink-0 mt-0.5">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold uppercase text-base text-[#111418] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5560] mt-1 leading-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="text-base font-bold shadow-md shadow-[#D83A3A]/20"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                <Link href="#book-service">Get a Vehicle Evaluation</Link>
              </Button>

              <span className="text-xs text-[#64717C] font-mono sm:max-w-xs">
                No automated guesswork — accurate market evaluation by human technicians.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
