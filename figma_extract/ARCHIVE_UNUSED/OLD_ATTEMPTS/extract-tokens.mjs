import fs from "node:fs";

const json = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));

const COLORS = new Map();      // key -> rgba string
const SHADOWS = new Map();     // key -> css shadow string
const RADII = new Set();
const SPACING = new Set();
const TYPO = new Map();        // key -> {fontFamily,fontWeight,fontSize,lineHeight,letterSpacing}

function rgba(c, a = 1) {
  // Figma colors are 0..1
  const r = Math.round((c.r ?? 0) * 255);
  const g = Math.round((c.g ?? 0) * 255);
  const b = Math.round((c.b ?? 0) * 255);
  const alpha = (a ?? 1);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function recordFills(fills) {
  for (const f of fills ?? []) {
    if (f.type === "SOLID" && f.color) {
      const key = rgba(f.color, f.opacity ?? 1);
      COLORS.set(key, key);
    }
    if (f.type?.includes("GRADIENT") && Array.isArray(f.gradientStops)) {
      for (const s of f.gradientStops) {
        if (s.color) {
          const key = rgba(s.color, s.color.a ?? 1);
          COLORS.set(key, key);
        }
      }
    }
  }
}

function recordStrokes(strokes) {
  for (const s of strokes ?? []) {
    if (s.type === "SOLID" && s.color) {
      const key = rgba(s.color, s.opacity ?? 1);
      COLORS.set(key, key);
    }
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
      const css = `${x}px ${y}px ${blur}px ${spread}px ${col}${inset}`;
      SHADOWS.set(css, css);
      COLORS.set(col, col);
    }
  }
}

function recordRadii(node) {
  if (typeof node.cornerRadius === "number") RADII.add(node.cornerRadius);
  if (Array.isArray(node.rectangleCornerRadii)) {
    node.rectangleCornerRadii.forEach(v => typeof v === "number" && RADII.add(v));
  }
}

function recordSpacing(node) {
  ["paddingTop","paddingRight","paddingBottom","paddingLeft","itemSpacing"].forEach(k => {
    const v = node[k];
    if (typeof v === "number") SPACING.add(v);
  });
}

function recordTypography(node) {
  if (node.type !== "TEXT" || !node.style) return;
  const s = node.style;
  const key = [
    s.fontFamily, s.fontWeight, s.fontSize,
    s.lineHeightPx ?? s.lineHeightPercent ?? "",
    s.letterSpacing ?? ""
  ].join("|");
  TYPO.set(key, {
    fontFamily: s.fontFamily,
    fontWeight: s.fontWeight,
    fontSize: s.fontSize,
    lineHeightPx: s.lineHeightPx,
    lineHeightPercent: s.lineHeightPercent,
    letterSpacing: s.letterSpacing
  });
}

function walk(node) {
  recordFills(node.fills);
  recordStrokes(node.strokes);
  recordEffects(node.effects);
  recordRadii(node);
  recordSpacing(node);
  recordTypography(node);

  for (const ch of node.children ?? []) walk(ch);
}

walk(json.nodes["13:1321"].document);
walk(json.nodes["287:7722"].document);

const out = {
  colors: Array.from(COLORS.keys()).sort(),
  shadows: Array.from(SHADOWS.keys()),
  radii: Array.from(RADII).sort((a,b)=>a-b),
  spacing: Array.from(SPACING).sort((a,b)=>a-b),
  typography: Array.from(TYPO.values())
};

fs.writeFileSync("design-tokens.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote design-tokens.json");