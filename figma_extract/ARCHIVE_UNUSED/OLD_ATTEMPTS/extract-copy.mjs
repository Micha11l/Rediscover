cat > extract-copy.mjs <<'EOF'
import fs from "node:fs";

const src = JSON.parse(fs.readFileSync("sections_nodes.json", "utf8"));
const nodes = src.nodes || {};
const out = [];

function walk(n, path = []) {
  const p = [...path, `${n.name}#${n.id}`];
  if (n.type === "TEXT") {
    out.push({
      id: n.id,
      path: p.join(" > "),
      text: n.characters,
      style: n.style
    });
  }
  for (const ch of (n.children || [])) walk(ch, p);
}

for (const entry of Object.values(nodes)) {
  walk(entry.document, []);
}

fs.writeFileSync("copy-text.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote copy-text.json");
EOF