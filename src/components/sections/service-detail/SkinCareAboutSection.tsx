import { skinCareContent } from "@/content/skinCareCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function SkinCareAboutSection({ lang }: { lang: Language }) {
  const { aboutSkinCare, facialTreatments } = pickContent(skinCareContent, lang);

  return (
    <section data-testid="skin-care-about" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-12 pt-12 md:pb-16 md:pt-16 lg:pb-[145px] lg:pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-12 flex flex-col gap-6">
          <h2 className="m-0 font-heading text-[32px] font-medium leading-[1.1]">
            <span className="text-brand-secondary">{aboutSkinCare.titleAccent}</span>{" "}
            <span className="text-text-primary">{aboutSkinCare.titlePrimary}</span>
          </h2>
          <div className="max-w-[1240px] space-y-4">
            {aboutSkinCare.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`font-body text-body leading-[1.6] text-brand-secondary${
                  paragraph.extraTopSpace ? " !mt-8" : ""
                }`}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facialTreatments.map((treatment) => (
            <div
              key={treatment.id}
              data-testid="facial-treatment-card"
              className="flex min-h-[370px] flex-col justify-between rounded-[24px] bg-surface-muted p-8"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                  {treatment.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="m-0 mb-1 font-heading text-[18px] font-semibold leading-[1.3] text-text-primary">
                      Effect:
                    </h4>
                    <p className="m-0 font-body text-[15px] leading-[1.6] text-brand-secondary">
                      {treatment.effect}
                    </p>
                  </div>
                  <div>
                    <h4 className="m-0 mb-1 font-heading text-[18px] font-semibold leading-[1.3] text-text-primary">
                      Duration:
                    </h4>
                    <p className="m-0 font-body text-[15px] leading-[1.6] text-brand-secondary">
                      {treatment.duration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
                    {treatment.vipPrice}
                  </span>
                  <span className="font-heading text-[20px] font-semibold leading-[1.2] text-brand-secondary">
                    (VIP)
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
                    {treatment.regPrice}
                  </span>
                  <span className="font-heading text-[20px] font-semibold leading-[1.2] text-brand-secondary">
                    (Reg)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
