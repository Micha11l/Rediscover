import Image from "next/image";
import { rmtContent } from "@/content/rmtCopy";
import type { RmtTreatment } from "@/content/rmtCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

function TreatmentCard({ treatment }: { treatment: RmtTreatment }) {
  return (
    <div className="flex h-[261px] w-[535px] gap-[31px]">
      <div className="flex h-[35px] shrink-0 items-center">
        <Image
          src={treatment.icon}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="m-0 font-heading text-[32px] font-medium leading-[35px] text-brand-secondary-light">
          {treatment.title}
        </h3>
        <div className="mt-[41px] flex flex-col">
          <ul className="m-0 list-disc pl-[30px]">
            {treatment.pricing.map((tier, i) => (
              <li
                key={i}
                className="font-body text-[20px] leading-[1.4] text-text-soft"
              >
                {tier.duration ? `${tier.duration} — ${tier.price}` : tier.price}
              </li>
            ))}
          </ul>
          {treatment.note && (
            <>
              <div className="h-[28px]" />
              <p className="m-0 font-body text-[20px] leading-[1.4] text-text-soft">
                {treatment.note}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CuppingCard({ treatment }: { treatment: RmtTreatment }) {
  return (
    <div className="flex gap-[31px]">
      <div className="flex h-[35px] shrink-0 items-center">
        <Image
          src={treatment.icon}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="m-0 font-heading text-[32px] font-medium leading-[35px] text-brand-secondary-light">
          {treatment.title}
        </h3>
        <ul className="m-0 mt-[41px] list-disc pl-[30px]">
          {treatment.pricing.map((tier, i) => (
            <li
              key={i}
              className="font-body text-[20px] leading-[1.4] text-text-soft"
            >
              {tier.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RmtPricingSection({ lang }: { lang: Language }) {
  const { pricingSection, treatments } = pickContent(rmtContent, lang);
  const rmtTreatment = treatments[0];
  const aromaTreatment = treatments[1];
  const cuppingTreatment = treatments[2];

  return (
    <section data-testid="rmt-pricing" className="w-full bg-brand-secondary">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:pl-[137px] xl:pr-[122px]">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[341px]">
          <div className="flex flex-col lg:w-[305px]">
            <h2 className="m-0 font-heading text-[56px] font-medium leading-[1.1]">
              <span className="text-brand-secondary-light">Treatments </span>
              <br />
              <span className="text-text-inverse">& Pricing</span>
            </h2>
            <p className="mb-0 mt-[39px] font-body text-[16px] leading-[1.6] text-[#f5f1ed]">
              {pricingSection.description}
            </p>
          </div>

          <div className="flex flex-col">
            <TreatmentCard treatment={rmtTreatment} />
            <div className="h-[44px]" />
            <TreatmentCard treatment={aromaTreatment} />
            <div className="h-[44px]" />
            <CuppingCard treatment={cuppingTreatment} />
          </div>
        </div>
      </div>
    </section>
  );
}
