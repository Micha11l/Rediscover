import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedServicesSection } from "@/components/sections/FeaturedServicesSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { AchievementSection } from "@/components/sections/AchievementSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CtaSection } from "@/components/sections/CTASection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedServicesSection />
      <ValuesSection />
      <AchievementSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <LocationSection />
      <CtaSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
