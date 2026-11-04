import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Wrench, Globe2 } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      title: "English-First Communication",
      description: "No lost-in-translation diagnostic reports. Detailed explanations, estimates, and invoices provided in plain English.",
      icon: Globe2,
    },
    {
      title: "German VAT Relief Forms",
      description: "Experienced handling of official military tax relief forms (Form 1903) to ensure you save the 19% German VAT legally.",
      icon: Shield,
    },
    {
      title: "US-Spec Specialized Tooling",
      description: "Equipped with North American OBD-II diagnostic protocols, specialized SAE tooling, and direct parts logistics pipelines.",
      icon: Wrench,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <SectionHeading
              kicker="About MCS"
              title="American Automotive Expertise. German Precision."
              subtitle="Military Car Service was founded with a clear mission: provide the U.S. military community in Germany with dependable, transparent, and specialized automotive care."
            />

            <div className="space-y-4 text-sm sm:text-base text-[#AAB2B8] leading-relaxed">
              <p>
                Navigating foreign vehicle regulations, strict German TÜV or USAREUR
                inspections, and sourcing parts for North American vehicles can be a
                headache. Our technicians bridge that gap with dedicated US-spec
                diagnostic scanners, direct American parts supply chains, and fluent
                English consultations.
              </p>
              <p>
                Whether you drive an American truck, an imported muscle car, or a
                European daily driver, your vehicle receives the same uncompromising
                craftsmanship, fair upfront pricing, and mission-focused attention to detail.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded bg-[#202830] border border-[#343C43]"
                >
                  <h.icon className="w-5 h-5 text-[#D83A3A] mb-2" />
                  <h3 className="font-display font-bold uppercase text-sm text-[#F5F4EF] tracking-tight">
                    {h.title}
                  </h3>
                  <p className="text-xs text-[#AAB2B8] mt-1.5 leading-normal">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual / Workshop Badge Column */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-xl bg-gradient-to-b from-[#202830] to-[#151B22] border border-[#343C43] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D83A3A]/10 rounded-full blur-2xl" />

              <div className="font-mono text-xs uppercase tracking-widest text-[#D83A3A] mb-2">
                Operational Standards
              </div>

              <h3 className="font-display font-black uppercase text-2xl sm:text-3xl text-[#F5F4EF] tracking-tight mb-4">
                Built Around Your Deployment & Tour Cycle
              </h3>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[#AAB2B8]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83A3A] mt-2 shrink-0" />
                  <span>USAREUR inspection readiness checks to ensure first-time pass.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83A3A] mt-2 shrink-0" />
                  <span>PCS vehicle evaluations and smooth deregistration assistance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83A3A] mt-2 shrink-0" />
                  <span>Direct parts procurement avoiding excessive overseas shipping delays.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83A3A] mt-2 shrink-0" />
                  <span>Full German Value Added Tax (VAT) exemption compliance.</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-[#343C43] flex items-center justify-between text-xs font-mono text-[#AAB2B8]">
                <span>Service Region:</span>
                <span className="text-[#F5F4EF] font-bold">KMC / Ramstein Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
