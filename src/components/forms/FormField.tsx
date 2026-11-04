import React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "number" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  helperText?: string;
  error?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  theme?: "dark" | "light";
  className?: string;
  rows?: number;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  options = [],
  helperText,
  error,
  value,
  onChange,
  theme = "dark",
  className,
  rows = 4,
}: FormFieldProps) {
  const isLight = theme === "light";
  const id = `field-${name}`;

  const baseInputStyles = cn(
    "w-full px-3.5 py-2.5 rounded border text-sm transition-colors duration-150 focus-mcs",
    isLight
      ? "bg-white border-[#D0D4D8] text-[#111418] placeholder:text-[#808990]"
      : "bg-[#111418] border-[#343C43] text-[#F5F4EF] placeholder:text-[#64717C] hover:border-[#4B5660]",
    error && "border-[#D83A3A] focus:ring-[#D83A3A]"
  );

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className={cn(
          "text-xs font-semibold uppercase tracking-wider flex items-center justify-between",
          isLight ? "text-[#202830]" : "text-[#AAB2B8]"
        )}
      >
        <span>
          {label}
          {required ? (
            <span className="text-[#D83A3A] ml-1 font-bold">*</span>
          ) : (
            <span className="text-xs normal-case font-normal text-muted-foreground ml-1.5 opacity-60">
              (Optional)
            </span>
          )}
        </span>
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInputStyles}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={cn(baseInputStyles, "appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23AAB2B8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:9px_9px] bg-[right_14px_center] bg-no-repeat pr-8")}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInputStyles}
        />
      )}

      {error ? (
        <p className="text-xs text-[#D83A3A] font-medium mt-0.5">{error}</p>
      ) : helperText ? (
        <p
          className={cn(
            "text-[11px] mt-0.5",
            isLight ? "text-[#64717C]" : "text-[#7B8792]"
          )}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
