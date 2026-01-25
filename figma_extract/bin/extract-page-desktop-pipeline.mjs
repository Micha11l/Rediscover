import fs from "node:fs";
import path from "node:path";

function usage() {
  console.log(`
Usage:
  node figma_extract/bin/extract-page-desktop-pipeline.mjs <pageName> <rootNodeId>

Example:
  node figma_extract/bin/extract-page-desktop-pipeline.mjs home 13:1321

Env:
  FIGMA_FILE_KEY, FIGMA_TOKEN
`);
  process.exit(1);
}

const pageName = process.argv[2];
const rootId = process.argv[3];
if (!pageName || !rootId) usage();

const FILE_KEY = process.env.FIGMA_FILE_KEY;
const TOKEN = process.env.FIGMA_TOKEN;

if (!FILE_KEY || !TOKEN) {
  console.error("Missing FIGMA_FILE_KEY or FIGMA_TOKEN env vars.");
  console.error('  export FIGMA_FILE_KEY="gwxxjOJUb3chsNwiZWuWWb"');
  console.error('  export FIGMA_TOKEN="YOUR_TOKEN"');
  process.exit(1);
}

const outDir = path.join("figma_extract", "pages", pageName);
fs.mkdirSync(outDir, { recursive: true });

function urlEncodeNodeId(id) { return id.replaceAll(":", "%3A"); }

async function fetchJson(url) {
  const res = await fetch(url, { headers: { "X-Figma-Token": TOKEN } });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${res.statusText}\n${text}`);
  }
  return res.json();
}

function pickBox(n) {
  const b = n.absoluteBoundingBox || n.absoluteRenderBounds || null;
  if (!b) return null;
  return { x: b.x, y: b.y, w: b.width, h: b.height };
}

function walkTree(node, lines, depth = 0) {
  lines.push(`${"  ".repeat(depth)}- ${node.name} | ${node.type} | ${node.id}`);
  for (const ch of (node.children || [])) walkTree(ch, lines, depth + 1);
}

function rgba(c, a = 1) {
  const r = Math.round((c?.r ?? 0) * 255);
  const g = Math.round((c?.g ?? 0) * 255);
  const b = Math.round((c?.b ?? 0) * 255);
  return `rgba(${r}, ${g}, ${b}, ${a ?? 1})`;
}

function extractTokens(root) {
  const COLORS = new Map();
  const SHADOWS = new Map();
  const RADII = new Set();
  const SPACING = new Set();
  const TYPO = new Map();

  function recordFills(fills) {
    for (const f of fills ?? []) {
      if (f.type === "SOLID" && f.color) COLORS.set(rgba(f.color, f.opacity ?? 1), true);
      if (String(f.type || "").includes("GRADIENT") && Array.isArray(f.gradientStops)) {
        for (const s of f.gradientStops) if (s?.color) COLORS.set(rgba(s.color, s.color.a ?? 1), true);
      }
    }
  }
  function recordStrokes(strokes) {
    for (const s of strokes ?? []) if (s.type === "SOLID" && s.color) COLORS.set(rgba(s.color, s.opacity ?? 1), true);
  }
  function recordEffects(effects) {
    for (const e of effects ?? []) {
      if ((e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW") && e.color) {
        const col = rgba(e.color, e.color.a ?? 1);
        const x = e.offset?.x ?? 0, y = e.offset?.y ?? 0, blur = e.radius ?? 0, spread = e.spread ?? 0;
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
      const v = n?.[k]; if (typeof v === "number") SPACING.add(v);
    }
  }
  function recordTypography(n) {
    if (n.type !== "TEXT" || !n.style) return;
    const s = n.style;
    const key = [s.fontFamily, s.fontWeight, s.fontSize, s.lineHeightPx ?? s.lineHeightPercent ?? "", s.letterSpacing ?? ""].join("|");
    if (!TYPO.has(key)) TYPO.set(key, {
      fontFamily: s.fontFamily, fontWeight: s.fontWeight, fontSize: s.fontSize,
      lineHeightPx: s.lineHeightPx, lineHeightPercent: s.lineHeightPercent, letterSpacing: s.letterSpacing
    });
  }

  function walk(n) {
    recordFills(n.fills); recordStrokes(n.strokes); recordEffects(n.effects);
    recordRadii(n); recordSpacing(n); recordTypography(n);
    for (const ch of (n.children || [])) walk(ch);
  }
  walk(root);

  return {
    colors: Array.from(COLORS.keys()).sort(),
    shadows: Array.from(SHADOWS.keys()),
    radii: Array.from(RADII).sort((a,b)=>a-b),
    spacing: Array.from(SPACING).sort((a,b)=>a-b),
    typography: Array.from(TYPO.values())
  };
}

function buildFullSpec(root) {
  const flatNodes = [];
  function walk(n, depth = 0) {
    flatNodes.push({
      depth, id: n.id, name: n.name, type: n.type, box: pickBox(n),

      layoutMode: n.layoutMode, itemSpacing: n.itemSpacing,
      paddingTop: n.paddingTop, paddingRight: n.paddingRight, paddingBottom: n.paddingBottom, paddingLeft: n.paddingLeft,
      primaryAxisAlignItems: n.primaryAxisAlignItems, counterAxisAlignItems: n.counterAxisAlignItems,
      layoutSizingHorizontal: n.layoutSizingHorizontal, layoutSizingVertical: n.layoutSizingVertical,
      layoutGrow: n.layoutGrow, constraints: n.constraints,

      opacity: n.opacity, blendMode: n.blendMode, clipsContent: n.clipsContent,

      fills: n.fills ?? null, strokes: n.strokes ?? null,
      strokeWeight: n.strokeWeight, strokeAlign: n.strokeAlign, strokeCap: n.strokeCap, strokeJoin: n.strokeJoin, dashPattern: n.dashPattern,

      cornerRadius: n.cornerRadius, rectangleCornerRadii: n.rectangleCornerRadii, cornerSmoothing: n.cornerSmoothing,

      effects: n.effects ?? null,

      rotation: n.rotation, relativeTransform: n.relativeTransform,

      isMask: n.isMask, booleanOperation: n.booleanOperation,

      characters: n.type === "TEXT" ? n.characters : null,
      style: n.type === "TEXT" ? n.style : null,
      characterStyleOverrides: n.type === "TEXT" ? n.characterStyleOverrides : null,
      styleOverrideTable: n.type === "TEXT" ? n.styleOverrideTable : null
    });
    for (const ch of (n.children || [])) walk(ch, depth + 1);
  }
  walk(root, 0);
  return { root: { id: root.id, name: root.name, type: root.type, box: pickBox(root) }, flatNodes };
}

function verifyFullSpec(fullSpec) {
  const count = { nodesTotal: 0, imageTransformNodes: 0, opacityNodes: 0, rotationNodes: 0, strokeDetailNodes: 0, richTextNodes: 0 };
  for (const n of fullSpec.flatNodes) {
    count.nodesTotal++;
    const fills = n.fills || [];
    if (fills.some(f => f?.type === "IMAGE" && f.imageTransform)) count.imageTransformNodes++;
    if (typeof n.opacity === "number" && n.opacity !== 1) count.opacityNodes++;
    if (typeof n.rotation === "number" && n.rotation !== 0) count.rotationNodes++;
    if (n.strokeAlign || n.strokeCap || n.strokeJoin || (Array.isArray(n.dashPattern) && n.dashPattern.length)) count.strokeDetailNodes++;
    if (Array.isArray(n.characterStyleOverrides) && n.characterStyleOverrides.length) count.richTextNodes++;
  }
  return count;
}

function extractAssets(root) {
  const out = { imageNodes: [], vectorNodes: [] };
  function hasImageFill(n) { return (n.fills ?? []).some(f => f.type === "IMAGE"); }
  function walk(n) {
    if (hasImageFill(n)) out.imageNodes.push({ id: n.id, name: n.name, type: n.type });
    if (n.type === "VECTOR") out.vectorNodes.push({ id: n.id, name: n.name, type: n.type });
    for (const ch of (n.children || [])) walk(ch);
  }
  walk(root);
  return out;
}

(async () => {
  // Step 1: download raw nodes.json (source of truth)
  const idEnc = urlEncodeNodeId(rootId);
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${idEnc}`;
  const json = await fetchJson(url);

  // Save raw nodes as the canonical source for this page
  const nodesPath = path.join(outDir, `${pageName}_nodes.json`);
  fs.writeFileSync(nodesPath, JSON.stringify(json, null, 2), "utf8");

  // Step 2: offline extract from saved file (stability)
  const root = json?.nodes?.[rootId]?.document;
  if (!root) throw new Error(`No document found at nodes['${rootId}'].document`);

  const treeLines = [];
  walkTree(root, treeLines, 0);
  fs.writeFileSync(path.join(outDir, `${pageName}.tree.desktop.txt`), treeLines.join("\n"), "utf8");

  const tokens = extractTokens(root);
  fs.writeFileSync(path.join(outDir, `${pageName}.design-tokens.desktop.json`), JSON.stringify(tokens, null, 2), "utf8");

  const assets = extractAssets(root);
  fs.writeFileSync(path.join(outDir, `${pageName}.assets-export.desktop.json`), JSON.stringify(assets, null, 2), "utf8");

  const fullSpec = buildFullSpec(root);
  fs.writeFileSync(path.join(outDir, `${pageName}.desktop-full-spec.json`), JSON.stringify(fullSpec, null, 2), "utf8");

  const verify = verifyFullSpec(fullSpec);
  fs.writeFileSync(path.join(outDir, `${pageName}.desktop-full-spec-verify.json`), JSON.stringify(verify, null, 2), "utf8");

  console.log("Done (pipeline). Output:", outDir);
  console.log("Verify:", verify);

  // Important warning if rich text missing
  if (verify.richTextNodes === 0) {
    console.log("WARNING: richTextNodes=0. If you expect rich text, re-run using a previously saved nodes.json or ensure token permissions.");
  }
})();
