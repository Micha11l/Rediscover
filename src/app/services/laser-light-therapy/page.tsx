/**
 * Laser & Light Therapy Service Detail Page
 * Route: /services/laser-light-therapy
 */
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
import { antiAgingPageContent } from "@/content/antiAgingPage";
import { laserContent } from "@/content/laserCopy";
import { uiStrings } from "@/content/shared";
import { getLanguage, pickContent } from "@/lib/i18n";

export default async function LaserLightTherapyPage() {
  const lang = await getLanguage();
  const laserCopy = pickContent(laserContent, lang);
  const antiAgingContent = pickContent(antiAgingPageContent, lang);
  const ui = pickContent(uiStrings, lang);
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <LaserHeroSection lang={lang} />

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
        beforeLabel={ui.labels.before}
        afterLabel={ui.labels.after}
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
        beforeLabel={ui.labels.before}
        afterLabel={ui.labels.after}
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

      <TestimonialsCarousel testimonials={antiAgingContent.testimonials} headingLine1={ui.labels.yourWords} headingLine2={ui.labels.ourPride} />

      <LaserFaqSection lang={lang} />

      <LaserCtaSection lang={lang} />
      <LaserCarePromiseSection lang={lang} />
      <FooterSection />
    </main>
  );
}
