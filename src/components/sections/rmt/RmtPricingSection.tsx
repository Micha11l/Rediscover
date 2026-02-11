import { rmtCopy } from "@/content/rmtCopy";
import type { RmtTreatment } from "@/content/rmtCopy";

function TreatmentCard({ treatment }: { treatment: RmtTreatment }) {
  return (
    <div className="rounded-[16px] bg-surface-base px-6 py-6">
      <h3 className="mb-4 font-heading text-[20px] font-semibold leading-[1.3] text-text-primary">
        {treatment.title}
      </h3>

      <div className="flex flex-col gap-2">
        {treatment.pricing.map((tier, i) => (
          <div key={i} className="flex items-center justify-between">
            {tier.duration ? (
              <>
                <span className="font-body text-[15px] leading-[1.6] text-brand-secondary">
                  {tier.duration}
                </span>
                <span className="font-heading text-[16px] font-semibold text-text-primary">
                  {tier.price}
                </span>
              </>
            ) : (
              <span className="font-heading text-[16px] font-semibold text-text-primary">
                {tier.price}
              </span>
            )}
          </div>
        ))}
      </div>

      {treatment.note && (
        <p className="mt-4 font-body text-[13px] leading-[1.4] text-brand-secondary">
          {treatment.note}
        </p>
      )}
    </div>
  );
}

export function RmtPricingSection() {
  const { pricingSection, treatments } = rmtCopy;

  return (
    <section
      data-testid="rmt-pricing"
      className="w-full bg-brand-secondary"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-inverse md:text-[48px]">
              {pricingSection.title}
            </h2>
            <p className="font-body text-body leading-[1.6] text-brand-secondary-light">
              {pricingSection.description}
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
