import { FaqAccordion } from "@/components/sections/faq";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { faqContent } from "@/content/faqCopy";

export function FaqPageListSection({ lang }: { lang: Language }) {
  return (
    <section data-testid="faq-list" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-12 md:pb-16 lg:pb-[86px] pt-0 md:px-8 lg:px-16 xl:px-[100px]">
        <FaqAccordion items={pickContent(faqContent, lang).items} />
      </div>
    </section>
  );
}
