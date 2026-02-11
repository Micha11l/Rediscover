import { Container } from "@/components/layout/Container";

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
    <div className="flex min-h-[180px] w-full items-start rounded-[45px] bg-surface-muted px-6 py-6 sm:min-h-[210px] sm:px-8 sm:py-8">
      <p className="font-body text-base leading-relaxed text-text-muted sm:text-lg">
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
      className="relative z-10 w-full bg-brand-secondary pb-10 pt-10 sm:pb-12 sm:pt-12 lg:-mt-24 lg:pb-16 lg:pt-16"
    >
      <Container>
        <h2 className="mx-auto mb-10 max-w-[547px] text-center font-heading text-2xl font-bold leading-[1.1] text-surface-muted sm:mb-12 sm:text-3xl lg:mb-16">
          {headline}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {items.map((item) => (
            <RecommendedCard key={item.id} text={item.text} />
          ))}
        </div>
      </Container>
    </section>
  );
}
