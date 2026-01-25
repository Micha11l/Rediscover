import fs from "node:fs";

const home = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));
const root = home?.nodes?.["13:1321"]?.document;
if (!root) throw new Error("home_nodes.json missing nodes['13:1321'].document");

const out = {
  imageTransformNodes: [],   // {id, name, fills:[{imageRef, scaleMode, imageTransform}]}
  opacityNodes: [],          // {id, name, opacity}
  rotationNodes: [],         // {id, name, rotation}
  strokeDetailNodes: [],     // {id, name, strokeAlign, strokeCap, strokeJoin, dashPattern}
  richTextNodes: [],         // {id, name, characterStyleOverrides, styleOverrideTable}
  blendModeNodes: []         // {id, name, blendMode} 仅记录非 NORMAL / 非 PASS_THROUGH
};

function walk(n) {
  // imageTransform
  const fills = n.fills || [];
  const imgFills = fills.filter(f => f?.type === "IMAGE");
  const imgWithTransform = imgFills.filter(f => f.imageTransform);
  if (imgWithTransform.length) {
    out.imageTransformNodes.push({
      id: n.id,
      name: n.name,
      fills: imgWithTransform.map(f => ({
        imageRef: f.imageRef ?? null,
        scaleMode: f.scaleMode,
        imageTransform: f.imageTransform
      }))
    });
  }

  // opacity
  if (typeof n.opacity === "number" && n.opacity !== 1) {
    out.opacityNodes.push({ id: n.id, name: n.name, opacity: n.opacity });
  }

  // rotation
  if (typeof n.rotation === "number" && n.rotation !== 0) {
    out.rotationNodes.push({ id: n.id, name: n.name, rotation: n.rotation });
  }

  // stroke details（只抓“存在这些字段”的节点）
  if (n.strokeAlign || n.strokeCap || n.strokeJoin || (Array.isArray(n.dashPattern) && n.dashPattern.length)) {
    out.strokeDetailNodes.push({
      id: n.id,
      name: n.name,
      strokeAlign: n.strokeAlign ?? null,
      strokeCap: n.strokeCap ?? null,
      strokeJoin: n.strokeJoin ?? null,
      dashPattern: n.dashPattern ?? null
    });
  }

  // rich text overrides
  if (n.type === "TEXT" && Array.isArray(n.characterStyleOverrides) && n.characterStyleOverrides.length) {
    out.richTextNodes.push({
      id: n.id,
      name: n.name,
      characterStyleOverrides: n.characterStyleOverrides,
      styleOverrideTable: n.styleOverrideTable ?? null
    });
  }

  // blend mode（排除 PASS_THROUGH）
  if (n.blendMode && n.blendMode !== "NORMAL" && n.blendMode !== "PASS_THROUGH") {
    out.blendModeNodes.push({ id: n.id, name: n.name, blendMode: n.blendMode });
  }

  for (const ch of (n.children || [])) walk(ch);
}

walk(root);

fs.writeFileSync("desktop-missing-fields.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote desktop-missing-fields.json");
console.log({
  imageTransformNodes: out.imageTransformNodes.length,
  opacityNodes: out.opacityNodes.length,
  rotationNodes: out.rotationNodes.length,
  strokeDetailNodes: out.strokeDetailNodes.length,
  richTextNodes: out.richTextNodes.length,
  blendModeNodes: out.blendModeNodes.length
});