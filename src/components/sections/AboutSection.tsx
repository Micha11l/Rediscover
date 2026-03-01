"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const DEBUG_ABOUT = false;
  const { t } = useLanguage();

  return (
    <section className="relative z-30 w-full" data-section="about">
      {/* Outer container: reserve space for the overlap so later sections don't shift */}
      <Container className={`pb-12 pt-0 sm:pb-16 lg:pb-24 ${DEBUG_ABOUT ? 'outline outline-2 outline-blue-500' : ''}`}>
        {/* Card: pull up into Hero */}
        <div
          className={`relative mt-0 flex w-full flex-col items-stretch overflow-hidden rounded-2xl bg-surface-elevated shadow-md lg:-mt-[64px] lg:min-h-[560px] lg:flex-row ${DEBUG_ABOUT ? 'outline outline-2 outline-red-500' : ''}`}
          data-node="about-card"
          style={DEBUG_ABOUT ? { outline: '3px solid red' } : undefined}
        >
          {/* Left image column */}
          <div className={`relative h-[320px] w-full shrink-0 overflow-hidden md:h-[400px] md:w-full lg:h-auto lg:min-h-[560px] lg:w-[553px] lg:max-w-[553px] ${DEBUG_ABOUT ? 'outline outline-1 outline-green-500' : ''}`}>
            <Image
              src="/images/about-left.jpg"
              alt="Rediscover Beauty Clinic reception with orchids"
              fill
              className="object-cover object-[center_45%]"
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 480px, 553px"
              priority
            />
          </div>

          {/* Right content column */}
          <div className={`flex min-w-0 flex-1 flex-col p-6 sm:p-8 md:p-10 lg:h-full lg:p-12 ${DEBUG_ABOUT ? 'outline outline-1 outline-purple-500' : ''}`}>
            <div className="flex flex-col gap-8 lg:gap-6">
              <div className="h-10 w-10">
                <Image
                  src="/images/1.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div className="flex flex-col gap-6 lg:gap-5">
                <div>
                   <h2 className="font-heading text-heading-lg font-medium leading-tight text-text-primary md:text-heading-md">
                     {t.about.heading}
                   </h2>
                   <p className="font-heading text-[40px] font-normal leading-[1.2] text-brand-secondary md:text-heading-lg">
                     {t.about.subheading}
                   </p>
                 </div>

                 <div className="flex max-w-[520px] flex-col gap-3 lg:max-w-[640px]">
                   <p className="font-body text-body leading-relaxed text-text-primary">
                     {t.about.paragraphs[0]}
                   </p>
                   <p className="font-body text-body leading-relaxed text-text-primary">
                     {t.about.paragraphs[1]}
                   </p>
                 </div>
              </div>
            </div>

            {/* CTA pinned to bottom */}
            <div className="mt-auto pt-8">
               <Link
                 href="/about"
                 className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-4 font-heading text-button leading-none text-text-inverse no-underline transition-colors hover:bg-brand-primary-muted sm:px-8 sm:py-5"
               >
                 {t.about.button}
               </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
    
  );
}
