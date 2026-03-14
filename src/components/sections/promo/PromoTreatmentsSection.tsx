import Image from "next/image";
import { promoContent } from "@/content/promoCopy";
import type { PromoTreatment } from "@/content/promoCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

function TreatmentCard({ treatment }: { treatment: PromoTreatment }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-[250/242] w-full overflow-hidden rounded-2xl md:h-[242px] md:aspect-auto">
        <Image
          src={treatment.image.src}
          alt={treatment.image.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="m-0 font-heading text-heading-md font-medium leading-[1.2] text-brand-secondary">
          {treatment.title}
        </h3>
        <p className="m-0 font-body text-[14px] text-text-muted">
          {treatment.duration}
        </p>
        <div className="font-heading text-[20px] leading-none text-text-primary">
          <p className="m-0">VIP: {treatment.vipPrice}</p>
          <p className="m-0">
            <s className="text-text-muted">
              <span className="sr-only">Regular price: </span>
              Reg. {treatment.regularPrice}
            </s>
          </p>
        </div>
      </div>
    </div>
  );
}

export function PromoTreatmentsSection({ lang }: { lang: Language }) {
  const { treatments } = pickContent(promoContent, lang);

  return (
    <section data-testid="promo-treatments" className="w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-4 py-16 md:px-8 lg:gap-16 lg:px-16 lg:py-20 xl:px-[100px] 2xl:py-24">
        <div className="flex flex-col items-center gap-5">
          <div className="inline-flex items-center justify-center rounded-full border border-surface-accent px-8 py-3 lg:min-h-[52px] lg:px-10 lg:py-4">
            <span className="m-0 font-heading text-[16px] font-light text-brand-secondary lg:text-[18px]">
              {treatments.tag}
            </span>
          </div>

          <h2 className="m-0 text-center font-heading text-[36px] font-medium leading-none text-text-primary md:text-[40px]">
            {treatments.title}
          </h2>

          <p className="m-0 max-w-[800px] text-center font-body text-[16px] font-light leading-[1.4] text-brand-secondary">
            {treatments.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          {treatments.items.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
}
