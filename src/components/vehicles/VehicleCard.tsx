import React from "react";
import { VehicleItem } from "@/types";
import { cn, formatCurrency, formatMileage } from "@/lib/utils";
import { Heart } from "lucide-react";

export interface VehicleCardProps {
  vehicle: VehicleItem;
  className?: string;
}

export function VehicleCard({ vehicle, className }: VehicleCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-lg overflow-hidden",
        "bg-[#202830] border border-[#343C43] transition-all duration-200",
        "hover:border-[#D83A3A]/60 hover:shadow-xl hover:shadow-black/50",
        className
      )}
    >
      {/* Vehicle Image Container */}
      <div className="relative aspect-[16/10] w-full bg-[#111418] overflow-hidden flex items-center justify-center border-b border-[#343C43]">
        {/* Placeholder Graphic / Car Silhouette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-[#202830]/40 to-transparent z-10" />

        {/* Realistic SVG Representation of American Vehicle Profile */}
        <svg
          viewBox="0 0 400 220"
          className="w-full h-full object-cover p-4 opacity-80 group-hover:scale-105 transition-transform duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="220" fill="#151A20" />
          {/* Stylized Truck / Muscle outline */}
          <path
            d="M40 160 L70 160 L90 120 L150 110 L200 70 L280 70 L340 110 L370 120 L370 160 Z"
            fill="#202830"
            stroke="#343C43"
            strokeWidth="2"
          />
          {/* Wheel Wells */}
          <circle cx="110" cy="160" r="28" fill="#111418" stroke="#D83A3A" strokeWidth="2" />
          <circle cx="310" cy="160" r="28" fill="#111418" stroke="#D83A3A" strokeWidth="2" />
          <circle cx="110" cy="160" r="14" fill="#343C43" />
          <circle cx="310" cy="160" r="14" fill="#343C43" />
          {/* Windows / Cabin */}
          <path d="M195 78 L275 78 L320 112 L195 112 Z" fill="#111418" opacity="0.9" />
          {/* Headlight beam glow */}
          <polygon points="370,125 400,115 400,150 370,135" fill="#D83A3A" opacity="0.3" />
        </svg>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between">
          {vehicle.isFeatured ? (
            <span className="bg-[#D83A3A] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm">
              Featured
            </span>
          ) : (
            <span className="bg-[#111418]/80 backdrop-blur-sm text-[#AAB2B8] text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#343C43]">
              US-Spec
            </span>
          )}

          <button
            type="button"
            aria-label="Save vehicle to favorites"
            className="w-8 h-8 rounded-full bg-[#111418]/80 backdrop-blur-sm flex items-center justify-center text-[#AAB2B8] hover:text-[#D83A3A] border border-[#343C43] transition-colors focus-mcs cursor-pointer"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Prototype Sample Watermark */}
        <div className="absolute bottom-2 left-3 z-20">
          <span className="text-[9px] font-mono tracking-widest text-[#AAB2B8] uppercase bg-[#111418]/90 px-1.5 py-0.5 rounded border border-[#343C43]">
            Sample Inventory
          </span>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Vehicle Title */}
          <h3 className="font-display font-bold uppercase text-xl text-[#F5F4EF] tracking-tight group-hover:text-[#D83A3A] transition-colors">
            {vehicle.title}
          </h3>
          {vehicle.trim && (
            <p className="text-xs text-[#AAB2B8] mt-0.5">{vehicle.trim}</p>
          )}

          {/* Price */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display font-black text-2xl text-[#F5F4EF]">
              {formatCurrency(vehicle.priceEur)}
            </span>
            <span className="text-[11px] font-mono text-[#AAB2B8]">
              VAT details on request
            </span>
          </div>

          {/* Specifications line (Barlow / Plex Mono) */}
          <div className="mt-4 pt-3 border-t border-[#343C43] grid grid-cols-3 gap-2 text-center text-xs text-[#AAB2B8] font-mono">
            <div className="flex flex-col items-center">
              <span className="text-[#F5F4EF] font-semibold">
                {formatMileage(vehicle.mileageKm)}
              </span>
              <span className="text-xs text-[#AAB2B8]">Mileage</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#343C43]/60 px-1">
              <span className="text-[#F5F4EF] font-semibold truncate max-w-full">
                {vehicle.engine}
              </span>
              <span className="text-xs text-[#AAB2B8]">Powertrain</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#F5F4EF] font-semibold">Automatic</span>
              <span className="text-xs text-[#AAB2B8]">Transmission</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3 border-t border-[#343C43]/40">
          <a
            href="#sell-your-vehicle"
            className="w-full inline-flex items-center justify-center h-9 px-4 rounded bg-[#111418] hover:bg-[#D83A3A] text-xs font-bold uppercase tracking-wider text-[#F5F4EF] hover:text-white border border-[#343C43] hover:border-[#D83A3A] transition-colors focus-mcs"
          >
            Vehicle Details & Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
