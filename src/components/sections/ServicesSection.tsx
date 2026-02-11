import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

/**
 * Services Section
 * Figma node: 200:3212 "SERVICES"
 * Dimensions: 1440 x 1314px
 *
 * Layout:
 * - Headline (title + description)
 * - 6-card grid (3 cols desktop, 2 tablet, 1 mobile)
 *
 * Each card has:
 * - Full-bleed image
 * - Bottom overlay with backdrop blur + service title
 * - Clickable navigation to service detail page
 */

interface ServiceCardData {
  id: number;
  title: string;
  image: string;
  href: string;
}

const SERVICES: ServiceCardData[] = [
  {
    id: 1,
    title: "Anti-Aging",
    image: "/images/services/anti-aging.png",
    href: "/services/anti-aging",
  },
  {
    id: 2,
    title: "Laser & Light Therapy",
    image: "/images/services/laser-therapy.png",
    href: "/services/laser-light-therapy",
  },
  {
    id: 3,
    title: "Skin Care & Wellness",
    image: "/images/services/skin-care.png",
    href: "/services/skin-care-wellness",
  },
  {
    id: 4,
    title: "Body Contouring & Weight Loss",
    image: "/images/services/body-contouring.png",
    href: "/services/body-contouring-weight-loss",
  },
  {
    id: 5,
    title: "Injectables",
    image: "/images/services/injectables.png",
    href: "/services/injectables",
  },
  {
    id: 6,
    title: "Continuously Expanding Treatments",
    image: "/images/services/expanding-treatments.png",
    href: "/services/expanding-treatments",
  },
];

/**
 * Service Card Component
 * Displays service image with overlay title at bottom
 * Entire card is clickable and navigates to service detail page
 */
function ServiceCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`View service: ${title}`}
      className="group relative block h-[320px] w-full overflow-hidden rounded-lg no-underline sm:h-[380px] lg:h-[416px]"
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-slow group-hover:scale-105"
        />
      </div>

      {/* Bottom Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[rgb(52,41,36)]/65 backdrop-blur-[5px] sm:h-24">
        <div className="flex h-full items-center justify-center px-6 text-center sm:px-8">
          <h3 className="m-0 line-clamp-2 font-heading text-heading-md font-medium leading-[1.2] text-surface-muted">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section
      className="w-full bg-surface-base"
      data-testid="services-list"
    >
      <Container className="py-12 sm:py-16 lg:py-24">
        {/* Content wrapper with vertical gap */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {/* Headline */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-0">
            {/* Title (left) */}
            <div className="lg:col-span-7">
              <h2 className="m-0 max-w-[488px] font-heading text-heading-xl font-medium leading-tight lg:min-h-[104px]">
                <span className="text-text-primary">Restore. </span>
                <span className="text-brand-secondary">Refine.</span>
                <span className="text-text-primary"> Reveal.</span>
              </h2>
            </div>

            {/* Description (right) */}
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <p className="m-0 max-w-prose font-body text-body font-normal leading-[1.6] text-brand-secondary lg:min-h-[104px] lg:text-right">
                From advanced device treatments to personalized skin care
                solutions, we offer aesthetic and wellness services designed to
                deliver visible, long-term results.
              </p>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
