import { DecorativeDivider } from "@/components/ui";
import { rmtCopy } from "@/content/rmtCopy";

export function RmtWelcomeSection() {
  const { welcome } = rmtCopy;

  return (
    <section data-testid="rmt-welcome" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[80px] md:px-8 lg:px-16 xl:px-[100px]">
        <p className="mx-auto max-w-[900px] text-center font-heading text-[28px] font-medium leading-[1.4] text-brand-secondary md:text-[32px] lg:text-[36px]">
          {welcome.message}
        </p>
      </div>

      <DecorativeDivider className="py-6" />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-[60px] md:px-8 lg:px-16 xl:px-[100px]">
        <h2 className="mb-8 text-center font-heading text-heading-lg font-semibold text-text-primary">
          {welcome.aboutTitle}
        </h2>
        <div className="mx-auto flex max-w-[800px] flex-col gap-5">
          {welcome.aboutParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="font-body text-body leading-[1.6] text-brand-secondary"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
