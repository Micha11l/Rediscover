import { antiAgingContent, type TreatmentId } from "@/content/antiAgingCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function ServiceFaqBlockSection({
  treatment,
  lang,
}: {
  treatment: TreatmentId;
  lang: Language;
}) {
  const data = pickContent(antiAgingContent, lang)[treatment].faq;
  const sectionId = `serviceFaqBlock-${treatment}`;
  const hasHelpsWith = data.helpsWith.length > 0;

  return (
    <section
      id={sectionId}
      data-testid="service-faq"
      className="w-full bg-surface-base scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        {/* Two stacked rows; each row is (left title + right content) */}
        <div className="flex flex-col">
  {/* Row 1 */}
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
     <h2 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-brand-secondary">
       {data.keyBenefitsTitle}{" "}
       <span className="text-text-primary">{data.title}</span>
     </h2>

    <ul data-testid="faq-benefits-list" className="flex flex-col gap-6">
      {data.benefits.map((item, index) => (
        <li key={item.title} data-testid={`faq-item-${index}`} className="flex gap-4">
          <span
            aria-hidden="true"
            className="shrink-0 font-body text-[16px] leading-[1.6] text-text-primary md:font-heading md:text-[24px] md:leading-[1.2]"
          >
            •
          </span>

          <div className="flex flex-col">
            <span
              data-testid={`faq-q-${index}`}
              className="font-body text-[16px] font-semibold leading-[1.6] text-text-primary md:font-heading md:text-[24px] md:font-medium md:leading-[1.2]"
            >
              {item.title}
            </span>
            <p
              data-testid={`faq-a-${index}`}
              className="m-0 mt-1 font-body text-[16px] font-normal leading-[1.6] text-brand-secondary md:font-heading md:text-[24px] md:leading-[1.2]"
            >
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>

   {hasHelpsWith ? (
     <>
       {/* Divider aligned to right column */}
       <div className="mt-8 md:mt-12 lg:mt-[72px] grid grid-cols-1 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
        <div className="hidden lg:block" />
        <div className="h-px w-full bg-border" />
      </div>

       {/* Row 2 */}
       <div className="mt-8 md:mt-12 lg:mt-[72px] grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
         <h2 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-brand-secondary">
           {lang === "zh" ? data.title : `What ${data.title}`}{" "}
           <span className="text-text-primary">{data.canHelpWithTitle}</span>
         </h2>

        <ul data-testid="faq-helps-list" className="flex flex-col gap-2">
          {data.helpsWith.map((item, index) => (
            <li key={item} data-testid={`faq-helps-${index}`} className="flex gap-4">
              <span
                aria-hidden="true"
                className="shrink-0 font-body text-[16px] leading-[1.6] text-text-primary md:font-heading md:text-[24px] md:leading-[2]"
              >
                •
              </span>
              <span className="font-body text-[16px] font-normal leading-[1.6] text-text-primary md:font-heading md:text-[24px] md:leading-[2]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
     </>
   ) : null}
</div>
      </div>
    </section>
  );
}
