import Image from "next/image";
import { Container } from "@/components/layout/Container";

/**
 * Values Section (Explore Our Devices)
 * Figma node: 40:211 "VALUES"
 * Desktop QA: 1440 × 900
 */

interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
  textAlign: "left" | "right";
  iconSide: "left" | "right";
}

function FeatureCardRow({
  title,
  description,
  iconName,
  textAlign,
  iconSide,
}: FeatureCard) {
  const isRightText = textAlign === "right";
  const iconOnLeft = iconSide === "left";

  return (
    <div className="flex items-center gap-6 rounded-2xl bg-[#f4efe7] p-5 sm:p-8">
      {/* Icon left */}
      {iconOnLeft && (
        <div className="relative h-8 w-8 shrink-0">
          <Image
            src={`/images/icon/${iconName}.svg`}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>
      )}

      {/* Text */}
      <div
        className={[
          "flex min-w-0 flex-1 flex-col gap-2",
          isRightText ? "items-end text-right" : "items-start text-left",
        ].join(" ")}
      >
        <h3 className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-text-primary sm:text-[24px]">
          {title}
        </h3>
        <p className="m-0 font-body text-[14px] font-normal leading-[1.6] text-[#735b4b] sm:text-[16px]">
          {description}
        </p>
      </div>

      {/* Icon right */}
      {!iconOnLeft && (
        <div className="relative h-8 w-8 shrink-0">
          <Image
            src={`/images/icon/${iconName}.svg`}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>
      )}
    </div>
  );
}

export function ValuesSection() {
  const leftColumnCards: FeatureCard[] = [
    {
      title: "Lumecca IPL",
      description:
        "Gentle photofacial treatment to restore clarity and natural radiance",
      iconName: "FlowerLotus",
      textAlign: "right",
      iconSide: "left",
    },
    {
      title: "BodyFX",
      description: "Personalized body shaping for smoother, firmer-looking skin",
      iconName: "PersonSimpleCircle",
      textAlign: "right",
      iconSide: "left",
    },
    {
      title: "Forma",
      description: "Comfortable skin tightening to sculpt facial contours",
      iconName: "FlowerTulip",
      textAlign: "right",
      iconSide: "left",
    },
  ];

  const rightColumnCards: FeatureCard[] = [
    {
      title: "Pigmentation Removal",
      description:
        "Targeted IPL treatment for sun spots and pigmentation concerns",
      iconName: "SealCheck",
      textAlign: "left",
      iconSide: "right",
    },
    {
      title: "Morpheus8",
      description:
        "Advanced RF microneedling to tighten, smooth, and remodel skin",
      iconName: "LightbulbFilament",
      textAlign: "left",
      iconSide: "right",
    },
    {
      title: "Advanced Treatments",
      description:
        "Expandable InMode solutions for future face and body treatments",
      iconName: "UsersFour",
      textAlign: "left",
      iconSide: "right",
    },
  ];

  return (
    <section className="w-full" data-testid="devices">
      <Container className="py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:gap-20">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center justify-center rounded-[40px] border border-[#eedbce] px-[18px] py-[10px]">
              <span className="font-heading text-[12px] font-light leading-[1.2] text-text-primary">
                Explore Our Devices
              </span>
            </div>

            <h2 className="m-0 font-heading text-[32px] font-medium leading-[1.2] text-text-primary sm:text-[40px] lg:text-[48px]">
              Powered by InMode Technology
            </h2>

            <p className="m-0 max-w-prose font-body text-[14px] font-normal leading-[1.6] text-[#735b4b] sm:text-[16px]">
              Advanced, clinically proven energy-based technology delivering
              precise, safe, and visible aesthetic results.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Left column */}
            <div className="order-2 flex w-full flex-col justify-center gap-8 lg:order-none">
              {leftColumnCards.map((card) => (
                <FeatureCardRow key={card.title} {...card} />
              ))}
            </div>

            {/* Center image */}
            <div className="order-1 flex w-full justify-center lg:order-none">
              <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl sm:max-w-[380px] lg:w-[380px] aspect-[380/523]">
                <Image
                  src="/images/homepage_device.png"
                  alt="InMode Device"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 639px) 70vw, (max-width: 1023px) 50vw, 380px"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="order-3 flex w-full flex-col justify-center gap-8 lg:order-none">
              {rightColumnCards.map((card) => (
                <FeatureCardRow key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
