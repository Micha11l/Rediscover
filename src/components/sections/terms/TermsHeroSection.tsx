import Link from "next/link";
import { Navbar } from "@/components/layout";
import { termsCopy } from "@/content/termsCopy";

export function TermsHeroSection() {
  const { hero, introduction } = termsCopy;

  return (
    <section data-testid="terms-hero" className="w-full bg-surface-base">
      <div className="mx-auto flex h-[136px] w-full max-w-[1440px] items-center px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <Navbar variant="light" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-[42px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-center gap-10">
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
              Terms & Conditions
            </span>
          </nav>

          <div className="flex w-full flex-col gap-4 text-center">
            <h1 className="font-heading text-display font-medium leading-[1.2] text-text-primary">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-none font-body text-body leading-[1.6] text-brand-secondary">
              Effective Date: {hero.effectiveDate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
