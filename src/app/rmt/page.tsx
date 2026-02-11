import { FooterSection } from "@/components/sections";
import {
  RmtHeroSection,
  RmtWelcomeSection,
  RmtPricingSection,
  RmtHelpSection,
  RmtCtaSection,
  RmtCarePromiseSection,
} from "@/components/sections/rmt";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default function RmtPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <RmtHeroSection />
      <RmtWelcomeSection />
      <RmtPricingSection />
      <RmtHelpSection />
      <RmtCtaSection />
      <RmtCarePromiseSection />
      <FooterSection />
    </main>
  );
}
