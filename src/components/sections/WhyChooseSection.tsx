import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_MCS } from "@/data/trust";
import { Star, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export function WhyChooseSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-6 h-6 text-[#D83A3A]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#D83A3A]" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-[#D83A3A]" />;
      default:
        return <Star className="w-6 h-6 text-[#D83A3A]" />;
    }
  };

  return (
    <section
      id="why-mcs"
      aria-labelledby="why-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Why Choose MCS"
          title="The Trusted Auto Partner For The Military Community"
          subtitle="Navigating vehicle ownership, mandatory inspections, and maintenance in Germany requires a partner who speaks your language and understands American vehicles."
          alignment="center"
        />

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_MCS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-8 rounded-lg bg-[#202830] border border-[#343C43] hover:border-[#D83A3A]/50 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded flex items-center justify-center bg-[#111418] border border-[#343C43] mb-6 group-hover:border-[#D83A3A]/40 transition-colors">
                {getIcon(item.iconName)}
              </div>

              <h3 className="font-display font-bold uppercase text-2xl text-[#F5F4EF] tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#AAB2B8] leading-relaxed">
                {item.description}
              </p>

              {/* Supporting Checkpoints */}
              <div className="mt-6 pt-5 border-t border-[#343C43]/60 flex items-center gap-2 text-xs font-mono text-[#F5F4EF]">
                <CheckCircle className="w-4 h-4 text-[#27865C]" />
                <span>Military-community focused standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
