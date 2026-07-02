const fs = require("fs");

const config = {
  supabaseUrl: process.env.SUPABASE_URL || "https://ftikypoxakhfethkxvpr.supabase.co",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "sb_publishable__gxlRcBibn5IgjeM4376WQ_jSupyQ6b",
  whatsappNumber: process.env.WHATSAPP_NUMBER || "919876543210"
};

fs.writeFileSync(
  "site-config.js",
  `window.BANDEVI_CONFIG = ${JSON.stringify(config, null, 2)};\n`
);

console.log("Generated site-config.js for deployment.");
