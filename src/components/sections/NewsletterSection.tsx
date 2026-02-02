"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Newsletter Section (Care Promise banner)
 * Figma: "NEWSLETTER SIGN UP"
 * Desktop QA: 1440 × 900
 * Notes:
 * - Background uses /images/newsletter.png
 * - No radius
 * - No client interactivity (no onSubmit) to avoid RSC errors
 */
export function NewsletterSection() {
  const { t } = useLanguage();
  return (
    <section
      className="relative isolate w-full overflow-hidden"
      data-testid="newsletter"
    >
      {/* Background (no radius) */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/newsletter.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/*
          If contrast is not enough, enable overlay (token only, no hex)
          <div className="absolute inset-0 bg-overlay" />
        */}
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-20">
           {/* Left title */}
           <h2 className="m-0 font-heading text-[48px] font-medium leading-[1.2] text-text-inverse md:text-[56px]">
             {t.newsletter.heading}
           </h2>

           {/* Right copy */}
           <div className="w-full max-w-[553px]">
             {/* Paragraph 1: force 3 lines on desktop */}
             <p className="m-0 font-heading text-[16px]  leading-[1.6] text-brand-secondary-light">
               {t.newsletter.description.split(". ")[0]}.
             </p>

             {/* Gap = 24px */}
             <div className="h-6" />

             {/* Paragraph 2: force 2 lines on desktop + bold */}
             <p className="m-0 font-body text-[16px] font-bold leading-[1.6] text-brand-secondary-light">
               {t.newsletter.description.split(". ")[1]}
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}