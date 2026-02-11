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
      <BodyContouringTreatmentSection {...bodyContouringCopy.treatments[0]} />
      <BodyContouringTreatmentSection {...bodyContouringCopy.treatments[1]} />
      <DecorativeDivider className="py-12" />
      <BodyContouringTreatmentSection {...bodyContouringCopy.treatments[2]} />
      <TestimonialsCarousel testimonials={bodyContouringCopy.testimonials} />
      <BodyContouringFaqSection />
      <BodyContouringCtaSection />
      <BodyContouringCarePromiseSection />
      <FooterSection />
    </main>
  );
}
