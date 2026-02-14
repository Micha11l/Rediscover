import Link from "next/link";
import { Navbar } from "@/components/layout";
import { faqCopy } from "@/content/faqCopy";

export function FaqPageHeroSection() {
  const { hero } = faqCopy;

  return (
    <section data-testid="faq-hero" className="w-full bg-surface-base">
      <div className="mx-auto flex h-[136px] w-full max-w-[1440px] items-center px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <Navbar variant="light" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[74px] pt-[42px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 rounded-[40px] py-[10px]"
          >
            <Link
              href="/"
              className="font-heading text-button font-normal leading-none text-brand-secondary no-underline transition-colors hover:text-text-primary"
            >
              Home
            </Link>
            <span
              aria-hidden="true"
              className="font-heading text-button font-normal leading-none text-text-primary"
            >
              /
            </span>
            <span
              aria-current="page"
              className="font-heading text-button font-normal leading-none text-text-primary"
            >
              FAQ
            </span>
          </nav>

          <div className="flex w-full flex-col gap-4 text-center">
            <h1 className="m-0 font-heading text-display font-medium leading-[1.2] text-text-primary">
              {hero.title}
            </h1>
            <p className="m-0 mx-auto max-w-none font-body text-body leading-[1.6] text-brand-secondary">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
