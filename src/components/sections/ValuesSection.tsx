"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const iconOnRight = iconSide === "right";

  return (
    <div
      className={[
        "flex items-center gap-6 rounded-2xl bg-[#f4efe7] p-5 sm:p-8",
        iconOnRight ? "lg:flex-row-reverse" : "",
      ].join(" ")}
    >
      <div className="relative h-8 w-8 shrink-0">
        <Image
          src={`/images/icon/${iconName}.svg`}
          alt=""
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </div>

      <div
        className={[
          "flex min-w-0 flex-1 flex-col gap-2",
          "items-start text-left",
          textAlign === "right" ? "lg:items-end lg:text-right" : "",
        ].join(" ")}
      >
        <h3 className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-text-primary sm:text-[24px]">
          {title}
        </h3>
        <p className="m-0 font-body text-[14px] font-normal leading-[1.6] text-[#735b4b] sm:text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ValuesSection() {
  const { t } = useLanguage();

  const iconConfig = [
    { iconName: "FlowerLotus", textAlign: "right" as const, iconSide: "left" as const },
    { iconName: "PersonSimpleCircle", textAlign: "right" as const, iconSide: "left" as const },
    { iconName: "FlowerTulip", textAlign: "right" as const, iconSide: "left" as const },
    { iconName: "SealCheck", textAlign: "left" as const, iconSide: "right" as const },
    { iconName: "LightbulbFilament", textAlign: "left" as const, iconSide: "right" as const },
    { iconName: "UsersFour", textAlign: "left" as const, iconSide: "right" as const },
  ];

  const leftColumnCards: FeatureCard[] = [
    {
      title: t.values.items[0].title,
      description: t.values.items[0].description,
      iconName: iconConfig[0].iconName,
      textAlign: iconConfig[0].textAlign,
      iconSide: iconConfig[0].iconSide,
    },
    {
      title: t.values.items[1].title,
      description: t.values.items[1].description,
      iconName: iconConfig[1].iconName,
      textAlign: iconConfig[1].textAlign,
      iconSide: iconConfig[1].iconSide,
    },
    {
      title: t.values.items[2].title,
      description: t.values.items[2].description,
      iconName: iconConfig[2].iconName,
      textAlign: iconConfig[2].textAlign,
      iconSide: iconConfig[2].iconSide,
    },
  ];

  const rightColumnCards: FeatureCard[] = [
    {
      title: t.values.items[3].title,
      description: t.values.items[3].description,
      iconName: iconConfig[3].iconName,
      textAlign: iconConfig[3].textAlign,
      iconSide: iconConfig[3].iconSide,
    },
    {
      title: t.values.items[4].title,
      description: t.values.items[4].description,
      iconName: iconConfig[4].iconName,
      textAlign: iconConfig[4].textAlign,
      iconSide: iconConfig[4].iconSide,
    },
    {
      title: t.values.items[5].title,
      description: t.values.items[5].description,
      iconName: iconConfig[5].iconName,
      textAlign: iconConfig[5].textAlign,
      iconSide: iconConfig[5].iconSide,
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
                {t.values.badge}
              </span>
            </div>

            <h2 className="m-0 font-heading text-[32px] font-medium leading-[1.2] text-text-primary sm:text-[40px] lg:text-[48px]">
              {t.values.heading}
            </h2>

            <p className="m-0 max-w-prose font-body text-[14px] font-normal leading-[1.6] text-[#735b4b] sm:text-[16px]">
              {t.values.subheading}
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
