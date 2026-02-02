"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Hero Section
 * Figma node: 19:144 "HERO Section"
 * Dimensions: 1440 x 704px
 *
 * Layout: Navbar + Hero Content (title, subtitle, CTA)
 * Background: Full-bleed image with dark overlay, cropped top
 */
export function HeroSection() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <section
      className="relative isolate min-h-[60vh] w-full overflow-hidden shadow-base sm:min-h-[70vh] lg:min-h-[704px]"
      data-testid="hero"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full" aria-hidden="true">
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          priority
          className="scale-[1.05] object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Inner container with max-w-[1440px] for test compatibility */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[1440px] min-h-[60vh] flex-col gap-10 px-4 py-8 sm:min-h-[70vh] sm:px-6 sm:py-10 lg:min-h-[704px] lg:px-8 lg:py-10 2xl:px-12"
        data-node="hero-frame"
      >
        <Navbar variant="dark" />

        <div className="flex w-full flex-col items-center gap-16 py-10 sm:py-12 lg:py-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="font-heading text-heading-lg font-medium leading-tight tracking-normal text-text-inverse sm:text-heading-xl lg:text-display">
              <span className="text-brand-secondary-light">{t.hero.title[0]}</span>{" "}
              <span className="text-brand-secondary-light">{t.hero.title[1]}</span> {t.hero.title[2]}
            </h1>

            <p className="max-w-prose font-body text-body leading-relaxed text-text-inverse sm:max-w-[1064px]">
              {t.hero.subtitle}
            </p>
          </div>

          {/* IMPORTANT: real <button> for Playwright selector */}
           <button
             type="button"
             onClick={() => router.push("/services")}
             className="inline-flex items-center justify-center rounded-[60px] border border-text-inverse bg-transparent px-6 py-4 font-heading text-button leading-none text-text-inverse no-underline transition-colors hover:bg-white hover:text-text-primary sm:px-8 sm:py-5"
           >
             {t.hero.ctaButton}
           </button>
        </div>
      </div>
    </section>
  );
}