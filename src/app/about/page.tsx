import { FooterSection } from "@/components/sections";
import {
  AboutHeroSection,
  AboutPhilosophySection,
  AboutValuesSection,
  AboutSanctuarySection,
  AboutMilestonesSection,
  AboutCtaSection,
  AboutTeamSection,
  AboutCarePromiseSection,
} from "@/components/sections/about";
import { ForceTopOnLoad } from "@/components/utils/ForceTopOnLoad.client";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full">
      <ForceTopOnLoad />
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutValuesSection />
      <AboutSanctuarySection />
      <AboutMilestonesSection />
      <AboutCtaSection />
      <AboutTeamSection />
      <AboutCarePromiseSection />
      <FooterSection />
    </main>
  );
}
