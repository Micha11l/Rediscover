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

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-surface-base">
      <ForceTopOnLoad />
      <AboutHeroSection />
      <AboutWelcomeSection />
      <AboutAchievementsSection />
      <AboutClinicSection />
      <AboutSkincareSection />
      <AboutTeamSection />
      <AboutTeamDescSection />
      <AboutContactSection />
      <AboutMapSection />
      <AboutSocialSection />
      <CtaSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
