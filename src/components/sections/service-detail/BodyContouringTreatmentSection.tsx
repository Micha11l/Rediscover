import Image from "next/image";
import type { Paragraph } from "@/content/skinCareCopy";

interface BodyContouringTreatmentSectionProps {
  testId: string;
  title: string;
  paragraphs: Paragraph[];
  whatItCanHelpWith: string[];
  recommendedFor: string;
  image: { src: string; alt: string; width: number; height: number };
}

export function BodyContouringTreatmentSection({
  testId,
  title,
  paragraphs,
  whatItCanHelpWith,
  recommendedFor,
  image,
}: BodyContouringTreatmentSectionProps) {
  return (
    <section data-testid={testId} className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6 lg:flex-1">
            <h2 className="font-heading text-[56px] font-medium leading-[1.1] text-brand-secondary">
              {title}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-body leading-[1.6] text-brand-secondary"
                >
                  {p.segments
                    ? p.segments.map((seg, j) =>
                        seg.bold ? (
                          <strong
                            key={j}
                            className="font-semibold text-text-primary"
                          >
                            {seg.text}
                          </strong>
                        ) : (
                          <span key={j}>{seg.text}</span>
                        )
                      )
                    : p.text}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-body font-semibold text-text-primary">
                What It Can Help With
              </h3>
              <ul className="flex flex-col gap-2 pl-0">
                {whatItCanHelpWith.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-body text-body leading-[1.6] text-brand-secondary"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-heading text-body font-semibold text-text-primary">
                Recommended For
              </h3>
              <p className="font-body text-body leading-[1.6] text-brand-secondary">
                {recommendedFor}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-start justify-center lg:w-[35%]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
