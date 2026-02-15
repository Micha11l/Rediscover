import { DecorativeDivider } from "@/components/ui";
import { promoContent } from "@/content/promoCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function PromoWelcomeSection({ lang }: { lang: Language }) {
  const { welcome } = pickContent(promoContent, lang);

  return (
    <section data-testid="promo-welcome" className="w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-4 pb-16 pt-16 md:px-8 lg:gap-10 lg:px-16 lg:pb-20 lg:pt-[120px] xl:px-[100px] xl:pb-[80px] xl:pt-[120px]">
        <p className="m-0 text-center font-heading text-[28px] font-medium leading-[1.2] md:text-[36px] lg:text-[48px] lg:leading-[1.05]">
          <span className="text-text-primary">{welcome.messageParts.primary}</span>
          <br className="hidden lg:inline" />
          <span className="text-brand-secondary">{welcome.messageParts.accent}</span>
        </p>

        <DecorativeDivider logoHeight={48} logoWidth={55} className="h-12 max-w-none px-0" />

        <p className="m-0 whitespace-pre-line text-center font-heading text-[20px] leading-[1.2] text-brand-secondary md:text-[24px]">
          {welcome.subtitle}
        </p>
      </div>
    </section>
  );
}
