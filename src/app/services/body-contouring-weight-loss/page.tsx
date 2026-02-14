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
import { bodyContouringCopy } from "@/content/bodyContouringCopy";

export default function BodyContouringWeightLossPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <BodyContouringHeroSection />
      <BodyContouringTreatmentSection {...bodyContouringCopy.treatments[0]} className="!pt-[72px] !pb-[106px]" />
      <BodyContouringTreatmentSection {...bodyContouringCopy.treatments[1]} className="!pt-0 !pb-[77px]" />
      <DecorativeDivider className="!py-0" />
      <BodyContouringTreatmentSection {...bodyContouringCopy.treatments[2]} className="!pt-[75px] !pb-[100px]" />
      <TestimonialsCarousel testimonials={bodyContouringCopy.testimonials} />
      <BodyContouringFaqSection />
      <BodyContouringCtaSection />
      <BodyContouringCarePromiseSection />
      <FooterSection />
    </main>
  );
}
