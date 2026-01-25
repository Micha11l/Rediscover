import Image from "next/image";

/**
 * Before/After Grid Component
 * Figma reference: 449:3253 (within FAQ block)
 *
 * Displays before/after comparison images in a responsive grid.
 * Each image shows a side-by-side comparison with "Before" and "After" labels.
 *
 * Layout:
 * - Desktop: 2 columns
 * - Mobile: Single column stack
 */

interface BeforeAfterImage {
  /** Unique identifier */
  id: string;
  /** Image source path */
  src: string;
  /** Accessible alt text describing the comparison */
  alt: string;
  /** Optional label color override for this image */
  labelClassName?: string;
}

interface BeforeAfterGridProps {
  /** Section anchor ID for navigation */
  id?: string;
  /** Array of before/after comparison images */
  images: BeforeAfterImage[];
  /** Optional custom "Before" label text */
  beforeLabel?: string;
  /** Optional custom "After" label text */
  afterLabel?: string;
}

/**
 * Single before/after image card with labels
 */
function BeforeAfterCard({
  src,
  alt,
  beforeLabel = "Before",
  afterLabel = "After",
  labelClassName,
}: {
  src: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
  labelClassName?: string;
}) {
  const labelColorClass = labelClassName ?? "text-surface-elevated";

  return (
    <div className="relative h-[291px] w-full overflow-hidden rounded-[30px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {/* Before */}
      <span
        className={`absolute bottom-[12px] left-[12px] font-heading text-base font-semibold md:bottom-[16px] md:left-[16px] ${labelColorClass}`}
      >
        {beforeLabel}
      </span>
      {/* After */}
      <span
        className={`absolute bottom-[12px] left-1/2 ml-[12px] font-heading text-base font-semibold md:bottom-[16px] md:ml-[16px] ${labelColorClass}`}
      >
        {afterLabel}
      </span>
    </div>
  );
}

/**
 * Before/After Grid Section
 * Displays a grid of before/after comparison images
 */
export function BeforeAfterGrid({
  id,
  images,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterGridProps) {
  return (
    <div
      id={id}
      data-testid={`before-after-${id || "grid"}`}
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      {images.map((image) => (
        <BeforeAfterCard
          key={image.id}
          src={image.src}
          alt={image.alt}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
          labelClassName={image.labelClassName}
        />
      ))}
    </div>
  );
}
