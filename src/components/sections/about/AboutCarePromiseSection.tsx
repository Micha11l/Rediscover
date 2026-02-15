import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { aboutContent } from "@/content/aboutCopy";

function HighlightedText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  if (highlights.length === 0) {
    return <>{text}</>;
  }

  let result = text;
  const parts: Array<{ text: string; highlighted: boolean }> = [];
  let currentIndex = 0;

  highlights.forEach((highlight) => {
    const index = result.toLowerCase().indexOf(highlight.toLowerCase());
    if (index !== -1) {
      if (index > currentIndex) {
        parts.push({ text: result.slice(currentIndex, index), highlighted: false });
      }
      parts.push({ text: result.slice(index, index + highlight.length), highlighted: true });
      currentIndex = index + highlight.length;
    }
  });

  if (currentIndex < result.length) {
    parts.push({ text: result.slice(currentIndex), highlighted: false });
  }

  if (parts.length === 0) {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, i) =>
        part.highlighted ? (
          <span key={i} className="font-medium text-text-primary">
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}

export function AboutTeamDescSection({ lang }: { lang: Language }) {
  const { teamDescription } = pickContent(aboutContent, lang);

  return (
    <section data-testid="about-team-desc" className="w-full bg-surface-base">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pb-[100px] pt-[93px] md:px-8 lg:px-16 xl:px-[100px]">
        {teamDescription.paragraphs.map((para, i) => (
          <p
            key={i}
            className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-brand-secondary md:text-[24px]"
          >
            <HighlightedText text={para.text} highlights={para.highlights} />
          </p>
        ))}
      </div>
    </section>
  );
}

export { AboutTeamDescSection as AboutCarePromiseSection };
