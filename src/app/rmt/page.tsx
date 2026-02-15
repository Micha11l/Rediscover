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
import { getLanguage } from "@/lib/i18n";

export default async function RmtPage() {
  const lang = await getLanguage();

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <RmtHeroSection lang={lang} />
      <RmtWelcomeSection lang={lang} />
      <RmtPricingSection lang={lang} />
      <RmtHelpSection lang={lang} />
      <RmtCtaSection lang={lang} />
      <RmtCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
