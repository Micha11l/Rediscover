import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";



export function AboutSection() {
  const DEBUG_ABOUT = false;

  return (
    <section className="relative z-30 w-full">
      {/* Outer container: reserve space for the overlap so later sections don't shift */}
      <Container className={`pb-12 pt-0 sm:pb-16 lg:pb-24 ${DEBUG_ABOUT ? 'outline outline-2 outline-blue-500' : ''}`}>
        {/* Card: pull up into Hero */}
        <div
          className={`relative mt-0 flex w-full flex-col items-stretch overflow-hidden rounded-2xl bg-surface-elevated shadow-md lg:-mt-[64px] lg:min-h-[560px] lg:flex-row ${DEBUG_ABOUT ? 'outline outline-2 outline-red-500' : ''}`}
          data-testid={DEBUG_ABOUT ? "about-card" : undefined}
          style={DEBUG_ABOUT ? { outline: '3px solid red' } : undefined}
        >
          {/* Left image column */}
          <div className={`relative h-[320px] w-full shrink-0 overflow-hidden md:h-[400px] md:w-full lg:min-h-[560px] lg:w-[553px] lg:max-w-[553px] ${DEBUG_ABOUT ? 'outline outline-1 outline-green-500' : ''}`}>
            <Image
              src="/images/about-left.jpg"
              alt="Rediscover Beauty Clinic reception with orchids"
              fill
              className="object-cover object-[center_45%]"
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 480px, 553px"
              priority
            />
          </div>

          {/* Right content column */}
          <div className={`flex min-w-0 flex-1 flex-col p-6 sm:p-8 md:p-10 lg:h-full lg:p-12 ${DEBUG_ABOUT ? 'outline outline-1 outline-purple-500' : ''}`}>
            <div className="flex flex-col gap-8 lg:gap-6">
              <div className="h-10 w-10">
                <Image
                  src="/images/about-logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div className="flex flex-col gap-6 lg:gap-5">
                <div>
                  <h2 className="font-heading text-heading-lg font-medium leading-tight text-text-primary md:text-heading-md">
                    Experience True Wellness at
                  </h2>
                  <p className="font-heading text-3xl font-normal leading-[1.2] text-brand-secondary sm:text-4xl md:text-heading-lg">
                    Rediscover Beauty
                  </p>
                </div>

                <div className="flex max-w-[520px] flex-col gap-3 lg:max-w-[640px]">
                  <p className="font-body text-body leading-relaxed text-text-primary">
                    At Rediscover Beauty Clinic, we believe beauty is not about quick fixes — it&apos;s about balance, precision, and care.
                  </p>
                  <p className="font-body text-body leading-relaxed text-text-primary">
                    We combine medical-grade aesthetic technology with personalized wellness treatments to help you feel confident, relaxed, and restored.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA pinned to bottom */}
            <div className="mt-auto pt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-4 font-heading text-button leading-none text-text-inverse no-underline transition-colors hover:bg-brand-primary-muted sm:px-8 sm:py-5"
              >
                Get to Know More
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
    
  );
}
