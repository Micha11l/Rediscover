import type { ComponentType } from "react";
/**
 * Location Section (formerly "PRICING PACKAGES")
 * Figma node: 53:171
 * Desktop QA: 1440 × 900
 * Layout: Centered header + Two-column (Info card + Map)
 */

type IconProps = { className?: string };

function IconMapPin({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconCar({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 16H9m10 0h1v-4l-2-6H6L4 12v4h1" />
      <circle cx="7" cy="16" r="2" />
      <circle cx="17" cy="16" r="2" />
    </svg>
  );
}

function IconCreditCard({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

type InfoItem = {
  Icon: ComponentType<IconProps>;
  lines: string[];
}

export function LocationSection() {
  const infoItems: InfoItem[] = [
    {
      Icon: IconMapPin,
      lines: ["9425 Leslie St Unit14 ,2F,", "Richmond Hill, ON L4B 3N7"],
    },
    {
      Icon: IconClock,
      lines: ["Monday – Sunday", "10:00 AM – 8:00 PM", "By appointment only"],
    },
    {
      Icon: IconCar,
      lines: ["Free on-site parking available", "Accessible parking available"],
    },
    {
      Icon: IconCreditCard,
      lines: ["Cash", "Debit/Credit cards", "NFC mobile payments"],
    },
  ];

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=9425+Leslie+St+Unit14+2F+Richmond+Hill+ON+L4B+3N7";

  const embedUrl =
    "https://maps.google.com/maps?q=9425%20Leslie%20St%20Unit14%202F%20Richmond%20Hill%20ON%20L4B%203N7&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="w-full" data-testid="location">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px] py-[100px]">
        <div className="flex flex-col items-center gap-20">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="m-0 font-heading text-[48px] font-medium leading-[1.2] text-text-primary">
              Your Visit Starts Here
            </h2>
            <p className="m-0 font-body text-[16px] font-normal leading-[1.6] text-brand-secondary">
              Personalized treatments, advanced technology, and a calm clinical
              environment.
            </p>
          </div>

          {/* Two columns */}
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row">
            {/* Left: Info card */}
            <div className="flex w-full flex-1 flex-col gap-6 rounded-3xl bg-surface-muted p-8">
              <h3 className="m-0 font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                Rediscover Beauty Clinic
              </h3>

              <div className="flex flex-col gap-6">
                {infoItems.map(({ Icon, lines }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-brand-secondary" />
                    <div className="flex min-w-0 flex-col">
                      {lines.map((line, i) => (
                        <p
                          key={i}
                          className="m-0 font-body text-[16px] font-normal leading-[1.6] text-brand-secondary"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-5 font-heading text-[12px] font-medium leading-none text-text-inverse no-underline transition-colors hover:bg-brand-primary-muted hover:no-underline"
              >
                Get Directions
              </a>
            </div>

            {/* Right: Map (885×575 on desktop) */}
            <div className="h-[575px] w-full lg:w-[885px] shrink-0 overflow-hidden rounded-2xl">
              <iframe
                src={embedUrl}
                width="885"
                height="575"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rediscover Beauty Clinic Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}