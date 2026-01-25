import Image from "next/image";

/**
 * Services Section
 * Figma node: 29:192 "SERVICES"
 * Dimensions: 1440 x 782px
 * Source: ./design/figma/services.extracted.json
 */
export function ServicesSection() {
  const services = [
    {
      key: "ipl-photo-facial",
      label1: "Facial",
      label2: "IPL Photo Facial",
      image: "/images/IPL_facial.PNG",
    },
    {
      key: "detoxing-facial",
      label1: "Skincare",
      label2: "Detoxing Facial",
      image: "/images/Detoxing_facial.PNG",
    },
    {
      key: "body-massage",
      label1: "Body & Wellness",
      label2: "Body Massage",
      image: "/images/Body_massage.PNG",
    },
    {
      key: "morpheus8",
      label1: "Facial",
      label2: "Morpheus8 RF Microneedling",
      image: "/images/Morpheus8.jpg",
    },
  ];

  return (
    <section className="w-full" data-testid="services">
      {/* Container: max-w-[1440px] with responsive padding */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[100px] px-4 md:px-8 lg:px-16 xl:px-[100px] py-[100px]">
        {/* Header: eyebrow + title + subtitle */}
        <div className="flex flex-col items-center gap-6">
          {/* Eyebrow tag */}
          <div className="flex items-center justify-center rounded-[40px] border border-[#eedbce] px-[18px] py-[10px]">
            <span className="font-heading text-[12px] font-light leading-[1.2] text-text-primary">
              SERVICES
            </span>
          </div>

          {/* Headline: title + subtitle */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-primary">
              Treatments Designed for You
            </h2>
            <p className="font-heading text-[16px] font-normal leading-[1.2] text-text-primary">
              Personalized care that brings out your natural beauty
            </p>
          </div>
        </div>

        {/* Services Grid: 2 cols mobile/tablet, 4 cols desktop */}
        <div className="grid w-full grid-cols-2 justify-items-center gap-10 md:gap-12 lg:grid-cols-4 lg:gap-20">
          {services.map((service) => {
            const isIPL = service.image.includes("IPL_facial");
            return (
              <div
                key={service.key}
                className="flex w-[250px] flex-col items-center gap-6"
              >
                {/* Image: 250×250px with radius 16px */}
                <div className="relative h-[250px] w-[250px] shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.label2}
                    fill
                    className={isIPL ? "object-cover" : "object-contain"}
                    sizes="250px"
                  />
                </div>

                {/* Text: eyebrow + title */}
                <div className="flex w-full flex-col items-center gap-3 text-center">
                  {/* Eyebrow: 16px/300/#735b4b */}
                  <p className="font-heading text-[16px] font-light leading-[1.2] text-[#735b4b]">
                    {service.label1}
                  </p>
                  {/* Title: 24px/500/#413832 */}
                  <h3 className="font-heading text-[24px] font-medium leading-[1.2] text-[#413832]">
                    {service.label2}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
