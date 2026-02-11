import Link from "next/link";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutCtaSection() {
  const { cta } = aboutCopy;

  return (
    <section data-testid="about-cta" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="rounded-2xl bg-brand-primary px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-inverse md:text-[48px]">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] font-body text-body leading-[1.6] text-brand-secondary-light">
            {cta.subtitle}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand-secondary-light px-8 py-5 font-heading text-[14px] font-medium leading-none text-brand-primary no-underline transition-colors hover:bg-surface-elevated"
          >
            {cta.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
