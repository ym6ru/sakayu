import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const REPO = "microsoft/fluentui-emoji";
const BLOG_DIR = "content/blog";
const ICON_DIR = path.join(BLOG_DIR, "icons");

const files = (await readdir(BLOG_DIR)).filter((file) => file.endsWith(".mdx"));
const names = new Set();
for (const file of files) {
  const source = await readFile(path.join(BLOG_DIR, file), "utf8");
  const match = source.match(/^icon:\s*["']?([a-z0-9-]+)["']?\s*$/m);
  if (match) names.add(match[1]);
}

await mkdir(ICON_DIR, { recursive: true });
const existing = new Set(
  (await readdir(ICON_DIR))
    .filter((file) => file.endsWith(".png"))
    .map((file) => file.slice(0, -4)),
);

for (const name of existing) {
  if (!names.has(name)) {
    await rm(path.join(ICON_DIR, `${name}.png`));
    console.log(`removed  ${name}`);
  }
}

const missing = [...names].filter((name) => !existing.has(name));
if (missing.length === 0) {
  console.log("icons are up to date");
  process.exit(0);
}

const res = await fetch(`https://api.github.com/repos/${REPO}/git/trees/main?recursive=1`);
if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
const { tree } = await res.json();

const toName = (folder) => folder.toLowerCase().replace(/\s+/g, "-");
const pathByName = new Map();
for (const { path: filePath } of tree) {
  const parts = filePath.split("/");
  if (parts[0] !== "assets" || !filePath.endsWith(".png")) continue;
  const isPlain = parts.length === 4 && parts[2] === "3D";
  const isDefaultTone = parts.length === 5 && parts[2] === "Default" && parts[3] === "3D";
  if (isPlain || isDefaultTone) pathByName.set(toName(parts[1]), filePath);
}

let failed = false;
for (const name of missing) {
  const filePath = pathByName.get(name);
  if (!filePath) {
    console.error(`not found: ${name}`);
    failed = true;
    continue;
  }
  const url = `https://raw.githubusercontent.com/${REPO}/main/${encodeURI(filePath)}`;
  const image = await fetch(url);
  if (!image.ok) throw new Error(`download failed: ${name} (${image.status})`);
  await writeFile(path.join(ICON_DIR, `${name}.png`), Buffer.from(await image.arrayBuffer()));
  console.log(`added    ${name}`);
}

if (failed) process.exit(1);
