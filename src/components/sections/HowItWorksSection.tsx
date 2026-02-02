"use client";

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
import { useLanguage } from "@/contexts/LanguageContext";

interface Step {
  number: string;
  title: string;
  description: string;
}

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps: Step[] = t.howItWorks.steps;

  return (
    <section className="w-full" data-testid="how-it-works">
      {/* Global container rule */}
      <Container className="py-12 sm:py-16 lg:py-24">
        {/* Title + process */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:gap-20">
          {/* Header */}
          <h2 className="m-0 text-center font-heading text-3xl font-medium leading-[1.2] text-text-primary sm:text-4xl lg:text-5xl">
            {t.howItWorks.heading}
          </h2>

          {/* Process */}
          {/* Desktop: 4 columns horizontal + 3 vertical dividers */}
          {/* <1024: degrade to grid, hide dividers */}
          <div className="w-full">
            {/* Mobile: single column */}
            <div className="flex flex-col gap-10 md:hidden">
              {steps.map((step) => (
                <div key={step.number} className="flex w-full flex-col gap-5">
                  <p className="m-0 font-heading text-5xl font-extralight leading-none text-brand-secondary">
                    {step.number}
                  </p>
                  <div className="flex flex-col gap-3">
                    <h3 className="m-0 font-heading text-2xl font-medium leading-[1.1] text-text-primary">
                      {step.title}
                    </h3>
                    <p className="m-0 font-body text-sm font-normal leading-[1.6] text-brand-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet: 2x2 grid */}
            <div className="hidden gap-10 md:grid md:grid-cols-2 lg:hidden">
              {steps.map((step) => (
                <div key={step.number} className="flex w-full flex-col gap-6">
                  <p className="m-0 font-heading text-6xl font-extralight leading-none text-brand-secondary">
                    {step.number}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h3 className="m-0 font-heading text-[28px] font-medium leading-[1.1] text-text-primary">
                      {step.title}
                    </h3>
                    <p className="m-0 font-body text-[15px] font-normal leading-[1.6] text-brand-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: horizontal row with dividers - NO WRAP */}
            <div className="hidden w-full items-start justify-center lg:flex">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start">
                  {/* Step card - responsive width */}
                  <div className="flex w-[200px] flex-col gap-5 xl:w-[240px] 2xl:w-[280px]">
                    <p className="m-0 font-heading text-5xl font-extralight leading-none text-brand-secondary xl:text-6xl 2xl:text-[80px]">
                      {step.number}
                    </p>
                    <div className="flex flex-col gap-3 xl:gap-4">
                      <h3 className="m-0 min-h-[48px] font-heading text-xl font-medium leading-[1.1] text-text-primary xl:min-h-[58px] xl:text-2xl 2xl:min-h-[68px] 2xl:text-[28px]">
                        {step.title}
                      </h3>
                      <p className="m-0 font-body text-sm font-normal leading-[1.6] text-brand-secondary xl:text-[15px] 2xl:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider (between steps only) */}
                  {index < steps.length - 1 && (
                    <div
                      className="mx-4 h-[140px] w-px shrink-0 bg-brand-secondary-light xl:mx-6 xl:h-[160px] 2xl:mx-8 2xl:h-[180px]"
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
