import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { promoCopy } from "@/content/promoCopy";

export function PromoHeroSection() {
  const { hero } = promoCopy;

  return (
    <section data-testid="promo-hero" className="relative w-full">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-primary/65" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-16 pt-10 md:px-8 lg:px-16 xl:px-[64px]">
        <Navbar variant="dark" />

        <div className="mt-12 flex flex-col items-center gap-6 pb-10 pt-[240px]">
          <h1 className="text-center font-heading text-[40px] font-medium leading-[1.2] text-text-inverse md:text-[52px] lg:text-display">
            {hero.title}
          </h1>

          <p className="mx-auto max-w-[600px] text-center font-body text-[18px] leading-[1.6] text-surface-elevated md:text-[20px]">
            {hero.subtitle}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[60px] border border-text-inverse bg-transparent px-8 py-5 font-heading text-[16px] font-normal leading-none text-text-inverse no-underline transition-colors hover:bg-text-inverse hover:text-text-primary"
          >
            {hero.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
