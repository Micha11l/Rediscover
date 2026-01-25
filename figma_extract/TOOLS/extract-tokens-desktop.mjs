import fs from "node:fs";
const json = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));
const root = json?.nodes?.["13:1321"]?.document;
if (!root) throw new Error("Missing Desktop root 13:1321 in home_nodes.json");

const COLORS = new Map();
const SHADOWS = new Map();
const RADII = new Set();
const SPACING = new Set();
const TYPO = new Map();

function rgba(c, a = 1) {
  const r = Math.round((c?.r ?? 0) * 255);
  const g = Math.round((c?.g ?? 0) * 255);
  const b = Math.round((c?.b ?? 0) * 255);
  const alpha = (a ?? 1);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function recordFills(fills) {
  for (const f of fills ?? []) {
    if (f.type === "SOLID" && f.color) COLORS.set(rgba(f.color, f.opacity ?? 1), true);
    if (String(f.type || "").includes("GRADIENT") && Array.isArray(f.gradientStops)) {
      for (const s of f.gradientStops) {
        if (s?.color) COLORS.set(rgba(s.color, s.color.a ?? 1), true);
      }
    }
  }
}

function recordStrokes(strokes) {
  for (const s of strokes ?? []) {
    if (s.type === "SOLID" && s.color) COLORS.set(rgba(s.color, s.opacity ?? 1), true);
  }
}

function recordEffects(effects) {
  for (const e of effects ?? []) {
    if ((e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW") && e.color) {
      const col = rgba(e.color, e.color.a ?? 1);
      const x = e.offset?.x ?? 0;
      const y = e.offset?.y ?? 0;
      const blur = e.radius ?? 0;
      const spread = e.spread ?? 0;
      const inset = e.type === "INNER_SHADOW" ? " inset" : "";
      SHADOWS.set(`${x}px ${y}px ${blur}px ${spread}px ${col}${inset}`, true);
      COLORS.set(col, true);
    }
  }
}

function recordRadii(n) {
  if (typeof n.cornerRadius === "number") RADII.add(n.cornerRadius);
  if (Array.isArray(n.rectangleCornerRadii)) n.rectangleCornerRadii.forEach(v => typeof v === "number" && RADII.add(v));
}

function recordSpacing(n) {
  for (const k of ["paddingTop","paddingRight","paddingBottom","paddingLeft","itemSpacing"]) {
    const v = n?.[k];
    if (typeof v === "number") SPACING.add(v);
  }
}

function recordTypography(n) {
  if (n.type !== "TEXT" || !n.style) return;
  const s = n.style;
  const key = [
    s.fontFamily, s.fontWeight, s.fontSize,
    s.lineHeightPx ?? s.lineHeightPercent ?? "",
    s.letterSpacing ?? ""
  ].join("|");
  if (!TYPO.has(key)) {
    TYPO.set(key, {
      fontFamily: s.fontFamily,
      fontWeight: s.fontWeight,
      fontSize: s.fontSize,
      lineHeightPx: s.lineHeightPx,
      lineHeightPercent: s.lineHeightPercent,
      letterSpacing: s.letterSpacing
    });
  }
}

function walk(n) {
  recordFills(n.fills);
  recordStrokes(n.strokes);
  recordEffects(n.effects);
  recordRadii(n);
  recordSpacing(n);
  recordTypography(n);
  for (const ch of (n.children || [])) walk(ch);
}

walk(root);

const out = {
  colors: Array.from(COLORS.keys()).sort(),
  shadows: Array.from(SHADOWS.keys()),
  radii: Array.from(RADII).sort((a,b)=>a-b),
  spacing: Array.from(SPACING).sort((a,b)=>a-b),
  typography: Array.from(TYPO.values())
};

fs.writeFileSync("design-tokens.desktop.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote design-tokens.desktop.json");
