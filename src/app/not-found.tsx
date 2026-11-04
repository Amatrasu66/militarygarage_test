import Link from "next/link";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111418] text-[#F5F4EF]">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-24 px-4 sm:px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="font-mono text-sm tracking-widest text-[#D83A3A] uppercase">
            Error 404
          </div>
          <h1 className="font-display font-black uppercase text-5xl sm:text-6xl text-[#F5F4EF] tracking-tight">
            Off Track
          </h1>
          <p className="text-sm text-[#AAB2B8] leading-relaxed">
            The page or automotive service you are looking for does not exist or has
            been relocated.
          </p>
          <div className="pt-2 flex justify-center">
            <Button asChild variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              <Link href="/">Back to Workshop</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
