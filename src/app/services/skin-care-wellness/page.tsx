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
import { skinCareCopy } from "@/content/skinCareCopy";

export default function SkinCareWellnessPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <SkinCareHeroSection />
      <SkinCareAboutSection />
      <DecorativeDivider className="py-12" />
      <SkinCareWellnessSection />
      <TestimonialsCarousel testimonials={skinCareCopy.testimonials} />
      <SkinCareFaqSection />
      <SkinCareCtaSection />
      <SkinCareCarePromiseSection />
      <FooterSection />
    </main>
  );
}
