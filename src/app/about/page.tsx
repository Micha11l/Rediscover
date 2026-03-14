import { getLanguage } from "@/lib/i18n";
import { FooterSection, CtaSection, NewsletterSection } from "@/components/sections";
import {
  AboutHeroSection,
  AboutWelcomeSection,
  AboutApproachSection,
  AboutAchievementsSection,
  AboutClinicSection,
  AboutSkincareSection,
  AboutContactSection,
  AboutMapSection,
  AboutSocialSection,
} from "@/components/sections/about";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default async function AboutPage() {
  const lang = await getLanguage();

  return (
    <main className="min-h-screen w-full bg-surface-base">
      <ForceTopOnLoad />
      <AboutHeroSection lang={lang} />
      <AboutWelcomeSection lang={lang} />
      <AboutApproachSection lang={lang} />
      <AboutAchievementsSection lang={lang} />
      <AboutClinicSection lang={lang} />
      <AboutSkincareSection lang={lang} />
      <AboutContactSection lang={lang} />
      <AboutMapSection />
      <AboutSocialSection lang={lang} />
      <CtaSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
