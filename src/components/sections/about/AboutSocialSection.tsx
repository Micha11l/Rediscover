import Image from "next/image";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { aboutContent } from "@/content/aboutCopy";

export function AboutSocialSection({ lang }: { lang: Language }) {
  const { social } = pickContent(aboutContent, lang);

  return (
    <section data-testid="about-social" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 lg:px-[100px] lg:py-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10 lg:gap-[80px]">
          {social.map((item) => (
            <div
              key={item.id}
              className="flex w-full max-w-[300px] flex-col items-center gap-6 md:max-w-[250px]"
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-2xl bg-surface-muted md:h-[242px]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="250px"
                  className="object-contain md:object-cover"
                />
              </div>
              <p className="m-0 text-center font-heading text-[20px] font-medium leading-[1.2] text-text-primary md:text-[24px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
