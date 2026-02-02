interface RecommendedItem {
  id: string;
  text: string;
}

interface LaserRecommendedAndProcessSectionProps {
  recommendedItems: RecommendedItem[];
  processText: string;
}

export function LaserRecommendedAndProcessSection({
  recommendedItems,
  processText,
}: LaserRecommendedAndProcessSectionProps) {
  return (
    <section
      data-testid="laser-recommended-process"
      className="w-full bg-brand-secondary py-[100px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h2 className="mb-10 text-center font-heading text-[32px] font-bold leading-[1.1] text-surface-muted lg:text-left">
              Recommended For
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recommendedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex h-[234px] w-full items-start rounded-[45px] bg-surface-muted px-[31px] py-[42px]"
                >
                  <p className="font-body text-[20px] leading-[1.4] text-text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-10 text-center font-heading text-[32px] font-bold leading-[1.1] text-surface-muted lg:text-left">
              Treatment Process
            </h2>
            <div className="flex w-full items-start rounded-[45px] bg-surface-muted px-[31px] py-[42px]">
              <p className="font-body text-[20px] leading-[1.4] text-text-muted">
                {processText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
