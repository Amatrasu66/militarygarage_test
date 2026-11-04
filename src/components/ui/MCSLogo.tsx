import React from "react";
import { cn } from "@/lib/utils";

export interface MCSLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "horizontal" | "stacked" | "monogram" | "badge";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * MCS Brand Logo Component (Phase One Foundation)
 * Designed with custom geometric angular construction, mechanical speed cuts,
 * and performance red accents matching the approved visual direction.
 * Can be cleanly swapped with final production vector assets when approved.
 */
export function MCSLogo({
  variant = "horizontal",
  theme = "dark",
  size = "md",
  className,
  ...props
}: MCSLogoProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-[#F5F4EF]" : "text-[#111418]";
  const subtextColor = isDark ? "text-[#AAB2B8]" : "text-[#343C43]";

  if (variant === "monogram") {
    const sizeClasses = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-14 h-14",
    };

    return (
      <div
        className={cn(
          "inline-flex items-center justify-center font-display font-extrabold tracking-tighter italic",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className={isDark ? "text-[#F5F4EF]" : "text-[#111418]"}>M</span>
        <span className={isDark ? "text-[#F5F4EF]" : "text-[#111418]"}>C</span>
        <span className="text-[#D83A3A]">S</span>
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div
        className={cn(
          "inline-flex flex-col items-center justify-center p-3 rounded-lg border",
          isDark
            ? "bg-[#202830] border-[#343C43] text-[#F5F4EF]"
            : "bg-[#F5F4EF] border-[#E2E0D8] text-[#111418]",
          className
        )}
        {...props}
      >
        <div className="flex items-center space-x-1 font-display font-black text-2xl tracking-tighter italic">
          <span>MCS</span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#D83A3A]" />
        </div>
        <div className="text-[9px] font-mono tracking-widest uppercase mt-1 text-[#AAB2B8]">
          Military Car Service
        </div>
        <div className="text-[8px] font-mono tracking-wider text-[#D83A3A] mt-0.5">
          Est. Germany
        </div>
      </div>
    );
  }

  // Default: Horizontal brand lockup (matches reference image top left)
  return (
    <div
      className={cn("inline-flex items-center gap-3 select-none", className)}
      {...props}
    >
      <div className={cn("flex flex-col justify-center")}>
        <div className="flex items-center">
          <span
            className={cn(
              "font-display font-black tracking-tight italic uppercase leading-none",
              textColor,
              size === "sm" ? "text-2xl" : size === "lg" ? "text-4xl" : "text-3xl"
            )}
          >
            MCS
          </span>
          <span
            className={cn(
              "inline-block bg-[#D83A3A] -skew-x-12 ml-1.5",
              size === "sm"
                ? "w-1.5 h-4"
                : size === "lg"
                ? "w-2.5 h-6"
                : "w-2 h-5"
            )}
            aria-hidden="true"
          />
        </div>
        <span
          className={cn(
            "font-display font-bold tracking-[0.22em] uppercase leading-none mt-1",
            subtextColor,
            size === "sm" ? "text-[8px]" : size === "lg" ? "text-[11px]" : "text-[9px]"
          )}
        >
          Military Car Service
        </span>
      </div>
    </div>
  );
}
