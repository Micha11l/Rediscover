import fs from "node:fs";

const src = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));
const root = src?.nodes?.["13:1321"]?.document;
if (!root) {
  console.error("home_nodes.json missing nodes['13:1321'].document");
  process.exit(1);
}

const counters = {
  hasImageFill: 0,
  hasImageTransform: 0,
  hasGradientFill: 0,
  hasGradientTransform: 0,
  hasBlendModeNonNormal: 0,
  hasOpacityNot1: 0,
  hasStroke: 0,
  hasStrokeAlign: 0,
  hasDashPattern: 0,
  hasStrokeCapOrJoin: 0,
  hasRotation: 0,
  hasRelativeTransform: 0,
  hasBooleanOperation: 0,
  hasMask: 0,
  hasEffects: 0,
  textNodes: 0,
  textHasOverrides: 0,
  nodesTotal: 0
};

function isGradientType(t) {
  return typeof t === "string" && t.includes("GRADIENT");
}

function walk(n) {
  counters.nodesTotal++;

  // fills
  const fills = n.fills || [];
  const hasImage = fills.some(f => f?.type === "IMAGE");
  if (hasImage) {
    counters.hasImageFill++;
    if (fills.some(f => f?.type === "IMAGE" && f.imageTransform)) counters.hasImageTransform++;
  }
  const hasGrad = fills.some(f => isGradientType(f?.type));
  if (hasGrad) {
    counters.hasGradientFill++;
    if (fills.some(f => isGradientType(f?.type) && f.gradientTransform)) counters.hasGradientTransform++;
  }

  // blend / opacity
  if (n.blendMode && n.blendMode !== "NORMAL") counters.hasBlendModeNonNormal++;
  if (typeof n.opacity === "number" && n.opacity !== 1) counters.hasOpacityNot1++;

  // stroke details
  if ((n.strokes || []).length > 0 || typeof n.strokeWeight === "number") counters.hasStroke++;
  if (n.strokeAlign) counters.hasStrokeAlign++;
  if (Array.isArray(n.dashPattern) && n.dashPattern.length) counters.hasDashPattern++;
  if (n.strokeCap || n.strokeJoin) counters.hasStrokeCapOrJoin++;

  // transforms
  if (typeof n.rotation === "number" && n.rotation !== 0) counters.hasRotation++;
  if (Array.isArray(n.relativeTransform)) counters.hasRelativeTransform++;

  // boolean / mask
  if (n.booleanOperation && n.booleanOperation !== "NONE") counters.hasBooleanOperation++;
  if (n.isMask) counters.hasMask++;

  // effects
  if (Array.isArray(n.effects) && n.effects.length) counters.hasEffects++;

  // text
  if (n.type === "TEXT") {
    counters.textNodes++;
    if (Array.isArray(n.characterStyleOverrides) && n.characterStyleOverrides.length) counters.textHasOverrides++;
  }

  for (const ch of (n.children || [])) walk(ch);
}

walk(root);

fs.writeFileSync("desktop-scan-report.json", JSON.stringify(counters, null, 2), "utf8");
console.log("Wrote desktop-scan-report.json");
console.log(counters);
