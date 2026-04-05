import { injectablesContent } from "@/content/injectablesCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function InjectablesAboutSection({ lang }: { lang: Language }) {
  const { about, treatments } = pickContent(injectablesContent, lang);

  return (
    <section data-testid="injectables-about" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 md:py-16 lg:py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-[92px] flex flex-col gap-6">
          <h2 className="m-0 font-heading text-[32px] font-medium leading-[1.1]">
            <span className="text-brand-secondary">{about.titleAccent}</span>{" "}
            <span className="text-text-primary">{about.titlePrimary}</span>
          </h2>
          <div className="flex max-w-[1240px] flex-col gap-4">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="m-0 font-body text-body leading-[1.6] text-brand-secondary"
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              data-testid="injectable-treatment-card"
              className="flex flex-col gap-[21px] rounded-[24px] bg-surface-muted p-8"
            >
              <div className="flex flex-col gap-1">
                <h3 className="m-0 font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                  {treatment.title}
                </h3>
                {treatment.subtitle && (
                  <p className="m-0 font-heading text-[24px] font-medium leading-[1.2] text-text-primary">
                    {treatment.subtitle}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-10">
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
                    Recommended For:
                  </h4>
                  <p className="m-0 font-body text-[15px] leading-[1.6] text-brand-secondary">
                    {treatment.recommendedFor}
                  </p>
                </div>
                <div>
                  <h4 className="m-0 mb-1 font-heading text-[18px] font-semibold leading-[1.3] text-text-primary">
                    Expected Downtime:
                  </h4>
                  <p className="m-0 font-body text-[15px] leading-[1.6] text-brand-secondary">
                    {treatment.expectedDowntime}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
