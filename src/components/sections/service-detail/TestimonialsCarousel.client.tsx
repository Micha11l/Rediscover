"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
  headingLine1?: string;
  headingLine2?: string;
};

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

export function TestimonialsCarousel({
  testimonials,
  headingLine1 = "Your Words,",
  headingLine2 = "Our Pride",
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") {
      return 1;
    }
    return window.innerWidth >= 1024 ? 2 : 1;
  });
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextCount = window.innerWidth >= 1024 ? 2 : 1;
      const nextMaxIndex = Math.max(0, testimonials.length - nextCount);

      setVisibleCount((prev) => (prev === nextCount ? prev : nextCount));
      setCurrentIndex((prev) => Math.min(prev, nextMaxIndex));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [testimonials.length]);

  useEffect(() => {
    const target = cardRefs.current[currentIndex];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }, [currentIndex, visibleCount]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="relative isolate z-10 w-full bg-brand-secondary py-12 sm:py-16 lg:py-24"
      data-testid="service-testimonials"
    >
      <Container>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-12 lg:gap-20">
          <h2 className="font-heading text-3xl font-medium leading-tight text-surface-muted sm:text-4xl lg:text-5xl">
            <span className="block text-brand-secondary-light">{headingLine1}</span>
            <span className="block text-surface-base">{headingLine2}</span>
          </h2>

          <div className="flex shrink-0 items-end gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous testimonial"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                canGoPrev
                  ? "border-surface-muted text-surface-muted hover:bg-surface-muted hover:text-brand-secondary"
                  : "cursor-not-allowed border-surface-muted/40 text-surface-muted/40"
              }`}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next testimonial"
              className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                canGoNext
                  ? "bg-surface-muted text-brand-primary-muted hover:bg-surface-elevated"
                  : "cursor-not-allowed bg-surface-muted/40 text-brand-primary-muted/40"
              }`}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div
          className="mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-4 pr-2 sm:mt-14 lg:mt-20"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="w-[85vw] max-w-[580px] shrink-0 sm:w-[420px] lg:w-[580px]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <article className="flex w-full flex-col gap-8 rounded-2xl bg-surface-muted p-8">
      <p className="font-body text-base font-normal leading-relaxed text-text-muted sm:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex flex-col gap-0.5">
        <span className="font-heading text-sm font-semibold leading-snug text-text-muted sm:text-base">
          {testimonial.name}
        </span>
        <span className="font-body text-xs font-normal leading-relaxed text-text-muted sm:text-sm">
          {testimonial.role}
        </span>
      </div>
    </article>
  );
}
