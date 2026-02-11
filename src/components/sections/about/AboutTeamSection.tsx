import Image from "next/image";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutTeamSection() {
  const { team } = aboutCopy;

  return (
    <section data-testid="about-team" className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <h2 className="text-center font-heading text-[40px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
          {team.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center font-body text-body leading-[1.6] text-brand-secondary">
          {team.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member) => (
            <div key={member.id} className="flex flex-col gap-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div>
                <h3 className="font-heading text-[20px] font-medium text-text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-body text-brand-secondary">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
