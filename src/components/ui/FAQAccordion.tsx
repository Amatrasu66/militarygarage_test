"use client";

import React, { useState } from "react";
import { FaqItem } from "@/types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface FAQAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "military", label: "Military & VAT Relief" },
    { id: "services", label: "Workshop & Repairs" },
    { id: "sales", label: "Vehicle Sales & PCS" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors focus-mcs cursor-pointer",
                isActive
                  ? "bg-[#D83A3A] text-white"
                  : "bg-[#202830] text-[#AAB2B8] hover:text-[#F5F4EF] border border-[#343C43]"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-[#343C43] rounded-lg border border-[#343C43] bg-[#202830]/70 overflow-hidden">
        {filteredItems.map((item) => {
          const isOpen = openIds.includes(item.id);
          const controlId = `faq-content-${item.id}`;
          const buttonId = `faq-btn-${item.id}`;

          return (
            <div key={item.id} className="transition-colors hover:bg-[#202830]">
              <h3>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={controlId}
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-display font-bold tracking-wide uppercase text-base sm:text-lg text-[#F5F4EF] focus-mcs"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#D83A3A] font-mono text-sm tracking-tighter">
                      {"///"}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 text-[#AAB2B8] transition-transform duration-200",
                      isOpen && "rotate-180 text-[#D83A3A]"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={controlId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={cn(
                  "px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#AAB2B8] leading-relaxed border-t border-[#343C43]/40",
                  !isOpen && "hidden"
                )}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
