import { DecorativeDivider } from "@/components/ui";
import { rmtContent } from "@/content/rmtCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function RmtWelcomeSection({ lang }: { lang: Language }) {
  const { welcome } = pickContent(rmtContent, lang);

  return (
    <section data-testid="rmt-welcome" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[40px] pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="text-center font-heading text-[48px] font-medium leading-[1.2]">
          <p className="m-0 text-brand-secondary">{welcome.message}</p>
        </div>
      </div>

      <DecorativeDivider className="py-6" />

      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[100px] pt-[40px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="text-center font-body text-[16px] leading-[1.6] text-brand-secondary">
          <p className="mb-0 font-semibold">{welcome.aboutTitle}</p>
          <p className="mb-0">&nbsp;</p>
          {welcome.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
