import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout";

/**
 * Services Hero Section
 * Figma node: 200:639 "HERO Section" (Services page)
 * Dimensions: 1440 x 584px
 *
 * Layout: Navbar + Hero Content (logo symbol, heading, breadcrumb)
 * Background: Full-bleed image with 65% dark overlay
 *
 * Key differences from Home Hero:
 * - Overlay opacity: 65% vs 40%
 * - No CTA button
 * - Includes breadcrumb navigation
 * - Centered logo symbol above heading
 */
export function ServicesHeroSection() {
  return (
    <section
      className="relative isolate min-h-[584px] w-full overflow-hidden"
      data-testid="services-hero"
    >
      {/* Background Image + Overlay
          Overlay: rgba(52,41,36,0.64) ≈ 65% opacity on brand-primary-dark equivalent */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* 65% overlay - Services page uses darker overlay than Home (40%) */}
        <div className="absolute inset-0 bg-[rgb(52,41,36)]/65" />
      </div>

      {/* Content Container - Global container rule */}
      <div className="relative z-10 mx-auto flex min-h-[584px] w-full max-w-[1440px] flex-col gap-10 px-4 py-10 md:px-8 lg:px-16 xl:px-[100px]">
        {/* Navbar - Reuse existing component */}
        <Navbar variant="dark" />

        {/* Hero Content */}
        <div className="flex w-full flex-1 flex-col items-center gap-6 pt-12">
          {/* Decorative Logo Symbol */}
          <Image
            src="/images/logo.png"
            alt=""
            width={64}
            height={56}
            className="h-14 w-16 object-contain"
            aria-hidden="true"
          />

          {/* Heading */}
          <h1 className="text-center font-heading text-display font-medium leading-tight text-text-inverse md:text-heading-xl sm:text-heading-lg">
            Personalized Aesthetic
            <br />
            &amp;
            <br />
            Wellness Treatments
          </h1>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 py-2"
          >
            <Link
              href="/"
              className="font-heading text-body-lg font-semibold leading-none text-brand-secondary-light transition-colors hover:text-text-inverse"
            >
              Home
            </Link>
            <span
              aria-hidden="true"
              className="font-heading text-body-lg font-normal leading-none text-surface-elevated"
            >
              /
            </span>
            <span
              aria-current="page"
              className="font-heading text-body-lg font-normal leading-none text-surface-elevated"
            >
              Services
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}
