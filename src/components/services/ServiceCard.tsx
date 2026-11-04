import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { cn } from "@/lib/utils";
import { Wrench, Cpu, Disc, Gauge, ArrowRight } from "lucide-react";

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Wrench":
        return <Wrench className="w-6 h-6 text-[#D83A3A]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#D83A3A]" />;
      case "Disc":
        return <Disc className="w-6 h-6 text-[#D83A3A]" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-[#D83A3A]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#D83A3A]" />;
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between p-6 sm:p-7 rounded-lg",
        "bg-[#202830] border border-[#343C43] transition-all duration-200",
        "hover:border-[#D83A3A]/60 hover:shadow-lg hover:shadow-black/40",
        className
      )}
    >
      <div>
        {/* Red Icon Badge */}
        <div className="w-12 h-12 rounded flex items-center justify-center bg-[#111418] border border-[#343C43] mb-5 group-hover:border-[#D83A3A]/40 transition-colors">
          {getIcon(service.iconName)}
        </div>

        {/* Card Title */}
        <h3 className="font-display font-bold uppercase text-xl sm:text-2xl text-[#F5F4EF] tracking-tight mb-2.5">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#AAB2B8] leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Bullet features */}
        {service.features && service.features.length > 0 && (
          <ul className="space-y-2 mb-6 border-t border-[#343C43]/60 pt-4">
            {service.features.map((feat, idx) => (
              <li
                key={idx}
                className="text-xs text-[#AAB2B8] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D83A3A] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom CTA Arrow */}
      <div className="pt-2 flex items-center justify-between border-t border-[#343C43]/40">
        <Link
          href="#book-service"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F4EF] group-hover:text-[#D83A3A] transition-colors focus-mcs"
        >
          <span>Enquire Service</span>
          <ArrowRight className="w-4 h-4 text-[#D83A3A] group-hover:translate-x-1 transition-transform" />
        </Link>

        {service.isPendingVerification && (
          <span className="text-[10px] font-mono text-[#7B8792] bg-[#111418] px-2 py-0.5 rounded border border-[#343C43]">
            Category to confirm
          </span>
        )}
      </div>
    </div>
  );
}
