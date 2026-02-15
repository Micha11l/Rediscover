import { getLanguage } from "@/lib/i18n";
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
export default async function ServicesPage() {
  const lang = await getLanguage();

  return (
    <main className="min-h-screen w-full bg-surface-base">
      {/* Hero Section */}
      <ServicesHeroSection lang={lang} />

      {/* Services List Grid */}
      <ServicesSection lang={lang} />

      {/* Call to Action */}
      <CtaSection />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
