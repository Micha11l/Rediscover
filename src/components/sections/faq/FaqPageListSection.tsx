import { FaqAccordion } from "@/components/sections/faq";
import { faqCopy } from "@/content/faqCopy";

export function FaqPageListSection() {
  return (
    <section data-testid="faq-list" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[60px] md:px-8 lg:px-16 xl:px-[100px]">
        <FaqAccordion items={faqCopy.items} />
      </div>
    </section>
  );
}
