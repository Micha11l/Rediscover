import { aboutCopy } from "@/content/aboutCopy";

export function AboutAchievementsSection() {
  const { achievements } = aboutCopy;

  return (
    <section data-testid="about-achievements" className="w-full bg-surface-base">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-16 px-4 pb-[180px] pt-[100px] md:px-8 lg:flex-row lg:px-16 xl:px-[100px]">
        <div className="flex flex-col justify-between gap-8 lg:w-[381px]">
          <h2 className="m-0 whitespace-pre-line font-heading text-[40px] font-medium leading-[1.1] text-text-primary md:text-[48px] lg:text-[56px]">
            {achievements.title}
          </h2>
          <p className="m-0 whitespace-pre-line font-body text-[16px] leading-[1.4] text-text-primary lg:text-[18px]">
            {achievements.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-[72px] gap-y-[72px]">
          {achievements.items.map((item) => (
            <div key={item.id} className="flex w-[260px] flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-[48px] font-bold leading-[1.2] text-text-primary lg:text-[60px]">
                  {item.value}
                </span>
                {item.suffix && (
                  <span className="font-heading text-[24px] font-medium leading-[1.1] text-text-muted lg:text-[32px]">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="m-0 font-body text-[18px] leading-[1.4] text-brand-secondary lg:text-[20px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { AboutAchievementsSection as AboutMilestonesSection };
