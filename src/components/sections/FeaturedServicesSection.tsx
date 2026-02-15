"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Featured Services Section
 * Figma node: 29:192 "SERVICES"
 * Dimensions: 1440 x 782px
 * 
 * 4-card service showcase for homepage
 */
export function FeaturedServicesSection() {
  const { t } = useLanguage();
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
    <section className="w-full" data-testid="services" data-section="services">
       <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 md:gap-14 lg:gap-[100px] px-4 md:px-8 lg:px-16 xl:px-[100px] py-12 md:py-16 lg:py-[100px]">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center rounded-[40px] border border-[#eedbce] px-[18px] py-[10px]">
             <span className="font-heading text-[12px] font-light leading-[1.2] text-text-primary">
               {t.services.badge}
             </span>
           </div>

           <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[40px] font-medium leading-[1.2] text-text-primary">
                {t.services.heading}
              </h2>
             <p className="font-heading text-[16px] font-normal leading-[1.2] text-text-primary">
               {t.services.subheading}
             </p>
           </div>
        </div>

        <div className="grid w-full grid-cols-2 justify-items-center gap-10 md:gap-12 lg:grid-cols-4 lg:gap-20" data-node="services-grid">
          {services.map((service, index) => {
            const isIPL = service.image.includes("IPL_facial");
            return (
              <div
                key={service.key}
                className="flex w-[250px] flex-col items-center gap-6"
                data-node={`service-card-${index + 1}`}
              >
                <div className="relative h-[250px] w-[250px] shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.label2}
                    fill
                    className={isIPL ? "object-cover" : "object-contain"}
                    sizes="250px"
                  />
                </div>

                <div className="flex w-full flex-col items-center gap-3 text-center">
                   <p className="font-heading text-[16px] font-light leading-[1.2] text-[#735b4b]">
                     {t.services.items[index].label1}
                   </p>
                   <h3 className="font-heading text-[24px] font-medium leading-[1.2] text-[#413832]">
                     {t.services.items[index].label2}
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
