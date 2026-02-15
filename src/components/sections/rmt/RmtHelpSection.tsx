import { rmtContent } from "@/content/rmtCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function RmtHelpSection({ lang }: { lang: Language }) {
  const { helpSection, insuranceSection } = pickContent(rmtContent, lang);

  return (
    <>
      <section data-testid="rmt-help" className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-5/12">
               <h2 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1]">
                 <span className="text-brand-secondary">{helpSection.title}</span>
               </h2>
              <p className="mb-0 mt-6 font-body text-[16px] leading-[1.6] text-brand-secondary">
                {helpSection.subtitle}
              </p>
            </div>

            <div className="flex flex-1 flex-col font-heading text-[24px] leading-[1.5]">
              <div className="h-[24px]" />
              <ul className="mb-0 list-disc pl-[36px] text-brand-secondary">
                {helpSection.bullets.map((bullet) => (
                  <li key={bullet.id} className="mb-0">
                    {bullet.text}
                  </li>
                ))}
              </ul>
              <div className="h-[24px]" />
              <p className="mb-0 text-text-primary">{helpSection.closingParagraph}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex lg:justify-end">
          <hr className="m-0 h-px w-full border-0 bg-border-muted lg:w-7/12" />
        </div>
      </div>

      <section data-testid="rmt-insurance" className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-5/12">
               <h2 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1]">
                 <span className="text-brand-secondary">{insuranceSection.title}</span>
               </h2>
              <p className="mb-0 mt-6 font-body text-[16px] leading-[1.6] text-brand-secondary">
                {insuranceSection.subtitle}
              </p>
            </div>

            <div className="flex flex-1 flex-col font-heading text-[24px] leading-[1.5] text-text-primary">
              <ul className="mb-0 list-disc pl-[36px]">
                {insuranceSection.bullets.map((bullet, i) => (
                  <li key={i} className="mb-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
