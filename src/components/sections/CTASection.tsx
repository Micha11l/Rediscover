"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * CTA Section
 * Figma node: 128:240 "CTA"
 * Desktop QA: 1440 × 900
 * Layout: Centered banner with background image + right-side content
 */
export function CtaSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full" data-testid="cta">
      {/* Global container rule */}
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px] py-12 md:py-16 lg:py-[100px]">
        {/* Banner */}
        <div
          className="relative w-full overflow-hidden rounded-[24px]"
          data-testid="cta-banner"
        >
          {/* Background image (decorative) */}
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/images/banner.png"
              alt=""
              fill
              priority
              className="object-cover object-left-top"
              sizes="(min-width: 1440px) 1240px, 100vw"
            />
          </div>

          {/* Content grid (no fake padding-left magic) */}
          <div className="relative grid min-h-[320px] grid-cols-12 items-center px-8 py-10 md:px-12 lg:px-16">
            {/* Put content on the right side */}
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="flex flex-col items-center gap-10 text-center md:items-end md:text-right">
                {/* Title + subtitle */}
                <div className="flex w-full flex-col items-center gap-3 md:items-end">
                  <h2 className="m-0 max-w-[520px] font-heading text-[28px] md:text-[36px] lg:text-[48px] font-medium leading-[1.2]">
                    {t.cta.heading}
                  </h2>
                  <p className="m-0 max-w-[540px] font-body text-[16px] font-normal leading-[1.6] text-brand-secondary">
                    {t.cta.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-5 font-heading text-[14px] font-medium leading-none text-text-inverse no-underline transition-colors hover:bg-brand-primary-muted"
                >
                  {t.cta.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}