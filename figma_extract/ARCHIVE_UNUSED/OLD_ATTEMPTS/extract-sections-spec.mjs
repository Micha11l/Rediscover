import fs from "node:fs";

const src = JSON.parse(fs.readFileSync("sections_nodes.json", "utf8"));
const nodes = src.nodes || {};

function pickBox(n) {
  const b = n.absoluteBoundingBox || n.absoluteRenderBounds || null;
  if (!b) return null;
  return { x: b.x, y: b.y, w: b.width, h: b.height };
}

function summarizePaint(p) {
  if (!p) return null;
  if (p.type === "SOLID") {
    const c = p.color || {};
    const a = p.opacity ?? c.a ?? 1;
    const r = Math.round((c.r ?? 0) * 255);
    const g = Math.round((c.g ?? 0) * 255);
    const b = Math.round((c.b ?? 0) * 255);
    return { type: "SOLID", rgba: `rgba(${r},${g},${b},${a})` };
  }
  if (String(p.type).includes("GRADIENT")) {
    return { type: p.type, stops: (p.gradientStops || []).map(s => {
      const c = s.color || {};
      const a = c.a ?? 1;
      const r = Math.round((c.r ?? 0) * 255);
      const g = Math.round((c.g ?? 0) * 255);
      const b = Math.round((c.b ?? 0) * 255);
      return { pos: s.position, rgba: `rgba(${r},${g},${b},${a})` };
    })};
  }
  if (p.type === "IMAGE") {
    return { type: "IMAGE", scaleMode: p.scaleMode, imageRef: p.imageRef || null };
  }
  return { type: p.type };
}

function summarizeEffects(effects = []) {
  return effects.map(e => {
    if (e.type === "DROP_SHADOW" || e.type === "INNER_SHADOW") {
      const c = e.color || {};
      const a = c.a ?? 1;
      const r = Math.round((c.r ?? 0) * 255);
      const g = Math.round((c.g ?? 0) * 255);
      const b = Math.round((c.b ?? 0) * 255);
      return {
        type: e.type,
        offset: e.offset || { x: 0, y: 0 },
        blur: e.radius ?? 0,
        spread: e.spread ?? 0,
        rgba: `rgba(${r},${g},${b},${a})`
      };
    }
    return { type: e.type, radius: e.radius, visible: e.visible };
  });
}

function summarizeNode(n) {
  return {
    id: n.id,
    name: n.name,
    type: n.type,
    box: pickBox(n),
    clipsContent: n.clipsContent,
    opacity: n.opacity,
    layout: (n.layoutMode || n.itemSpacing != null || n.paddingLeft != null) ? {
      layoutMode: n.layoutMode,                       // HORIZONTAL / VERTICAL
      itemSpacing: n.itemSpacing,                     // gap
      padding: (n.paddingTop != null) ? {
        top: n.paddingTop, right: n.paddingRight,
        bottom: n.paddingBottom, left: n.paddingLeft
      } : null,
      align: (n.primaryAxisAlignItems || n.counterAxisAlignItems) ? {
        primary: n.primaryAxisAlignItems,             // justify
        counter: n.counterAxisAlignItems              // align
      } : null,
      sizing: (n.layoutSizingHorizontal || n.layoutSizingVertical) ? {
        horizontal: n.layoutSizingHorizontal,
        vertical: n.layoutSizingVertical
      } : null
    } : null,
    radii: (typeof n.cornerRadius === "number" || Array.isArray(n.rectangleCornerRadii)) ? {
      cornerRadius: n.cornerRadius,
      rectangleCornerRadii: n.rectangleCornerRadii
    } : null,
    fills: (n.fills || []).map(summarizePaint).filter(Boolean),
    strokes: (n.strokes || []).map(summarizePaint).filter(Boolean),
    strokeWeight: n.strokeWeight,
    effects: summarizeEffects(n.effects || []),
    text: (n.type === "TEXT") ? {
      characters: n.characters,
      style: n.style
    } : null
  };
}

function walk(n, out, depth = 0, maxDepth = 6) {
  out.push({ depth, ...summarizeNode(n) });
  if (depth >= maxDepth) return;
  for (const ch of (n.children || [])) walk(ch, out, depth + 1, maxDepth);
}

const spec = {};
for (const [id, entry] of Object.entries(nodes)) {
  const root = entry.document;
  const flat = [];
  walk(root, flat, 0, 6);

  // 同时收集本 section 内的 image/vector 导出候选
  const assets = { imageFillNodeIds: [], vectorNodeIds: [] };
  for (const row of flat) {
    if ((row.fills || []).some(f => f?.type === "IMAGE")) assets.imageFillNodeIds.push(row.id);
    if (row.type === "VECTOR") assets.vectorNodeIds.push(row.id);
  }

  spec[id] = {
    root: { id: root.id, name: root.name, type: root.type, box: pickBox(root) },
    flatNodes: flat,
    assets
  };
}

fs.writeFileSync("sections-spec.json", JSON.stringify(spec, null, 2), "utf8");
console.log("Wrote sections-spec.json");
