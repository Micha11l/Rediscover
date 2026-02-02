interface LaserHairRemovalPricingSectionProps {
  id?: string;
  title: string;
  description: string;
  rows: Array<{ label: string; price: string }>;
}

export function LaserHairRemovalPricingSection({
  id,
  title,
  description,
  rows,
}: LaserHairRemovalPricingSectionProps) {
  return (
    <section
      id={id}
      data-testid="laser-hair-removal"
      className="w-full scroll-mt-[160px] bg-surface-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[480px_1fr] lg:gap-[80px]">
          <div className="space-y-6">
            <h2 className="m-0 font-heading text-[56px] font-medium leading-[1.1] text-brand-secondary">
              {title}
            </h2>
            <p className="m-0 whitespace-pre-line font-body text-[16px] leading-[1.6] text-brand-secondary">
              {description}
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col divide-y divide-border">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2"
                >
                  <span className="font-heading text-[24px] font-normal leading-[2] text-text-primary">
                    {row.label}
                  </span>
                  <span className="font-heading text-[24px] font-normal leading-[2] text-text-primary">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
