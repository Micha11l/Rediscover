import Image from "next/image";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { aboutContent } from "@/content/aboutCopy";

export function AboutTeamSection({ lang }: { lang: Language }) {
  const { team } = pickContent(aboutContent, lang);

  const titleParts = team.title.split(" ");
  const firstThreeWords = titleParts.slice(0, 3).join(" ");
  const restOfTitle = titleParts.slice(3).join(" ");

  return (
    <section data-testid="about-team" className="w-full bg-surface-base">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-20 px-4 pb-0 pt-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="m-0 max-w-[488px] font-heading text-[40px] font-medium leading-[1.1] md:text-[48px] lg:text-[56px]">
            <span className="text-text-primary">{firstThreeWords}</span>
            <span className="text-brand-secondary"> {restOfTitle}</span>
          </h2>
          <p className="m-0 max-w-[488px] font-body text-[16px] leading-[1.6] text-brand-secondary">
            {team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {team.members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl">
                {member.image.src ? (
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-brand-secondary">
                    <span className="font-heading text-[14px] text-text-inverse">On Leave</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 text-center">
                <h3 className="m-0 font-heading text-[24px] font-medium leading-[1.2] text-text-primary">
                  {member.name}
                </h3>
                <div className="font-body text-[14px] leading-[1.5] text-brand-secondary">
                  {Array.isArray(member.role) ? (
                    member.role.map((r, i) => <p key={i} className="m-0">{r}</p>)
                  ) : (
                    <p className="m-0">{member.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
