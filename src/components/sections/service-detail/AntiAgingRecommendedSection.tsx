import { RecommendedForGrid } from "@/components/sections/shared";
import { antiAgingContent } from "@/content/antiAgingCopy";
import { pickContent } from "@/lib/i18n";
import type { Language } from "@/i18n/types";

export function SofwaveRecommendedSection({ lang }: { lang: Language }) {
  const copy = pickContent(antiAgingContent, lang).sofwave.recommended;
  return (
    <RecommendedForGrid
      id="sofwave-recommended"
      headline={copy.headline}
      items={copy.items}
    />
  );
}

export function ThermageRecommendedSection({ lang }: { lang: Language }) {
  const copy = pickContent(antiAgingContent, lang).thermage.recommended;
  return (
    <RecommendedForGrid
      id="thermage-recommended"
      headline={copy.headline}
      items={copy.items}
    />
  );
}

export function Morpheus8RecommendedSection({ lang }: { lang: Language }) {
  const copy = pickContent(antiAgingContent, lang).morpheus8.recommended;
  return (
    <RecommendedForGrid
      id="morpheus8-recommended"
      headline={copy.headline}
      items={copy.items}
    />
  );
}

export function FormaRecommendedSection({ lang }: { lang: Language }) {
  const copy = pickContent(antiAgingContent, lang).forma.recommended;
  return (
    <RecommendedForGrid
      id="forma-recommended"
      headline={copy.headline}
      items={copy.items}
    />
  );
}
