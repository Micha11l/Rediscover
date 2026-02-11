"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Testimonials Section
 * Figma node: 43:448 "TESTIMONI"
 * Desktop QA: 1440 × 900
 * Layout: Full-width background + centered single testimonial
 */
export function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section
      className="relative isolate w-full overflow-hidden"
      data-testid="testimonials"
    >
      {/* Background image (decorative) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/testimonials-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Use design token overlay (no hex / no bg-black/20) */}
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Content container (global rule) */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-[100px] text-center">
          {/* Header: icon + title */}
          <div className="flex flex-col items-center gap-10">
            {/* Icon wrapper uses 4/8 scale (56×64) */}
            <div className="relative h-14 w-16 shrink-0">
              <Image
                src="/images/testimonials-icon.png"
                alt=""
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>

            <h2 className="m-0 font-heading text-[48px] font-medium leading-[1.2] text-text-inverse md:text-[56px]">
              {t.testimonials.heading}
            </h2>
          </div>

           {/* Content: quote + customer */}
           <div className="flex flex-col items-center gap-10">
             <blockquote className="m-0 max-w-[1000px] font-body text-[20px] font-normal leading-[1.6] text-text-inverse md:text-[24px]">
               "{t.testimonials.items[0].quote}"
             </blockquote>

             <p className="m-0 font-body text-[16px] font-normal leading-[1.4] text-brand-secondary-light">
               {t.testimonials.items[0].author}, {t.testimonials.items[0].title}
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}