import Image from "next/image";

type CardLabel = "Before" | "After";

function HalfImage({
  src,
  alt,
  label,
  labelClassName,
  imgClassName,
}: {
  src: string;
  alt: string;
  label: CardLabel;
  labelClassName?: string;
  imgClassName?: string;
}) {
  return (
    <div className="relative h-[291px] w-full">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={["object-cover", imgClassName].filter(Boolean).join(" ")}
      />

      <span
        className={[
          "absolute bottom-[12px] left-[12px] font-heading text-base font-semibold md:bottom-[16px] md:left-[16px]",
          labelClassName ?? "text-surface-elevated",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}

function BeforeAfterPair({
  before,
  after,
  afterLabelClassName,
  afterImageClassName,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  afterLabelClassName?: string;
  afterImageClassName?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[30px]">
      {/* Desktop: 两张并排；Mobile: 竖排 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 左：Before（外侧圆角由外层负责，这里不要圆角） */}
        <div className="relative">
          <HalfImage src={before.src} alt={before.alt} label="Before" />
          {/* 可选：中间分隔线（只在 md+） */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-white/30 md:block" />
        </div>

        {/* 右：After */}
        <div className="relative">
          <HalfImage
            src={after.src}
            alt={after.alt}
            label="After"
            labelClassName={afterLabelClassName}
            imgClassName={afterImageClassName}
          />
        </div>
      </div>
    </div>
  );
}

const FORMA_PAIRS = [
  {
    id: "forma-pair-1",
    before: { src: "/images/anti-aging/forma-before-1.png", alt: "Forma - before (1)" },
    after: { src: "/images/anti-aging/forma-after-1.png", alt: "Forma - after (1)" },
  },
  {
    id: "forma-pair-2",
    before: { src: "/images/anti-aging/forma-before-2.png", alt: "Forma - before (2)" },
    after: { src: "/images/anti-aging/forma-after-2.png", alt: "Forma - after (2)" },
  },
];

export function FormaBeforeAfterGrid() {
  return (
    <div data-testid="forma-before-after-grid" className="flex flex-col gap-4">
      {/* 上面一组 */}
      <BeforeAfterPair before={FORMA_PAIRS[0].before} after={FORMA_PAIRS[0].after} afterImageClassName="object-[25%_50%] scale-[1.105]" />

      {/* 下面一组 */}
      <BeforeAfterPair before={FORMA_PAIRS[1].before} after={FORMA_PAIRS[1].after} />
    </div>
  );
}