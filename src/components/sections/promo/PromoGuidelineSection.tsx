import { promoCopy } from "@/content/promoCopy";

export function PromoGuidelineSection() {
  const { guideline } = promoCopy;

  return (
    <section data-testid="promo-guideline" className="w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 py-16 md:px-8 lg:flex-row lg:items-start lg:gap-[74px] lg:px-0 lg:py-0 lg:pl-[100px] lg:pr-[113px]">
        <div className="lg:w-[480px] lg:shrink-0 lg:pt-[100px]">
          <h2 className="m-0 font-heading text-[36px] font-medium leading-[1.1] md:text-[48px] lg:text-[56px]">
            <span className="text-brand-secondary">{guideline.titleParts.primary}</span>
            <span className="block text-text-primary">{guideline.titleParts.accent}</span>
          </h2>
        </div>

        <ul className="m-0 flex list-disc flex-col gap-0 pl-9 font-heading text-[20px] leading-[2] text-text-primary md:text-[24px] lg:flex-1 lg:pb-[156px] lg:pt-[114px]">
          {guideline.bullets.map((bullet, i) => (
            <li key={i} className="m-0">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
