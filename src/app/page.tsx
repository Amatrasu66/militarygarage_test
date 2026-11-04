import { SiteHeader } from "@/components/navigation/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SellYourVehicleSection } from "@/components/sections/SellYourVehicleSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { VehicleInventorySection } from "@/components/sections/VehicleInventorySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { WorkshopGallery } from "@/components/sections/WorkshopGallery";
import { BookingAppointmentSection } from "@/components/sections/BookingAppointmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111418] text-[#F5F4EF]">
      {/* 1. Header Navigation */}
      <SiteHeader />

      <main className="flex-1">
        {/* 2 & 3. Hero Section with Headline "YOUR CAR. OUR MISSION." and Dual CTAs */}
        <HeroSection />

        {/* 4. Trust Strip with Core Capabilities */}
        <TrustBar />

        {/* 5. Services Overview */}
        <ServicesOverview />

        {/* 6. Sell-Your-Vehicle Feature (Contrasting Light Section) */}
        <SellYourVehicleSection />

        {/* 7. Why Choose MCS */}
        <WhyChooseSection />

        {/* Vehicle Sales / Pre-Owned Inventory Preview */}
        <VehicleInventorySection />

        {/* 8. About & Mission Section */}
        <AboutSection />

        {/* 9. Reviews & Customer Testimonials (with Verification Disclaimers) */}
        <ReviewsSection />

        {/* 10. Workshop and Vehicle Gallery */}
        <WorkshopGallery />

        {/* 11. Location, Contact & Interactive Appointment Booking Prototype */}
        <BookingAppointmentSection />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Final CTA */}
        <CTASection />
      </main>

      {/* 14. Footer with Legal Links & Disclaimers */}
      <SiteFooter />
    </div>
  );
}
