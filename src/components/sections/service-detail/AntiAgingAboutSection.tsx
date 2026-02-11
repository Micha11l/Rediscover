import Image from "next/image";
import { antiAgingCopy } from "@/content/antiAgingCopy";

interface LayoutTweaks {
  leftTopPx?: number;
  leftHeightPx?: number;
  rightTopPx?: number;
  rightHeightPx?: number;
  rightTranslateYPx?: number;
  rightWidthPx?: number;
  rightScale?: number;
  rightShiftPx?: number;
}

const DEFAULT_LAYOUT: Required<LayoutTweaks> = {
  leftTopPx: 5,
  leftHeightPx: 550,
  rightTopPx: 15,
  rightHeightPx: 679,
  rightTranslateYPx: 0,
  rightWidthPx: 453,
  rightScale: 1,
  rightShiftPx: 0,
};

type TitleSegment = {
  text: string;
  colorClassName?: string;
  superscript?: boolean;
};

interface AntiAgingAboutSectionProps {
  id?: string;
  dataTestId?: string;
  title: string | TitleSegment[];
  subtitle: string;
  paragraphs: Array<{
    text?: string;
    segments?: Array<{ text: string; bold?: boolean }>;
  }>;
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

export function AntiAgingAboutSection({
  id,
  dataTestId,
  title,
  subtitle,
  paragraphs,
  leftImage,
  rightImage,
  layoutTweaks,
}: AntiAgingAboutSectionProps) {
  const layout = { ...DEFAULT_LAYOUT, ...layoutTweaks };

  return (
    <section
      id={id}
      data-testid={`service-about-${dataTestId ?? id ?? "block"}`}
      className="relative isolate z-0 w-full scroll-mt-24 overflow-visible bg-surface-base pt-[10px] pb-[40px] sm:scroll-mt-28 lg:scroll-mt-32 lg:pt-[20px] lg:pb-[100px]"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-0">
        <div className="relative lg:min-h-[600px]">
          <div
            className="absolute left-0 z-0 hidden w-[367px] pointer-events-none lg:block"
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
              className="object-cover object-center"
            />
          </div>

          <div
            className="absolute right-0 z-0 hidden w-[453px] pointer-events-none lg:block"
            style={{
              top: layout.rightTopPx,
              right: layout.rightShiftPx,
              width: layout.rightWidthPx,
              height: layout.rightHeightPx,
              transform: `translateY(${layout.rightTranslateYPx}px) scale(${layout.rightScale})`,
              transformOrigin: "top right"
            }}
          >
            <Image
              src={rightImage.src}
              alt={rightImage.alt}
              fill
              sizes="453px"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[553px] px-4 md:px-8 lg:px-0 lg:absolute lg:left-1/2 lg:top-[10px] lg:-translate-x-1/2">
            <h2 className="mb-[28px] font-heading text-heading-xl font-medium leading-[1.1] text-brand-secondary">
              {Array.isArray(title)
                ? title.map((segment, index) =>
                    segment.superscript ? (
                      <sup
                        key={`${segment.text}-${index}`}
                        className={
                          "align-super text-[0.55em] leading-none " +
                          (segment.colorClassName ?? "text-brand-secondary")
                        }
                      >
                        {segment.text}
                      </sup>
                    ) : (
                      <span
                        key={`${segment.text}-${index}`}
                        className={segment.colorClassName ?? "text-brand-secondary"}
                      >
                        {segment.text}
                      </span>
                    )
                  )
                : title}
            </h2>

            <div className="space-y-4 text-brand-secondary">
              <p className="font-body text-[16px] font-semibold leading-[1.6]">
                {subtitle}
              </p>

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
            <div className="relative h-[200px] w-full">
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative h-[200px] w-full">
              <Image
                src={rightImage.src}
                alt={rightImage.alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SofwaveAboutSection() {
  const copy = antiAgingCopy.sofwave;
  return (
    <AntiAgingAboutSection
      id="sofwave"
      title="Sofwave®"
      subtitle={copy.about.subtitle}
      paragraphs={copy.about.paragraphs}
      leftImage={{
        src: "/images/anti-aging/about-left.png",
        alt: "Sofwave device front view",
      }}
      rightImage={{
        src: "/images/anti-aging/about-right.png",
        alt: "Sofwave device angled view",
      }}
    />
  );
}

export function ThermageAboutSection() {
  const copy = antiAgingCopy.thermage;
  return (
    <AntiAgingAboutSection
      id="thermage-flx"
      dataTestId="thermage"
      title={[
        { text: "Thermage", colorClassName: "text-brand-secondary" },
        { text: "®", superscript: true, colorClassName: "text-brand-secondary" },
        { text: " FLX", colorClassName: "text-brand-secondary" },
      ]}
      subtitle={copy.about.subtitle}
      paragraphs={copy.about.paragraphs}
      leftImage={{
        src: "/images/anti-aging/thermage-left.png",
        alt: "Thermage FLX device - front view",
      }}
      rightImage={{
        src: "/images/anti-aging/thermage-right.png",
        alt: "Thermage FLX device - treatment handpiece",
      }}
      layoutTweaks={{
        rightTopPx: 5,
        rightHeightPx: 679,
        rightTranslateYPx: 2,
      }}
    />
  );
}

export function Morpheus8AboutSection() {
  const copy = antiAgingCopy.morpheus8;
  return (
    <AntiAgingAboutSection
      id="morpheus8"
      title={[
        { text: "Morpheus8", colorClassName: "text-brand-secondary" },
        { text: "®", superscript: true, colorClassName: "text-brand-secondary" },
      ]}
      subtitle={copy.about.subtitle}
      paragraphs={copy.about.paragraphs}
      leftImage={{
        src: "/images/anti-aging/morpheus8-left.png",
        alt: "Morpheus8 device - control unit",
      }}
      rightImage={{
        src: "/images/anti-aging/morpheus8-right.png",
        alt: "Morpheus8 device - treatment handpiece with microneedles",
      }}
      layoutTweaks={{
        rightWidthPx: 500,
        rightHeightPx: 500,
        rightTopPx: 100,
        rightTranslateYPx: 60,
        rightScale: 0.85,
        rightShiftPx: 80,
      }}
    />
  );
}

export function FormaAboutSection() {
  const copy = antiAgingCopy.forma;
  return (
    <AntiAgingAboutSection
      id="forma"
      title={[
        { text: "Forma", colorClassName: "text-brand-secondary" },
        { text: "®", superscript: true, colorClassName: "text-brand-secondary" },
      ]}
      subtitle={copy.about.subtitle}
      paragraphs={copy.about.paragraphs}
      leftImage={{
        src: "/images/anti-aging/forma-left.png",
        alt: "Forma device - treatment system",
      }}
      rightImage={{
        src: "/images/anti-aging/forma-right.png",
        alt: "Forma device - handpiece in use",
      }}
      layoutTweaks={{
        rightTopPx: 5,
        rightHeightPx: 600,
        rightTranslateYPx: -70,
      }}
    />
  );
}
