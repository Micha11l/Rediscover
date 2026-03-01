import Image from "next/image";
import type { DeviceTechnology } from "@/content/devicesCopy";
import { DecorativeDivider } from "@/components/ui";
import type { Language } from "@/i18n/types";

interface DeviceTechnologySectionProps {
  technology: DeviceTechnology;
  lang: Language;
  showDivider?: boolean;
}

export function DeviceTechnologySection({
  technology,
  lang,
  showDivider = true,
}: DeviceTechnologySectionProps) {
  const whyName = technology.title.replace(/[®™]/g, "").replace(/ Technology$/, "").trim();

  return (
    <section data-testid={technology.testId} className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-12 md:pt-16 lg:pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <h2 className="mx-0 mt-0 mb-[49px] font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-brand-secondary">
          {technology.title}
        </h2>

        <div className="flex flex-col overflow-hidden rounded-[24px] bg-surface-elevated lg:flex-row">
          <div className="relative h-[300px] w-full shrink-0 bg-surface-muted lg:h-auto lg:w-[553px]">
            <Image
              src={technology.image.src}
              alt={technology.image.alt}
              fill
              className="object-cover object-top md:object-center"
              sizes="(max-width: 1024px) 100vw, 553px"
            />
          </div>

          <div className="flex flex-1 flex-col gap-8 px-6 py-8 lg:px-10 lg:py-[78px]">
            <div className="flex flex-col gap-4">
              <h3 className="m-0 font-heading text-[32px] font-bold leading-[1.1]">
                <span className="text-brand-secondary">Medical-Grade </span>
                <span className="text-text-primary">Aesthetic Devices</span>
              </h3>
              <div className="flex flex-col gap-4">
                {technology.descriptionParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="m-0 font-body text-body leading-[1.6] text-brand-secondary"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="m-0 font-heading text-[32px] font-bold leading-[1.1]">
                <span className="text-brand-secondary">{technology.whyTitle} </span>
                <span className="text-text-primary">{whyName}</span>
              </h3>
              <ul className="m-0 list-disc space-y-1 pl-6">
                {technology.whyBullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="font-body text-body leading-[1.6] text-brand-secondary"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

       <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-20 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
           <h3 className="m-0 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1]">
             <span className="text-brand-secondary">{technology.howWeUseTitle} </span>
             <span className="text-text-primary">{technology.howWeUseTitleAccent}</span>
           </h3>
          <span className="shrink-0 rounded-[40px] border border-brand-secondary-light px-[18px] py-[10px] font-heading text-button font-light leading-none text-brand-secondary">
            View Services
          </span>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-max">
            {technology.timelineItems.map((item, i) => (
              <div
                key={item.id}
                className="group flex w-[300px] shrink-0 flex-col lg:w-[380px]"
              >
                <div className="flex items-center">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full border-2 border-brand-secondary bg-surface-base transition-colors duration-200 group-hover:bg-brand-secondary"
                    aria-hidden="true"
                  />
                  <span
                    className="h-px flex-1 bg-brand-secondary-light"
                    aria-hidden="true"
                  />
                </div>

                <div
                  className="border-l border-brand-secondary-light pb-10 pl-8 pt-5 transition-colors duration-200 group-hover:border-brand-secondary"
                  style={{ marginLeft: "5px" }}
                >
                   <p className="mx-0 mt-0 mb-10 font-heading text-[32px] md:text-[44px] lg:text-[56px] font-medium leading-[1.1] text-text-primary transition-opacity duration-200 group-hover:opacity-80">
                    {item.title}
                  </p>
                  <p className="m-0 max-w-[280px] font-body text-body leading-[1.6] text-brand-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showDivider && <DecorativeDivider className="py-6" />}
    </section>
  );
}
