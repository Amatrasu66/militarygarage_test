import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Car } from "lucide-react";

export function HeroSection() {
  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#111418] overflow-hidden"
    >
      {/* Background Graphic & Vehicle Composition */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Workshop / Facility Architectural Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 bg-[radial-gradient(#343C43_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Cinematic Vignette Overlays for Maximum Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-[#111418]/90 lg:via-[#111418]/70 to-[#111418]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-transparent to-transparent z-10" />

        {/* Dramatic American Vehicle SVG Backdrop Representation (Right Side) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0 flex items-center justify-end overflow-hidden opacity-60 lg:opacity-90">
          <svg
            viewBox="0 0 900 650"
            className="w-full h-full object-cover scale-105 select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="truckBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#252D36" />
                <stop offset="50%" stopColor="#1B222A" />
                <stop offset="100%" stopColor="#111418" />
              </linearGradient>
              <linearGradient id="grilleGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D83A3A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D83A3A" stopOpacity="0.1" />
              </linearGradient>
              <filter id="headlightGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* MCS Facility Signage in background */}
            <text
              x="550"
              y="140"
              fill="#202830"
              fontSize="72"
              fontWeight="900"
              fontFamily="sans-serif"
              fontStyle="italic"
              letterSpacing="2"
            >
              MCS
            </text>
            <text
              x="550"
              y="170"
              fill="#343C43"
              fontSize="16"
              fontWeight="700"
              fontFamily="sans-serif"
              letterSpacing="6"
            >
              MILITARY CAR SERVICE
            </text>

            {/* Architectural Pillars / Workshop Bays */}
            <rect x="520" y="80" width="12" height="500" fill="#1C232B" opacity="0.5" />
            <rect x="740" y="80" width="12" height="500" fill="#1C232B" opacity="0.5" />

            {/* Truck Hood, Grille & Front Bully Bar */}
            <path
              d="M320 340 L520 290 L780 290 L850 360 L870 480 L350 490 Z"
              fill="url(#truckBody)"
              stroke="#343C43"
              strokeWidth="2"
            />
            {/* Massive Aggressive Truck Grille */}
            <rect x="480" y="320" width="350" height="130" rx="8" fill="#111418" stroke="#343C43" strokeWidth="3" />
            {/* Grille Honeycomb / Horizontal Louvers */}
            <line x1="490" y1="345" x2="820" y2="345" stroke="#252E38" strokeWidth="4" />
            <line x1="490" y1="375" x2="820" y2="375" stroke="#252E38" strokeWidth="4" />
            <line x1="490" y1="405" x2="820" y2="405" stroke="#252E38" strokeWidth="4" />
            <line x1="490" y1="435" x2="820" y2="435" stroke="#252E38" strokeWidth="4" />

            {/* Center Grille Monogram Plate */}
            <rect x="580" y="365" width="150" height="40" rx="4" fill="#1A2027" stroke="#343C43" />
            <text
              x="655"
              y="392"
              fill="#AAB2B8"
              fontSize="20"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="8"
              textAnchor="middle"
            >
              F O R D
            </text>

            {/* High-Impact Amber/C-Clamp Headlights */}
            <path
              d="M440 330 L470 330 L470 430 L440 430 L440 400 L455 400 L455 360 L440 360 Z"
              fill="#E5A93C"
              filter="url(#headlightGlow)"
            />
            <path
              d="M840 330 L870 330 L870 360 L855 360 L855 400 L870 400 L870 430 L840 430 Z"
              fill="#E5A93C"
              filter="url(#headlightGlow)"
            />

            {/* Off-Road Tires & Wheel Stance */}
            <circle cx="340" cy="510" r="110" fill="#0C0E11" stroke="#202830" strokeWidth="8" />
            <circle cx="340" cy="510" r="60" fill="#151A20" stroke="#343C43" strokeWidth="4" />
            <circle cx="850" cy="510" r="110" fill="#0C0E11" stroke="#202830" strokeWidth="8" />
            <circle cx="850" cy="510" r="60" fill="#151A20" stroke="#343C43" strokeWidth="4" />

            {/* Front Skid Plate with Red Tow Hooks */}
            <rect x="540" y="460" width="230" height="30" fill="#202830" stroke="#343C43" />
            <path d="M570 475 L590 475 L590 495 L570 495 Z" fill="#D83A3A" />
            <path d="M720 475 L740 475 L740 495 L720 495 Z" fill="#D83A3A" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtitle / Kicker Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded bg-[#202830]/90 border border-[#343C43] backdrop-blur-sm">
            <span className="font-mono text-[#D83A3A] font-bold text-sm tracking-tighter">
              {"///"}
            </span>
            <span className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-[#F5F4EF]">
              American Auto Care in Germany
            </span>
          </div>

          {/* Primary Tagline Headline */}
          <h1 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#F5F4EF]">
            YOUR CAR. <br />
            <span className="text-[#D83A3A]">OUR MISSION.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-xl text-[#AAB2B8] max-w-xl leading-relaxed">
            Professional automotive service, diagnostics, repairs, and vehicle sales
            engineered for the U.S. military community stationed across Germany.
          </p>

          {/* Dual Primary Actions (Equal Priority) */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              asChild
              variant="primary"
              size="lg"
              className="text-base font-bold shadow-lg shadow-[#D83A3A]/20"
              leftIcon={<Wrench className="w-5 h-5" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              <Link href="#book-service">Book a Service</Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-base font-bold"
              leftIcon={<Car className="w-5 h-5" />}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              <Link href="#sell-your-vehicle">Sell Your Vehicle</Link>
            </Button>
          </div>

          {/* Quick Credential Highlights */}
          <div className="mt-10 pt-8 border-t border-[#343C43]/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-sans text-[#AAB2B8]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#27865C]" />
              <span>VAT Relief Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D83A3A]" />
              <span>US-Spec Diagnostic Gear</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#347DA5]" />
              <span>English & German Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
