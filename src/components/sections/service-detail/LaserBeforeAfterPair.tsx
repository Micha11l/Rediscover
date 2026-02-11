import Image from "next/image";

interface LaserBeforeAfterPairProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export function LaserBeforeAfterPair({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: LaserBeforeAfterPairProps) {
  return (
    <section data-testid="laser-before-after" className="w-full bg-surface-base">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-[100px] md:px-8 lg:px-16 xl:px-[100px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative h-[291px] w-full overflow-hidden rounded-[30px]">
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <span className="absolute bottom-[12px] left-[12px] font-heading text-base font-semibold text-surface-elevated md:bottom-[16px] md:left-[16px]">
              Before
            </span>
          </div>
          <div className="relative h-[291px] w-full overflow-hidden rounded-[30px]">
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <span className="absolute bottom-[12px] left-[12px] font-heading text-base font-semibold text-surface-elevated md:bottom-[16px] md:left-[16px]">
              After
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
