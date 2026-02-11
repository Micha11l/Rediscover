import Image from "next/image";
import { skinCareCopy } from "@/content/skinCareCopy";

export function SkinCareWellnessSection() {
  const { aboutWellness, wellnessTreatments } = skinCareCopy;
  const bodyMassage = wellnessTreatments.find((t) => t.type === "duration");
  const lymphaticDrainage = wellnessTreatments.find((t) => t.type === "vip-reg");

  return (
    <section data-testid="skin-care-wellness" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mb-12 flex flex-col gap-6">
          <h2 className="font-heading text-[32px] font-medium leading-[1.1]">
            <span className="text-brand-secondary">{aboutWellness.titleAccent}</span>{" "}
            <span className="text-text-primary">{aboutWellness.titlePrimary}</span>
          </h2>
          <div className="max-w-[1240px] space-y-4">
            {aboutWellness.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-body leading-[1.6] text-brand-secondary"
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
          {bodyMassage && bodyMassage.type === "duration" && (
            <div
              data-testid="wellness-card"
              className="flex flex-col overflow-hidden rounded-[24px] bg-surface-muted md:flex-row"
            >
              <div className="relative h-[200px] w-full md:h-auto md:min-h-[340px] md:w-1/2">
                {bodyMassage.image && (
                  <Image
                    src={bodyMassage.image.src}
                    alt={bodyMassage.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                    {bodyMassage.title}
                  </h3>
                  <p className="font-body text-body leading-[1.6] text-brand-secondary">
                    <span className="font-semibold text-text-primary">Effect:</span>{" "}
                    {bodyMassage.effect}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  {bodyMassage.pricing.map((item, index) => (
                    <div key={index} className="flex items-baseline gap-1">
                      <span className="font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
                        {item.price}
                      </span>
                      <span className="font-heading text-[20px] font-semibold leading-[1.2] text-brand-secondary">
                        /{item.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {lymphaticDrainage && lymphaticDrainage.type === "vip-reg" && (
            <div
              data-testid="wellness-card"
              className="flex min-h-[340px] flex-col justify-between rounded-[24px] bg-surface-muted p-8"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                  {lymphaticDrainage.title}
                </h3>
                <p className="font-body text-body leading-[1.6] text-brand-secondary">
                  <span className="font-semibold text-text-primary">Effect:</span>{" "}
                  {lymphaticDrainage.effect}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
                    {lymphaticDrainage.vipPrice}
                  </span>
                  <span className="font-heading text-[20px] font-semibold leading-[1.2] text-brand-secondary">
                    (VIP)
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
                    {lymphaticDrainage.regPrice}
                  </span>
                  <span className="font-heading text-[20px] font-semibold leading-[1.2] text-brand-secondary">
                    (Reg)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
