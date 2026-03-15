/**
 * Anti-Aging FAQ Section
 * Figma reference: 231:6445 "FAQ"
 *
 * Server Component that provides FAQ data and renders the client accordion.
 * Follows the pattern: Server Component owns data, Client Component handles interaction.
 */

import { FaqAccordion } from "@/components/sections/faq";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { sharedFaqHeading } from "@/content/shared";

/* ==========================================================================
   FAQ DATA
   Questions and answers for the Anti-Aging service page
   ========================================================================== */

interface AntiAgingFaqSectionProps {
  lang: Language;
  items: Array<{ id: string; question: string; answer: string }>;
}

/* ==========================================================================
   SECTION COMPONENT
   ========================================================================== */

export function AntiAgingFaqSection({ lang, items }: AntiAgingFaqSectionProps) {
  const heading = pickContent(sharedFaqHeading, lang);

  return (
    <section
      data-testid="anti-aging-faq"
      aria-labelledby="faq-heading"
      className="w-full bg-surface-base"
    >
       <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-20 px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        {/* Headline */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="faq-heading"
            className="font-heading text-heading-xl font-medium leading-tight"
          >
            <span className="text-brand-secondary">{heading.part1}</span>
            <span className="text-text-primary">{heading.part2}</span>
            <span className="text-brand-secondary">{heading.part3}</span>
          </h2>
          <p className="font-body text-body leading-relaxed text-brand-secondary">
            {heading.subtitle}
          </p>
        </div>

        {/* FAQ Accordion (Client Component) */}
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
