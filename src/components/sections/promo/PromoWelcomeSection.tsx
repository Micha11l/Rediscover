import { DecorativeDivider } from "@/components/ui";
import { promoCopy } from "@/content/promoCopy";

export function PromoWelcomeSection() {
  const { welcome } = promoCopy;

  return (
    <section data-testid="promo-welcome" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
        <p className="mx-auto max-w-[900px] text-center font-heading text-[28px] font-medium leading-[1.3] md:text-[36px] lg:text-[48px]">
          <span className="text-text-primary">{welcome.messageParts.primary}</span>
          <span className="text-brand-secondary">{welcome.messageParts.accent}</span>
        </p>
      </div>

      <DecorativeDivider className="py-6" />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-[60px] md:px-8 lg:px-16 xl:px-[100px]">
        <p className="mx-auto max-w-[800px] text-center font-heading text-[20px] leading-[1.6] text-brand-secondary md:text-heading-md">
          {welcome.subtitle}
        </p>
      </div>
    </section>
  );
}
