import Image from "next/image";
import { aboutCopy } from "@/content/aboutCopy";

function ClockIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
        stroke="#735B4B"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M24 14V24H34"
        stroke="#735B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 24L24 6L42 24"
        stroke="#735B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 28V40C10 40.5304 10.2107 41.0391 10.5858 41.4142C10.9609 41.7893 11.4696 42 12 42H36C36.5304 42 37.0391 41.7893 37.4142 41.4142C37.7893 41.0391 38 40.5304 38 40V28"
        stroke="#735B4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutContactSection() {
  const { contact } = aboutCopy;

  return (
    <section data-testid="about-contact" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 lg:px-[100px] lg:py-16">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="flex w-full flex-col items-center gap-10 md:w-[323px]">
            <div className="flex size-[96px] items-center justify-center rounded-3xl bg-surface-muted">
              <Image
                src="/images/icon/Phone.svg"
                alt=""
                width={48}
                height={48}
                aria-hidden={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="m-0 font-heading text-[28px] font-medium leading-[1.1] text-text-primary md:text-[32px]">
                Contact
              </h3>
              <div className="flex flex-col items-center">
                <p className="m-0 font-body text-[18px] leading-[1.4] text-brand-secondary md:text-[20px]">
                  {contact.website.replace("https://", "")}
                </p>
                <p className="m-0 font-body text-[18px] leading-[1.4] text-brand-secondary md:text-[20px]">
                  {contact.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-10 md:w-[305px]">
            <div className="flex size-[96px] items-center justify-center rounded-3xl bg-surface-muted">
              <ClockIcon />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="m-0 font-heading text-[28px] font-medium leading-[1.1] text-text-primary md:text-[32px]">
                Opening Hours
              </h3>
              <div className="flex flex-col items-center">
                <p className="m-0 font-body text-[18px] leading-[1.4] text-brand-secondary md:text-[20px]">
                  {contact.hours.days}
                </p>
                <p className="m-0 font-body text-[18px] leading-[1.4] text-brand-secondary md:text-[20px]">
                  {contact.hours.time}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-10 md:w-[305px]">
            <div className="flex size-[96px] items-center justify-center rounded-3xl bg-surface-muted">
              <HouseIcon />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="m-0 font-heading text-[28px] font-medium leading-[1.1] text-text-primary md:text-[32px]">
                Address
              </h3>
              <p className="m-0 text-center font-body text-[18px] leading-[1.4] text-brand-secondary md:text-[20px]">
                {contact.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
