import { FooterSection } from "@/components/sections";
import {
  InjectablesHeroSection,
  InjectablesAboutSection,
  InjectablesFaqSection,
  InjectablesCtaSection,
  InjectablesCarePromiseSection,
  TestimonialsCarousel,
} from "@/components/sections/service-detail";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { injectablesContent } from "@/content/injectablesCopy";
import { uiStrings } from "@/content/shared";
import { getLanguage, pickContent } from "@/lib/i18n";

export default async function InjectablesPage() {
  const lang = await getLanguage();
  const copy = pickContent(injectablesContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <InjectablesHeroSection lang={lang} />
      <InjectablesAboutSection lang={lang} />
      <TestimonialsCarousel testimonials={copy.testimonials} headingLine1={ui.labels.yourWords} headingLine2={ui.labels.ourPride} />
      <InjectablesFaqSection lang={lang} />
      <InjectablesCtaSection lang={lang} />
      <InjectablesCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
