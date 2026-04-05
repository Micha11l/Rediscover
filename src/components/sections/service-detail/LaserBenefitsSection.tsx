interface LaserBenefitsSectionProps {
  title: string;
  benefits: string[];
  helpsWith: string[];
}

export function LaserBenefitsSection({
  title,
  benefits,
  helpsWith,
}: LaserBenefitsSectionProps) {
  return (
    <section data-testid="laser-benefits" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
             <h2 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-brand-secondary">
               Key Benefits of <span className="text-text-primary">{title}</span>
             </h2>

            <ul className="flex flex-col gap-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-body text-[16px] leading-[1.6] text-text-primary"
                  >
                    •
                  </span>
                  <span className="font-body text-[16px] font-normal leading-[1.6] text-text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

           <div className="mt-8 md:mt-12 lg:mt-[72px] grid grid-cols-1 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
             <div className="hidden lg:block" />
             <div className="h-px w-full bg-border" />
           </div>

           <div className="mt-8 md:mt-12 lg:mt-[72px] grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
             <h2 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-brand-secondary">
               What {title} <span className="text-text-primary">Can Help With</span>
             </h2>

            <ul className="flex flex-col gap-2">
              {helpsWith.map((item) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-body text-[16px] leading-[1.6] text-text-primary"
                  >
                    •
                  </span>
                  <span className="font-body text-[16px] font-normal leading-[1.6] text-text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
