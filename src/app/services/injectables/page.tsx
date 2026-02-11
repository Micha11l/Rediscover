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
import { injectablesCopy } from "@/content/injectablesCopy";

export default function InjectablesPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <InjectablesHeroSection />
      <InjectablesAboutSection />
      <TestimonialsCarousel testimonials={injectablesCopy.testimonials} />
      <InjectablesFaqSection />
      <InjectablesCtaSection />
      <InjectablesCarePromiseSection />
      <FooterSection />
    </main>
  );
}
