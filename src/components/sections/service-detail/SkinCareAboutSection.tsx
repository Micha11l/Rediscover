import { skinCareCopy } from "@/content/skinCareCopy";

export function SkinCareAboutSection() {
  const { aboutSkinCare, facialTreatments } = skinCareCopy;

  return (
    <section data-testid="skin-care-about" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-12 flex flex-col gap-6">
          <h2 className="font-heading text-[32px] font-medium leading-[1.1]">
            <span className="text-brand-secondary">{aboutSkinCare.titleAccent}</span>{" "}
            <span className="text-text-primary">{aboutSkinCare.titlePrimary}</span>
          </h2>
          <div className="max-w-[1240px] space-y-4">
            {aboutSkinCare.paragraphs.map((paragraph, index) => (
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
                  <p className="font-body text-body leading-[1.6] text-brand-secondary">
                    <span className="font-semibold text-text-primary">Effect:</span>{" "}
                    {treatment.effect}
                  </p>
                  <p className="font-body text-body leading-[1.6] text-brand-secondary">
                    <span className="font-semibold text-text-primary">Duration:</span>{" "}
                    {treatment.duration}
                  </p>
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
