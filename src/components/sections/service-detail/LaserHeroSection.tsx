import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { laserContent } from "@/content/laserCopy";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { uiStrings } from "@/content/shared";

/**
 * Laser & Light Therapy Hero Section
 * Layout mirrors AntiAgingHeroSection with laser-specific copy and assets.
 */
export function LaserHeroSection({ lang }: { lang: Language }) {
  const { hero } = pickContent(laserContent, lang);
  const ui = pickContent(uiStrings, lang);

  return (
    <section data-testid="laser-hero" className="w-full bg-surface-base">
      {/* Navbar - Light variant for solid background */}
      <div className="bg-surface-elevated">
         <div className="mx-auto flex h-[80px] md:h-[100px] lg:h-[136px] w-full max-w-[1440px] items-center px-4 md:px-8 lg:px-16 xl:px-[100px]">
          <Navbar variant="light" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-[48px] md:px-8 lg:px-16 xl:px-[100px]">
        {/* Hero Text Container */}
        <div className="flex flex-col items-center gap-10">
          {/* Breadcrumb */}
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

          {/* Headline */}
          <div className="flex w-full flex-col gap-4 text-center">
             <h1 className="font-heading text-[32px] md:text-[44px] lg:text-display font-medium leading-[1.2] text-text-primary">
               {hero.title}
             </h1>
            <p className="mx-auto max-w-none font-body text-body leading-[1.6] text-brand-secondary">
              {hero.subtitle}
            </p>
          </div>

          {/* Process Navigation */}
          <nav
            aria-label="Treatment options"
            className="flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-4 lg:h-[90px] lg:flex-nowrap lg:gap-0"
          >
            {hero.processItems.map((item, index) => (
              <div key={item.id} className="contents">
                <a
                  href={item.href}
                  className="py-[5px] text-center font-heading text-heading-lg font-medium leading-[1.1] text-text-muted no-underline transition-colors hover:text-brand-secondary lg:flex-1"
                >
                  {item.label}
                </a>
                {index < hero.processItems.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden h-[45px] w-px shrink-0 bg-border/60 lg:block"
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative mt-8 h-[240px] w-full overflow-hidden rounded-[25px] md:h-[350px] lg:mx-auto lg:h-[571px] lg:max-w-[1228px]">
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
