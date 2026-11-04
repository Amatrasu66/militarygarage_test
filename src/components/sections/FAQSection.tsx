import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQS_DATA } from "@/data/faqs";

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Frequently Asked Questions"
          title="Everything You Need To Know"
          subtitle="Clear answers about German VAT relief, USAREUR vehicle inspections, parts logistics, and selling your vehicle."
          alignment="center"
        />

        <div className="mt-8">
          <FAQAccordion items={FAQS_DATA} />
        </div>
      </div>
    </section>
  );
}
