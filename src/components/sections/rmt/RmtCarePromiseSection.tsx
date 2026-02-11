import Image from "next/image";
import { rmtCopy } from "@/content/rmtCopy";

export function RmtCarePromiseSection() {
  const { carePromise } = rmtCopy;

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      data-testid="rmt-care-promise"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={carePromise.image.src}
          alt={carePromise.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-20">
          <h2 className="m-0 font-heading text-[48px] font-medium leading-[1.2] text-text-inverse md:text-[56px]">
            <span>{carePromise.titleParts.primary} </span>
            <span className="text-brand-secondary-light">
              {carePromise.titleParts.accent}
            </span>
          </h2>

          <div className="w-full max-w-[553px]">
            <p className="m-0 whitespace-pre-line font-heading text-[16px] leading-[1.6] text-brand-secondary-light">
              {carePromise.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
