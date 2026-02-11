import { aboutCopy } from "@/content/aboutCopy";

export function AboutMilestonesSection() {
  const { milestones } = aboutCopy;

  return (
    <section data-testid="about-milestones" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <h2 className="text-center font-heading text-[40px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
          {milestones.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 border-t border-border pt-6"
            >
              <span className="font-heading text-[32px] font-medium leading-[1.2] text-brand-secondary">
                {item.year}
              </span>
              <p className="font-body text-body leading-[1.6] text-text-primary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
