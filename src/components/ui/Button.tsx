import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-mcs rounded";

    const variantStyles = {
      primary:
        "bg-[#D83A3A] hover:bg-[#BA2E2E] text-white shadow-sm active:translate-y-px",
      secondary:
        "bg-[#202830] hover:bg-[#2A343F] text-[#F5F4EF] border border-[#343C43] hover:border-[#AAB2B8]/40 active:translate-y-px",
      outline:
        "bg-transparent hover:bg-white/5 text-[#F5F4EF] border border-[#343C43] hover:border-[#D83A3A] active:translate-y-px",
      ghost:
        "bg-transparent hover:bg-white/5 text-[#F5F4EF] active:translate-y-px",
      link:
        "bg-transparent text-[#D83A3A] hover:text-[#BA2E2E] p-0 h-auto underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs tracking-wide",
      md: "h-11 px-5 text-sm tracking-wide",
      lg: "h-12 sm:h-14 px-7 text-base tracking-wide font-bold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "link" && sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
        ) : leftIcon ? (
          <span className="mr-2 inline-flex items-center">{leftIcon}</span>
        ) : null}
        <span>{children}</span>
        {rightIcon && !isLoading && (
          <span className="ml-2 inline-flex items-center">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
