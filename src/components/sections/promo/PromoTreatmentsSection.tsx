import Image from "next/image";
import { promoCopy } from "@/content/promoCopy";
import type { PromoTreatment } from "@/content/promoCopy";

function TreatmentCard({ treatment }: { treatment: PromoTreatment }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-[242px] w-full overflow-hidden rounded-2xl">
        <Image
          src={treatment.image.src}
          alt={treatment.image.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="font-heading text-heading-md font-medium leading-[1.2] text-brand-secondary">
          {treatment.title}
        </h3>
        <div className="font-heading text-[20px] leading-[1.2] text-text-primary">
          <p className="mb-0">VIP: {treatment.vipPrice}</p>
          <p>
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

export function PromoTreatmentsSection() {
  const { treatments } = promoCopy;

  return (
    <section data-testid="promo-treatments" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-16 flex flex-col items-center gap-6">
          <div className="rounded-[40px] border border-surface-accent px-[18px] py-[10px]">
            <span className="font-heading text-[12px] font-light text-brand-secondary">
              {treatments.tag}
            </span>
          </div>

          <h2 className="text-center font-heading text-[36px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
            {treatments.title}
          </h2>

          <p className="max-w-[700px] text-center font-body text-body leading-[1.6] text-brand-secondary">
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
