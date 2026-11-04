"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FormField } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, Clock, MapPin, AlertCircle } from "lucide-react";
import { CONTACT_STATUS } from "@/lib/constants";

export function BookingAppointmentSection() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form State for UI Prototype
  const [formData, setFormData] = useState({
    serviceType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    fullName: "",
    email: "",
    phone: "",
    hasVatForm: "yes",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="book-service"
      aria-labelledby="booking-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Book a Service"
          title="Schedule Your Appointment"
          subtitle="Choose a service, select your vehicle details, and let our team handle everything with precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Container (Matches Reference Layout) */}
          <div className="lg:col-span-8 bg-[#202830] border border-[#343C43] rounded-xl p-6 sm:p-10 shadow-xl">
            {/* 3-Step Progress Indicator */}
            <div className="mb-8 pb-6 border-b border-[#343C43]">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 1
                        ? "bg-[#D83A3A] text-white"
                        : "bg-[#111418] text-[#AAB2B8] border border-[#343C43]"
                    }`}
                  >
                    1
                  </div>
                  <span className="text-[11px] font-mono mt-1 text-[#F5F4EF]">
                    Service Details
                  </span>
                </div>

                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    currentStep >= 2 ? "bg-[#D83A3A]" : "bg-[#343C43]"
                  }`}
                />

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 2
                        ? "bg-[#D83A3A] text-white"
                        : "bg-[#111418] text-[#AAB2B8] border border-[#343C43]"
                    }`}
                  >
                    2
                  </div>
                  <span className="text-[11px] font-mono mt-1 text-[#AAB2B8]">
                    Your Info
                  </span>
                </div>

                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    currentStep >= 3 ? "bg-[#D83A3A]" : "bg-[#343C43]"
                  }`}
                />

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep >= 3
                        ? "bg-[#D83A3A] text-white"
                        : "bg-[#111418] text-[#AAB2B8] border border-[#343C43]"
                    }`}
                  >
                    3
                  </div>
                  <span className="text-[11px] font-mono mt-1 text-[#AAB2B8]">
                    Confirm
                  </span>
                </div>
              </div>
            </div>

            {/* Prototype Notice Alert */}
            <div className="mb-6 p-3 rounded bg-[#111418] border border-[#343C43] flex items-center gap-2.5 text-xs text-[#AAB2B8]">
              <AlertCircle className="w-4 h-4 text-[#347DA5] shrink-0" />
              <span>
                <strong>Frontend Prototype:</strong> This form demonstrates the
                appointment scheduling UX. Live database integration is scheduled for
                Phase Two.
              </span>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#27865C]/20 border border-[#27865C] text-[#27865C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black uppercase text-2xl sm:text-3xl text-[#F5F4EF]">
                  Appointment Request Received
                </h3>
                <p className="text-sm text-[#AAB2B8] max-w-md mx-auto">
                  Thank you! In production, our service advisor will confirm your
                  requested time slot and provide directions to the workshop.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                  >
                    Start Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNext} className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-5">
                    <h3 className="font-display font-bold uppercase text-lg text-[#F5F4EF] flex items-center gap-2">
                      <span className="text-[#D83A3A] font-mono text-sm">1.</span>
                      <span>Service & Vehicle Specifications</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        label="Service Type"
                        name="serviceType"
                        type="select"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        options={[
                          { value: "oil-service", label: "Maintenance & Oil Service" },
                          { value: "diagnostics", label: "Repairs & Computer Diagnostics" },
                          { value: "tires", label: "Tires, Alignment & Wheel Balance" },
                          { value: "usareur", label: "USAREUR Pre-Inspection Check" },
                          { value: "performance", label: "Performance & Accessories" },
                        ]}
                        placeholder="Select a service category"
                      />

                      <FormField
                        label="Vehicle Make"
                        name="vehicleMake"
                        type="select"
                        required
                        value={formData.vehicleMake}
                        onChange={handleChange}
                        options={[
                          { value: "ford", label: "Ford (F-150, Mustang, Explorer)" },
                          { value: "chevrolet", label: "Chevrolet / GMC (Silverado, Tahoe)" },
                          { value: "dodge", label: "Dodge / RAM / Chrysler" },
                          { value: "jeep", label: "Jeep (Wrangler, Grand Cherokee)" },
                          { value: "european", label: "European (BMW, Audi, Mercedes, VW)" },
                          { value: "other", label: "Other Make" },
                        ]}
                        placeholder="Select vehicle make"
                      />

                      <FormField
                        label="Vehicle Model"
                        name="vehicleModel"
                        type="text"
                        required
                        placeholder="e.g. F-150 Lariat 4x4"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                      />

                      <FormField
                        label="Model Year"
                        name="vehicleYear"
                        type="select"
                        required
                        value={formData.vehicleYear}
                        onChange={handleChange}
                        options={[
                          { value: "2024", label: "2024 – 2025" },
                          { value: "2021", label: "2021 – 2023" },
                          { value: "2018", label: "2018 – 2020" },
                          { value: "2015", label: "2015 – 2017" },
                          { value: "older", label: "2014 & Older" },
                        ]}
                        placeholder="Select model year"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-5">
                    <h3 className="font-display font-bold uppercase text-lg text-[#F5F4EF] flex items-center gap-2">
                      <span className="text-[#D83A3A] font-mono text-sm">2.</span>
                      <span>Contact & Military Status</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        label="Full Name"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Capt. John Miller"
                        value={formData.fullName}
                        onChange={handleChange}
                      />

                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. jmiller@mail.mil"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +49 151 •••• ••••"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                      <FormField
                        label="German VAT Form"
                        name="hasVatForm"
                        type="select"
                        value={formData.hasVatForm}
                        onChange={handleChange}
                        options={[
                          { value: "yes", label: "Yes, I have a VAT Form 1903" },
                          { value: "no", label: "No / Not Applicable" },
                          { value: "unsure", label: "Need assistance with VAT process" },
                        ]}
                      />
                    </div>

                    <FormField
                      label="Service Notes / Symptoms"
                      name="notes"
                      type="textarea"
                      placeholder="Describe any warning lights, noises, or specific requests..."
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-5">
                    <h3 className="font-display font-bold uppercase text-lg text-[#F5F4EF] flex items-center gap-2">
                      <span className="text-[#D83A3A] font-mono text-sm">3.</span>
                      <span>Review & Submit Request</span>
                    </h3>

                    <div className="p-4 rounded bg-[#111418] border border-[#343C43] space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between border-b border-[#343C43]/60 pb-2">
                        <span className="text-[#AAB2B8]">Service:</span>
                        <span className="font-semibold text-[#F5F4EF]">
                          {formData.serviceType || "Maintenance & Service"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#343C43]/60 pb-2">
                        <span className="text-[#AAB2B8]">Vehicle:</span>
                        <span className="font-semibold text-[#F5F4EF]">
                          {formData.vehicleYear || "2021"}{" "}
                          {formData.vehicleMake || "Ford"}{" "}
                          {formData.vehicleModel || "F-150"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#343C43]/60 pb-2">
                        <span className="text-[#AAB2B8]">Contact:</span>
                        <span className="font-semibold text-[#F5F4EF]">
                          {formData.fullName || "Service Member"} (
                          {formData.email || "email@example.com"})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#AAB2B8]">VAT Status:</span>
                        <span className="font-mono text-[#27865C] font-semibold">
                          {formData.hasVatForm === "yes"
                            ? "VAT Relief Requested"
                            : "Standard"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-[#343C43]">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                    >
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {currentStep === 3 ? "Submit Request (Prototype)" : "Next Step"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Workshop Hours Summary Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-[#202830] border border-[#343C43] space-y-4">
              <h3 className="font-display font-bold uppercase text-xl text-[#F5F4EF] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D83A3A]" />
                <span>Workshop Location</span>
              </h3>

              <div className="text-xs sm:text-sm text-[#AAB2B8] space-y-1">
                <p className="text-[#F5F4EF] font-semibold">{CONTACT_STATUS.address.street}</p>
                <p>{CONTACT_STATUS.address.city}, {CONTACT_STATUS.address.country}</p>
                <p className="text-[11px] font-mono text-[#D69B32] pt-1">
                  {CONTACT_STATUS.address.verificationNote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#343C43] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#F5F4EF]">
                  <Clock className="w-4 h-4 text-[#D83A3A]" />
                  <span>Workshop Hours</span>
                </div>
                <div className="text-xs text-[#AAB2B8] space-y-1">
                  <p>{CONTACT_STATUS.hours.weekdays}</p>
                  <p>{CONTACT_STATUS.hours.saturday}</p>
                  <p className="text-[#7B8792]">{CONTACT_STATUS.hours.sunday}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#343C43] text-xs text-[#AAB2B8]">
                <p className="font-semibold text-[#F5F4EF] mb-1">
                  Serving Military Communities In:
                </p>
                <p className="leading-relaxed">
                  Ramstein Air Base, Landstuhl, Vogelweh, Kleber Kaserne, Sembach,
                  Baumholder, and Rhine Ordnance Barracks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
