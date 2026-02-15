/**
 * Anti-Aging Before/After Sections
 * Pre-configured before/after comparison grids for each treatment type.
 *
 * These components wrap BeforeAfterGrid with treatment-specific image data.
 * Used within FAQ blocks to showcase treatment results.
 */

import { BeforeAfterGrid } from "@/components/sections/shared";
import { Morpheus8BeforeAfterPair } from "./Morpheus8BeforeAfterPair";
import { FormaBeforeAfterGrid } from "./FormaBeforeAfterGrid";
import type { Language } from "@/i18n/types";
import { pickContent } from "@/lib/i18n";
import { uiStrings } from "@/content/shared";

/* ==========================================================================
   SOFWAVE BEFORE/AFTER SECTION
   Figma node: 449:3253 (within FAQ block)
   ========================================================================== */

const SOFWAVE_IMAGES = [
  {
    id: "sofwave-ba-1",
    src: "/images/anti-aging/sofwave-before-after-1.png",
    alt: "Sofwave treatment results showing neck and jawline improvement - before and after comparison",
  },
  {
    id: "sofwave-ba-2",
    src: "/images/anti-aging/sofwave-before-after-2.png",
    alt: "Sofwave treatment results showing facial skin tightening - before and after comparison",
  },
];

export function SofwaveBeforeAfterSection({ lang }: { lang: Language }) {
  const ui = pickContent(uiStrings, lang);
  return (
    <section
      data-testid="sofwave-before-after"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-8 lg:px-16 xl:px-[100px]">
        <BeforeAfterGrid
          id="sofwave-results"
          images={SOFWAVE_IMAGES}
          beforeLabel={ui.labels.before}
          afterLabel={ui.labels.after}
        />
      </div>
    </section>
  );
}

/* ==========================================================================
   THERMAGE BEFORE/AFTER SECTION
   Figma node: 460:3397
   TODO: 复用 BeforeAfterGrid，后续仅填图片数据
   ========================================================================== */

const THERMAGE_IMAGES = [
  {
    id: "thermage-ba-1",
    src: "/images/anti-aging/thermage-before-after-1.png",
    alt: "Thermage FLX treatment results - before and after comparison",
  },
  {
    id: "thermage-ba-2",
    src: "/images/anti-aging/thermage-before-after-2.png",
    alt: "Thermage FLX treatment results - before and after comparison",
    labelClassName: "text-text-primary",
  },
];

export function ThermageBeforeAfterSection({ lang }: { lang: Language }) {
  const ui = pickContent(uiStrings, lang);
  return (
    <section
      data-testid="thermage-before-after"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-8 lg:px-16 xl:px-[100px]">
        <BeforeAfterGrid
          id="thermage-results"
          images={THERMAGE_IMAGES}
          beforeLabel={ui.labels.before}
          afterLabel={ui.labels.after}
        />
      </div>
    </section>
  );
}

/* ==========================================================================
   MORPHEUS8 BEFORE/AFTER SECTION
   Figma node: 503:2711
   ========================================================================== */

const MORPHEUS8_IMAGES = [
  {
    id: "morpheus8-ba-1",
    src: "/images/anti-aging/morpheus8-Before.png",
    alt: "Morpheus8 treatment results showing skin texture improvement - before and after comparison",
  },
  {
    id: "morpheus8-ba-2",
    src: "/images/anti-aging/morpheus8-After.png",
    alt: "Morpheus8 treatment results showing acne scar reduction - before and after comparison",
  },
];

export function Morpheus8BeforeAfterSection({ lang }: { lang: Language }) {
  const ui = pickContent(uiStrings, lang);
  return (
    <section
      data-testid="morpheus8-before-after"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-8 lg:px-16 xl:px-[100px]">
        <Morpheus8BeforeAfterPair beforeLabel={ui.labels.before} afterLabel={ui.labels.after} />
      </div>
    </section>
  );
}

/* ==========================================================================
   FORMA BEFORE/AFTER SECTION
   Figma node: 503:2769
   ========================================================================== */

const FORMA_IMAGES = [
  {
    id: "forma-ba-1",
    src: "/images/anti-aging/forma-before-after-1.png",
    alt: "Forma treatment results showing skin tightening - before and after comparison",
  },
  {
    id: "forma-ba-2",
    src: "/images/anti-aging/forma-before-after-2.png",
    alt: "Forma treatment results showing improved skin elasticity - before and after comparison",
  },
];

export function FormaBeforeAfterSection({ lang }: { lang: Language }) {
  const ui = pickContent(uiStrings, lang);
  return (
    <section
      data-testid="forma-before-after"
      className="w-full bg-surface-base"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 md:px-8 lg:px-16 xl:px-[100px]">
        <FormaBeforeAfterGrid beforeLabel={ui.labels.before} afterLabel={ui.labels.after} />
      </div>
    </section>
  );
}
