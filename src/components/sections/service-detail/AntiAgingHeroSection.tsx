import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { antiAgingPageContent } from "@/content/antiAgingPage";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { uiStrings } from "@/content/shared";

/**
 * Anti-Aging Hero Section
 * Figma node: 212:3701 "HERO Section"
 * Dimensions: 1440 x 1097px
 *
 * Layout:
 * - Navbar (light variant, solid bg)
 * - Hero Content: Breadcrumb, Headline, Process Nav, Hero Image
 */

export function AntiAgingHeroSection({ lang }: { lang: Language }) {
  const content = pickContent(antiAgingPageContent, lang);
  const ui = pickContent(uiStrings, lang);
  const processItems = [
    { id: "sofwave", label: lang === "zh" ? "索芙波" : "Sofwave", href: "#sofwave" },
    {
      id: "thermage-flx",
      label: lang === "zh" ? "热玛吉第五代" : "ThermageFLX",
      href: "#thermage-flx",
    },
    { id: "morpheus8", label: lang === "zh" ? "魔力微针" : "Morpheus8", href: "#morpheus8" },
    { id: "forma", label: lang === "zh" ? "热立塑" : "Forma", href: "#forma" },
  ];
  return (
    <section
      data-testid="anti-aging-hero"
      className="w-full bg-surface-base"
    >
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
              {ui.breadcrumbs.antiAging}
            </span>
          </nav>

          {/* Headline */}
          <div className="flex w-full flex-col gap-4 text-center">
             <h1 className="font-heading text-[32px] md:text-[44px] lg:text-display font-medium leading-[1.2] text-text-primary">
               {content.hero.title}
             </h1>
            <p className="mx-auto max-w-none whitespace-pre-line font-body text-body leading-[1.6] text-brand-secondary">
              {content.hero.description}
            </p>
          </div>

          {/* Process Navigation */}
          <nav
            aria-label="Treatment options"
            className="flex w-full max-w-[1200px] flex-wrap items-start justify-center gap-4 lg:h-[90px] lg:flex-nowrap lg:justify-between lg:gap-0"
          >
            {processItems.map((item, index) => (
              <div key={item.id} className="flex items-center justify-center lg:flex-1">
                <a
                  href={item.href}
                  className="px-0 py-[5px] text-center font-heading text-heading-lg font-medium leading-[1.1] text-text-muted no-underline transition-colors hover:text-brand-secondary lg:flex-1"
                >
                  {item.label}
                </a>
                {/* Divider - hide on last item and on mobile */}
                {index < processItems.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="ml-4 hidden h-[45px] w-px bg-border/60 lg:ml-8 lg:block"
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Hero Image */}
        <div className="relative mt-8 h-[240px] w-full overflow-hidden rounded-[25px] md:h-[350px] lg:mx-auto lg:h-[571px] lg:max-w-[1228px]">
          <Image
            src="/images/anti-aging/hero.png"
            alt="Anti-aging facial treatment visualization showing skin lifting and tightening effects"
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
