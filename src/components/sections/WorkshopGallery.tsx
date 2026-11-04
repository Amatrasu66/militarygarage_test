import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZoomIn } from "lucide-react";

export function WorkshopGallery() {
  const galleryItems = [
    {
      id: "bay-1",
      title: "Diagnostic Bay & OBD-II Scanner",
      category: "Diagnostics",
      aspect: "col-span-1 md:col-span-2 aspect-[16/9]",
    },
    {
      id: "bay-2",
      title: "Heavy-Duty 4-Post Lift & Undercarriage",
      category: "Workshop",
      aspect: "col-span-1 aspect-[4/3]",
    },
    {
      id: "bay-3",
      title: "Road-Force Tire Balancing Station",
      category: "Tire Care",
      aspect: "col-span-1 aspect-[4/3]",
    },
    {
      id: "bay-4",
      title: "Laser 4-Wheel Computerized Alignment",
      category: "Chassis",
      aspect: "col-span-1 aspect-[4/3]",
    },
    {
      id: "bay-5",
      title: "Engine Powertrain & Fluid Exchange",
      category: "Powertrain",
      aspect: "col-span-1 aspect-[4/3]",
    },
  ];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Workshop & Facility"
          title="Precision Equipment. Clean Workspace."
          subtitle="Explore the facility, specialized machinery, and service bays where your vehicle is diagnosed, maintained, and repaired."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-lg overflow-hidden bg-[#202830] border border-[#343C43] hover:border-[#D83A3A]/60 transition-all duration-300 ${item.aspect}`}
            >
              {/* Automotive Workshop Graphic */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-[#111418]/60 to-transparent z-10" />

              {/* Vector Representation of Workshop Detail */}
              <svg
                viewBox="0 0 400 260"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="400" height="260" fill="#182028" />
                {/* Structural Beams */}
                <line x1="0" y1="40" x2="400" y2="40" stroke="#252D37" strokeWidth="6" />
                <line x1="80" y1="0" x2="80" y2="260" stroke="#252D37" strokeWidth="8" />
                <line x1="320" y1="0" x2="320" y2="260" stroke="#252D37" strokeWidth="8" />

                {/* Hydraulic Lift Post & Car Platform */}
                <rect x="120" y="80" width="160" height="18" rx="2" fill="#343C43" stroke="#AAB2B8" />
                <rect x="180" y="98" width="40" height="140" fill="#202830" stroke="#343C43" />

                {/* Vehicle on Lift silhouette */}
                <path
                  d="M130 80 L150 50 L250 50 L270 80 Z"
                  fill="#111418"
                  stroke="#D83A3A"
                  strokeWidth="2"
                />

                {/* Workshop Lighting fixtures */}
                <rect x="150" y="36" width="100" height="6" fill="#F5F4EF" opacity="0.8" />
              </svg>

              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D83A3A] bg-[#111418]/80 px-2 py-0.5 rounded border border-[#343C43]">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold uppercase text-base text-[#F5F4EF] tracking-tight mt-1.5">
                    {item.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded bg-[#111418]/90 border border-[#343C43] flex items-center justify-center text-[#AAB2B8] group-hover:text-[#D83A3A] transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs font-mono text-[#7B8792]">
            Note: Workshop facility photographs to be replaced with high-res photography of the German location in Phase Two.
          </p>
        </div>
      </div>
    </section>
  );
}
