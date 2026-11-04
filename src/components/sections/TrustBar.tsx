import React from "react";
import { TRUST_PILLARS } from "@/data/trust";
import { ShieldCheck, Truck, Wrench, KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TrustBarProps {
  className?: string;
}

export function TrustBar({ className }: TrustBarProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#D83A3A] shrink-0" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-[#D83A3A] shrink-0" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[#D83A3A] shrink-0" />;
      case "KeyRound":
        return <KeyRound className="w-5 h-5 text-[#D83A3A] shrink-0" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#D83A3A] shrink-0" />;
    }
  };

  return (
    <section
      aria-label="Core Business Capabilities"
      className={cn(
        "w-full bg-[#111418] border-y border-[#343C43] py-6 sm:py-7 relative z-20",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex items-start sm:items-center gap-3.5 group"
            >
              <div className="p-2 rounded bg-[#202830] border border-[#343C43] group-hover:border-[#D83A3A]/40 transition-colors">
                {getIcon(pillar.iconName)}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold uppercase tracking-tight text-sm text-[#F5F4EF]">
                  {pillar.title}
                </span>
                <span className="text-xs text-[#AAB2B8]">
                  {pillar.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
