import { termsContent, TermsSection, TermsSubsection } from "@/content/termsCopy";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";

function renderParagraphs(paragraphs?: string[]) {
  if (!paragraphs || paragraphs.length === 0) return null;
  return paragraphs.map((text, idx) => (
    <p
      key={idx}
      className="m-0 whitespace-pre-line font-body text-body leading-[1.6] text-brand-secondary"
    >
      {text}
    </p>
  ));
}

function renderBullets(bullets?: string[], withBottomGap?: boolean) {
  if (!bullets || bullets.length === 0) return null;
  return (
    <ul
      className={`m-0 list-disc list-outside pl-6 font-body text-body leading-[1.6] text-brand-secondary${withBottomGap ? " mb-[26px]" : ""}`}
    >
      {bullets.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

function SubsectionBlock({ subsection }: { subsection: TermsSubsection }) {
  return (
    <div className="mt-[26px] flex flex-col">
      <h4 className="m-0 mb-[16px] font-heading text-heading-md font-medium text-brand-secondary">
        {subsection.subtitle}
      </h4>
      <div className="flex flex-col">
        {renderParagraphs(subsection.paragraphs)}
        {renderBullets(subsection.bullets)}
        {renderParagraphs(subsection.afterBulletsParagraphs)}
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: TermsSection }) {
  // 只有 service-description 和 payment-methods 需要 bullets 后空一行
  const needsBulletGap =
    (section.id === "service-description" || section.id === "payment-methods") &&
    !!section.afterBulletsParagraphs?.length;

  return (
    <div className="flex flex-col">
      <h3 className="m-0 mb-[26px] font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
        {section.title}
      </h3>

      <div className="flex flex-col">
        {renderParagraphs(section.paragraphs)}
        {renderBullets(section.bullets, needsBulletGap)}
        {renderParagraphs(section.afterBulletsParagraphs)}
      </div>

      {section.subsections?.map((sub, idx) => (
        <SubsectionBlock key={idx} subsection={sub} />
      ))}
    </div>
  );
}

export function TermsContentSection({ lang }: { lang: Language }) {
  const { introduction, sections } = pickContent(termsContent, lang);

  return (
    <section data-testid="terms-content" className="w-full bg-surface-base pb-16">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="rounded-[24px] bg-surface-muted p-6 md:p-10 lg:px-[70px] lg:py-[60px]">
          <div className="flex flex-col gap-[57px]">
            <p className="m-0 font-body text-body leading-[1.6] text-brand-secondary">
              {introduction}
            </p>

            {sections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
