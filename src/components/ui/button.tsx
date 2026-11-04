import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:translate-y-px",
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:translate-y-px",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:border-steel/50 hover:bg-secondary/80 active:translate-y-px",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:translate-y-px",
        outline:
          "border border-border bg-transparent text-foreground hover:border-primary hover:text-foreground hover:bg-white/5 active:translate-y-px",
        ghost:
          "bg-transparent text-foreground hover:bg-white/5 hover:text-foreground active:translate-y-px",
        link:
          "bg-transparent text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-5 text-sm tracking-wide rounded-md",
        sm: "h-9 px-3.5 text-xs tracking-wide rounded-md",
        md: "h-11 px-5 text-sm tracking-wide rounded-md",
        lg: "h-12 sm:h-14 px-7 text-base font-bold tracking-wide rounded-md",
        icon: "size-10 rounded-md",
        xs: "h-7 px-2.5 text-xs rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // When asChild is true, compose with Radix Slot without creating nested interactive elements
    if (asChild) {
      if (React.isValidElement(children)) {
        const childElement = children as React.ReactElement<{
          children?: React.ReactNode;
          className?: string;
        }>;
        const hasIcons = leftIcon || rightIcon || isLoading;
        const slotChild = hasIcons
          ? React.cloneElement(
              childElement,
              {},
              <>
                {isLoading ? (
                  <Loader2
                    className="w-4 h-4 mr-2 animate-spin shrink-0"
                    aria-hidden="true"
                  />
                ) : leftIcon ? (
                  <span className="mr-2 inline-flex items-center shrink-0">
                    {leftIcon}
                  </span>
                ) : null}
                {childElement.props.children}
                {rightIcon && !isLoading ? (
                  <span className="ml-2 inline-flex items-center shrink-0">
                    {rightIcon}
                  </span>
                ) : null}
              </>
            )
          : childElement;

        return (
          <Slot.Root
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
          >
            {slotChild}
          </Slot.Root>
        );
      }

      return (
        <Slot.Root
          data-slot="button"
          data-variant={variant}
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Slot.Root>
      );
    }

    return (
      <button
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading ? (
          <Loader2
            className="w-4 h-4 mr-2 animate-spin shrink-0"
            aria-hidden="true"
          />
        ) : leftIcon ? (
          <span className="mr-2 inline-flex items-center shrink-0">
            {leftIcon}
          </span>
        ) : null}
        <span>{children}</span>
        {rightIcon && !isLoading ? (
          <span className="ml-2 inline-flex items-center shrink-0">
            {rightIcon}
          </span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
