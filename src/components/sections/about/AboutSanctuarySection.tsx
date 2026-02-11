import Image from "next/image";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutSanctuarySection() {
  const { sanctuary } = aboutCopy;

  return (
    <section data-testid="about-sanctuary" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
            {sanctuary.title}
          </h2>
          <p className="mt-4 font-body text-body leading-[1.6] text-brand-secondary">
            {sanctuary.subtitle}
          </p>
        </div>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={sanctuary.image.src}
            alt={sanctuary.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1440px) 1240px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
