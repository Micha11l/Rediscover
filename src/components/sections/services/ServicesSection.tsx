import Image from "next/image";
import Link from "next/link";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { servicesContent } from "@/content/servicesCopy";

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
      className="group relative block h-[416px] w-full overflow-hidden rounded-lg no-underline"
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover object-center transition-transform duration-slow group-hover:scale-105"
        />
      </div>

      {/* Bottom Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[96px] bg-[rgb(52,41,36)]/65 backdrop-blur-[5px]">
        <div className="flex h-full items-center justify-center px-8 text-center">
          <h3 className="m-0 line-clamp-2 font-heading text-heading-md font-medium leading-[1.2] text-surface-muted">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection({ lang }: { lang: Language }) {
  const { headline, cards } = pickContent(servicesContent, lang);

  return (
    <section
       className="w-full bg-surface-base py-12 md:py-16 lg:py-[100px]"
      data-testid="services-list"
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px]">
        {/* Content wrapper with vertical gap */}
        <div className="flex flex-col gap-12 lg:gap-20">
          {/* Headline */}
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-0">
            {/* Title (left) */}
            <div className="lg:col-span-7">
              <h2 className="m-0 max-w-[488px] font-heading text-heading-xl font-medium leading-tight lg:min-h-[104px]">
                <span className="text-text-primary">{headline.titleParts.restore} </span>
                <span className="text-brand-secondary">{headline.titleParts.refine}</span>
                <span className="text-text-primary"> {headline.titleParts.reveal}</span>
              </h2>
            </div>

      {/* Description (right) */}
      <div className="lg:col-span-5 lg:flex lg:justify-end">
        <p className="m-0 max-w-[348px] font-body text-body font-normal leading-[1.6] text-brand-secondary lg:min-h-[104px] lg:text-right">
          {headline.description}
        </p>
        </div>
      </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-20">
            {cards.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
