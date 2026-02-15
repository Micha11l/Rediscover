import { FaqAccordion } from "@/components/sections/faq";
import { skinCareContent } from "@/content/skinCareCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function SkinCareFaqSection({ lang }: { lang: Language }) {
  const faqHeading = lang === "zh" 
    ? { part1: "需要更多", part2: "信息", part3: "？" }
    : { part1: "Need More ", part2: "Information", part3: "?" };
  
  const faqSubtitle = lang === "zh"
    ? "清晰解答，帮助您自信准备疗程。"
    : "Clear answers to help you prepare for your treatment with confidence.";

  return (
    <section
      data-testid="skin-care-faq"
      aria-labelledby="skin-care-faq-heading"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-20 px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="skin-care-faq-heading"
            className="font-heading text-heading-xl font-medium leading-tight"
          >
            <span className="text-brand-secondary">{faqHeading.part1}</span>
            <span className="text-text-primary">{faqHeading.part2}</span>
            <span className="text-brand-secondary">{faqHeading.part3}</span>
          </h2>
          <p className="font-body text-body leading-relaxed text-brand-secondary">
            {faqSubtitle}
          </p>
        </div>

        <FaqAccordion items={pickContent(skinCareContent, lang).faq.items} />
      </div>
    </section>
  );
}
