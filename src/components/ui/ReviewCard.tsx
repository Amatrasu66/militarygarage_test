import React from "react";
import { ReviewItem } from "@/types";
import { cn } from "@/lib/utils";
import { Star, Shield, AlertCircle } from "lucide-react";

export interface ReviewCardProps {
  review: ReviewItem;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-6 sm:p-7 rounded-lg",
        "bg-[#202830] border border-[#343C43] transition-all duration-200",
        "hover:border-[#D83A3A]/50",
        className
      )}
    >
      <div>
        {/* Rating and Verification Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#D83A3A]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < review.rating ? "fill-[#D83A3A] text-[#D83A3A]" : "text-[#343C43]"
                )}
                aria-hidden="true"
              />
            ))}
          </div>

          {!review.isVerifiedReview ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#D69B32] bg-[#111418] px-2 py-0.5 rounded border border-[#343C43]">
              <AlertCircle className="w-3 h-3 text-[#D69B32]" />
              <span>Pending Client Verification</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#27865C] bg-[#111418] px-2 py-0.5 rounded border border-[#343C43]">
              <Shield className="w-3 h-3 text-[#27865C]" />
              <span>Verified Customer</span>
            </span>
          )}
        </div>

        {/* Review Quote */}
        <p className="text-sm sm:text-base text-[#F5F4EF] leading-relaxed italic mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Author and Vehicle / Service Context */}
      <div className="pt-4 border-t border-[#343C43] flex flex-col gap-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#F5F4EF]">{review.author}</span>
          <span className="text-[#AAB2B8] font-mono text-[11px]">
            {review.location}
          </span>
        </div>
        <div className="flex items-center justify-between text-[#AAB2B8]">
          <span>{review.vehicle}</span>
          <span className="text-[#D83A3A] text-[11px]">{review.serviceType}</span>
        </div>
      </div>
    </div>
  );
}
