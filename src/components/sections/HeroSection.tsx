import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout";

/**
 * Hero Section
 * Figma node: 19:144 "HERO Section"
 * Dimensions: 1440 x 704px
 *
 * Layout: Navbar + Hero Content (title, subtitle, CTA)
 * Background: Full-bleed image with dark overlay, cropped top
 */
export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[60vh] w-full overflow-hidden shadow-base sm:min-h-[70vh] lg:min-h-[704px]"
      data-testid="hero"
    >
      {/* Background Image + Overlay
          Figma: h-[133%] top-[-5%] = image crops ~5% from top, scales 133%
          Using object-position to simulate the crop effect */}
      <div
        className="absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-background.jpg"
          alt=""
          fill
          priority
          className="scale-[1.05] object-cover object-[center_35%]"
          sizes="100vw"
        />
        {/* Overlay: rgba(52,41,36,0.4) = bg-overlay token */}
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Content Container
          Aligned with About section: px-100 for consistent vertical grid
          py-40 (40px) for top/bottom breathing room */}
      <Container className="relative z-10 flex min-h-[60vh] flex-col gap-10 py-8 sm:min-h-[70vh] sm:py-10 lg:min-h-[704px] lg:py-10">
        {/* Navbar - reusable component with auto active state */}
        <Navbar variant="dark" />

        {/* Hero Content
            Figma: pt-100 pb-200 gap-64, fixed positioning (not flex-1 centered) */}
        <div className="flex w-full flex-col items-center gap-16 py-10 sm:py-12 lg:py-16">
          {/* Text Group - gap-24 */}
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Main Title
                Figma: ~60px, medium weight, line-height ~1.1
                Using text-display (60px/72px) with font-medium override */}
              <h1 className="font-heading text-heading-lg font-medium leading-tight tracking-normal text-text-inverse sm:text-heading-xl lg:text-display">
                <span className="text-brand-secondary-light">Rediscover</span>{" "}
                <span className="text-brand-secondary-light">Beauty</span> Begins Here
              </h1>

            {/* Subtitle
                Figma: 16px body, single line ~1064px wide
                line-height from token: 1.6 (25.6px) */}
            <p className="max-w-prose font-body text-body leading-relaxed text-text-inverse sm:max-w-[1064px]">
              A space where advanced aesthetics meet holistic care —
              thoughtfully designed for your skin, body, and well-being.
            </p>
          </div>

          {/* CTA Button - no underline, uses border for visual */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-[60px] border border-text-inverse px-6 py-4 font-heading text-button leading-none text-text-inverse no-underline hover:no-underline transition-colors hover:bg-white hover:text-text-primary sm:px-8 sm:py-5"
          >
            Explore Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
