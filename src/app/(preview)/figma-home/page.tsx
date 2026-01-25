import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ValuesSection,
  AchievementSection,
  TestimonialsSection,
  HowItWorksSection,
  LocationSection,
  CtaSection,
  NewsletterSection,
  FooterSection,
} from "@/components/sections";

/**
 * Figma Home Page Preview
 * Frame: 01. Home - Desktop (1440 x 7202px)
 *
 * Section order from Figma:
 * 1. HERO Section        - 1440 x 704px
 * 2. SECTION ABOUT       - 1440 x 596px
 * 3. SERVICES            - 1440 x 782px
 * 4. VALUES              - 1440 x 933px
 * 5. ACHIEVEMENT NUMBERS - 1440 x 560px
 * 6. TESTIMONI           - 1440 x 706px
 * 7. HOW IT WORKS        - 1440 x 656px
 * 8. PRICING PACKAGES    - 1440 x 919px
 * 9. CTA                 - 1440 x 518px
 * 10. NEWSLETTER SIGN UP - 1440 x 334px
 * 11. FOOTER             - 1440 x 493px
 */
export default function FigmaHomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface-base">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
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
