import { FaqAccordion } from "@/components/sections/faq";
import { pickContent } from "@/lib/i18n";
import { bodyContouringContent } from "@/content/bodyContouringCopy";
import { sharedFaqHeading } from "@/content/shared";
import type { Language } from "@/i18n/types";

interface BodyContouringFaqSectionProps {
  lang: Language;
}

export function BodyContouringFaqSection({ lang }: BodyContouringFaqSectionProps) {
  const heading = pickContent(sharedFaqHeading, lang);
  return (
    <section
      data-testid="body-contouring-faq"
      aria-labelledby="body-contouring-faq-heading"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-20 px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="body-contouring-faq-heading"
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

        <FaqAccordion items={pickContent(bodyContouringContent, lang).faq.items} />
      </div>
    </section>
  );
}
