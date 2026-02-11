import { DecorativeDivider } from "@/components/ui";
import { rmtCopy } from "@/content/rmtCopy";

export function RmtHelpSection() {
  const { helpSection, insuranceSection } = rmtCopy;

  return (
    <>
      <section data-testid="rmt-help" className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-5/12">
              <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
                {helpSection.title}
              </h2>
              <p className="mt-4 font-body text-body leading-[1.6] text-brand-secondary">
                {helpSection.subtitle}
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <ul className="flex flex-col gap-3">
                {helpSection.bullets.map((bullet) => (
                  <li
                    key={bullet.id}
                    className="flex items-start gap-3 font-body text-body leading-[1.6] text-brand-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] block h-[6px] w-[6px] shrink-0 rounded-full bg-brand-secondary"
                    />
                    {bullet.text}
                  </li>
                ))}
              </ul>
              <p className="font-body text-body leading-[1.6] text-brand-secondary">
                {helpSection.closingParagraph}
              </p>
            </div>
          </div>
        </div>
      </section>

      <DecorativeDivider className="py-6" />

      <section data-testid="rmt-insurance" className="w-full">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="lg:w-5/12">
              <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
                {insuranceSection.title}
              </h2>
              <p className="mt-4 font-body text-body leading-[1.6] text-brand-secondary">
                {insuranceSection.subtitle}
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <ul className="flex flex-col gap-3">
                {insuranceSection.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-body text-body leading-[1.6] text-brand-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] block h-[6px] w-[6px] shrink-0 rounded-full bg-brand-secondary"
                    />
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
