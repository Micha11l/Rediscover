import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { promoContent } from "@/content/promoCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function PromoHeroSection({ lang }: { lang: Language }) {
  const { hero } = pickContent(promoContent, lang);

  return (
     <section data-testid="promo-hero" className="relative w-full min-h-[520px] md:min-h-[620px] lg:min-h-[700px]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-primary/65" />
      </div>

       <div className="relative mx-auto flex min-h-[520px] md:min-h-[620px] lg:min-h-[700px] w-full max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-[64px]">
        <div className="pt-10">
          <Navbar variant="dark" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-16">
          <h1 className="text-center font-heading text-[40px] font-medium leading-[1.2] text-text-inverse md:text-[52px] lg:text-[60px]">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-[600px] md:max-w-[720px] text-center font-heading text-[18px] font-normal leading-[1.4] text-surface-elevated md:text-[20px]">
            {hero.subtitle}
          </p>

          <Link
            href="/contact"
            className="mt-12 inline-flex items-center justify-center rounded-[60px] border border-text-inverse bg-transparent px-8 py-5 font-heading text-[16px] font-normal leading-none text-text-inverse no-underline transition-colors hover:bg-text-inverse hover:text-text-primary"
          >
            {hero.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
