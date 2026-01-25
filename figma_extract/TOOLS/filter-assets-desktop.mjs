import fs from "node:fs";
const a = JSON.parse(fs.readFileSync("assets-export.json","utf8"));

function isDesktopId(id) {
  return typeof id === "string" && !id.includes("287:");
}

const out = {
  imageNodes: (a.imageNodes || []).filter(x => isDesktopId(x.id)),
  vectorNodes: (a.vectorNodes || []).filter(x => isDesktopId(x.id))
};

fs.writeFileSync("assets-export.desktop.json", JSON.stringify(out, null, 2), "utf8");
console.log("Wrote assets-export.desktop.json");
