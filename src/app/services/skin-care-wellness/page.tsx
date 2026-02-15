import { FooterSection } from "@/components/sections";
import {
  SkinCareHeroSection,
  SkinCareAboutSection,
  SkinCareWellnessSection,
  SkinCareFaqSection,
  SkinCareCtaSection,
  SkinCareCarePromiseSection,
  TestimonialsCarousel,
} from "@/components/sections/service-detail";
import { DecorativeDivider } from "@/components/ui";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { skinCareContent } from "@/content/skinCareCopy";
import { uiStrings } from "@/content/shared";
import { getLanguage, pickContent } from "@/lib/i18n";

export default async function SkinCareWellnessPage() {
  const lang = await getLanguage();
  const copy = pickContent(skinCareContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <SkinCareHeroSection lang={lang} />
      <SkinCareAboutSection lang={lang} />
      <DecorativeDivider className="py-12" />
      <SkinCareWellnessSection lang={lang} />
      <TestimonialsCarousel testimonials={copy.testimonials} headingLine1={ui.labels.yourWords} headingLine2={ui.labels.ourPride} />
      <SkinCareFaqSection lang={lang} />
      <SkinCareCtaSection lang={lang} />
      <SkinCareCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
