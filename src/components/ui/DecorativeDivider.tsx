import Image from "next/image";

/**
 * Decorative Divider Component
 * Figma reference: 449:3331 "Divider"
 *
 * A horizontal divider with left/right lines and a centered logo/monogram.
 * Used to separate major sections on service detail pages.
 *
 * Layout: [Line] — [Logo] — [Line]
 */

interface DecorativeDividerProps {
  /** Optional custom logo source (defaults to Beauva monogram) */
  logoSrc?: string;
  /** Alt text for logo (defaults to empty for decorative) */
  logoAlt?: string;
  /** Logo width in pixels (default: 68) */
  logoWidth?: number;
  /** Logo height in pixels (default: 60) */
  logoHeight?: number;
  /** Logo opacity (default: 0.3) */
  logoOpacity?: number;
  /** Additional wrapper classes for margin/padding control */
  className?: string;
}

export function DecorativeDivider({
  logoSrc = "/images/anti-aging/2.svg",
  logoAlt = "",
  logoWidth = 68,
  logoHeight = 60,
  logoOpacity = 0.3,
  className = "",
}: DecorativeDividerProps) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`mx-auto flex w-full max-w-[1440px] items-center gap-6 px-4 md:px-8 lg:px-16 xl:px-[100px] ${className}`}
    >
      {/* Left Line */}
      <div className="h-px flex-1 bg-border" />

      {/* Center Logo */}
      <div
        className="relative shrink-0"
        style={{
          width: logoWidth,
          height: logoHeight,
          opacity: logoOpacity,
        }}
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          sizes={`${logoWidth}px`}
          className="object-contain"
        />
      </div>

      {/* Right Line */}
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
