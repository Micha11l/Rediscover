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
import { getLanguage } from "@/lib/i18n";

export default async function PromoPage() {
  const lang = await getLanguage();

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <PromoHeroSection lang={lang} />
      <PromoWelcomeSection lang={lang} />
      <PromoTreatmentsSection lang={lang} />
      <PromoGuidelineSection lang={lang} />
      <PromoCtaSection lang={lang} />
      <PromoCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
