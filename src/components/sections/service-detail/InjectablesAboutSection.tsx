import { injectablesCopy } from "@/content/injectablesCopy";

export function InjectablesAboutSection() {
  const { about, treatments } = injectablesCopy;

  return (
    <section data-testid="injectables-about" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-12 flex flex-col gap-6">
          <h2 className="font-heading text-[32px] font-medium leading-[1.1]">
            <span className="text-brand-secondary">{about.titleAccent}</span>{" "}
            <span className="text-text-primary">{about.titlePrimary}</span>
          </h2>
          <div className="max-w-[1240px] space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-body leading-[1.6] text-brand-secondary"
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
              className="flex flex-col gap-4 rounded-[24px] bg-surface-muted p-8"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                  {treatment.title}
                </h3>
                {treatment.subtitle && (
                  <p className="font-heading text-[24px] font-medium leading-[1.2] text-text-primary">
                    {treatment.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <p className="font-body text-body leading-[1.6] text-brand-secondary">
                  <span className="font-semibold text-brand-secondary">
                    Effect:
                  </span>{" "}
                  {treatment.effect}
                </p>
                <p className="font-body text-body leading-[1.6] text-brand-secondary">
                  <span className="font-semibold text-brand-secondary">
                    Recommended For:
                  </span>{" "}
                  {treatment.recommendedFor}
                </p>
                <p className="font-body text-body leading-[1.6] text-brand-secondary">
                  <span className="font-semibold text-brand-secondary">
                    Expected Downtime:
                  </span>{" "}
                  {treatment.expectedDowntime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
