"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

type TestimonialsCarouselProps = {
  testimonials: TestimonialItem[];
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
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, testimonials.length - 2);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 580;
      const gap = 20;
      const scrollPosition = currentIndex * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="relative isolate z-10 w-full bg-brand-secondary py-[100px]"
      data-testid="service-testimonials"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex items-end justify-between gap-20">
          <h2 className="font-heading text-[40px] font-medium leading-[1.1] text-surface-muted md:text-[48px] lg:text-[56px]">
            <span className="block text-brand-secondary-light">
              Your Words,
            </span>
            <span className="block text-surface-base">Our Pride</span>
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
          ref={scrollContainerRef}
          className="mt-20 flex gap-5 overflow-x-auto scroll-smooth pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <article className="flex w-[580px] shrink-0 flex-col gap-8 rounded-2xl bg-surface-muted p-8">
      <p className="font-body text-[20px] font-normal leading-[1.4] text-text-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex flex-col gap-0.5">
        <span className="font-heading text-[16px] font-semibold leading-[1.2] text-text-muted">
          {testimonial.name}
        </span>
        <span className="font-body text-[14px] font-normal leading-[1.5] text-text-muted">
          {testimonial.role}
        </span>
      </div>
    </article>
  );
}
