import Image from "next/image";
import Link from "next/link";
import { laserContent } from "@/content/laserCopy";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";

export function LaserCtaSection({ lang }: { lang: Language }) {
  const { cta } = pickContent(laserContent, lang);

  return (
    <section className="w-full" data-testid="laser-cta">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div
          className="relative w-full overflow-hidden rounded-[24px]"
          data-testid="laser-cta-banner"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={cta.image.src}
              alt={cta.image.alt}
              fill
              priority
              className="object-cover object-left-top"
              sizes="(min-width: 1440px) 1240px, 100vw"
            />
          </div>

          <div className="relative grid min-h-[320px] grid-cols-12 items-center px-8 py-10 md:px-12 lg:px-16">
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div className="flex flex-col items-end gap-10 text-right">
                <div className="flex w-full flex-col items-end gap-3">
                  <h2 className="m-0 max-w-[520px] font-heading text-[48px] font-medium leading-[1.2]">
                    <span className="text-brand-secondary">
                      {cta.titleParts.primary}
                    </span>{" "}
                    <span className="text-text-primary">
                      {cta.titleParts.accent}
                    </span>
                  </h2>
                  <p className="m-0 max-w-[540px] font-body text-[16px] font-normal leading-[1.6] text-brand-secondary">
                    {cta.body}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-5 font-heading text-[14px] font-medium leading-none text-text-inverse no-underline transition-colors hover:bg-brand-primary-muted"
                >
                  {cta.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
