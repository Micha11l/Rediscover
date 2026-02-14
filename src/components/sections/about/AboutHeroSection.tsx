import Image from "next/image";
import { Navbar } from "@/components/layout";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutHeroSection() {
  const { hero } = aboutCopy;

  return (
    <section data-testid="about-hero" className="w-full bg-surface-base">
      <div className="mx-auto flex h-[136px] w-full max-w-[1440px] items-center px-4 md:px-8 lg:px-16 xl:px-[64px]">
        <Navbar variant="light" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[40px] pt-10 md:px-8 lg:px-16 xl:px-[64px]">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:gap-6">
            <h1 className="m-0 flex-1 font-heading text-[40px] font-medium leading-[1.2] md:text-[52px] lg:text-[60px]">
              <span className="block text-brand-secondary">{hero.titleAccent}</span>
              <span className="block text-text-primary">{hero.titleMain}</span>
            </h1>
            <p className="m-0 w-full max-w-[378px] text-left font-body text-[18px] leading-[1.4] text-brand-secondary lg:text-right lg:text-[20px]">
              {hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:h-[335px] lg:flex-row">
            {hero.gallery.map((image, index) => (
              <div
                key={image.src}
                className={`relative h-[220px] overflow-hidden rounded-[10px] lg:h-full ${
                  index === 2 ? "lg:w-[246px] lg:shrink-0" : "lg:flex-1"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes={index === 2 ? "246px" : "(max-width: 1024px) 100vw, 40vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
