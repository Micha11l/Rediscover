import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";
import { devicesCopy } from "@/content/devicesCopy";

export function DevicesHeroSection() {
  const { hero } = devicesCopy;

  return (
    <section data-testid="devices-hero" className="relative w-full">
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

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="relative h-[55px] w-[64px]">
            <Image
              src="/images/logo.png"
              alt=""
              width={64}
              height={55}
              className="object-contain"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-center font-heading text-display font-medium leading-[1.2] text-text-inverse">
            <span className="block">{hero.titleLine1}</span>
            <span className="block">{hero.titleLine2}</span>
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 rounded-[40px] py-[10px]"
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
