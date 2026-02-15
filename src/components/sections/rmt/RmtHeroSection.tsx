import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { rmtContent } from "@/content/rmtCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";
import { uiStrings } from "@/content/shared";

export function RmtHeroSection({ lang }: { lang: Language }) {
  const { hero } = pickContent(rmtContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <section data-testid="rmt-hero" className="w-full bg-surface-base">
      <div className="mx-auto flex h-[136px] w-full max-w-[1440px] items-center px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <Navbar variant="light" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-[48px] md:px-8 lg:px-16 xl:px-[100px]">
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
            <span
              aria-current="page"
              className="font-heading text-button font-normal leading-none text-text-primary"
            >
              {hero.breadcrumbLabel}
            </span>
          </nav>

          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="m-0 font-heading text-display font-medium leading-[1.2]">
              <span className="block text-brand-secondary">
                {hero.titleLine1}
              </span>
              <span className="block text-text-primary">
                {hero.titleLine2}
              </span>
            </h1>
            <p className="m-0 max-w-[400px] font-body text-body leading-[1.6] text-brand-secondary lg:text-right">
              {hero.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-[80px] grid grid-cols-1 gap-4 sm:grid-cols-3">
          {hero.images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
