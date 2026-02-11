import Image from "next/image";
import { aboutCopy } from "@/content/aboutCopy";

export function AboutValuesSection() {
  const { values } = aboutCopy;

  return (
    <section data-testid="about-values" className="w-full bg-surface-elevated">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-[40px] font-medium leading-[1.2] text-text-primary md:text-[48px]">
              {values.title}
            </h2>
            <p className="font-body text-body leading-[1.6] text-brand-secondary">
              {values.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.items.map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <div className="relative h-[40px] w-[40px]">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="40px"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-[20px] font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-body leading-[1.6] text-brand-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
