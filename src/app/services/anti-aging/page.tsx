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
import { antiAgingContent } from "@/content/antiAgingPage";
import { DecorativeDivider } from "@/components/ui";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";



export default function AntiAgingPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <AntiAgingHeroSection />

      <SofwaveAboutSection />
      <SofwaveRecommendedSection />
      <ServiceFaqBlockSection treatment="sofwave" />
      <SofwaveBeforeAfterSection />
      <DecorativeDivider className="py-12" />

      <ThermageAboutSection />
      <ThermageRecommendedSection />
      <ServiceFaqBlockSection treatment="thermage" />
      <ThermageBeforeAfterSection />
      <DecorativeDivider className="py-12" />

      <Morpheus8AboutSection />
      <Morpheus8RecommendedSection />
      <ServiceFaqBlockSection treatment="morpheus8" />
      <Morpheus8BeforeAfterSection />
      <DecorativeDivider className="py-12" />

      <FormaAboutSection />
      <FormaRecommendedSection />
      <ServiceFaqBlockSection treatment="forma" />
      <FormaBeforeAfterSection />

      <TestimonialsCarousel testimonials={antiAgingContent.testimonials} />

      <AntiAgingFaqSection />

      <CtaSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
