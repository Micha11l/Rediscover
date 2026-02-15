import { FaqAccordion } from "@/components/sections/faq";
import { injectablesContent } from "@/content/injectablesCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

const headingText = {
  en: {
    part1: "Need More ",
    part2: "Information",
    part3: "?",
    subtitle: "Clear answers to help you prepare for your treatment with confidence.",
  },
  zh: {
    part1: "需要更多",
    part2: "资讯",
    part3: "?",
    subtitle: "清晰解答，帮助您充分准备，安心接受疗程。",
  },
};

export function InjectablesFaqSection({ lang }: { lang: Language }) {
  const copy = pickContent(injectablesContent, lang);
  const heading = pickContent(headingText, lang);

  return (
    <section
      data-testid="injectables-faq"
      aria-labelledby="injectables-faq-heading"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-20 px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="injectables-faq-heading"
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

        <FaqAccordion items={copy.faq.items} />
      </div>
    </section>
  );
}
