import Image from "next/image";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { aboutContent } from "@/content/aboutCopy";

export function AboutClinicSection({ lang }: { lang: Language }) {
  const { clinic } = pickContent(aboutContent, lang);

  return (
    <section data-testid="about-clinic" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-16 xl:px-[64px]">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-6">
            <h2 className="m-0 flex-1 font-heading text-[40px] font-medium leading-[1.2] md:text-[52px] lg:text-[60px]">
              <span className="block text-brand-secondary">{clinic.titleAccent}</span>
              <span className="block text-text-primary">{clinic.titleMain}</span>
            </h2>
            <p className="m-0 w-full max-w-[378px] text-left font-body text-[18px] leading-[1.4] text-brand-secondary lg:text-right lg:text-[20px]">
              {clinic.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:h-[335px] lg:flex-row">
            {clinic.gallery.map((image, index) => (
              <div
                key={image.src}
                className="relative h-[180px] overflow-hidden rounded-[10px] md:h-[220px] lg:flex-1 lg:h-full"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutClinicSection as AboutSanctuarySection };
