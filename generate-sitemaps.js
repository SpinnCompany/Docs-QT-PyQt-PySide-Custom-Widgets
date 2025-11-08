// generate-sitemaps.js
import fs from "fs";
import path from "path";

const buildDir = path.resolve("./build");
const baseSitemapPath = path.join(buildDir, "sitemap.xml");

// Ensure sitemap.xml exists
if (!fs.existsSync(baseSitemapPath)) {
  console.error("❌ sitemap.xml not found. Run `npm run build` first.");
  process.exit(1);
}

const sitemapContent = fs.readFileSync(baseSitemapPath, "utf-8");

// List of subdomains you want to support
const subdomains = [
  "spinntv.spinncode.com",
  "qtwidgets.spinncode.com",
  "qtcustomwidgets.spinncode.com",
];

// Function to replace URLs inside the sitemap with the subdomain
function replaceDomain(xml, newDomain) {
  return xml.replace(/https:\/\/[^\/]+/g, `https://${newDomain}`);
}

for (const sub of subdomains) {
  const updated = replaceDomain(sitemapContent, sub);
  const outFile = path.join(buildDir, `sitemap-${sub.split(".")[0]}.xml`);
  fs.writeFileSync(outFile, updated);
  console.log(`✅ Created ${outFile}`);
}

console.log("🎉 All subdomain sitemaps generated successfully!");
