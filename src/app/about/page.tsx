import { getLanguage } from "@/lib/i18n";
import { FooterSection, CtaSection, NewsletterSection } from "@/components/sections";
import {
  AboutHeroSection,
  AboutWelcomeSection,
  AboutAchievementsSection,
  AboutClinicSection,
  AboutSkincareSection,
  AboutTeamSection,
  AboutTeamDescSection,
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
      <AboutAchievementsSection lang={lang} />
      <AboutClinicSection lang={lang} />
      <AboutSkincareSection lang={lang} />
      <AboutTeamSection lang={lang} />
      <AboutTeamDescSection lang={lang} />
      <AboutContactSection lang={lang} />
      <AboutMapSection />
      <AboutSocialSection lang={lang} />
      <CtaSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
