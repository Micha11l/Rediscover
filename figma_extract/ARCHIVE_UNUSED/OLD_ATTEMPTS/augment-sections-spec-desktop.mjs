import fs from "node:fs";

const spec = JSON.parse(fs.readFileSync("sections-spec.desktop.json", "utf8"));
const patch = JSON.parse(fs.readFileSync("desktop-missing-fields.json", "utf8"));

const imageTransformMap = new Map(patch.imageTransformNodes.map(x => [x.id, x]));
const opacityMap = new Map(patch.opacityNodes.map(x => [x.id, x.opacity]));
const rotationMap = new Map(patch.rotationNodes.map(x => [x.id, x.rotation]));
const strokeMap = new Map(patch.strokeDetailNodes.map(x => [x.id, x]));
const richTextMap = new Map(patch.richTextNodes.map(x => [x.id, x]));
const blendModeMap = new Map(patch.blendModeNodes.map(x => [x.id, x.blendMode]));

let hit = {
  imageTransform: 0,
  opacity: 0,
  rotation: 0,
  stroke: 0,
  richText: 0,
  blendMode: 0,
  nodesVisited: 0
};

for (const section of Object.values(spec)) {
  for (const node of section.flatNodes || []) {
    hit.nodesVisited++;

    const it = imageTransformMap.get(node.id);
    if (it && Array.isArray(node.fills)) {
      // 给每个 IMAGE fill 回填 imageTransform（按 imageRef 匹配最稳；不行就全填同一个）
      for (const f of node.fills) {
        if (f.type === "IMAGE") {
          const match = it.fills.find(ff => ff.imageRef === f.imageRef) || it.fills[0];
          if (match?.imageTransform) {
            f.imageTransform = match.imageTransform;
            hit.imageTransform++;
          }
        }
      }
    }

    if (opacityMap.has(node.id)) {
      node.opacity = opacityMap.get(node.id);
      hit.opacity++;
    }

    if (rotationMap.has(node.id)) {
      node.rotation = rotationMap.get(node.id);
      hit.rotation++;
    }

    const st = strokeMap.get(node.id);
    if (st) {
      node.strokeAlign = st.strokeAlign;
      node.strokeCap = st.strokeCap;
      node.strokeJoin = st.strokeJoin;
      node.dashPattern = st.dashPattern;
      hit.stroke++;
    }

    const rt = richTextMap.get(node.id);
    if (rt && node.text) {
      node.text.characterStyleOverrides = rt.characterStyleOverrides;
      node.text.styleOverrideTable = rt.styleOverrideTable;
      hit.richText++;
    }

    if (blendModeMap.has(node.id)) {
      node.blendMode = blendModeMap.get(node.id);
      hit.blendMode++;
    }
  }
}

fs.writeFileSync("sections-spec.desktop.plus.json", JSON.stringify(spec, null, 2), "utf8");
console.log("Wrote sections-spec.desktop.plus.json");
console.log(hit);