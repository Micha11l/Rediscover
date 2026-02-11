/**
 * Laser & Light Therapy Service Detail Page
 * Route: /services/laser-light-therapy
 */
<<<<<<< Updated upstream
export default function LaserLightTherapyPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-surface-base">
      <div className="text-center">
        <h1 className="font-heading text-heading-xl font-medium text-text-primary">
          Laser &amp; Light Therapy
        </h1>
        <p className="mt-4 font-body text-body text-text-muted">
          Service details coming soon.
        </p>
      </div>
=======
import { FooterSection } from "@/components/sections";
import {
  LaserAboutSection,
  LaserBenefitsSection,
  LaserBeforeAfterPair,
  LaserCarePromiseSection,
  LaserCtaSection,
  LaserFaqSection,
  LaserHairRemovalPricingSection,
  LaserHeroSection,
  LaserRecommendedAndProcessSection,
  TestimonialsCarousel,
} from "@/components/sections/service-detail";
import { DecorativeDivider } from "@/components/ui";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";
import { antiAgingContent } from "@/content/antiAgingPage";
import { laserCopy } from "@/content/laserCopy";

export default function LaserLightTherapyPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <LaserHeroSection />

      <LaserAboutSection
        id="lumecca"
        title={laserCopy.lumecca.about.title}
        subtitle={laserCopy.lumecca.about.subtitle}
        paragraphs={laserCopy.lumecca.about.paragraphs}
        leftImage={laserCopy.lumecca.images.left}
        rightImage={laserCopy.lumecca.images.right}
        layoutTweaks={laserCopy.lumecca.layoutTweaks}
      />
      <LaserRecommendedAndProcessSection
        recommendedItems={laserCopy.lumecca.recommended.items}
        processText={laserCopy.lumecca.processText}
      />
      <LaserBenefitsSection
        title="Lumecca"
        benefits={laserCopy.lumecca.benefits}
        helpsWith={laserCopy.lumecca.helpsWith}
      />
      <LaserBeforeAfterPair
        beforeSrc={laserCopy.lumecca.beforeAfter.beforeSrc}
        afterSrc={laserCopy.lumecca.beforeAfter.afterSrc}
        beforeAlt={laserCopy.lumecca.beforeAfter.beforeAlt}
        afterAlt={laserCopy.lumecca.beforeAfter.afterAlt}
      />

      <DecorativeDivider className="py-12" />

      <LaserAboutSection
        id="pigmentation"
        title={laserCopy.pigmentation.about.title}
        subtitle={laserCopy.pigmentation.about.subtitle}
        paragraphs={laserCopy.pigmentation.about.paragraphs}
        leftImage={laserCopy.pigmentation.images.left}
        rightImage={laserCopy.pigmentation.images.right}
        layoutTweaks={laserCopy.pigmentation.layoutTweaks}
      />
      <LaserRecommendedAndProcessSection
        recommendedItems={laserCopy.pigmentation.recommended.items}
        processText={laserCopy.pigmentation.processText}
      />
      <LaserBenefitsSection
        title={laserCopy.pigmentation.about.title}
        benefits={laserCopy.pigmentation.benefits}
        helpsWith={laserCopy.pigmentation.helpsWith}
      />
      <LaserBeforeAfterPair
        beforeSrc={laserCopy.pigmentation.beforeAfter.beforeSrc}
        afterSrc={laserCopy.pigmentation.beforeAfter.afterSrc}
        beforeAlt={laserCopy.pigmentation.beforeAfter.beforeAlt}
        afterAlt={laserCopy.pigmentation.beforeAfter.afterAlt}
      />

      <DecorativeDivider className="py-12" />

      <LaserHairRemovalPricingSection
        id="hair-removal"
        title={laserCopy.hairRemoval.title}
        titleParts={laserCopy.hairRemoval.titleParts}
        description={laserCopy.hairRemoval.description}
        descriptionSegments={laserCopy.hairRemoval.descriptionSegments}
        groups={laserCopy.hairRemoval.groups}
      />

      <TestimonialsCarousel testimonials={antiAgingContent.testimonials} />

      <LaserFaqSection />

      <LaserCtaSection />
      <LaserCarePromiseSection />
      <FooterSection />
>>>>>>> Stashed changes
    </main>
  );
}
