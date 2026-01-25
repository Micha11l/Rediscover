import fs from "node:fs";

const json = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));

function walk(node, depth = 0, maxDepth = 6) {
  const ind = "  ".repeat(depth);
  console.log(`${ind}- ${node.name} | ${node.type} | ${node.id}`);
  if (depth >= maxDepth) return;
  for (const ch of node.children ?? []) walk(ch, depth + 1, maxDepth);
}

console.log("DESKTOP ROOT 13:1321");
walk(json.nodes["13:1321"].document);

console.log("\nMOBILE ROOT 287:7722");
walk(json.nodes["287:7722"].document);