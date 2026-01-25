import { RecommendedForGrid } from "@/components/sections/shared";
import { antiAgingCopy } from "@/content/antiAgingCopy";

export function SofwaveRecommendedSection() {
  return (
    <RecommendedForGrid
      id="sofwave-recommended"
      items={antiAgingCopy.sofwave.recommended.items}
    />
  );
}

export function ThermageRecommendedSection() {
  return (
    <RecommendedForGrid
      id="thermage-recommended"
      items={antiAgingCopy.thermage.recommended.items}
    />
  );
}

export function Morpheus8RecommendedSection() {
  return (
    <RecommendedForGrid
      id="morpheus8-recommended"
      items={antiAgingCopy.morpheus8.recommended.items}
    />
  );
}

export function FormaRecommendedSection() {
  return (
    <RecommendedForGrid
      id="forma-recommended"
      items={antiAgingCopy.forma.recommended.items}
    />
  );
}
