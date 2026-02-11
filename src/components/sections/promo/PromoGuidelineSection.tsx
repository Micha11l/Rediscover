import { promoCopy } from "@/content/promoCopy";

export function PromoGuidelineSection() {
  const { guideline } = promoCopy;

  return (
    <section data-testid="promo-guideline" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-20">
          <h2 className="shrink-0 font-heading text-[36px] font-medium leading-[1.2] md:text-[48px] lg:text-[56px]">
            <span className="text-brand-secondary">{guideline.titleParts.primary}</span>
            <span className="block text-text-primary">{guideline.titleParts.accent}</span>
          </h2>

          <ul className="flex max-w-[553px] flex-col gap-4">
            {guideline.bullets.map((bullet, i) => (
              <li
                key={i}
                className="ml-6 list-disc font-heading text-[18px] leading-[2] text-text-primary marker:text-brand-secondary md:text-heading-md"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
