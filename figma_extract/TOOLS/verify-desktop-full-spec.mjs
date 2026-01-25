import fs from "node:fs";

const spec = JSON.parse(fs.readFileSync("desktop-full-spec.json","utf8"));

let count = {
  nodesTotal: 0,
  imageTransformNodes: 0,
  opacityNodes: 0,
  rotationNodes: 0,
  strokeDetailNodes: 0,
  richTextNodes: 0
};

for (const n of spec.flatNodes) {
  count.nodesTotal++;

  const fills = n.fills || [];
  if (fills.some(f => f?.type === "IMAGE" && f.imageTransform)) count.imageTransformNodes++;

  if (typeof n.opacity === "number" && n.opacity !== 1) count.opacityNodes++;

  if (typeof n.rotation === "number" && n.rotation !== 0) count.rotationNodes++;

  if (n.strokeAlign || n.strokeCap || n.strokeJoin || (Array.isArray(n.dashPattern) && n.dashPattern.length)) {
    count.strokeDetailNodes++;
  }

  if (Array.isArray(n.characterStyleOverrides) && n.characterStyleOverrides.length) count.richTextNodes++;
}

fs.writeFileSync("desktop-full-spec-verify.json", JSON.stringify(count, null, 2), "utf8");
console.log("Wrote desktop-full-spec-verify.json");
console.log(count);
