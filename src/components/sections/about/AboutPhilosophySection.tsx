import { DecorativeDivider } from "@/components/ui";
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

export function AboutWelcomeSection({ lang }: { lang: Language }) {
  const { welcome } = pickContent(aboutContent, lang);

  return (
    <section data-testid="about-welcome" className="w-full bg-surface-base">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pb-[100px] pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col">
          <h2 className="m-0 font-heading text-[28px] font-medium leading-[1.1] text-text-primary md:text-[32px]">
            {welcome.intro.heading}
          </h2>
          <div className="h-8" />
          <p className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-brand-secondary md:text-[24px]">
            <HighlightedText
              text={welcome.intro.paragraphs[0].text}
              highlights={welcome.intro.paragraphs[0].highlights}
            />
          </p>
          <div className="h-8" />
          <p className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-brand-secondary md:text-[24px]">
            <HighlightedText
              text={welcome.intro.paragraphs[1].text}
              highlights={welcome.intro.paragraphs[1].highlights}
            />
          </p>
        </div>

        <DecorativeDivider
          logoSrc="/images/about-logo.png"
          logoHeight={60}
          logoWidth={68}
          logoOpacity={0.3}
          className="py-6"
        />

        <div className="flex flex-col">
          <p className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-brand-secondary md:text-[24px]">
            <HighlightedText
              text={welcome.closing.paragraphs[0].text}
              highlights={welcome.closing.paragraphs[0].highlights}
            />
          </p>
          <div className="h-8" />
          <p className="m-0 font-heading text-[20px] font-normal leading-[1.2] text-brand-secondary md:text-[24px]">
            <HighlightedText
              text={welcome.closing.paragraphs[1].text}
              highlights={welcome.closing.paragraphs[1].highlights}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export { AboutWelcomeSection as AboutPhilosophySection };
