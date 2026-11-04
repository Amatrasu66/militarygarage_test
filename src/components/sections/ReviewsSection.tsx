import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { SAMPLE_REVIEWS } from "@/data/reviews";
import { AlertTriangle } from "lucide-react";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-16 md:py-24 bg-[#111418] border-t border-[#343C43] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Community Reviews"
          title="What Service Members Say"
          subtitle="Real experiences from service members, DoD employees, and families stationed in Germany."
        />

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Phase One Verification Banner */}
        <div className="mt-8 p-4 rounded bg-[#202830] border border-[#D69B32]/40 flex items-start sm:items-center gap-3 text-xs text-[#AAB2B8]">
          <AlertTriangle className="w-5 h-5 text-[#D69B32] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Phase One Quality Notice:</strong> Testimonials displayed above
            are developmental sample cards illustrating layout and hierarchy. Real
            customer ratings and verified Google reviews will be connected upon
            client verification.
          </p>
        </div>
      </div>
    </section>
  );
}
