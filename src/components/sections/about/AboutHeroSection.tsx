import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutHeroSection() {
  const { hero } = aboutCopy;

  return (
    <section data-testid="about-hero" className="relative w-full">
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

        <div className="mt-12 flex flex-col gap-6">
          <h1 className="font-heading text-display font-medium leading-[1.2] text-text-inverse">
            <span className="block">{hero.titleLine1}</span>
            <span className="block">{hero.titleLine2}</span>
          </h1>

          <p className="ml-auto max-w-[500px] text-right font-body text-body leading-[1.6] text-brand-secondary-light">
            {hero.subtitle}
          </p>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 rounded-[40px] py-[10px]"
          >
            <Link
              href="/"
              className="font-heading text-[20px] font-semibold leading-none text-brand-secondary-light no-underline transition-colors hover:text-text-inverse"
            >
              Home
            </Link>
            <span
              aria-hidden="true"
              className="font-heading text-[20px] font-normal leading-none text-surface-elevated"
            >
              /
            </span>
            <span
              aria-current="page"
              className="font-heading text-[20px] font-normal leading-none text-surface-elevated"
            >
              {hero.breadcrumbLabel}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
