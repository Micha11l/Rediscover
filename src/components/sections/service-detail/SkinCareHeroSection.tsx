import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { skinCareContent } from "@/content/skinCareCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";
import { uiStrings } from "@/content/shared";

export function SkinCareHeroSection({ lang }: { lang: Language }) {
  const { hero } = pickContent(skinCareContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <section data-testid="skin-care-hero" className="w-full bg-surface-base">
      <div className="bg-surface-elevated">
         <div className="mx-auto flex h-[80px] md:h-[100px] lg:h-[136px] w-full max-w-[1440px] items-center px-4 md:px-8 lg:px-16 xl:px-[100px]">
          <Navbar variant="light" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-0 pt-[48px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 rounded-[40px] py-[10px]"
          >
            <Link
              href="/"
              className="font-heading text-button font-normal leading-none text-brand-secondary no-underline transition-colors hover:text-text-primary"
            >
              {ui.breadcrumbs.home}
            </Link>
            <span
              aria-hidden="true"
              className="font-heading text-button font-normal leading-none text-text-primary"
            >
              /
            </span>
            <Link
              href="/services"
              className="font-heading text-button font-normal leading-none text-brand-secondary no-underline transition-colors hover:text-text-primary"
            >
              {ui.breadcrumbs.services}
            </Link>
            <span
              aria-hidden="true"
              className="font-heading text-button font-normal leading-none text-text-primary"
            >
              /
            </span>
            <span
              aria-current="page"
              className="font-heading text-button font-normal leading-none text-text-primary"
            >
              {hero.breadcrumbLabel}
            </span>
          </nav>

          <div className="flex w-full flex-col gap-4 text-center">
             <h1 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-display font-medium leading-[1.2] text-text-primary">
               {hero.title}
             </h1>
            <p className="m-0 mx-auto max-w-none font-body text-body leading-[1.6] text-brand-secondary">
              {hero.subtitle}
            </p>
          </div>
        </div>

        <div className="relative mt-10 h-[240px] w-full overflow-hidden rounded-[25px] md:mt-12 md:h-[350px] lg:mx-auto lg:mt-[80px] lg:h-[571px] lg:max-w-[1228px]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1228px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
