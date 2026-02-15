import {
  CtaSection,
  NewsletterSection,
  FooterSection,
  AntiAgingFaqSection,
} from "@/components/sections";
import {
  AntiAgingHeroSection,
  SofwaveAboutSection,
  ThermageAboutSection,
  Morpheus8AboutSection,
  FormaAboutSection,
  SofwaveRecommendedSection,
  ThermageRecommendedSection,
  Morpheus8RecommendedSection,
  FormaRecommendedSection,
  SofwaveBeforeAfterSection,
  ThermageBeforeAfterSection,
  Morpheus8BeforeAfterSection,
  FormaBeforeAfterSection,
  ServiceFaqBlockSection,
  TestimonialsCarousel,
} from "@/components/sections/service-detail";
import { antiAgingPageContent } from "@/content/antiAgingPage";
import { uiStrings } from "@/content/shared";
import { DecorativeDivider } from "@/components/ui";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { getLanguage, pickContent } from "@/lib/i18n";

export default async function AntiAgingPage() {
  const lang = await getLanguage();
  const content = pickContent(antiAgingPageContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <AntiAgingHeroSection lang={lang} />

      <SofwaveAboutSection lang={lang} />
      <SofwaveRecommendedSection lang={lang} />
      <ServiceFaqBlockSection treatment="sofwave" lang={lang} />
      <SofwaveBeforeAfterSection lang={lang} />
      <DecorativeDivider className="py-12" />

      <ThermageAboutSection lang={lang} />
      <ThermageRecommendedSection lang={lang} />
      <ServiceFaqBlockSection treatment="thermage" lang={lang} />
      <ThermageBeforeAfterSection lang={lang} />
      <DecorativeDivider className="py-12" />

      <Morpheus8AboutSection lang={lang} />
      <Morpheus8RecommendedSection lang={lang} />
      <ServiceFaqBlockSection treatment="morpheus8" lang={lang} />
      <Morpheus8BeforeAfterSection lang={lang} />
      <DecorativeDivider className="py-12" />

      <FormaAboutSection lang={lang} />
      <FormaRecommendedSection lang={lang} />
      <ServiceFaqBlockSection treatment="forma" lang={lang} />
      <FormaBeforeAfterSection lang={lang} />

      <TestimonialsCarousel testimonials={content.testimonials} headingLine1={ui.labels.yourWords} headingLine2={ui.labels.ourPride} />

      <AntiAgingFaqSection />

      <CtaSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
