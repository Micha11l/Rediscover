import { FaqAccordion } from "@/components/sections/faq";
import { skinCareCopy } from "@/content/skinCareCopy";

export function SkinCareFaqSection() {
  return (
    <section
      data-testid="skin-care-faq"
      aria-labelledby="skin-care-faq-heading"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-20 px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="skin-care-faq-heading"
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

        <FaqAccordion items={skinCareCopy.faq.items} />
      </div>
    </section>
  );
}
