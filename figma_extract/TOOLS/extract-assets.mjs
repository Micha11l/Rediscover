import fs from "node:fs";

const json = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));

const imageNodes = [];
const vectorNodes = [];

function hasImageFill(node) {
  return (node.fills ?? []).some(f => f.type === "IMAGE");
}

function walk(node) {
  if (hasImageFill(node)) imageNodes.push({ id: node.id, name: node.name, type: node.type });
  if (node.type === "VECTOR") vectorNodes.push({ id: node.id, name: node.name, type: node.type });
  for (const ch of node.children ?? []) walk(ch);
}

walk(json.nodes["13:1321"].document);
walk(json.nodes["287:7722"].document);

const out = { imageNodes, vectorNodes };
fs.writeFileSync("assets-export.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote assets-export.json");