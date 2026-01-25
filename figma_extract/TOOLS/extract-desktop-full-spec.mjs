import fs from "node:fs";

const home = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));
const root = home?.nodes?.["13:1321"]?.document;
if (!root) throw new Error("home_nodes.json missing nodes['13:1321'].document");

function pickBox(n) {
  const b = n.absoluteBoundingBox || n.absoluteRenderBounds || null;
  if (!b) return null;
  return { x: b.x, y: b.y, w: b.width, h: b.height };
}

function walk(n, out, depth = 0) {
  out.push({
    depth,
    id: n.id,
    name: n.name,
    type: n.type,
    box: pickBox(n),

    // layout / sizing
    layoutMode: n.layoutMode,
    itemSpacing: n.itemSpacing,
    paddingTop: n.paddingTop,
    paddingRight: n.paddingRight,
    paddingBottom: n.paddingBottom,
    paddingLeft: n.paddingLeft,
    primaryAxisAlignItems: n.primaryAxisAlignItems,
    counterAxisAlignItems: n.counterAxisAlignItems,
    layoutSizingHorizontal: n.layoutSizingHorizontal,
    layoutSizingVertical: n.layoutSizingVertical,
    layoutGrow: n.layoutGrow,
    constraints: n.constraints,

    // visual
    opacity: n.opacity,
    blendMode: n.blendMode,
    clipsContent: n.clipsContent,
    fills: n.fills ?? null,
    strokes: n.strokes ?? null,
    strokeWeight: n.strokeWeight,
    strokeAlign: n.strokeAlign,
    strokeCap: n.strokeCap,
    strokeJoin: n.strokeJoin,
    dashPattern: n.dashPattern,

    cornerRadius: n.cornerRadius,
    rectangleCornerRadii: n.rectangleCornerRadii,
    cornerSmoothing: n.cornerSmoothing,

    effects: n.effects ?? null,

    // transforms
    rotation: n.rotation,
    relativeTransform: n.relativeTransform,

    // masks/boolean
    isMask: n.isMask,
    booleanOperation: n.booleanOperation,

    // text (full rich text fields)
    characters: n.type === "TEXT" ? n.characters : null,
    style: n.type === "TEXT" ? n.style : null,
    characterStyleOverrides: n.type === "TEXT" ? n.characterStyleOverrides : null,
    styleOverrideTable: n.type === "TEXT" ? n.styleOverrideTable : null
  });

  for (const ch of (n.children || [])) walk(ch, out, depth + 1);
}

const flatNodes = [];
walk(root, flatNodes, 0);

const out = {
  root: { id: root.id, name: root.name, type: root.type, box: pickBox(root) },
  flatNodes
};

fs.writeFileSync("desktop-full-spec.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote desktop-full-spec.json");
console.log("Total nodes:", flatNodes.length);
