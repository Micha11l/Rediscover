import {
  ServicesHeroSection,
  ServicesSection,
} from "@/components/sections/services";
import {
  CtaSection,
  NewsletterSection,
  FooterSection,
} from "@/components/sections";

/**
 * Services Page
 * Route: /services
 *
 * Displays all available aesthetic and wellness services.
 * Sections are composed here and rendered in order.
 */
export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-surface-base">
      {/* Hero Section */}
      <ServicesHeroSection />

      {/* Services List Grid */}
      <ServicesSection />

      {/* Call to Action */}
      <CtaSection />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
