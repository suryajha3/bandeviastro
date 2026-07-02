const fs = require("fs");

const config = {
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
  whatsappNumber: process.env.WHATSAPP_NUMBER || "919876543210"
};

fs.writeFileSync(
  "site-config.js",
  `window.BANDEVI_CONFIG = ${JSON.stringify(config, null, 2)};\n`
);

console.log("Generated site-config.js for deployment.");
