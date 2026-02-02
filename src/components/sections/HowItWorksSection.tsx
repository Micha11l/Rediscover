/**
 * How It Works Section
 * Figma node: 52:82 "HOW IT WORKS"
 * Desktop QA: 1440 × 900
 * Layout: Centered title + 4-step horizontal process with dividers
 *
 * Rules followed:
 * - No absolute layout (except none needed here)
 * - 4/8px spacing grid
 * - Token colors / fonts
 * - Global container padding rule
 */

import { Container } from "@/components/layout/Container";

interface Step {
  number: string;
  title: string;
  description: string;
}

export function HowItWorksSection() {
  const steps: Step[] = [
    {
      number: "1",
      title: "Schedule Your Appointment",
      description:
        "Reach out via phone or social media to inquire about availability and services.",
    },
    {
      number: "2",
      title: "Personalized Consultation",
      description:
        "Our specialists assess your concerns and recommend suitable treatments.",
    },
    {
      number: "3",
      title: "Relax & Treatment",
      description:
        "Professional care in a calm space, powered by advanced technology.",
    },
    {
      number: "4",
      title: "Aftercare & Follow-Up",
      description:
        "Receive tailored aftercare advice and guidance to support long-term results.",
    },
  ];

  return (
    <section className="w-full" data-testid="how-it-works">
      {/* Global container rule */}
      <Container className="py-12 sm:py-16 lg:py-24">
        {/* Title + process */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:gap-20">
          {/* Header */}
          <h2 className="m-0 text-center font-heading text-3xl font-medium leading-[1.2] text-text-primary sm:text-4xl lg:text-5xl">
            From Booking to Results
          </h2>

          {/* Process */}
          {/* Desktop: 4 columns horizontal + 3 vertical dividers */}
          {/* <1024: degrade to grid, hide dividers */}
          <div className="w-full">
            {/* Mobile/Tablet fallback */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:hidden">
              {steps.map((step) => (
                <div key={step.number} className="flex w-full flex-col gap-7">
                  <p className="m-0 font-heading text-6xl font-extralight leading-none text-brand-secondary sm:text-[80px]">
                    {step.number}
                  </p>

                  <div className="flex flex-col gap-4 py-1">
                    <h3 className="m-0 font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                      {step.title}
                    </h3>
                    <p className="m-0 font-body text-[16px] font-normal leading-[1.6] text-brand-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop exact layout */}
            <div className="hidden w-full items-start lg:flex lg:flex-wrap lg:justify-center lg:gap-12 xl:gap-16 2xl:gap-20">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start gap-6">
                  {/* Step card */}
                  <div className="flex w-full max-w-[260px] flex-col gap-7">
                    <p className="m-0 font-heading text-6xl font-extralight leading-none text-brand-secondary sm:text-[80px]">
                      {step.number}
                    </p>

                    <div className="flex flex-col gap-4 py-1">
                      <h3 className="m-0 font-heading text-[32px] font-medium leading-[1.1] text-text-primary">
                        {step.title}
                      </h3>
                      <p className="m-0 font-body text-[16px] font-normal leading-[1.6] text-brand-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider (between steps only) */}
                  {index < steps.length - 1 && (
                    <div
                      className="mx-6 h-[180px] w-px shrink-0 border-r border-brand-secondary-light"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* /Process */}
        </div>
      </Container>
    </section>
  );
}
