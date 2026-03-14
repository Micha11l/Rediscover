import Image from "next/image";

function ImageCard({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[30px] md:h-[291px] md:aspect-auto">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain md:object-cover"
      />
      <span className="absolute bottom-[12px] left-[12px] font-heading text-base font-semibold text-surface-elevated md:bottom-[16px] md:left-[16px]">
        {label}
      </span>
    </div>
  );
}

export function Morpheus8BeforeAfterPair({
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeLabel?: string;
  afterLabel?: string;
} = {}) {
  return (
    <div
      data-testid="morpheus8-before-after-pair"
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <ImageCard
        src="/images/anti-aging/morpheus8-Before.png"
        alt="Morpheus8 treatment - before"
        label={beforeLabel}
      />
      <ImageCard
        src="/images/anti-aging/morpheus8-After.png"
        alt="Morpheus8 treatment - after"
        label={afterLabel}
      />
    </div>
  );
}
