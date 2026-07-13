const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const today = "2026-07-13";
const site = "https://bandeviastro.com";
const privateFiles = new Set(["admin-bookings.html", "backoffice.html"]);
const staffDeskLinkPattern = /\r?\n\s*<a href="admin-bookings\.html">Staff Desk<\/a>/g;

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, data) {
  fs.writeFileSync(path.join(root, file), data, "utf8");
}

function htmlFiles() {
  return fs.readdirSync(root).filter((file) => file.endsWith(".html"));
}

function normalizeHomepageMeta() {
  let html = read("index.html");
  html = html.replace(
    /<meta\s+name="description"\s+content="([^"]+)"\s*\/>/s,
    '<meta name="description" content="$1" />'
  );
  write("index.html", html);
}

function removePublicStaffLinks() {
  let changed = 0;
  for (const file of htmlFiles()) {
    if (privateFiles.has(file)) continue;
    const before = read(file);
    const after = before.replace(staffDeskLinkPattern, "");
    if (before !== after) {
      write(file, after);
      changed += 1;
    }
  }
  return changed;
}

function tightenMetadata() {
  let google = read("google-business-profile.html");
  google = google
    .replace(
      /<title>[^<]+<\/title>/,
      "<title>Bandevi Astro Google Business Profile | Official Facts</title>"
    )
    .replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      '<meta property="og:title" content="Bandevi Astro Google Business Profile | Official Facts" />'
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      '<meta name="twitter:title" content="Bandevi Astro Google Business Profile | Official Facts" />'
    );
  write("google-business-profile.html", google);

  const ukDescription =
    "Online pandit UK for Indian families abroad. Book Hindu priest online, astrology, hawan, kundli and gemstone guidance on WhatsApp.";
  let uk = read("online-pandit-uk.html");
  uk = uk
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${ukDescription}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${ukDescription}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${ukDescription}" />`);
  write("online-pandit-uk.html", uk);
}

function updateSitemapLastmod(files) {
  let sitemap = read("sitemap.xml");
  for (const file of files) {
    const loc = file === "index.html" ? `${site}/` : `${site}/${file}`;
    const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(<loc>${escaped}<\\/loc>\\s*<lastmod>)([^<]+)(<\\/lastmod>)`);
    sitemap = sitemap.replace(re, `$1${today}$3`);
  }
  write("sitemap.xml", sitemap);
}

normalizeHomepageMeta();
const staffLinkChanged = removePublicStaffLinks();
tightenMetadata();
updateSitemapLastmod(["index.html", "google-business-profile.html", "online-pandit-uk.html"]);

console.log(`Technical SEO cleanup complete. Removed public Staff Desk links from ${staffLinkChanged} files.`);
