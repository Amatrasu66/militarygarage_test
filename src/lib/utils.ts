import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges CSS classes with Tailwind conflict resolution.
 * Canonical class-merging utility for shadcn/ui and custom components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency in EUR or USD
 */
export function formatCurrency(
  amount: number,
  currency: string = "EUR",
  locale: string = "de-DE"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format mileage in km or miles
 */
export function formatMileage(distance: number, unit: "km" | "mi" = "km"): string {
  const formatted = new Intl.NumberFormat("de-DE").format(distance);
  return `${formatted} ${unit}`;
}
