import Image from "next/image";
import Link from "next/link";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutCtaSection() {
  const { cta } = aboutCopy;

  return (
    <section data-testid="about-cta" className="w-full bg-surface-base">
       <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[200px] md:absolute md:inset-0 md:h-auto">
            <Image
              src={cta.backgroundImage.src}
              alt={cta.backgroundImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1440px) 100vw, 1240px"
            />
          </div>

          <div className="relative flex flex-col items-center gap-10 bg-surface-muted px-6 py-8 text-center md:items-end md:bg-transparent md:px-16 md:py-10 md:text-right lg:min-h-[340px] lg:pl-[437px] lg:pr-16">
            <div className="flex flex-col items-center gap-3 md:items-end md:text-right">
              <h2 className="m-0 font-heading text-[40px] font-medium leading-[1.1] md:text-[48px] lg:text-[56px]">
                <span className="block text-brand-secondary">{cta.titleLine1}</span>
                <span className="block text-text-primary">{cta.titleLine2}</span>
              </h2>
              <p className="m-0 font-body text-[18px] leading-[1.4] text-brand-secondary lg:text-[20px]">
                {cta.subtitle}
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-5 font-heading text-[16px] font-normal leading-none text-text-inverse no-underline transition-colors hover:bg-brand-primary/90"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
