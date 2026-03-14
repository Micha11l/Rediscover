import Image from "next/image";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { aboutContent } from "@/content/aboutCopy";

export function AboutApproachSection({ lang }: { lang: Language }) {
  const { approach } = pickContent(aboutContent, lang);

  return (
    <section data-testid="about-approach" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-[100px] xl:px-[64px]">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <h2 className="m-0 flex-1 font-heading text-[40px] font-medium leading-[1.2] md:text-[52px] lg:text-[60px]">
              <span className="block text-brand-secondary">{approach.titleAccent}</span>
              <span className="block text-text-primary">{approach.titleMain}</span>
            </h2>
            <p className="m-0 w-full max-w-[420px] text-left font-body text-[18px] leading-[1.45] text-brand-secondary lg:ml-auto lg:pt-4 lg:text-right lg:text-[20px]">
              {approach.body}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:h-[335px] lg:flex-row">
            {approach.gallery.map((image) => (
              <div
                key={image.src}
                className="relative h-[180px] overflow-hidden rounded-[10px] md:h-[220px] lg:h-full lg:flex-1"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
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
