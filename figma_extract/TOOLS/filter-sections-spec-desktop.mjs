import fs from "node:fs";
const s = JSON.parse(fs.readFileSync("sections-spec.json","utf8"));

const out = {};
for (const [k,v] of Object.entries(s)) {
  if (!k.includes("287:")) out[k] = v;
}

fs.writeFileSync("sections-spec.desktop.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote sections-spec.desktop.json");
