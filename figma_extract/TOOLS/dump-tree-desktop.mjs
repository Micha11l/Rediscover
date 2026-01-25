import fs from "node:fs";

const json = JSON.parse(fs.readFileSync("home_nodes.json", "utf8"));
const root = json.nodes["13:1321"].document;

function walk(node, depth = 0, maxDepth = 20) {
  const ind = "  ".repeat(depth);
  console.log(`${ind}- ${node.name} | ${node.type} | ${node.id}`);
  if (depth >= maxDepth) return;
  for (const ch of node.children ?? []) walk(ch, depth + 1, maxDepth);
}

walk(root);
