import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES_DATA } from "@/data/services";
import { ArrowRight, AlertCircle } from "lucide-react";

export function ServicesOverview() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24 bg-[#111418] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our Services"
          title="Complete Auto Care For Your Vehicle"
          subtitle="From factory-scheduled maintenance to complex powertrain diagnostics, our workshop delivers dependable American automotive expertise backed by German precision."
          action={
            <Link
              href="#book-service"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D83A3A] hover:text-[#BA2E2E] focus-mcs"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Verification Note for Services Catalog */}
        <div className="mt-8 p-3 rounded bg-[#202830]/60 border border-[#343C43] flex items-center justify-between text-xs text-[#AAB2B8]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#D69B32] shrink-0" />
            <span>
              Detailed service packages, hourly labor rates, and parts catalogues are
              subject to confirmation with MCS management during Phase Two.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#D69B32] uppercase shrink-0 hidden sm:inline">
            Status: Proposed Offerings
          </span>
        </div>
      </div>
    </section>
  );
}
