import { FooterSection } from "@/components/sections";
import {
  PromoHeroSection,
  PromoWelcomeSection,
  PromoTreatmentsSection,
  PromoGuidelineSection,
  PromoCtaSection,
  PromoCarePromiseSection,
} from "@/components/sections/promo";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default function PromoPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <PromoHeroSection />
      <PromoWelcomeSection />
      <PromoTreatmentsSection />
      <PromoGuidelineSection />
      <PromoCtaSection />
      <PromoCarePromiseSection />
      <FooterSection />
    </main>
  );
}
