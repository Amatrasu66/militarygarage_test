"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { SAMPLE_VEHICLES } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle } from "lucide-react";

export function VehicleInventorySection() {
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");

  const filteredVehicles = SAMPLE_VEHICLES.filter((v) => {
    if (selectedMake !== "all" && v.make.toLowerCase() !== selectedMake.toLowerCase()) {
      return false;
    }
    if (selectedPrice === "under-40k" && v.priceEur >= 40000) return false;
    if (selectedPrice === "over-40k" && v.priceEur < 40000) return false;
    return true;
  });

  return (
    <section
      id="vehicles"
      aria-labelledby="inventory-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Vehicle Sales"
          title="Quality Pre-Owned Vehicles"
          subtitle="Carefully selected vehicles, inspected, serviced, and ready for European highways or stateside shipment."
        />

        {/* Filter and Search Bar (matching reference layout) */}
        <div className="mb-10 p-4 sm:p-5 rounded-lg bg-[#202830] border border-[#343C43]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-center">
            {/* Make Filter */}
            <div>
              <label htmlFor="filter-make" className="sr-only">Make</label>
              <select
                id="filter-make"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#111418] border border-[#343C43] text-sm text-[#F5F4EF] focus-mcs"
              >
                <option value="all">All Makes</option>
                <option value="ford">Ford</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="dodge">Dodge</option>
              </select>
            </div>

            {/* Model Filter */}
            <div>
              <label htmlFor="filter-model" className="sr-only">Model</label>
              <select
                id="filter-model"
                defaultValue="all"
                className="w-full px-3 py-2 rounded bg-[#111418] border border-[#343C43] text-sm text-[#F5F4EF] focus-mcs"
              >
                <option value="all">All Models</option>
                <option value="f150">F-150</option>
                <option value="silverado">Silverado 1500</option>
                <option value="charger">Charger</option>
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label htmlFor="filter-price" className="sr-only">Price Range</label>
              <select
                id="filter-price"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#111418] border border-[#343C43] text-sm text-[#F5F4EF] focus-mcs"
              >
                <option value="all">Price Range (All)</option>
                <option value="under-40k">Under €40,000</option>
                <option value="over-40k">€40,000 & Above</option>
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label htmlFor="filter-year" className="sr-only">Year</label>
              <select
                id="filter-year"
                defaultValue="all"
                className="w-full px-3 py-2 rounded bg-[#111418] border border-[#343C43] text-sm text-[#F5F4EF] focus-mcs"
              >
                <option value="all">Year (Any)</option>
                <option value="2021">2021 & Newer</option>
                <option value="2019">2019 – 2020</option>
              </select>
            </div>

            {/* Submit / Reset Button */}
            <div>
              <Button
                variant="primary"
                size="md"
                className="w-full h-10 text-xs uppercase font-bold tracking-wider"
                leftIcon={<Search className="w-4 h-4" />}
                onClick={() => {
                  setSelectedMake("all");
                  setSelectedPrice("all");
                }}
              >
                Reset / Search
              </Button>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Inventory Scope & Verification Alert */}
        <div className="mt-8 p-4 rounded bg-[#202830]/60 border border-[#343C43] flex items-center justify-between text-xs text-[#AAB2B8]">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#D69B32] shrink-0" />
            <span>
              <strong>Sample Inventory:</strong> The vehicles displayed above
              illustrate typical stock categories for art direction. Live database
              inventory feed will be connected in Phase Two.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#D69B32] uppercase shrink-0 hidden md:inline">
            Phase One Prototype
          </span>
        </div>
      </div>
    </section>
  );
}
