/**
 * Recommended For Grid Component
 * Figma reference: 227:6005 "TESTIMONI" (Recommended For)
 *
 * A reusable 4-card grid displaying target audience descriptions.
 * Used across treatment sections (Sofwave, Thermage, Morpheus8, Forma).
 *
 * Layout:
 * - Desktop: 4-column grid
 * - Tablet: 2×2 grid
 * - Mobile: 2-column or stacked
 */

interface RecommendedForItem {
  /** Unique identifier for the item */
  id: string;
  /** Description text for the target audience */
  text: string;
}

interface RecommendedForGridProps {
  /** Section anchor ID for navigation */
  id?: string;
  /** Optional custom headline (defaults to "Recommended For") */
  headline?: string;
  /** Array of 4 audience description items */
  items: RecommendedForItem[];
}

function RecommendedCard({ text }: { text: string }) {
  return (
<<<<<<< Updated upstream
    <div className="flex h-[234px] w-full items-start rounded-[45px] bg-surface-muted px-[31px] py-[42px]">
      <p className="font-body text-[20px] leading-[1.4] text-text-muted">
=======
    <div className="flex h-full min-h-[180px] w-full items-center justify-center rounded-[45px] bg-surface-muted px-6 py-6 sm:min-h-[210px] sm:px-8 sm:py-8 lg:min-h-[234px] lg:px-10 lg:py-10">
      <p className="text-center font-body text-lg leading-relaxed text-text-muted sm:text-xl lg:text-16xl">
>>>>>>> Stashed changes
        {text}
      </p>
    </div>
  );
}

/**
 * Recommended For Grid Section
 * Displays a headline and 4 cards describing target audience for a treatment
 */
export function RecommendedForGrid({
  id,
  headline = "Recommended For",
  items,
}: RecommendedForGridProps) {
  return (
    <section
      id={id}
      data-testid={`recommended-for-${id || "grid"}`}
      className="relative z-10 w-full bg-brand-secondary pb-6 pt-[63px] lg:-mt-[140px] lg:h-[471px] lg:pb-0 lg:pt-[63px]"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[98px]">
        <h2 className="mx-auto mb-[64px] max-w-[547px] text-center font-heading text-[32px] font-bold leading-[1.1] text-surface-muted">
          {headline}
        </h2>

<<<<<<< Updated upstream
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[49px]">
=======
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8 2xl:gap-10">
>>>>>>> Stashed changes
          {items.map((item) => (
            <RecommendedCard key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
