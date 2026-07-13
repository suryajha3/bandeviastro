const fs = require("fs");
const path = require("path");

function loadSharp() {
  const candidates = [
    process.env.SHARP_MODULE_DIR && path.join(process.env.SHARP_MODULE_DIR, "sharp"),
    path.join(process.env.TEMP || "", "codex-imgopt-sharp", "node_modules", "sharp"),
    "sharp"
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      return require(candidate);
    } catch {
      // Try the next known location.
    }
  }

  throw new Error("Sharp is required. Install it outside the repo or set SHARP_MODULE_DIR.");
}

const sharp = loadSharp();
const root = path.resolve(__dirname, "..");

const imageMap = {
  "assets/spiritual-consultation-hero.png": "assets/spiritual-consultation-hero.jpg",
  "assets/gemstone-ring-collection.png": "assets/gemstone-ring-collection.jpg",
  "assets/mala-products/rudraksha_mala_with_divine_elegance.png": "assets/mala-products/rudraksha_mala_with_divine_elegance.jpg",
  "assets/mala-products/elegant_crystal_mala_with_premium_packaging.png": "assets/mala-products/elegant_crystal_mala_with_premium_packaging.jpg",
  "assets/mala-products/sacred_tulsi_mala_divine_harmony.png": "assets/mala-products/sacred_tulsi_mala_divine_harmony.jpg",
  "assets/mala-products/luxury_sandalwood_mala_product_display.png": "assets/mala-products/luxury_sandalwood_mala_product_display.jpg",
  "assets/mala-products/elegant_lotus_seed_mala_display.png": "assets/mala-products/elegant_lotus_seed_mala_display.jpg",
  "assets/mala-products/premium_spiritual_mala_with_ornate_details.png": "assets/mala-products/premium_spiritual_mala_with_ornate_details.jpg",
  "assets/mala-products/luxury_hakik_mala_with_gold_accents.png": "assets/mala-products/luxury_hakik_mala_with_gold_accents.jpg",
  "assets/mala-products/elegant_spiritual_mala_product_design.png": "assets/mala-products/elegant_spiritual_mala_product_design.jpg"
};

function sizeKb(file) {
  return Math.round(fs.statSync(path.join(root, file)).size / 1024);
}

async function writeImages() {
  const results = [];

  for (const [source, target] of Object.entries(imageMap)) {
    const sourcePath = path.join(root, source);
    const targetPath = path.join(root, target);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Missing source image: ${source}`);
    }

    await sharp(sourcePath)
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(targetPath);

    results.push({
      source,
      target,
      beforeKb: sizeKb(source),
      afterKb: sizeKb(target)
    });
  }

  await sharp(path.join(root, "assets/spiritual-consultation-hero.png"))
    .resize(192, 192, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(root, "assets/bandevi-favicon.png"));

  results.push({
    source: "assets/spiritual-consultation-hero.png",
    target: "assets/bandevi-favicon.png",
    beforeKb: sizeKb("assets/spiritual-consultation-hero.png"),
    afterKb: sizeKb("assets/bandevi-favicon.png")
  });

  return results;
}

function rewriteReferences() {
  const files = fs.readdirSync(root)
    .filter((file) => /\.(html|js|css)$/i.test(file));

  let updatedFiles = 0;
  for (const file of files) {
    const filePath = path.join(root, file);
    const original = fs.readFileSync(filePath, "utf8");
    let updated = original.split(/\r?\n/).map((line) => {
      if (/rel=["'](?:apple-touch-icon|icon)["']/.test(line) && line.includes("assets/spiritual-consultation-hero.png")) {
        return line.replace(/assets\/spiritual-consultation-hero\.png/g, "assets/bandevi-favicon.png");
      }
      return line;
    }).join(original.includes("\r\n") ? "\r\n" : "\n");

    for (const [source, target] of Object.entries(imageMap)) {
      updated = updated
        .replaceAll(source, target)
        .replaceAll(`https://bandeviastro.com/${source}`, `https://bandeviastro.com/${target}`);
    }

    if (updated !== original) {
      fs.writeFileSync(filePath, updated);
      updatedFiles += 1;
    }
  }

  return updatedFiles;
}

(async () => {
  const results = await writeImages();
  const updatedFiles = rewriteReferences();
  console.table(results);
  console.log(`Updated references in ${updatedFiles} files.`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
