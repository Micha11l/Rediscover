import { privacyCopy, PrivacySection, PrivacySubsection } from "@/content/privacyCopy";

function renderParagraphs(paragraphs?: string[]) {
  if (!paragraphs || paragraphs.length === 0) return null;
  return (
    <p className="m-0 whitespace-pre-line font-body text-body leading-[1.6] text-brand-secondary">
      {paragraphs.join("\n\n")}
    </p>
  );
}

function renderBullets(bullets?: string[]) {
  if (!bullets || bullets.length === 0) return null;
  return (
    <ul className="m-0 list-disc list-outside pl-6 space-y-1 font-body text-body leading-[1.6] text-brand-secondary">
      {bullets.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

function SubsectionBlock({ subsection }: { subsection: PrivacySubsection }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="m-0 font-heading text-heading-md font-medium text-brand-secondary">
        {subsection.subtitle}
      </h4>
      {renderParagraphs(subsection.paragraphs)}
      {renderBullets(subsection.bullets)}
      {renderParagraphs(subsection.afterBulletsParagraphs)}
    </div>
  );
}

function SectionBlock({ section }: { section: PrivacySection }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="m-0 font-heading text-[32px] font-bold leading-[1.2] text-text-primary">
        {section.title}
      </h3>

      {renderParagraphs(section.paragraphs)}
      {renderBullets(section.bullets)}
      {renderParagraphs(section.afterBulletsParagraphs)}

      {section.subsections?.map((sub, idx) => (
        <SubsectionBlock key={idx} subsection={sub} />
      ))}
    </div>
  );
}

export function PrivacyContentSection() {
  const { sections } = privacyCopy;

  return (
    <section
      data-testid="privacy-content"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="rounded-[24px] bg-surface-muted p-6 md:p-10 lg:p-16">
          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
