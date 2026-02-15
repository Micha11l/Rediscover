/**
 * Anti-Aging FAQ Section
 * Figma reference: 231:6445 "FAQ"
 *
 * Server Component that provides FAQ data and renders the client accordion.
 * Follows the pattern: Server Component owns data, Client Component handles interaction.
 */

import { FaqAccordion } from "@/components/sections/faq";

/* ==========================================================================
   FAQ DATA
   Questions and answers for the Anti-Aging service page
   ========================================================================== */

const FAQ_ITEMS = [
  {
    id: "faq-suitable",
    question: "Are these treatments suitable for everyone?",
    answer:
      "Most treatments are suitable for a wide range of individuals. However, suitability depends on skin condition, medical history, and personal goals. A professional consultation is required to determine the most appropriate treatment plan and ensure safety and optimal results.",
  },
  {
    id: "faq-prepare",
    question: "Do I need to prepare before my appointment?",
    answer:
      "Minimal preparation is usually required. We may advise avoiding active skincare ingredients, sun exposure, or injectable treatments prior to certain procedures. Specific instructions will be provided during your consulation.",
  },
  {
    id: "faq-downtime",
    question: "Is there any downtime after treatment?",
    answer:
      "Downtime varies depending on the treatment type. Many procedures have little to no downtime, allowing you to return to normal activities quickly. Mild redness, swelling, or sensitivity may occur after certain treatments and typically resolve within a short period.",
  },
];

/* ==========================================================================
   SECTION COMPONENT
   ========================================================================== */

export function AntiAgingFaqSection() {
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
            <span className="text-brand-secondary">Need More </span>
            <span className="text-text-primary">Information</span>
            <span className="text-brand-secondary">?</span>
          </h2>
          <p className="font-body text-body leading-relaxed text-brand-secondary">
            Clear answers to help you prepare for your treatment with confidence.
          </p>
        </div>

        {/* FAQ Accordion (Client Component) */}
        <FaqAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
