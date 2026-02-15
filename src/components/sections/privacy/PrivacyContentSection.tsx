import { privacyContent, PrivacySection, PrivacySubsection } from "@/content/privacyCopy";
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

const DIVIDER_PREFIX = "__DIVIDER__";

function renderBullets(
  bullets?: string[],
  opts?: { gapTop?: boolean; gapBottom?: boolean }
) {
  if (!bullets || bullets.length === 0) return null;
  const gapClasses = [
    opts?.gapTop ? "mt-[26px]" : "",
    opts?.gapBottom ? "mb-[26px]" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <ul
      className={`m-0 list-disc list-outside pl-6 font-body text-body leading-[1.6] text-brand-secondary${gapClasses ? ` ${gapClasses}` : ""}`}
    >
      {bullets.map((item, idx) => {
        if (item.startsWith(DIVIDER_PREFIX)) {
          return (
            <li key={idx} className="list-none -ml-6 mt-[26px]">
              {item.slice(DIVIDER_PREFIX.length)}
            </li>
          );
        }
        return <li key={idx}>{item}</li>;
      })}
    </ul>
  );
}

function SubsectionBlock({
  subsection,
  parentSectionId,
}: {
  subsection: PrivacySubsection;
  parentSectionId: string;
}) {
  const needsGapBottom =
    parentSectionId === "information-we-collect" &&
    (subsection.subtitle === "a. Personal Data" ||
      subsection.subtitle === "b. Usage Data") &&
    !!subsection.afterBulletsParagraphs?.length;

  return (
    <div className="mt-[26px] flex flex-col">
      <h4 className="m-0 mb-[16px] font-heading text-heading-md font-medium text-brand-secondary">
        {subsection.subtitle}
      </h4>
      <div className="flex flex-col">
        {renderParagraphs(subsection.paragraphs)}
        {renderBullets(subsection.bullets, { gapBottom: needsGapBottom })}
        {renderParagraphs(subsection.afterBulletsParagraphs)}
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: PrivacySection }) {
  const gapTop =
    section.id === "how-we-use" || section.id === "your-rights";
  const gapBottom =
    (section.id === "your-rights" ||
      section.id === "appointment-cancellation" ||
      section.id === "disclosure") &&
    !!section.afterBulletsParagraphs?.length;

  return (
    <div className="flex flex-col">
      <h3 className="m-0 mb-[26px] font-heading text-[32px] font-bold leading-[1.1] text-text-primary">
        {section.title}
      </h3>

      <div className="flex flex-col">
        {renderParagraphs(section.paragraphs)}
        {renderBullets(section.bullets, { gapTop, gapBottom })}
        {renderParagraphs(section.afterBulletsParagraphs)}
      </div>

      {section.subsections?.map((sub, idx) => (
        <SubsectionBlock key={idx} subsection={sub} parentSectionId={section.id} />
      ))}
    </div>
  );
}

export function PrivacyContentSection({ lang }: { lang: Language }) {
  const { introduction, sections } = pickContent(privacyContent, lang);

  return (
    <section data-testid="privacy-content" className="w-full bg-surface-base pb-16">
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
