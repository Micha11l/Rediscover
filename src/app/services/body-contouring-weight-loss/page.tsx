import { getLanguage, pickContent } from "@/lib/i18n";
import { FooterSection } from "@/components/sections";
import {
  BodyContouringHeroSection,
  BodyContouringTreatmentSection,
  BodyContouringFaqSection,
  BodyContouringCtaSection,
  BodyContouringCarePromiseSection,
  TestimonialsCarousel,
} from "@/components/sections/service-detail";
import { DecorativeDivider } from "@/components/ui";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { bodyContouringContent } from "@/content/bodyContouringCopy";
import { uiStrings } from "@/content/shared";

export default async function BodyContouringWeightLossPage() {
  const lang = await getLanguage();
  const copy = pickContent(bodyContouringContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <BodyContouringHeroSection lang={lang} />
      <BodyContouringTreatmentSection {...copy.treatments[0]} className="!pt-[72px] !pb-[106px]" />
      <BodyContouringTreatmentSection {...copy.treatments[1]} className="!pt-0 !pb-[77px]" />
      <DecorativeDivider className="!py-0" />
      <BodyContouringTreatmentSection {...copy.treatments[2]} className="!pt-[75px] !pb-[100px]" />
      <TestimonialsCarousel testimonials={copy.testimonials} headingLine1={ui.labels.yourWords} headingLine2={ui.labels.ourPride} />
      <BodyContouringFaqSection lang={lang} />
      <BodyContouringCtaSection lang={lang} />
      <BodyContouringCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
