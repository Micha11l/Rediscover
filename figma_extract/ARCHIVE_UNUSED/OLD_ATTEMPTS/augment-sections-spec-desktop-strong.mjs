import fs from "node:fs";

const spec = JSON.parse(fs.readFileSync("sections-spec.desktop.json", "utf8"));
const patch = JSON.parse(fs.readFileSync("desktop-missing-fields.json", "utf8"));

const imageTransformMap = new Map(patch.imageTransformNodes.map(x => [x.id, x]));
const opacityMap = new Map(patch.opacityNodes.map(x => [x.id, x.opacity]));
const rotationMap = new Map(patch.rotationNodes.map(x => [x.id, x.rotation]));
const strokeMap = new Map(patch.strokeDetailNodes.map(x => [x.id, x]));
const richTextMap = new Map(patch.richTextNodes.map(x => [x.id, x]));

let hit = {
  imageTransform: 0, opacity: 0, rotation: 0, stroke: 0, richText: 0,
  nodesVisited: 0
};

function ensureTextBucket(node) {
  // 兼容不同 spec 结构：没有 node.text 也强制创建
  if (!node.text) node.text = {};
  return node.text;
}

for (const section of Object.values(spec)) {
  for (const node of section.flatNodes || []) {
    hit.nodesVisited++;

    // imageTransform: 强制写到每个 IMAGE fill 上（不做 imageRef 匹配）
    const it = imageTransformMap.get(node.id);
    if (it && Array.isArray(node.fills)) {
      const transform = it.fills?.[0]?.imageTransform ?? null;
      if (transform) {
        let wrote = 0;
        for (const f of node.fills) {
          if (f?.type === "IMAGE") {
            f.imageTransform = transform;
            wrote++;
          }
        }
        if (wrote) hit.imageTransform++;
      }
    }

    // opacity
    if (opacityMap.has(node.id)) {
      node.opacity = opacityMap.get(node.id);
      hit.opacity++;
    }

    // rotation
    if (rotationMap.has(node.id)) {
      node.rotation = rotationMap.get(node.id);
      hit.rotation++;
    }

    // stroke details
    const st = strokeMap.get(node.id);
    if (st) {
      node.strokeAlign = st.strokeAlign ?? node.strokeAlign;
      node.strokeCap = st.strokeCap ?? node.strokeCap;
      node.strokeJoin = st.strokeJoin ?? node.strokeJoin;
      node.dashPattern = st.dashPattern ?? node.dashPattern;
      hit.stroke++;
    }

    // rich text overrides: 不要求 node.text 已存在
    const rt = richTextMap.get(node.id);
    if (rt) {
      const t = ensureTextBucket(node);
      t.characterStyleOverrides = rt.characterStyleOverrides;
      t.styleOverrideTable = rt.styleOverrideTable;
      hit.richText++;
    }
  }
}

fs.writeFileSync("sections-spec.desktop.plus.json", JSON.stringify(spec, null, 2), "utf8");
console.log("Wrote sections-spec.desktop.plus.json");
console.log(hit);
