const fs = require("fs");

const defaultSupabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0aWt5cG94YWtoZmV0aGt4dnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODgxMDUsImV4cCI6MjA5ODU2NDEwNX0.LZYhxzngP40h0ocBIH31WUyQ9Az9p9BYu3VQmqniET0";
const configuredSupabaseAnonKey = process.env.SUPABASE_ANON_KEY || defaultSupabaseAnonKey;
const defaultWhatsappNumber = "918676846484";
const configuredWhatsappNumber = process.env.WHATSAPP_NUMBER || defaultWhatsappNumber;
const defaultPhoneNumbers = ["918676846484", "916204641845"];
const configuredPhoneNumbers = (process.env.PHONE_NUMBERS || defaultPhoneNumbers.join(","))
  .split(",")
  .map((number) => number.replace(/[^0-9]/g, ""))
  .filter(Boolean);

const config = {
  supabaseUrl: process.env.SUPABASE_URL || "https://ftikypoxakhfethkxvpr.supabase.co",
  supabaseAnonKey: configuredSupabaseAnonKey.startsWith("sb_publishable__")
    ? defaultSupabaseAnonKey
    : configuredSupabaseAnonKey,
  whatsappNumber: configuredWhatsappNumber === "919876543210"
    ? defaultWhatsappNumber
    : configuredWhatsappNumber,
  phoneNumbers: configuredPhoneNumbers.length ? configuredPhoneNumbers : defaultPhoneNumbers
};

fs.writeFileSync(
  "site-config.js",
  `window.BANDEVI_CONFIG = ${JSON.stringify(config, null, 2)};\n`
);

console.log("Generated site-config.js for deployment.");
