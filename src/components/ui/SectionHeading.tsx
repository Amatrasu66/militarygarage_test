import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  kicker?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  alignment?: "left" | "center";
  theme?: "dark" | "light";
  action?: React.ReactNode;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  alignment = "left",
  theme = "dark",
  action,
  className,
  ...props
}: SectionHeadingProps) {
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12",
        alignment === "center" && "md:flex-col md:items-center text-center",
        className
      )}
      {...props}
    >
      <div className={cn("max-w-3xl", alignment === "center" && "mx-auto")}>
        {kicker && (
          <div className="flex items-center gap-1.5 mb-2 font-display font-bold tracking-wider text-xs uppercase text-[#D83A3A]">
            <span className="tracking-tighter select-none font-black font-mono text-sm">{"///"}</span>
            <span>{kicker}</span>
          </div>
        )}
        <h2
          className={cn(
            "font-display font-black tracking-tight uppercase leading-[1.05]",
            "text-3xl sm:text-4xl md:text-5xl",
            isLight ? "text-[#111418]" : "text-[#F5F4EF]"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-3 text-base sm:text-lg leading-relaxed",
              isLight ? "text-[#343C43]" : "text-[#AAB2B8]"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 mt-2 md:mt-0 flex items-center">{action}</div>
      )}
    </div>
  );
}
