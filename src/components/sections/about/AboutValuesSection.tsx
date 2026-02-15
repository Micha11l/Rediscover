import Image from "next/image";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { aboutContent } from "@/content/aboutCopy";

export function AboutSkincareSection({ lang }: { lang: Language }) {
  const { skincare } = pickContent(aboutContent, lang);

  return (
    <section data-testid="about-skincare" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[108px] md:px-8 lg:px-16 xl:px-[65px]">
        <h2 className="m-0 py-6 font-heading text-[40px] font-medium leading-[1.1] text-brand-secondary md:text-[48px] lg:text-[56px]">
          {skincare.title}
        </h2>

        <div className="flex flex-col overflow-hidden rounded-3xl bg-surface-muted lg:flex-row">
          <div className="relative h-[300px] w-full lg:h-[575px] lg:w-[705px] lg:shrink-0">
            <Image
              src={skincare.image.src}
              alt={skincare.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 705px"
            />
          </div>

          <div className="flex flex-1 flex-col gap-8 p-8 lg:p-[70px]">
            <p className="m-0 font-body text-[14px] font-semibold leading-[1.6] text-brand-secondary lg:text-[16px]">
              {skincare.subtitle}
            </p>

            {skincare.brands.map((brand, index) => (
              <div key={brand.name} className="flex flex-col gap-2">
                <h3 className={`m-0 font-heading text-[24px] font-bold leading-[1.1] lg:text-[32px] ${index === 0 ? "text-text-muted" : "text-text-primary"}`}>
                  {brand.name}
                </h3>
                <p className="m-0 font-body text-[14px] leading-[1.6] text-brand-secondary lg:text-[16px]">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSkincareSection as AboutValuesSection };
