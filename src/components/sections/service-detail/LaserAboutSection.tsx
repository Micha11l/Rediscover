import Image from "next/image";
import type { LayoutTweaks, Paragraph } from "@/content/laserCopy";

interface LaserAboutSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  paragraphs: Paragraph[];
  leftImage: {
    src: string;
    alt: string;
  };
  rightImage: {
    src: string;
    alt: string;
  };
  layoutTweaks?: LayoutTweaks;
}

const DEFAULT_LAYOUT: Required<LayoutTweaks> = {
  leftTopPx: 5,
  leftHeightPx: 550,
  rightWidthPx: 500,
  rightHeightPx: 500,
  rightTopPx: 100,
  rightTranslateYPx: 60,
  rightScale: 0.85,
  rightShiftPx: 80,
};

export function LaserAboutSection({
  id,
  title,
  subtitle,
  paragraphs,
  leftImage,
  rightImage,
  layoutTweaks,
}: LaserAboutSectionProps) {
  const layout = { ...DEFAULT_LAYOUT, ...layoutTweaks };

  return (
    <section
      id={id}
      data-testid={`laser-about-${id || "block"}`}
      className="relative isolate z-0 w-full scroll-mt-[160px] overflow-visible bg-surface-base pt-[10px] pb-[40px] lg:pt-[20px] lg:pb-[100px]"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-0">
        <div className="relative lg:min-h-[600px]">
          <div
            className="absolute left-0 z-0 hidden w-[367px] pointer-events-none bg-surface-base lg:block"
            style={{
              top: layout.leftTopPx,
              height: layout.leftHeightPx,
            }}
          >
            <Image
              src={leftImage.src}
              alt={leftImage.alt}
              fill
              sizes="367px"
              className="object-contain object-center"
            />
          </div>

          <div
            className="absolute right-0 z-0 hidden w-[453px] pointer-events-none bg-surface-base lg:block"
            style={{
              top: layout.rightTopPx,
              right: layout.rightShiftPx,
              width: layout.rightWidthPx,
              height: layout.rightHeightPx,
              transform: `translateY(${layout.rightTranslateYPx}px) scale(${layout.rightScale})`,
              transformOrigin: "top right",
            }}
          >
            <Image
              src={rightImage.src}
              alt={rightImage.alt}
              fill
              sizes="453px"
              className="object-contain object-center"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[553px] px-4 md:px-8 lg:px-0 lg:absolute lg:left-1/2 lg:top-[10px] lg:-translate-x-1/2">
            <h2 className="mb-[28px] font-heading text-heading-xl font-medium leading-[1.1] text-brand-secondary">
              {title}
            </h2>

            <div className="space-y-4 text-brand-secondary">
              {subtitle ? (
                <p className="font-body text-[16px] font-semibold leading-[1.6]">
                  {subtitle}
                </p>
              ) : null}

              {paragraphs.map((para, index) => (
                <p key={index} className="font-body text-[16px] leading-[1.6]">
                  {para.segments
                    ? para.segments.map((segment, segIndex) =>
                        segment.bold ? (
                          <strong key={segIndex} className="font-semibold">
                            {segment.text}
                          </strong>
                        ) : (
                          <span key={segIndex}>{segment.text}</span>
                        )
                      )
                    : para.text}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 lg:hidden">
            <div className="relative h-[200px] w-full bg-surface-base">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
            <div className="relative h-[200px] w-full bg-surface-base">
              <Image
                src={rightImage.src}
                alt={rightImage.alt}
                fill
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
