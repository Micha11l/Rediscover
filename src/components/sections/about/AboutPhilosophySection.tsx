import Image from "next/image";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutPhilosophySection() {
  const { philosophy } = aboutCopy;

  return (
    <section data-testid="about-philosophy" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <blockquote className="mx-auto max-w-[900px] text-center">
          <p className="font-heading text-[28px] font-light italic leading-[1.6] text-brand-secondary md:text-[32px]">
            {philosophy.quote}
          </p>
        </blockquote>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {philosophy.logos.map((logo, i) => (
            <div
              key={i}
              className="relative h-[40px] w-[100px] opacity-60 grayscale"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="100px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
