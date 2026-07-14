const siteConfig = window.BANDEVI_CONFIG || {};
const businessWhatsApp = siteConfig.whatsappNumber || "918676846484";
const businessCallNumbers = Array.isArray(siteConfig.phoneNumbers) && siteConfig.phoneNumbers.length
  ? siteConfig.phoneNumbers
  : [businessWhatsApp, "916204641845"];
const primaryCallNumber = businessCallNumbers[0] || businessWhatsApp;
const razorpayKeyId = siteConfig.razorpayKeyId || "";
const razorpayMode = siteConfig.razorpayMode || "test";
const razorpayOrderEndpoint = siteConfig.razorpayOrderEndpoint || "/api/razorpay/order";
const razorpayVerifyEndpoint = siteConfig.razorpayVerifyEndpoint || "/api/razorpay/verify";
const supabaseClient = createSupabaseClient();

const serviceSelect = document.querySelector("#clientService");
const form = document.querySelector("#bookingForm");
const statusEl = document.querySelector("#formStatus");
const yearEl = document.querySelector("#year");
const stoneOrderForm = document.querySelector("#stoneOrderForm");
const stoneSelect = document.querySelector("#stoneName");
const stoneStatusEl = document.querySelector("#stoneOrderStatus");
const stoneQuoteSummary = document.querySelector("#stoneQuoteSummary");
const portalBookingForm = document.querySelector("#portalBookingForm");
const trackBookingForm = document.querySelector("#trackBookingForm");
const adminAccessForm = document.querySelector("#adminAccessForm");
const adminPanel = document.querySelector("#adminPanel");
const adminBookingList = document.querySelector("#adminBookingList");
const adminStats = document.querySelector("#adminStats");
const adminSearchInput = document.querySelector("#adminSearch");
const adminStatusFilter = document.querySelector("#adminStatusFilter");
const adminPaymentFilter = document.querySelector("#adminPaymentFilter");
const adminRefreshButton = document.querySelector("#adminRefresh");
const adminExportButton = document.querySelector("#adminExport");
const adminSourceStrip = document.querySelector("#adminSourceStrip");
const adminQueueBoard = document.querySelector("#adminQueueBoard");
const backofficeAccessForm = document.querySelector("#backofficeAccessForm");
const backofficePanel = document.querySelector("#backofficePanel");
const backofficeStats = document.querySelector("#backofficeStats");
const backofficeSearchInput = document.querySelector("#backofficeSearch");
const backofficeQueueFilter = document.querySelector("#backofficeQueueFilter");
const backofficeRefreshButton = document.querySelector("#backofficeRefresh");
const backofficeExportButton = document.querySelector("#backofficeExport");
const backofficeSourceStrip = document.querySelector("#backofficeSourceStrip");
const backofficeQueueOverview = document.querySelector("#backofficeQueueOverview");
const backofficeOperations = document.querySelector("#backofficeOperations");
const backofficeCustomerList = document.querySelector("#backofficeCustomerList");
const backofficeKundaliQueue = document.querySelector("#backofficeKundaliQueue");
const backofficeGemstoneQueue = document.querySelector("#backofficeGemstoneQueue");
const backofficeProductQueue = document.querySelector("#backofficeProductQueue");
const backofficeReportList = document.querySelector("#backofficeReportList");
const backofficeLogin = document.querySelector("#backofficeLogin");
const backofficePreview = document.querySelector("#backofficePreview");
const backofficeWorkflowPreview = document.querySelector("#backofficeWorkflowPreview");
const customerAuthForm = document.querySelector("#customerAuthForm");
const authLogoutButton = document.querySelector("#authLogoutButton");
const authOpenAccountButton = document.querySelector("#authOpenAccountButton");
const authSubmitButton = document.querySelector("#authSubmitButton");
const authGoogleButton = document.querySelector("#authGoogleButton");
const authForgotButton = document.querySelector("#authForgotButton");
const authNameField = document.querySelector("#authNameField");
const authEmailField = document.querySelector("#authEmailField");
const authPasswordField = document.querySelector("#authPasswordField");
const authPhoneField = document.querySelector("#authPhoneField");
const authOtpField = document.querySelector("#authOtpField");
const accountSection = document.querySelector("#accountSection");
const accountSummary = document.querySelector("#accountSummary");
const passwordUpdateForm = document.querySelector("#passwordUpdateForm");
const passwordUpdateStatus = document.querySelector("#passwordUpdateStatus");
const passwordUpdateCancel = document.querySelector("#passwordUpdateCancel");
const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");
const portalServiceField = document.querySelector("#portalService");
const portalModeField = document.querySelector("#portalMode");
const servicePreview = document.querySelector("#servicePreview");
const portalServiceIntake = document.querySelector("#portalServiceIntake");
const portalIntakeTitle = document.querySelector("#portalIntakeTitle");
const portalIntakeBody = document.querySelector("#portalIntakeBody");
const portalIntakeBadge = document.querySelector("#portalIntakeBadge");
const ticketDetails = document.querySelector("#ticketDetails");
const ticketCopyButton = document.querySelector("#ticketCopy");
const bookingStorageKey = "bandeviAstroBookings";
const adminAccessKey = "bandeviAstroAdminUnlocked";
const backofficeAccessKey = "bandeviAstroBackofficeUnlocked";
const packagePricingStorageKey = "bandeviAstroPackagePricing";
const adminAccessCode = "BA-ADMIN-2026";
const headerPreferenceKeys = {
  currency: "bandeviAstroDisplayCurrency",
  language: "bandeviAstroDisplayLanguage"
};
const currencyApiUrl = "https://open.er-api.com/v6/latest/INR";
const supportedCurrencies = {
  INR: { label: "INR - India", locale: "en-IN", symbol: "Rs" },
  USD: { label: "USD - USA", locale: "en-US" },
  GBP: { label: "GBP - UK", locale: "en-GB" },
  EUR: { label: "EUR - Europe", locale: "en-IE" },
  CAD: { label: "CAD - Canada", locale: "en-CA" },
  AED: { label: "AED - UAE", locale: "en-AE" },
  AUD: { label: "AUD - Australia", locale: "en-AU" }
};
const fallbackCurrencyRates = {
  INR: 1,
  USD: 0.012,
  GBP: 0.0088,
  EUR: 0.0102,
  CAD: 0.0163,
  AED: 0.0441,
  AUD: 0.0183
};
const supportedLanguages = {
  en: "English",
  hi: "Hindi",
  ne: "Nepali",
  es: "Spanish",
  fr: "French",
  de: "German",
  ar: "Arabic"
};
const headerLanguageCopy = {
  en: {
    topStart: "<strong>Since 1981</strong> Global desk for India, USA, UK, Canada, UAE and NRI families",
    topEnd: "Hindi and English | Quote before payment | Proof where applicable",
    track: "Track Booking ID",
    brandSmall: "Pdt. Jyotishacharya Kumodanand Jha (Shastri)",
    brandLine: "Since 1981 Jyotish, Pooja and Gemstone Desk",
    nav: {
      "online-pooja.html": ["Pooja", "Proof"],
      "hawan.html": ["Hawan", "Temple"],
      "kundli.html": ["Kundli", "Dosh"],
      "gemstone-shop.html": ["Gems", "Rings"],
      "book-online.html": ["Book", "Create ID"],
      "about.html": ["Trust", "About us"]
    },
    actions: {
      login: ["Account", "Login"],
      whatsapp: ["WA", "WhatsApp"],
      primary: ["Book", "Now"]
    },
    rail: {
      "online-pooja.html": ["Online Pooja", "Temple, live video or proof"],
      "hawan.html": ["Hawan Services", "Grah, vastu and business"],
      "kundli.html": ["Kundli and Dosh", "Marriage, career and remedies"],
      "gemstone-shop.html": ["Gemstone Rings", "Certified quote after review"],
      "track-booking.html": ["Login Desk", "Booking ID, login and updates"]
    }
  },
  hi: {
    topStart: "<strong>1981 se</strong> Bharat, USA, UK, Canada, UAE aur NRI parivar ke liye global desk",
    topEnd: "Hindi aur English | Payment se pehle quote | Jahan lagu ho proof",
    track: "Booking ID Track karein",
    brandSmall: "Pdt. Jyotishacharya Kumodanand Jha (Shastri)",
    brandLine: "1981 se Jyotish, Pooja aur Gemstone Desk",
    nav: {
      "online-pooja.html": ["Pooja", "Proof"],
      "hawan.html": ["Hawan", "Mandir"],
      "kundli.html": ["Kundli", "Dosh"],
      "gemstone-shop.html": ["Ratna", "Rings"],
      "book-online.html": ["Book", "ID Banayein"],
      "about.html": ["Trust", "About us"]
    },
    actions: {
      login: ["Account", "Login"],
      whatsapp: ["WA", "WhatsApp"],
      primary: ["Book", "Now"]
    },
    rail: {
      "online-pooja.html": ["Online Pooja", "Mandir, live video ya proof"],
      "hawan.html": ["Hawan Seva", "Grah, vastu aur business"],
      "kundli.html": ["Kundli aur Dosh", "Vivah, career aur upay"],
      "gemstone-shop.html": ["Gemstone Rings", "Review ke baad certified quote"],
      "track-booking.html": ["Login Desk", "Booking ID, login aur updates"]
    }
  }
};
const currencyTextSources = new WeakMap();
let selectedCurrency = supportedCurrencies[readPreference(headerPreferenceKeys.currency, "INR")]
  ? readPreference(headerPreferenceKeys.currency, "INR")
  : "INR";
let selectedLanguage = supportedLanguages[readPreference(headerPreferenceKeys.language, "en")]
  ? readPreference(headerPreferenceKeys.language, "en")
  : "en";
let currencyRates = { ...fallbackCurrencyRates };
let currencyObserverTimer = null;
let razorpayCheckoutPromise = null;
let adminBookingsCache = [];
let adminBookingsSource = "local";
let adminQuickFilter = "all";
let backofficeBookingsCache = [];
let backofficeBookingsSource = "local";
let authMode = "sign-in";
let authContactMode = "email";
let authPhoneOtpSent = false;
let accountPortalUnlocked = false;
let activePricingPackages = [];
let activeStonePricingPackage = null;
const pricingManagerCategoryState = { admin: "", backoffice: "" };

const bookingStatuses = [
  "Enquiry Received",
  "Quote Sent",
  "Payment Pending",
  "Confirmed",
  "Pooja Scheduled",
  "Completed"
];

const paymentStatuses = [
  "Not Requested",
  "Payment Pending",
  "Payment Received",
  "Refund Requested",
  "Refund Processed"
];

const defaultPaymentMethod = "Staff quote first";
const paymentMethodOptions = [
  {
    value: "Staff quote first",
    label: "Quote first",
    detail: "Staff confirms quote, date and terms before payment."
  },
  {
    value: "Razorpay online payment",
    label: "Razorpay online payment",
    detail: "Gateway opens after exact INR quote is approved."
  },
  {
    value: "UPI / bank transfer",
    label: "UPI / bank transfer",
    detail: "Official transfer details are shared after quote approval."
  },
  {
    value: "COD / Pay on delivery",
    label: "COD / Pay on delivery",
    detail: "Available only for eligible products or local delivery."
  }
];

const adminWorkflowActions = [
  {
    key: "quote",
    label: "Quote sent",
    status: "Quote Sent",
    paymentStatus: "Not Requested",
    note: "Quote shared. Please confirm service, date and amount before payment."
  },
  {
    key: "payment",
    label: "Payment pending",
    status: "Payment Pending",
    paymentStatus: "Payment Pending",
    note: "Payment details shared after quote approval. Please confirm once paid."
  },
  {
    key: "received",
    label: "Payment received",
    status: "Confirmed",
    paymentStatus: "Payment Received",
    note: "Payment received. Team will confirm schedule and preparation details."
  },
  {
    key: "scheduled",
    label: "Scheduled",
    status: "Pooja Scheduled",
    paymentStatus: "Payment Received",
    note: "Service scheduled. Team will share proof or completion update where applicable."
  },
  {
    key: "completed",
    label: "Completed",
    status: "Completed",
    paymentStatus: "Payment Received",
    note: "Service completed. Proof, notes or delivery update shared where applicable."
  }
];

const serviceStartingPrices = {
  "Online Pooja": "From Rs 1,501",
  "Hawan / Havan": "From Rs 5,100",
  "Kundli Consultation": "From Rs 1,501",
  "Hast Rekha / Palmistry": "From Rs 1,100",
  "Gemstone Guidance": "Quote after kundli review",
  "Buy Gemstone Online": "Certificate-based quote",
  "Vastu / Muhurat": "From Rs 2,100",
  "NRI Online Pooja": "Quote by time zone and ritual",
  "NRI Ganesh Pooja": "Quote by time zone and proof option",
  "NRI Lakshmi Pooja / Diwali Pooja": "Quote by festival date and proof option",
  "NRI Satyanarayan Katha / Pooja": "Quote by live/proof mode",
  "NRI Navgraha Shanti Pooja": "Quote by ritual depth and time zone",
  "NRI Mahamrityunjay Jaap / Pooja": "Quote by mantra count and proof option",
  "NRI Rudrabhishek Pooja": "Quote by temple and proof option",
  "NRI Durga Pooja / Saptashati Path": "Quote by path scope and date",
  "NRI Pitra Dosh Nivaran Pooja": "Quote by tithi, ritual and proof option",
  "NRI Kaal Sarp Dosh Pooja": "Quote after kundli and ritual review",
  "NRI Mangal Dosh Pooja": "Quote after kundli and ritual review",
  "NRI Griha Pravesh / Vastu Shanti": "Quote by country, mode and samagri",
  "NRI Business Opening Pooja": "Quote by muhurat and business scope",
  "NRI Marriage / Engagement Pooja": "Quote by family participation mode",
  "NRI Naamkaran / Annaprashan Pooja": "Quote by ceremony and time zone",
  "NRI Birthday / Ayush Pooja": "Quote by sankalp and proof option",
  "NRI Hawan / Homam Booking": "Quote by hawan type and samagri",
  "NRI Custom Sankalp Pooja": "Quote after purpose review",
  "Hawan Samagri Guidance": "Guidance quote after hawan type",
  "Marriage Guidance": "From Rs 1,501",
  "Business Guidance": "From Rs 2,100"
};

const defaultPricingPackages = [
  ["navgraha-shanti-online", "Navgraha Shanti Online", "Navgraha Shanti Pooja", "Temple pooja with proof", "Pooja", "Rs 7,100", "Rs 5,100", "Rs 2,000 off", "Rs 5,100"],
  ["marriage-kundli-match", "Marriage Kundli Match", "Marriage Kundali Match", "Online video call", "Kundali", "Rs 2,100", "Rs 1,501", "Rs 599 off", "Rs 1,501"],
  ["shop-opening-muhurat", "Shop Opening Muhurat", "Business Opening Hawan", "Home / office visit", "Muhurat", "Rs 3,100", "Rs 2,100", "Rs 1,000 off", "Rs 2,100"],
  ["sankalp-pooja", "Sankalp Pooja", "Online Pooja", "Temple pooja with proof", "Online Pooja", "Rs 2,100", "Rs 1,501", "Rs 599 off", "Rs 1,501"],
  ["live-video-pooja", "Live Video Pooja", "Online Pooja", "Online video call", "Online Pooja", "Rs 3,100", "Rs 2,100", "Rs 1,000 off", "Rs 2,100"],
  ["family-pooja-abroad", "Family Pooja Abroad", "NRI Online Pooja", "Temple pooja with proof", "Online Pooja", "Rs 5,100+", "Custom quote", "NRI offer", "Custom quote"],
  ["remedy-pooja", "Remedy Pooja", "Navgraha Shanti Pooja", "Temple pooja with proof", "Online Pooja", "Rs 7,100", "Rs 5,100", "Rs 2,000 off", "Rs 5,100"],
  ["temple-hawan-proof", "Temple Hawan With Proof", "Hawan / Havan", "Temple pooja with proof", "Hawan", "Rs 7,100", "Rs 5,100", "Rs 2,000 off", "Rs 5,100"],
  ["visit-based-hawan", "Visit-Based Hawan", "Vastu Shanti Hawan", "Home / office visit", "Hawan", "Rs 11,000", "From Rs 7,100", "Up to Rs 3,900", "From Rs 7,100"],
  ["nri-hawan-guidance", "NRI Hawan Guidance", "NRI Hawan / Homam Booking", "Temple pooja with proof", "Hawan", "Rs 8,100+", "Custom quote", "NRI offer", "Custom quote"],
  ["hawan-samagri-desk", "Hawan Samagri Desk", "Hawan Samagri Guidance", "Online video call", "Hawan Samagri", "Rs 1,100", "Rs 501", "Rs 599 off", "Rs 501"],
  ["hawan-samagri-premium-mix", "Hawan Samagri Premium Mix", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["navgrah-hawan-samagri", "Navgrah Hawan Samagri", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["lakshmi-hawan-samagri", "Lakshmi Hawan Samagri", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["durga-hawan-samagri", "Durga Hawan Samagri", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["ganesh-hawan-samagri", "Ganesh Hawan Samagri", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["mahamrityunjay-hawan-samagri", "Mahamrityunjay Hawan Samagri", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["vastu-shanti-hawan-samagri", "Vastu Shanti Hawan Samagri", "Hawan Samagri Product", "Product quote", "Hawan Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["ganesh-pooja-samagri-kit", "Ganesh Pooja Samagri Kit", "Pooja Samagri Product", "Product quote", "Pooja Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["lakshmi-pooja-samagri-kit", "Lakshmi Pooja Samagri Kit", "Pooja Samagri Product", "Product quote", "Pooja Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["durga-pooja-samagri-kit", "Durga Pooja Samagri Kit", "Pooja Samagri Product", "Product quote", "Pooja Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["satyanarayan-pooja-samagri-kit", "Satyanarayan Pooja Samagri Kit", "Pooja Samagri Product", "Product quote", "Pooja Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["navgrah-pooja-samagri-kit", "Navgrah Pooja Samagri Kit", "Pooja Samagri Product", "Product quote", "Pooja Samagri", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["rudraksha-mala", "Rudraksha Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["sphatik-crystal-mala", "Sphatik / Crystal Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["tulsi-mala", "Tulsi Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["chandan-sandalwood-mala", "Chandan / Sandalwood Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["kamal-gatta-lotus-seed-mala", "Kamal Gatta / Lotus Seed Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["premium-jap-mala", "Premium Jap Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["hakik-mala", "Hakik Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["ornate-spiritual-mala", "Ornate Spiritual Mala", "Astro Mala Product", "Mala product quote", "Mala", "Stock price", "Staff quote", "Before payment", "Staff quote"],
  ["focused-question-review", "Focused Question Review", "Kundli Consultation", "Online video call", "Kundali", "Rs 2,100", "Rs 1,501", "Rs 599 off", "Rs 1,501"],
  ["full-kundali-reading", "Full Kundali Reading", "Janam Kundali Reading", "Online video call", "Kundali", "Rs 5,100", "Rs 3,100", "Rs 2,000 off", "Rs 3,100"],
  ["dosh-deep-review", "Dosh Deep Review", "Dasha and Antardasha Review", "Online video call", "Kundali", "Rs 3,100", "Rs 2,100", "Rs 1,000 off", "Rs 2,100"],
  ["gemstone-marriage-check", "Gemstone and Marriage Check", "Gemstone Suitability Kundali Check", "Online video call", "Kundali", "Rs 2,100", "Rs 1,501", "Rs 599 off", "Rs 1,501"],
  ["gemstone-suitability", "Gemstone Suitability", "Gemstone Guidance", "Online video call", "Gemstone", "Rs 2,100", "Rs 1,501", "Rs 599 off", "Rs 1,501"],
  ["certificate-stone-proof", "Certificate and Stone Proof", "Buy Gemstone Online", "Gemstone delivery", "Gemstone", "Stock price", "Staff quote", "Approved offer", "Staff quote"],
  ["ring-pendant-finish", "Ring or Pendant Finish", "Buy Gemstone Online", "Gemstone delivery", "Gemstone", "By metal", "Custom quote", "Before payment", "Custom quote"],
  ["tracked-order-delivery", "Tracked Order and Delivery", "Buy Gemstone Online", "Gemstone delivery", "Gemstone", "Item total", "Final quote", "Shown in ID", "Final quote"]
].map(([id, title, service, mode, category, mrpPrice, offerPrice, discountPrice, amount], index) => {
  const isProductQuote = /stock price|by metal|item total|custom quote/i.test(`${mrpPrice} ${offerPrice} ${amount}`);
  return {
    id,
    title,
    service,
    mode,
    category,
    mrpPrice,
    offerPrice,
    discountPrice,
    amount,
    productStatus: isProductQuote ? "Quote after staff review" : "Bookable",
    quoteNote: isProductQuote
      ? "Staff confirms availability, product proof, delivery and final quote before payment."
      : "Bookable package. Final timing, proof and payment step are confirmed by staff.",
    sortOrder: index + 1,
    isActive: true
  };
});

const pricingManagerTabs = [
  ["pooja-hawan", "Hawan/Pooja", "Online pooja, hawan, jaap and muhurat packages"],
  ["hawan-samagri", "Hawan Samagri", "Hawan kits, wood, herbs and ritual items"],
  ["pooja-samagri", "Pooja Samagri", "Hindi pooja kits and deity samagri"],
  ["mala", "Mala", "Rudraksha, Sphatik, Tulsi and Jap Mala"],
  ["gemstone", "Gemstones", "Stone, ring, pendant and certificate quote"],
  ["kundali", "Kundali", "Kundali, dosh, dasha and guidance packages"]
].map(([id, label, detail]) => ({ id, label, detail }));

const pricingCategoryFieldOptions = [
  "Online Pooja",
  "Hawan Pooja",
  "Hawan Samagri",
  "Pooja Samagri",
  "Mala",
  "Kundali",
  "Gemstone",
  "Muhurat"
];

const productStatusOptions = [
  "Bookable",
  "Quote after staff review",
  "Limited availability",
  "Certificate required",
  "Delivery confirmation needed",
  "Hidden from public quote"
];

const serviceProfileRules = [
  {
    test: (service) => /^NRI /i.test(service),
    title: "NRI pooja booking",
    body: "Best for families outside India who need time-zone planning, sankalp details, live joining or temple proof after completion.",
    quote: "Final quote by country, ritual, date and proof option",
    proof: "Live video, pooja photos or short proof update as agreed",
    details: "Country, time zone, name, gotra, purpose, family joining plan and preferred date"
  },
  {
    test: (service) => /hawan samagri guidance/i.test(service),
    title: "Hawan samagri guidance",
    body: "Best for confirming the correct hawan kund, samidha, havan samagri, ghee, kalash, flowers and special items before the ritual.",
    quote: "Guidance quote after hawan type and location",
    proof: "Final checklist and coordination note before purchase",
    details: "Hawan type, city/country, place of ritual, participant count and items already available"
  },
  {
    test: (service) => /hawan|havan/i.test(service),
    title: "Hawan / Havan ritual booking",
    body: "Best for grah shanti, vastu, business, pitra, mangal, Durga or Mahamrityunjay fire rituals with clear samagri and schedule confirmation.",
    quote: "From Rs 5,100 / final quote by samagri and place",
    proof: "Hawan photos or short video after completion",
    details: "Sankalp name, gotra, city/country, preferred date and purpose"
  },
  {
    test: (service) => /kundali|kundli|dosh review|dasha|grahan dosh|rahu ketu|shani dosh|sade sati|gemstone suitability/i.test(service),
    title: "Kundali and dosh consultation",
    body: "Best for birth chart review, dosh checking, marriage, career, business, dasha and gemstone suitability before any remedy is suggested.",
    quote: "From Rs 1,501 / final quote by depth of review",
    proof: "Consultation notes or remedy summary after session",
    details: "Date, time and place of birth plus exact question"
  },
  {
    test: (service) => /gemstone|ruby|emerald|sapphire|manik|panna|pukhraj|neelam|moonga|moti|gomed|lehsunia|diamond|opal/i.test(service),
    title: "Gemstone guidance or buying request",
    body: "Best for ring, pendant or loose gemstone selection after kundali suitability, budget, certification and delivery discussion.",
    quote: "Certificate-based quote after kundali and stock check",
    proof: "Stone photo, certificate details and dispatch update",
    details: "Birth details, stone form, metal, size, budget and delivery country"
  },
  {
    test: (service) => /pooja|jaap|path|katha|rudrabhishek|navgraha|ganesh|lakshmi|satyanarayan|saraswati|hanuman|durga|pitra|kaal sarp|mangal/i.test(service),
    title: "Online pooja and jaap booking",
    body: "Best for temple pooja, mantra jaap, sankalp worship and dosh nivaran with proof shared after completion.",
    quote: "From Rs 1,501 / final quote by ritual and mantra count",
    proof: "Sankalp proof, photos or short video as applicable",
    details: "Name, gotra, purpose, city/country and preferred date"
  },
  {
    test: (service) => /vastu|muhurat/i.test(service),
    title: "Vastu and muhurat consultation",
    body: "Best for home, office, shop, griha pravesh, business opening, travel or auspicious timing guidance.",
    quote: "From Rs 2,100 / final quote by scope",
    proof: "Consultation notes and suggested timing",
    details: "Location, purpose, preferred date window and key concern"
  },
  {
    test: (service) => /hast rekha|palmistry/i.test(service),
    title: "Hast Rekha / palmistry reading",
    body: "Best for practical life, career, relationship or business guidance from palm reading with online consultation support.",
    quote: "From Rs 1,100",
    proof: "Reading summary or follow-up note",
    details: "Clear palm photos, dominant hand and main question"
  }
];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav?.classList.toggle("is-open", !isOpen);
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  });
});

document.addEventListener("click", (event) => {
  if (!menuToggle || !primaryNav || menuToggle.contains(event.target) || primaryNav.contains(event.target)) return;
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
});

function markActiveHeaderLinks() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".international-nav a[href], .international-service-rail a[href], .header-actions a[href], .international-topline a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const page = href.split("#")[0].split("?")[0] || "index.html";
    const isCurrent = page === currentPage;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent && link.closest(".main-nav")) {
      link.setAttribute("aria-current", "page");
    }
  });
}

markActiveHeaderLinks();
initHeaderGlobalTools();
initCallNowActions();
initCurrencyConversion();

function initPremiumSliders() {
  document.querySelectorAll("[data-premium-slider]").forEach((slider) => {
    const slides = [...slider.querySelectorAll("[data-slide]")];
    const dots = [...slider.querySelectorAll("[data-slider-dot]")];
    const previousButton = slider.querySelector("[data-slider-prev]");
    const nextButton = slider.querySelector("[data-slider-next]");
    if (slides.length <= 1) return;

    let currentIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
    let autoTimer = null;

    const showSlide = (nextIndex) => {
      currentIndex = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle("is-active", index === currentIndex));
      dots.forEach((dot, index) => dot.classList.toggle("is-active", index === currentIndex));
    };

    const restartAuto = () => {
      window.clearInterval(autoTimer);
      autoTimer = window.setInterval(() => showSlide(currentIndex + 1), 6500);
    };

    previousButton?.addEventListener("click", () => {
      showSlide(currentIndex - 1);
      restartAuto();
    });

    nextButton?.addEventListener("click", () => {
      showSlide(currentIndex + 1);
      restartAuto();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        restartAuto();
      });
    });

    slider.addEventListener("mouseenter", () => window.clearInterval(autoTimer));
    slider.addEventListener("mouseleave", restartAuto);
    slider.addEventListener("focusin", () => window.clearInterval(autoTimer));
    slider.addEventListener("focusout", restartAuto);

    showSlide(currentIndex);
    restartAuto();
  });
}

initPremiumSliders();

function createSupabaseClient() {
  if (!siteConfig.supabaseUrl || !siteConfig.supabaseAnonKey || !window.supabase?.createClient) {
    return null;
  }

  return window.supabase.createClient(siteConfig.supabaseUrl, siteConfig.supabaseAnonKey);
}

function isCloudEnabled() {
  return Boolean(supabaseClient);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Preference storage can be unavailable in some private browser modes.
  }
}

function getPageFromHref(href) {
  return (href || "").split("#")[0].split("?")[0] || "index.html";
}

function normalizePhoneForCall(number) {
  const digits = String(number || "").replace(/[^0-9]/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

function phoneTelUrl(number) {
  const digits = normalizePhoneForCall(number);
  return digits ? `tel:+${digits}` : "#";
}

function formatDisplayPhone(number) {
  const digits = normalizePhoneForCall(number);
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return number ? `+${digits}` : "";
}

function initCallNowActions() {
  const primaryPhone = formatDisplayPhone(primaryCallNumber);
  const allPhones = businessCallNumbers.map(formatDisplayPhone).filter(Boolean);

  document.querySelectorAll(".international-header .header-actions").forEach((actions) => {
    if (actions.querySelector("[data-call-now-action]")) return;
    const callLink = document.createElement("a");
    callLink.className = "header-action call-now";
    callLink.href = phoneTelUrl(primaryCallNumber);
    callLink.dataset.callNowAction = "header";
    callLink.setAttribute("aria-label", `Call Bandevi Astro now at ${primaryPhone}`);
    callLink.innerHTML = `<span>${escapeHtml(primaryPhone)}</span><strong>Call Now</strong>`;
    const whatsappLink = actions.querySelector(".header-action.whatsapp");
    actions.insertBefore(callLink, whatsappLink || actions.firstChild);
  });

  document.querySelectorAll(".floating-whatsapp").forEach((whatsappLink) => {
    const href = whatsappLink.getAttribute("href") || "";
    if (!href.includes(businessWhatsApp)) {
      whatsappLink.href = `https://wa.me/${businessWhatsApp}`;
    }
    if (whatsappLink.parentElement?.querySelector("[data-call-now-action='floating']")) return;
    const callLink = document.createElement("a");
    callLink.className = "floating-call-now";
    callLink.href = phoneTelUrl(primaryCallNumber);
    callLink.dataset.callNowAction = "floating";
    callLink.setAttribute("aria-label", `Call now ${primaryPhone}`);
    callLink.innerHTML = `<span>Call Now</span><strong>${escapeHtml(primaryPhone)}</strong>`;
    whatsappLink.insertAdjacentElement("beforebegin", callLink);
  });

  if (!document.querySelector(".floating-whatsapp") && !document.querySelector("[data-call-now-action='floating']")) {
    const callLink = document.createElement("a");
    callLink.className = "floating-call-now";
    callLink.href = phoneTelUrl(primaryCallNumber);
    callLink.dataset.callNowAction = "floating";
    callLink.setAttribute("aria-label", `Call now ${primaryPhone}`);
    callLink.innerHTML = `<span>Call Now</span><strong>${escapeHtml(primaryPhone)}</strong>`;
    document.body.appendChild(callLink);
  }

  document.querySelectorAll(".footer-contact-card, .footer-contact").forEach((card) => {
    if (card.querySelector("[data-call-now-action='footer']") || !allPhones.length) return;
    const line = document.createElement("p");
    line.className = "footer-call-line";
    line.dataset.callNowAction = "footer";
    line.innerHTML = `Call Now: ${allPhones.map((phone, index) => `<a href="${escapeHtml(phoneTelUrl(businessCallNumbers[index]))}">${escapeHtml(phone)}</a>`).join(" / ")}`;
    card.appendChild(line);
  });
}

function initHeaderGlobalTools() {
  document.querySelectorAll(".international-header").forEach((header) => {
    if (header.querySelector("[data-global-tools]")) return;
    const topline = header.querySelector(".international-topline");
    const trustCopy = topline?.querySelector("span:last-child");
    if (!topline || !trustCopy) return;

    const tools = document.createElement("div");
    tools.className = "header-global-tools notranslate";
    tools.setAttribute("data-global-tools", "");
    tools.setAttribute("aria-label", "Language and currency converter");
    tools.innerHTML = `
      <label>
        <span>Lang</span>
        <select data-language-control aria-label="Select website language">
          ${Object.entries(supportedLanguages).map(([code, label]) => `<option value="${escapeHtml(code)}">${escapeHtml(label)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Currency</span>
        <select data-currency-control aria-label="Select display currency">
          ${Object.entries(supportedCurrencies).map(([code, item]) => `<option value="${escapeHtml(code)}">${escapeHtml(item.label)}</option>`).join("")}
        </select>
      </label>
      <small data-currency-note>Display only. Final quote before payment.</small>
    `;
    topline.insertBefore(tools, trustCopy);
  });

  document.querySelectorAll("[data-language-control]").forEach((select) => {
    select.value = selectedLanguage;
    select.addEventListener("change", () => {
      selectedLanguage = supportedLanguages[select.value] ? select.value : "en";
      writePreference(headerPreferenceKeys.language, selectedLanguage);
      document.querySelectorAll("[data-language-control]").forEach((item) => {
        item.value = selectedLanguage;
      });
      applyHeaderLanguage();
      applyGoogleTranslateLanguage(selectedLanguage);
    });
  });

  document.querySelectorAll("[data-currency-control]").forEach((select) => {
    select.value = selectedCurrency;
    select.addEventListener("change", () => {
      selectedCurrency = supportedCurrencies[select.value] ? select.value : "INR";
      writePreference(headerPreferenceKeys.currency, selectedCurrency);
      document.querySelectorAll("[data-currency-control]").forEach((item) => {
        item.value = selectedCurrency;
      });
      updateCurrencyNote();
      applyCurrencyToPage();
      refreshCurrencyRates();
    });
  });

  applyHeaderLanguage();
  updateCurrencyNote();
  if (selectedLanguage !== "en") {
    applyGoogleTranslateLanguage(selectedLanguage);
  }
}

function applyHeaderLanguage() {
  const copy = headerLanguageCopy[selectedLanguage] || headerLanguageCopy.en;
  document.documentElement.lang = selectedLanguage === "en" ? "en" : selectedLanguage;

  document.querySelectorAll(".international-topline").forEach((topline) => {
    const spans = topline.querySelectorAll(":scope > span");
    if (spans[0]) spans[0].innerHTML = copy.topStart;
    if (spans[1]) spans[1].textContent = copy.topEnd;
    const trackLink = topline.querySelector("a[href*='track-booking']");
    if (trackLink) trackLink.textContent = copy.track;
  });

  document.querySelectorAll(".international-brand small").forEach((item) => {
    item.textContent = copy.brandSmall;
  });
  document.querySelectorAll(".international-brand em").forEach((item) => {
    item.textContent = copy.brandLine;
  });

  document.querySelectorAll(".international-nav a[href]").forEach((link) => {
    const labels = copy.nav[getPageFromHref(link.getAttribute("href"))];
    if (!labels) return;
    const strong = link.querySelector("strong");
    const span = link.querySelector("span");
    if (strong) strong.textContent = labels[0];
    if (span) span.textContent = labels[1];
  });

  document.querySelectorAll(".international-service-rail a[href]").forEach((link) => {
    const labels = copy.rail[getPageFromHref(link.getAttribute("href"))];
    if (!labels) return;
    const strong = link.querySelector("strong");
    const span = link.querySelector("span");
    if (strong) strong.textContent = labels[0];
    if (span) span.textContent = labels[1];
  });

  document.querySelectorAll(".international-header .header-action.login").forEach((link) => {
    setHeaderActionLabel(link, copy.actions.login);
  });
  document.querySelectorAll(".international-header .header-action.whatsapp").forEach((link) => {
    setHeaderActionLabel(link, copy.actions.whatsapp);
  });
  document.querySelectorAll(".international-header .header-action.primary").forEach((link) => {
    setHeaderActionLabel(link, copy.actions.primary);
  });
}

function setHeaderActionLabel(link, labels) {
  const span = link.querySelector("span");
  const strong = link.querySelector("strong");
  if (span) span.textContent = labels[0];
  if (strong) strong.textContent = labels[1];
}

function initCurrencyConversion() {
  refreshCurrencyRates();
  applyCurrencyToPage();
  if (!document.body || window.MutationObserver === undefined) return;

  const observer = new MutationObserver(() => {
    window.clearTimeout(currencyObserverTimer);
    currencyObserverTimer = window.setTimeout(applyCurrencyToPage, 80);
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

async function refreshCurrencyRates() {
  if (!window.fetch || selectedCurrency === "INR") return;
  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timeout = controller ? window.setTimeout(() => controller.abort(), 3500) : null;
  try {
    const response = await fetch(currencyApiUrl, {
      cache: "no-store",
      signal: controller?.signal
    });
    if (!response.ok) throw new Error("Currency rate request failed");
    const data = await response.json();
    if (data?.result !== "success" || !data.rates) throw new Error("Currency rate response unavailable");
    currencyRates = { ...fallbackCurrencyRates, ...data.rates, INR: 1 };
    updateCurrencyNote("Live display rates");
    applyCurrencyToPage();
  } catch (error) {
    console.warn("Currency display rates unavailable", error);
    currencyRates = { ...fallbackCurrencyRates };
    updateCurrencyNote("Indicative display rates");
  } finally {
    if (timeout) window.clearTimeout(timeout);
  }
}

function updateCurrencyNote(prefix = "Display only") {
  const currencyLabel = selectedCurrency === "INR"
    ? "INR"
    : `${selectedCurrency} approx`;
  document.querySelectorAll("[data-currency-note]").forEach((note) => {
    note.textContent = `${prefix}: ${currencyLabel}. Final quote before payment.`;
  });
}

function applyCurrencyToPage() {
  applyCurrencyToTextNodes(document.body);
  applyCurrencyToAttributes();
}

function applyCurrencyToTextNodes(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if ((!node.nodeValue || !/(Rs\.?|INR|₹)\s*[0-9]/.test(node.nodeValue)) && !currencyTextSources.has(node)) {
        return NodeFilter.FILTER_REJECT;
      }
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, textarea, select, [data-global-tools], .notranslate")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const source = currencyTextSources.get(node) || node.nodeValue;
    if (!currencyTextSources.has(node)) currencyTextSources.set(node, source);
    const nextText = convertCurrencyText(source);
    if (node.nodeValue !== nextText) node.nodeValue = nextText;
  });
}

function applyCurrencyToAttributes() {
  document.querySelectorAll("[placeholder]").forEach((element) => {
    const placeholder = element.getAttribute("placeholder") || "";
    const source = element.dataset.currencyPlaceholderSource || placeholder;
    if (!/(Rs\.?|INR|₹)\s*[0-9]/.test(source)) return;
    element.dataset.currencyPlaceholderSource = source;
    const nextText = convertCurrencyText(source);
    if (placeholder !== nextText) element.setAttribute("placeholder", nextText);
  });
}

function convertCurrencyText(source) {
  if (selectedCurrency === "INR") return source;
  return source.replace(/(?:Rs\.?|INR|₹)\s*([0-9][0-9,]*(?:\.\d+)?)/g, (match, amountText) => {
    const inrAmount = Number(amountText.replace(/,/g, ""));
    if (!Number.isFinite(inrAmount)) return match;
    return formatConvertedCurrency(inrAmount);
  });
}

function formatConvertedCurrency(inrAmount) {
  const currency = supportedCurrencies[selectedCurrency] ? selectedCurrency : "INR";
  if (currency === "INR") {
    return `Rs ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(inrAmount)}`;
  }
  const convertedAmount = inrAmount * (currencyRates[currency] || fallbackCurrencyRates[currency] || 1);
  return new Intl.NumberFormat(supportedCurrencies[currency].locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(convertedAmount);
}

function applyGoogleTranslateLanguage(languageCode) {
  if (languageCode === "en") {
    clearGoogleTranslateCookie();
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = "";
      combo.dispatchEvent(new Event("change"));
    }
    return;
  }

  setGoogleTranslateCookie(languageCode);
  loadGoogleTranslateElement(() => {
    let attempts = 0;
    const applyLanguage = () => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = languageCode;
        combo.dispatchEvent(new Event("change"));
        return;
      }
      attempts += 1;
      if (attempts < 12) window.setTimeout(applyLanguage, 250);
    };
    applyLanguage();
  });
}

function loadGoogleTranslateElement(callback) {
  let shell = document.querySelector("#google_translate_element");
  if (!shell) {
    shell = document.createElement("div");
    shell.id = "google_translate_element";
    shell.className = "google-translate-shell notranslate";
    document.body.appendChild(shell);
  }

  const previousInit = window.googleTranslateElementInit;
  window.googleTranslateElementInit = () => {
    if (typeof previousInit === "function") previousInit();
    if (window.google?.translate?.TranslateElement) {
      new window.google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: Object.keys(supportedLanguages).filter((code) => code !== "en").join(","),
        autoDisplay: false
      }, "google_translate_element");
    }
    callback?.();
  };

  if (window.google?.translate?.TranslateElement) {
    window.googleTranslateElementInit();
    return;
  }

  if (!document.querySelector("script[data-google-translate]")) {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.dataset.googleTranslate = "true";
    document.head.appendChild(script);
  } else {
    window.setTimeout(callback, 500);
  }
}

function setGoogleTranslateCookie(languageCode) {
  const value = `/en/${languageCode}`;
  document.cookie = `googtrans=${value}; path=/`;
  if (location.hostname.includes(".")) {
    document.cookie = `googtrans=${value}; path=/; domain=.${location.hostname.replace(/^www\./, "")}`;
  }
}

function clearGoogleTranslateCookie() {
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  if (location.hostname.includes(".")) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${location.hostname.replace(/^www\./, "")}`;
  }
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function normalizePackageId(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || `package-${Date.now()}`;
}

function normalizePricingPackage(item = {}, fallback = {}) {
  const title = String(item.title || item.package_title || fallback.title || "").trim();
  return {
    id: String(item.id || item.package_id || fallback.id || normalizePackageId(title)).trim(),
    title,
    service: String(item.service || fallback.service || "").trim(),
    mode: String(item.mode || fallback.mode || "").trim(),
    category: String(item.category || fallback.category || "Service").trim(),
    mrpPrice: String(item.mrpPrice || item.mrp_price || fallback.mrpPrice || "").trim(),
    offerPrice: String(item.offerPrice || item.offer_price || fallback.offerPrice || "").trim(),
    discountPrice: String(item.discountPrice || item.discount_price || fallback.discountPrice || "").trim(),
    amount: String(item.amount || item.final_quote || fallback.amount || item.offerPrice || item.offer_price || "").trim(),
    productStatus: String(item.productStatus || item.product_status || fallback.productStatus || "Quote after staff review").trim(),
    quoteNote: String(item.quoteNote || item.quote_note || fallback.quoteNote || "Staff confirms final quote, proof and delivery/payment step before payment.").trim(),
    sortOrder: Number(item.sortOrder || item.sort_order || fallback.sortOrder || 0),
    isActive: item.isActive ?? item.is_active ?? fallback.isActive ?? true
  };
}

function getDefaultPricingPackages() {
  return defaultPricingPackages.map((item) => ({ ...item }));
}

function readPricingPackages() {
  const defaults = getDefaultPricingPackages();
  try {
    const stored = JSON.parse(localStorage.getItem(packagePricingStorageKey) || "[]");
    if (!Array.isArray(stored) || !stored.length) return defaults;
    const byId = new Map(defaults.map((item) => [item.id, item]));
    stored.forEach((item) => {
      const normalized = normalizePricingPackage(item, byId.get(item.id) || {});
      if (normalized.id) byId.set(normalized.id, normalized);
    });
    return [...byId.values()].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  } catch {
    return defaults;
  }
}

function writePricingPackages(packages) {
  const normalized = packages.map((item, index) => normalizePricingPackage(item, { sortOrder: index + 1 }));
  localStorage.setItem(packagePricingStorageKey, JSON.stringify(normalized));
  activePricingPackages = normalized;
  return normalized;
}

function getPricingPackages() {
  if (!activePricingPackages.length) activePricingPackages = readPricingPackages();
  return activePricingPackages;
}

function findPricingPackage({ id = "", title = "", service = "" } = {}) {
  const packages = getPricingPackages();
  const normalizedTitle = normalizePackageId(title);
  const normalizedService = normalizePackageId(service);
  return packages.find((item) => id && item.id === id)
    || packages.find((item) => normalizedTitle && normalizePackageId(item.title) === normalizedTitle)
    || packages.find((item) => normalizedService && normalizePackageId(item.service) === normalizedService)
    || null;
}

function getCategoryPricingDefaults(category = "", productName = "") {
  const text = normalizeCatalogText(`${category} ${productName}`);
  if (/mala/.test(text)) {
    return {
      mrpPrice: "Stock price",
      offerPrice: "Staff quote",
      discountPrice: "Before payment",
      amount: "Staff quote",
      productStatus: "Quote after staff review",
      quoteNote: "Staff confirms bead type, bead count, purpose, product proof and delivery before payment."
    };
  }
  if (/hawan samagri|havan samagri/.test(text)) {
    return {
      mrpPrice: "Stock price",
      offerPrice: "Staff quote",
      discountPrice: "Before payment",
      amount: "Staff quote",
      productStatus: "Delivery confirmation needed",
      quoteNote: "Staff confirms item list, quantity, delivery country and final quote before payment."
    };
  }
  if (/pooja samagri|puja samagri|pooja kit|puja kit/.test(text)) {
    return {
      mrpPrice: "Stock price",
      offerPrice: "Staff quote",
      discountPrice: "Before payment",
      amount: "Staff quote",
      productStatus: "Quote after staff review",
      quoteNote: "Staff confirms kit items, deity/ritual fit, packaging, delivery and final quote before payment."
    };
  }
  if (/ring|pendant/.test(text)) {
    return {
      mrpPrice: "By stone + metal",
      offerPrice: "Custom quote",
      discountPrice: "Before payment",
      amount: "Custom quote",
      productStatus: "Certificate required",
      quoteNote: "Staff confirms stone proof, certificate, metal, size and final quote before payment."
    };
  }
  if (/gemstone|stone|ratna|loose/.test(text)) {
    return {
      mrpPrice: "By carat/certificate",
      offerPrice: "Staff quote",
      discountPrice: "Approved offer",
      amount: "Staff quote",
      productStatus: "Certificate required",
      quoteNote: "Staff confirms carat/ratti, origin, treatment note, certificate and proof before payment."
    };
  }
  return {
    mrpPrice: "To be confirmed",
    offerPrice: "Staff quote",
    discountPrice: "Before payment",
    amount: "Staff quote",
    productStatus: "Quote after staff review",
    quoteNote: "Staff confirms final quote, schedule, proof and payment step before payment."
  };
}

function getProductPricingPackage(name, category, fallback = {}) {
  const matched = findPricingPackage({ id: fallback.id || "", title: name, service: fallback.service || name });
  return normalizePricingPackage({
    id: fallback.id || normalizePackageId(`${category}-${name}`),
    title: name,
    service: fallback.service || `${category} Product`,
    mode: fallback.mode || "Product quote before payment",
    category,
    ...getCategoryPricingDefaults(category, name),
    ...(matched || {}),
    ...fallback
  });
}

function productPricingBlock(pricingPackage, className = "") {
  const pricing = normalizePricingPackage(pricingPackage);
  return `
    <div class="price-stack compact-price-stack product-price-stack ${escapeHtml(className)}" aria-label="${escapeHtml(pricing.title)} pricing">
      <div class="price-row mrp-price"><span>MRP</span><strong>${escapeHtml(pricing.mrpPrice || "To be confirmed")}</strong></div>
      <div class="price-row offer-price"><span>Offer Price</span><strong>${escapeHtml(pricing.offerPrice || pricing.amount || "Staff quote")}</strong></div>
      <div class="price-row discount-price"><span>Discount</span><strong>${escapeHtml(pricing.discountPrice || "Before payment")}</strong></div>
    </div>
  `;
}

function productTrustDetailBlock(pricingPackage, details = []) {
  const pricing = normalizePricingPackage(pricingPackage);
  const lines = [
    pricing.productStatus || "Quote after staff review",
    pricing.quoteNote || "Staff confirms details before payment.",
    ...details
  ].filter(Boolean);
  return `
    <details class="product-quick-detail">
      <summary>Product detail and trust</summary>
      <div>
        <strong>${escapeHtml(pricing.title)}</strong>
        <ul>
          ${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
      </div>
    </details>
  `;
}

function addPricingToBookingUrl(href, pricingPackage) {
  return addPackageParamsToUrl(href, normalizePricingPackage(pricingPackage));
}

function packageFromCard(card, link) {
  const title = card.querySelector("h3")?.textContent.trim() || "Selected package";
  const params = new URL(link.getAttribute("href"), window.location.href).searchParams;
  const existingPackage = findPricingPackage({ title, service: params.get("service") || "" });
  const mrpPrice = card.querySelector(".mrp-price strong")?.textContent.trim() || existingPackage?.mrpPrice || "";
  const offerPrice = card.querySelector(".offer-price strong")?.textContent.trim() || existingPackage?.offerPrice || "";
  const discountPrice = card.querySelector(".discount-price strong")?.textContent.trim() || existingPackage?.discountPrice || "";
  return normalizePricingPackage({
    id: existingPackage?.id || normalizePackageId(title),
    title,
    service: params.get("service") || existingPackage?.service || title,
    mode: params.get("mode") || existingPackage?.mode || "Temple pooja with proof",
    category: card.querySelector(".quote-chip, .package-kicker")?.textContent.trim() || existingPackage?.category || "Service",
    mrpPrice,
    offerPrice,
    discountPrice,
    amount: existingPackage?.amount || offerPrice || params.get("amount") || "",
    sortOrder: existingPackage?.sortOrder || 999,
    isActive: true
  });
}

function addPackageParamsToUrl(href, pricingPackage) {
  const url = new URL(href, window.location.href);
  url.searchParams.set("packageId", pricingPackage.id);
  url.searchParams.set("packageTitle", pricingPackage.title);
  url.searchParams.set("service", pricingPackage.service);
  url.searchParams.set("mode", pricingPackage.mode);
  if (pricingPackage.category) url.searchParams.set("category", pricingPackage.category);
  if (pricingPackage.mrpPrice) url.searchParams.set("mrpPrice", pricingPackage.mrpPrice);
  if (pricingPackage.offerPrice) url.searchParams.set("offerPrice", pricingPackage.offerPrice);
  if (pricingPackage.discountPrice) url.searchParams.set("discountPrice", pricingPackage.discountPrice);
  if (pricingPackage.amount) url.searchParams.set("amount", pricingPackage.amount);
  return `${url.pathname.replace(/^\//, "")}?${url.searchParams.toString()}`;
}

function enhanceBookablePackageLinks() {
  document.querySelectorAll(".service-package-card .text-button[href*='book-online.html'], .package-card a[href*='book-online.html']").forEach((link) => {
    const card = link.closest(".service-package-card, .package-card");
    if (!card || !card.querySelector(".price-stack")) return;
    const pricingPackage = packageFromCard(card, link);
    link.href = addPackageParamsToUrl(link.getAttribute("href"), pricingPackage);
    link.dataset.packageBook = pricingPackage.id;
    link.textContent = "Book this package";
    link.setAttribute("aria-label", `Book ${pricingPackage.title}`);
  });
}

function getPortalPackageFromParams() {
  const params = new URLSearchParams(window.location.search);
  const packageId = params.get("packageId") || "";
  const packageTitle = params.get("packageTitle") || "";
  if (!packageId && !packageTitle) return null;
  return normalizePricingPackage({
    id: packageId,
    title: packageTitle,
    service: params.get("service") || "",
    mode: params.get("mode") || "",
    category: params.get("category") || "",
    mrpPrice: params.get("mrpPrice") || "",
    offerPrice: params.get("offerPrice") || "",
    discountPrice: params.get("discountPrice") || "",
    amount: params.get("amount") || ""
  }, findPricingPackage({ id: packageId, title: packageTitle }) || {});
}

function readPortalPackageSelection() {
  const panel = document.querySelector("#selectedPackagePanel");
  if (!panel || panel.hidden) return null;
  return normalizePricingPackage({
    id: document.querySelector("#portalPackageId")?.value,
    title: document.querySelector("#portalPackageTitle")?.value,
    service: document.querySelector("#portalService")?.value,
    mode: document.querySelector("#portalMode")?.value,
    category: document.querySelector("#portalPackageCategory")?.value,
    mrpPrice: document.querySelector("#portalPackageMrp")?.value,
    offerPrice: document.querySelector("#portalPackageOffer")?.value,
    discountPrice: document.querySelector("#portalPackageDiscount")?.value,
    amount: document.querySelector("#portalPackageAmount")?.value
  });
}

function setHiddenValue(selector, value) {
  const field = document.querySelector(selector);
  if (field) field.value = value || "";
}

function renderSelectedPackagePanel(pricingPackage) {
  const panel = document.querySelector("#selectedPackagePanel");
  if (!panel) return;
  const packageData = pricingPackage ? normalizePricingPackage(pricingPackage) : null;
  panel.hidden = !packageData?.title;
  if (!packageData?.title) return;

  setHiddenValue("#portalPackageId", packageData.id);
  setHiddenValue("#portalPackageTitle", packageData.title);
  setHiddenValue("#portalPackageCategory", packageData.category);
  setHiddenValue("#portalPackageMrp", packageData.mrpPrice);
  setHiddenValue("#portalPackageOffer", packageData.offerPrice);
  setHiddenValue("#portalPackageDiscount", packageData.discountPrice);
  setHiddenValue("#portalPackageAmount", packageData.amount);

  const title = panel.querySelector("[data-selected-package-title]");
  const service = panel.querySelector("[data-selected-package-service]");
  const values = panel.querySelector("[data-selected-package-values]");
  if (title) title.textContent = packageData.title;
  if (service) service.textContent = `${packageData.service || "Service"} | ${packageData.mode || "Mode to confirm"}`;
  if (values) {
    values.innerHTML = [
      ["MRP", packageData.mrpPrice || "To be confirmed"],
      ["Offer", packageData.offerPrice || "Quote pending"],
      ["Discount", packageData.discountPrice || "Staff offer pending"],
      ["Final quote", packageData.amount || packageData.offerPrice || "Quote pending"]
    ].map(([label, value]) => `<span><strong>${escapeHtml(label)}</strong>${escapeHtml(value)}</span>`).join("");
  }
}

function packageLinesForConcern(pricingPackage) {
  if (!pricingPackage?.title) return [];
  return [
    `Selected package: ${pricingPackage.title}`,
    pricingPackage.mrpPrice ? `MRP: ${pricingPackage.mrpPrice}` : "",
    pricingPackage.offerPrice ? `Offer Price: ${pricingPackage.offerPrice}` : "",
    pricingPackage.discountPrice ? `Discount: ${pricingPackage.discountPrice}` : "",
    pricingPackage.amount ? `Final quote shown: ${pricingPackage.amount}` : ""
  ].filter(Boolean);
}

function parseStaffNotePaymentLink(value) {
  const parsed = parseStaffNoteBookingMeta(value);
  return { note: parsed.note, paymentLink: parsed.paymentLink };
}

function parseStaffNoteBookingMeta(value) {
  const rawNote = String(value || "");
  const meta = {
    paymentLink: "",
    mrpPrice: "",
    offerPrice: "",
    discountPrice: "",
    paymentMethod: ""
  };
  const fieldMap = {
    payment_link: "paymentLink",
    mrp_price: "mrpPrice",
    offer_price: "offerPrice",
    discount_price: "discountPrice",
    payment_method: "paymentMethod"
  };
  rawNote.replace(/\[\[(payment_link|mrp_price|offer_price|discount_price|payment_method):([^\]]*)\]\]/gi, (_match, key, encodedValue) => {
    const target = fieldMap[String(key || "").toLowerCase()];
    if (!target) return "";
    try {
      meta[target] = decodeURIComponent(encodedValue || "");
    } catch {
      meta[target] = "";
    }
    return "";
  });
  const note = rawNote.replace(/\s*\[\[(payment_link|mrp_price|offer_price|discount_price|payment_method):[^\]]*\]\]\s*/gi, " ").replace(/\s{2,}/g, " ").trim();
  return { note, ...meta };
}

function serializeStaffNotePaymentLink(note, paymentLink) {
  return serializeStaffNoteBookingMeta(note, { paymentLink });
}

function serializeStaffNoteBookingMeta(note, booking = {}) {
  const parsed = parseStaffNoteBookingMeta(note);
  const cleanNote = parsed.note;
  const metaItems = [
    ["payment_link", booking.paymentLink],
    ["mrp_price", booking.mrpPrice],
    ["offer_price", booking.offerPrice],
    ["discount_price", booking.discountPrice],
    ["payment_method", booking.paymentMethod]
  ]
    .map(([key, value]) => [key, String(value || "").trim()])
    .filter(([, value]) => value);
  if (!metaItems.length) return cleanNote;
  const metaText = metaItems.map(([key, value]) => `[[${key}:${encodeURIComponent(value)}]]`).join("\n");
  return `${cleanNote}${cleanNote ? "\n\n" : ""}${metaText}`;
}

function getBookingPaymentMethod(booking = {}) {
  const directMethod = String(booking?.paymentMethod || "").trim();
  if (directMethod) return directMethod;
  const parsedMethod = parseStaffNoteBookingMeta(booking?.staffNote || "").paymentMethod;
  return parsedMethod || defaultPaymentMethod;
}

function readSelectedPaymentMethod(groupName, fallback = defaultPaymentMethod) {
  return document.querySelector(`input[name="${groupName}"]:checked`)?.value || fallback;
}

function getPaymentMethodOption(value) {
  return paymentMethodOptions.find((option) => option.value === value)
    || paymentMethodOptions.find((option) => option.value === defaultPaymentMethod)
    || paymentMethodOptions[0];
}

function renderPaymentMethodOptions(selectedValue = defaultPaymentMethod) {
  const selected = selectedValue || defaultPaymentMethod;
  return paymentMethodOptions.map((option) => `
    <option value="${escapeHtml(option.value)}" ${option.value === selected ? "selected" : ""}>${escapeHtml(option.value)}</option>
  `).join("");
}

function getBookingPaymentLink(booking) {
  if (!booking) return "";
  if (booking.paymentLink) return String(booking.paymentLink).trim();
  return parseStaffNoteBookingMeta(booking.staffNote).paymentLink;
}

function getBookingPriceBreakdown(booking = {}, fallbackQuote = "") {
  const parsed = parseStaffNoteBookingMeta(booking.staffNote);
  return {
    mrpPrice: booking.mrpPrice || parsed.mrpPrice || "",
    offerPrice: booking.offerPrice || parsed.offerPrice || "",
    discountPrice: booking.discountPrice || parsed.discountPrice || "",
    amount: booking.amount || fallbackQuote || ""
  };
}

function hasPriceBreakdown(booking = {}) {
  const pricing = getBookingPriceBreakdown(booking);
  return Boolean(pricing.mrpPrice || pricing.offerPrice || pricing.discountPrice);
}

function renderBookingPriceBreakdown(booking = {}, className = "booking-price-breakdown") {
  const profile = getServiceProfile(booking.service);
  const pricing = getBookingPriceBreakdown(booking, profile.quote || "Quote pending");
  const rows = [
    ["MRP", pricing.mrpPrice || "To be confirmed"],
    ["Offer Price", pricing.offerPrice || pricing.amount || "Quote pending"],
    ["Discount", pricing.discountPrice || "Staff offer pending"],
    ["Final Quote", pricing.amount || "Quote pending"]
  ];
  return `
    <div class="${escapeHtml(className)}" aria-label="MRP offer discount and final quote">
      ${rows.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </div>
  `;
}

function pricingLinesForMessage(booking = {}) {
  const profile = getServiceProfile(booking.service);
  const pricing = getBookingPriceBreakdown(booking, profile.quote || "Quote pending");
  return [
    `MRP: ${pricing.mrpPrice || "To be confirmed"}`,
    `Offer Price: ${pricing.offerPrice || pricing.amount || "Quote pending"}`,
    `Discount: ${pricing.discountPrice || "Staff offer pending"}`,
    `Final Quote: ${pricing.amount || "Quote pending"}`
  ];
}

function isPaymentPendingStage(booking) {
  return booking?.paymentStatus === "Payment Pending" || booking?.status === "Payment Pending";
}

function getVisiblePaymentLink(booking) {
  if (!isPaymentPendingStage(booking)) return "";
  const paymentLink = getBookingPaymentLink(booking);
  const safeLink = safeExternalUrl(paymentLink);
  return safeLink === "#" ? "" : safeLink;
}

function parseExactInrAmountPaise(value) {
  const text = String(value || "").trim();
  if (!text) return 0;
  if (/quote|pending|custom|staff|stock|before payment|to be confirmed|need|from|\+|by stone|certificate/i.test(text)) {
    return 0;
  }

  const match = text.match(/(?:rs\.?|inr|₹)\s*([0-9][0-9,]*(?:\.[0-9]{1,2})?)/i)
    || text.match(/^([0-9][0-9,]*(?:\.[0-9]{1,2})?)$/);
  if (!match) return 0;

  const amount = Number(match[1].replace(/,/g, ""));
  if (!Number.isFinite(amount) || amount <= 0) return 0;
  return Math.round(amount * 100);
}

function getRazorpayAmountPaise(booking) {
  return parseExactInrAmountPaise(booking?.amount)
    || parseExactInrAmountPaise(booking?.offerPrice)
    || 0;
}

function formatRazorpayAmount(amountPaise) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: amountPaise % 100 ? 2 : 0
  }).format(amountPaise / 100);
}

function isRazorpayPaymentAvailable(booking) {
  return Boolean(razorpayKeyId && isPaymentPendingStage(booking) && getRazorpayAmountPaise(booking));
}

function getRazorpayPaymentPayload(booking) {
  const amountPaise = getRazorpayAmountPaise(booking);
  return {
    bookingId: booking.id,
    amountPaise,
    amountDisplay: formatRazorpayAmount(amountPaise),
    service: booking.service,
    name: booking.name,
    email: booking.email || "",
    phone: normalizePhoneForCall(booking.phone || ""),
    mode: razorpayMode
  };
}

function renderRazorpayButton(booking) {
  if (!isRazorpayPaymentAvailable(booking)) return "";
  const payload = getRazorpayPaymentPayload(booking);
  return `
    <button
      class="btn btn-primary razorpay-pay-button"
      type="button"
      data-razorpay-pay
      data-payment="${escapeHtml(JSON.stringify(payload))}"
    >Pay by Razorpay</button>
  `;
}

function renderPaymentReadyPanel(booking, className = "payment-ready-panel") {
  if (!booking) return "";
  const amount = booking.amount || booking.offerPrice || getServiceProfile(booking.service).quote || "Quote pending";
  const paymentLink = getVisiblePaymentLink(booking);
  const razorpayButton = renderRazorpayButton(booking);
  const isPending = isPaymentPendingStage(booking);
  const stateLabel = isPending
    ? paymentLink || razorpayButton ? "Payment ready" : "Payment link pending"
    : "Locked until quote approval";
  const pendingActionLabel = isPending
    ? razorpayKeyId ? "Exact INR quote needed" : "Gateway setup pending"
    : "Payment locked";
  const action = paymentLink
    ? `<a class="btn btn-primary" href="${escapeHtml(paymentLink)}" target="_blank" rel="noopener">Pay Now</a>`
    : razorpayButton
      ? razorpayButton
    : `<span class="payment-pending-chip">${escapeHtml(pendingActionLabel)}</span>`;

  return `
    <div class="${escapeHtml(className)} ${isPending ? "is-payment-open" : "is-payment-locked"}" aria-label="Payment readiness">
      <div>
        <span>${escapeHtml(stateLabel)}</span>
        <strong>${escapeHtml(amount)}</strong>
        ${hasPriceBreakdown(booking) ? renderBookingPriceBreakdown(booking, "payment-price-breakdown") : ""}
        <p>Payment opens only after staff confirms the quote. Razorpay appears for exact INR quotes marked Payment Pending.</p>
      </div>
      <div class="payment-ready-actions">
        ${action}
        <small data-razorpay-status></small>
        <small>Pay only after confirming the quote and Booking ID with staff.</small>
      </div>
    </div>
  `;
}

function renderPaymentChoiceBoard(booking, className = "payment-choice-panel") {
  const selectedMethod = getBookingPaymentMethod(booking);
  const selectedOption = getPaymentMethodOption(selectedMethod);

  return `
    <div class="${escapeHtml(className)}" aria-label="Selected payment option">
      <div class="payment-choice-head">
        <span>Selected payment option</span>
        <strong>${escapeHtml(selectedOption.value)}</strong>
        <p>${escapeHtml(selectedOption.detail)} Final confirmation happens only after staff review.</p>
      </div>
      <div class="payment-choice-grid" aria-label="Available payment options">
        ${paymentMethodOptions.map((option) => `
          <div class="payment-choice-card ${option.value === selectedOption.value ? "is-selected" : ""}">
            <span>${option.value === selectedOption.value ? "Selected" : "Available"}</span>
            <strong>${escapeHtml(option.label)}</strong>
            <p>${escapeHtml(option.detail)}</p>
          </div>
        `).join("")}
      </div>
      ${renderPaymentReadyPanel(booking, "payment-ready-panel ticket-payment-ready-panel")}
    </div>
  `;
}

function loadRazorpayCheckout() {
  if (window.Razorpay) return Promise.resolve(window.Razorpay);
  if (razorpayCheckoutPromise) return razorpayCheckoutPromise;

  razorpayCheckoutPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => window.Razorpay ? resolve(window.Razorpay) : reject(new Error("Razorpay checkout failed to load."));
    script.onerror = () => reject(new Error("Razorpay checkout script could not be loaded."));
    document.head.appendChild(script);
  });

  return razorpayCheckoutPromise;
}

function setRazorpayButtonState(button, message, isDisabled = false) {
  const panel = button.closest(".payment-ready-panel");
  const status = panel?.querySelector("[data-razorpay-status]");
  if (status) status.textContent = message || "";
  button.disabled = isDisabled;
  button.classList.toggle("is-loading", isDisabled);
}

async function createRazorpayOrder(payment) {
  const response = await fetch(razorpayOrderEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bookingId: payment.bookingId,
      amountPaise: payment.amountPaise,
      service: payment.service
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok || !result.order?.id) {
    throw new Error(result.error || "Could not create Razorpay order.");
  }
  return result.order;
}

async function verifyRazorpayPayment(responsePayload, payment) {
  const response = await fetch(razorpayVerifyEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bookingId: payment.bookingId,
      razorpay_order_id: responsePayload.razorpay_order_id,
      razorpay_payment_id: responsePayload.razorpay_payment_id,
      razorpay_signature: responsePayload.razorpay_signature
    })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.verified) {
    throw new Error(result.error || "Payment verification failed.");
  }
  return result;
}

function openRazorpayCheckout(order, payment, button) {
  const checkout = new window.Razorpay({
    key: razorpayKeyId,
    amount: order.amount,
    currency: order.currency || "INR",
    name: "Bandevi Astro",
    description: `${payment.service} | ${payment.bookingId}`,
    image: "https://bandeviastro.com/assets/bandevi-favicon.png",
    order_id: order.id,
    prefill: {
      name: payment.name || "",
      email: payment.email || "",
      contact: payment.phone || ""
    },
    notes: {
      booking_id: payment.bookingId,
      service: payment.service || ""
    },
    theme: {
      color: "#5b1220"
    },
    handler: async (razorpayResponse) => {
      try {
        setRazorpayButtonState(button, "Verifying payment...", true);
        const verified = await verifyRazorpayPayment(razorpayResponse, payment);
        button.textContent = "Payment verified";
        setRazorpayButtonState(button, `Payment verified. ID: ${verified.paymentId}`, true);
      } catch (error) {
        setRazorpayButtonState(button, error.message || "Payment verification failed.", false);
      }
    },
    modal: {
      ondismiss: () => {
        setRazorpayButtonState(button, "Payment window closed before completion.", false);
      }
    }
  });

  checkout.open();
}

async function handleRazorpayButtonClick(button) {
  let payment;
  try {
    payment = JSON.parse(button.dataset.payment || "{}");
  } catch {
    setRazorpayButtonState(button, "Payment details are not readable.", false);
    return;
  }

  if (!razorpayKeyId) {
    setRazorpayButtonState(button, "Razorpay public key is not configured.", false);
    return;
  }

  if (!payment.bookingId || !payment.amountPaise) {
    setRazorpayButtonState(button, "Exact payment amount is required.", false);
    return;
  }

  try {
    setRazorpayButtonState(button, `Opening Razorpay for ${payment.amountDisplay}...`, true);
    await loadRazorpayCheckout();
    const order = await createRazorpayOrder(payment);
    button.disabled = false;
    openRazorpayCheckout(order, payment, button);
  } catch (error) {
    setRazorpayButtonState(button, error.message || "Razorpay could not be opened.", false);
  }
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, "\"\"")}"`;
}

function downloadBookingsCsv(bookings, filenamePrefix = "bandevi-bookings") {
  const exportRows = [
    [
      "Booking ID",
      "Customer",
      "Phone",
      "Email",
      "Country",
      "Service",
      "Status",
      "Payment",
      "Payment Option",
      "MRP",
      "Offer Price",
      "Discount",
      "Final Quote",
      "Payment Link",
      "Date / Time",
      "Mode",
      "Concern",
      "Staff Note",
      "Proof Link",
      "Created",
      "Updated"
    ],
    ...bookings.map((booking) => [
      booking.id,
      booking.name,
      booking.phone,
      booking.email || "",
      booking.country || "",
      booking.service,
      booking.status,
      booking.paymentStatus,
      getBookingPaymentMethod(booking),
      booking.mrpPrice || "",
      booking.offerPrice || "",
      booking.discountPrice || "",
      booking.amount || "",
      getBookingPaymentLink(booking),
      formatBookingDate(booking),
      booking.mode || "",
      booking.concern || "",
      booking.staffNote || "",
      booking.proofUrl || "",
      booking.createdAt || "",
      booking.updatedAt || ""
    ])
  ];
  const csv = exportRows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `${filenamePrefix}-${date}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getServiceProfile(serviceName) {
  const service = serviceName || "";
  const matchedRule = serviceProfileRules.find((rule) => rule.test(service));
  const fallbackQuote = serviceStartingPrices[service] || "Clear quote before payment";
  return matchedRule || {
    title: "Premium spiritual service booking",
    body: "Best for a personal consultation, pooja, astrology, vastu, muhurat or spiritual guidance request.",
    quote: fallbackQuote,
    proof: "Update shared by staff after confirmation",
    details: "Name, contact, country, preferred date and concern"
  };
}

function getStatusGuidance(booking) {
  const amount = booking?.amount || booking?.offerPrice || getServiceProfile(booking?.service).quote;
  const scheduleLabel = formatBookingDate(booking);
  const proofLabel = booking?.proofUrl
    ? "Proof/update link is ready in your booking panel."
    : "Proof, photos, video or completion note will be shared where applicable.";
  const paymentLabel = getVisiblePaymentLink(booking)
    ? "Payment link is ready in your booking panel. Please pay only after confirming the quote and Booking ID."
    : "Payment is pending after quote approval. Staff will confirm the payment method or link before collection.";
  const guidance = {
    "Enquiry Received": "Your request is received. The team will review details and share the right quote, schedule and payment process.",
    "Quote Sent": `Quote is ready: ${amount}. Please confirm on WhatsApp before making payment.`,
    "Payment Pending": paymentLabel,
    "Confirmed": "Your booking is confirmed. The team is preparing the schedule, pandit assignment or consultation slot.",
    "Pooja Scheduled": `Your service is scheduled for ${scheduleLabel}. Please keep your phone available for final coordination and proof updates.`,
    "Completed": `Your service is marked completed. ${proofLabel}`
  };
  return guidance[booking?.status] || "The team will share the next update soon.";
}

function formatBookingDate(booking) {
  const date = booking?.date || "Flexible";
  const time = booking?.time || "Flexible";
  return `${date} / ${time}`;
}

function readBookings() {
  try {
    return JSON.parse(localStorage.getItem(bookingStorageKey) || "[]");
  } catch {
    return [];
  }
}

function writeBookings(bookings) {
  try {
    localStorage.setItem(bookingStorageKey, JSON.stringify(bookings));
  } catch {
    // Local storage can be unavailable in some private browser modes.
  }
}

function generateBookingId() {
  const datePart = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BA-${datePart}-${randomPart}`;
}

function normalizeContact(value) {
  return (value || "").toLowerCase().replace(/[^a-z0-9@.]/g, "");
}

function normalizePhoneDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function saveBooking(booking) {
  const bookings = readBookings();
  const index = bookings.findIndex((item) => item.id === booking.id);
  if (index >= 0) {
    bookings[index] = booking;
  } else {
    bookings.unshift(booking);
  }
  writeBookings(bookings);
}

function findBooking(bookingId, contactValue) {
  const id = (bookingId || "").trim().toUpperCase();
  const contact = normalizeContact(contactValue);
  return readBookings().find((booking) => {
    if (booking.id !== id) return false;
    if (!contact) return true;
    if (contact.length < 3) return false;
    const contactValues = [booking.phone, booking.email]
      .map(normalizeContact)
      .filter((value) => value.length >= 3);
    return contactValues.some((value) => value.includes(contact) || contact.includes(value));
  });
}

function statusIndex(status) {
  return Math.max(0, bookingStatuses.indexOf(status));
}

function getBookingProgressPercent(booking) {
  const currentIndex = statusIndex(booking?.status);
  return Math.round(((currentIndex + 1) / bookingStatuses.length) * 100);
}

function getDaysUntilBooking(booking) {
  if (!booking?.date) return null;
  const targetDate = new Date(`${booking.date}T00:00:00`);
  if (Number.isNaN(targetDate.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((targetDate - today) / 86400000);
}

function getBookingPriority(booking) {
  const daysUntilBooking = getDaysUntilBooking(booking);

  if (booking?.status === "Completed") {
    return {
      label: "Completed",
      detail: "Proof, notes and booking history can stay available for the client.",
      tone: "complete"
    };
  }

  if (booking?.paymentStatus === "Refund Requested") {
    return {
      label: "Refund attention",
      detail: "Review the refund request and update the customer note clearly.",
      tone: "urgent"
    };
  }

  if (daysUntilBooking !== null && daysUntilBooking < 0) {
    return {
      label: "Date passed",
      detail: "Check whether this service is completed, rescheduled or still pending.",
      tone: "urgent"
    };
  }

  if (daysUntilBooking !== null && daysUntilBooking <= 1 && booking?.status !== "Pooja Scheduled") {
    return {
      label: "Due soon",
      detail: "Preferred date is close. Confirm quote, payment and schedule quickly.",
      tone: "urgent"
    };
  }

  if (booking?.status === "Enquiry Received") {
    return {
      label: "New enquiry",
      detail: "Review details, confirm quote and move the client to Quote Sent.",
      tone: "new"
    };
  }

  if (booking?.paymentStatus === "Payment Pending") {
    return {
      label: "Payment follow-up",
      detail: "Client has reached the payment stage; confirm method and receipt.",
      tone: "payment"
    };
  }

  if (booking?.status === "Quote Sent") {
    return {
      label: "Quote follow-up",
      detail: "Confirm client approval on WhatsApp before moving to payment.",
      tone: "quote"
    };
  }

  return {
    label: "On track",
    detail: "Keep the status, proof link and customer note updated.",
    tone: "normal"
  };
}

function renderProgressBar(booking, label = "Booking progress") {
  const progress = getBookingProgressPercent(booking);
  return `
    <div class="portal-progress" role="progressbar" aria-label="${escapeHtml(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
      <div class="portal-progress-head">
        <span>${escapeHtml(label)}</span>
        <strong>${progress}%</strong>
      </div>
      <span class="portal-progress-track"><span style="width: ${progress}%"></span></span>
    </div>
  `;
}

function renderCompactStatusRail(booking, className = "compact-status-rail") {
  const currentIndex = statusIndex(booking?.status);
  return `
    <ol class="${escapeHtml(className)}" aria-label="Booking status progress">
      ${bookingStatuses.map((status, index) => {
        const stateClass = index < currentIndex ? "is-complete" : index === currentIndex ? "is-current" : "";
        return `<li class="${stateClass}"><span>${index + 1}</span><strong>${escapeHtml(status)}</strong></li>`;
      }).join("")}
    </ol>
  `;
}

function renderCustomerStageBoard(booking, className = "customer-stage-board") {
  const profile = getServiceProfile(booking?.service);
  const amount = booking?.amount || booking?.offerPrice || profile.quote || "Quote under review";
  const scheduleValue = formatBookingDate(booking);
  const modeValue = booking?.mode || "Mode to be confirmed";
  const proofValue = booking?.proofUrl
    ? `<a href="${escapeHtml(safeExternalUrl(booking.proofUrl))}" target="_blank" rel="noopener">Open proof/update</a>`
    : profile.proof || "Proof update pending";
  const teamNote = booking?.staffNote || "Staff update will appear here after review.";
  const cards = [
    ["Quote", amount, booking?.status === "Enquiry Received" ? "Under staff review" : "Shared or ready for confirmation"],
    ["Payment", booking?.paymentStatus || "Not Requested", "Collected only after clear quote confirmation"],
    ["Schedule", scheduleValue, modeValue],
    ["Proof", proofValue, booking?.proofUrl ? "Client proof is available" : "Photos, video, report or note where applicable"],
    ["Team note", teamNote, "Latest staff-facing update for the client"]
  ];

  return `
    <div class="${escapeHtml(className)}" aria-label="Booking operation details">
      ${cards.map(([label, value, detail]) => {
        const valueMarkup = String(value).startsWith("<a ") ? value : escapeHtml(value);
        return `
          <article>
            <span>${escapeHtml(label)}</span>
            <strong>${valueMarkup}</strong>
            <p>${escapeHtml(detail)}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

async function getCurrentUser() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) return null;
  return data?.user || null;
}

function toCloudDateValue(value) {
  const date = String(value || "").trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : null;
}

function toCloudTimeValue(value) {
  const time = String(value || "").trim();
  return /^\d{2}:\d{2}/.test(time) ? time.slice(0, 5) : null;
}

function toCloudBooking(booking, user) {
  const staffNote = serializeStaffNoteBookingMeta(booking.staffNote, booking);
  const payload = {
    booking_code: booking.id,
    customer_name: booking.name,
    phone: booking.phone,
    email: booking.email || null,
    country: booking.country || null,
    service: booking.service,
    preferred_date: toCloudDateValue(booking.date),
    preferred_time: toCloudTimeValue(booking.time),
    mode: booking.mode || null,
    concern: booking.concern || null,
    status: booking.status,
    payment_status: booking.paymentStatus,
    amount: booking.amount || null,
    proof_url: booking.proofUrl || null,
    staff_note: staffNote || null,
    customer_user_id: user?.id || booking.customerUserId || null,
    created_at: booking.createdAt,
    updated_at: booking.updatedAt
  };

  if (siteConfig.paymentLinkColumnEnabled) {
    payload.payment_link = booking.paymentLink || null;
  }

  if (siteConfig.priceBreakdownColumnEnabled) {
    payload.mrp_price = booking.mrpPrice || null;
    payload.offer_price = booking.offerPrice || null;
    payload.discount_price = booking.discountPrice || null;
  }

  return payload;
}

function fromCloudBooking(row) {
  const preferredTime = row.preferred_time ? String(row.preferred_time).slice(0, 5) : "";
  const parsedStaffNote = parseStaffNoteBookingMeta(row.staff_note || row.staffNote || "");

  return {
    id: row.booking_code || row.id,
    name: row.customer_name || row.name || "",
    phone: row.phone || "",
    email: row.email || "",
    country: row.country || "",
    service: row.service || "",
    date: row.preferred_date || row.date || "",
    time: preferredTime || row.time || "",
    mode: row.mode || "",
    concern: row.concern || "",
    status: row.status || "Enquiry Received",
    paymentStatus: row.payment_status || row.paymentStatus || "Not Requested",
    amount: row.amount || "",
    mrpPrice: row.mrp_price || row.mrpPrice || parsedStaffNote.mrpPrice || "",
    offerPrice: row.offer_price || row.offerPrice || parsedStaffNote.offerPrice || "",
    discountPrice: row.discount_price || row.discountPrice || parsedStaffNote.discountPrice || "",
    paymentMethod: row.payment_method || row.paymentMethod || parsedStaffNote.paymentMethod || defaultPaymentMethod,
    paymentLink: row.payment_link || row.paymentLink || parsedStaffNote.paymentLink || "",
    proofUrl: row.proof_url || row.proofUrl || "",
    staffNote: parsedStaffNote.note,
    customerUserId: row.customer_user_id || row.customerUserId || null,
    createdAt: row.created_at || row.createdAt || new Date().toISOString(),
    updatedAt: row.updated_at || row.updatedAt || row.created_at || new Date().toISOString(),
    cloudSynced: true
  };
}

async function saveBookingOnline(booking) {
  saveBooking({ ...booking, cloudSynced: false });

  if (!isCloudEnabled()) {
    return { savedCloud: false, mode: "local" };
  }

  try {
    const user = await getCurrentUser();
    const cloudBooking = toCloudBooking(booking, user);
    const { error } = await supabaseClient.from("bookings").insert(cloudBooking);
    if (error) throw error;

    const syncedBooking = { ...booking, customerUserId: user?.id || null, cloudSynced: true };
    saveBooking(syncedBooking);
    return { savedCloud: true, mode: "cloud" };
  } catch (error) {
    console.warn("Booking cloud sync failed", error);
    return { savedCloud: false, mode: "local", error };
  }
}

async function findBookingOnline(bookingId, contactValue) {
  const localBooking = findBooking(bookingId, contactValue);
  const contact = normalizeContact(contactValue);

  if (!isCloudEnabled() || !contact) {
    return localBooking || null;
  }

  try {
    const { data, error } = await supabaseClient.rpc("lookup_booking", {
      p_booking_code: (bookingId || "").trim().toUpperCase(),
      p_contact: contactValue || ""
    });
    if (error) throw error;

    const row = Array.isArray(data) ? data[0] : data;
    return row ? fromCloudBooking(row) : localBooking || null;
  } catch (error) {
    console.warn("Booking lookup failed", error);
    return localBooking || null;
  }
}

async function readBookingsOnline() {
  if (!isCloudEnabled()) {
    return { bookings: readBookings(), source: "local" };
  }

  try {
    const { data, error } = await supabaseClient
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return { bookings: (data || []).map(fromCloudBooking), source: "cloud" };
  } catch (error) {
    console.warn("Admin cloud read failed", error);
    return { bookings: readBookings(), source: "local", error };
  }
}

async function updateBookingOnline(booking) {
  booking.updatedAt = new Date().toISOString();
  saveBooking(booking);
  const staffNote = serializeStaffNoteBookingMeta(booking.staffNote, booking);

  if (!isCloudEnabled()) {
    return { savedCloud: false, mode: "local" };
  }

  const updatePayload = {
    preferred_date: toCloudDateValue(booking.date),
    preferred_time: toCloudTimeValue(booking.time),
    mode: booking.mode || null,
    status: booking.status,
    payment_status: booking.paymentStatus,
    amount: booking.amount || null,
    proof_url: booking.proofUrl || null,
    staff_note: staffNote || null,
    updated_at: booking.updatedAt
  };

  if (siteConfig.paymentLinkColumnEnabled) {
    updatePayload.payment_link = booking.paymentLink || null;
  }

  if (siteConfig.priceBreakdownColumnEnabled) {
    updatePayload.mrp_price = booking.mrpPrice || null;
    updatePayload.offer_price = booking.offerPrice || null;
    updatePayload.discount_price = booking.discountPrice || null;
  }

  const { error } = await supabaseClient
    .from("bookings")
    .update(updatePayload)
    .eq("booking_code", booking.id);

  if (error) throw error;
  return { savedCloud: true, mode: "cloud" };
}

function bookingWhatsAppUrl(booking) {
  const message = [
    "Namaste Pdt. Jyotishacharya Kumodanand Jha (Shastri) team,",
    "",
    "I created a booking request on bandeviastro.com.",
    `Booking ID: ${booking.id}`,
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Email: ${booking.email || "Not shared"}`,
    `Country: ${booking.country || "Not shared"}`,
    `Service: ${booking.service}`,
    `Preferred date: ${booking.date || "Flexible"}`,
    `Preferred time: ${booking.time || "Flexible"}`,
    `Mode: ${booking.mode}`,
    `Payment option: ${getBookingPaymentMethod(booking)}`,
    `Concern: ${booking.concern || "Please call me to discuss."}`,
    "",
    "Please confirm quote, schedule and payment process."
  ].join("\n");
  return `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;
}

function getStaffTemplateMessage(booking, templateKey = "status") {
  const pricingLines = pricingLinesForMessage(booking);
  const baseLines = [
    `Namaste ${booking.name},`,
    "",
    "Bandevi Astro booking update:",
    `Booking ID: ${booking.id}`,
    `Service: ${booking.service}`,
    `Payment option: ${getBookingPaymentMethod(booking)}`
  ];

  const templateLines = {
    quote: [
      "Your details have been reviewed and the quote is ready.",
      ...pricingLines,
      "Please confirm the service, date and payment process on WhatsApp before making payment."
    ],
    payment: [
      "Your booking has reached the payment stage.",
      ...pricingLines,
      getBookingPaymentLink(booking)
        ? `Payment link: ${getBookingPaymentLink(booking)}`
        : "Payment link/method will be shared after staff confirms the quote.",
      "Please share payment confirmation after transfer so the team can update your booking."
    ],
    received: [
      "Payment confirmation has been received.",
      "The team will now confirm schedule, preparation details and next steps."
    ],
    scheduled: [
      "Your service has been scheduled.",
      `Date / time: ${formatBookingDate(booking)}`,
      "Please keep your Booking ID ready for any follow-up."
    ],
    proof: [
      "Proof or completion update is ready where applicable.",
      booking.proofUrl ? `Proof link: ${booking.proofUrl}` : "The team will share proof/link shortly if applicable."
    ],
    completed: [
      "Your service is marked completed.",
      "Please check the proof/update and message us if you need any follow-up."
    ],
    status: [
      `Current status: ${booking.status}`,
      `Payment status: ${booking.paymentStatus}`,
      ...pricingLines,
      "",
      getStatusGuidance(booking)
    ]
  };

  return [...baseLines, "", ...(templateLines[templateKey] || templateLines.status)].join("\n");
}

function staffWhatsAppUrl(booking, templateKey = "status") {
  const phone = normalizeContact(booking.phone).replace(/[^0-9]/g, "");
  const message = getStaffTemplateMessage(booking, templateKey);
  return `https://wa.me/${phone || businessWhatsApp}?text=${encodeURIComponent(message)}`;
}

function renderTicket(booking, syncResult = {}) {
  const ticket = document.querySelector("#portalTicket");
  const ticketId = document.querySelector("#ticketId");
  const ticketSummary = document.querySelector("#ticketSummary");
  const ticketTrackLink = document.querySelector("#ticketTrackLink");
  const ticketWhatsApp = document.querySelector("#ticketWhatsApp");
  const ticketSyncNote = document.querySelector("#ticketSyncNote");
  const ticketNextSteps = document.querySelector("#ticketNextSteps");
  if (!ticket || !ticketId || !ticketSummary || !ticketTrackLink || !ticketWhatsApp) return;

  const paymentMethod = getBookingPaymentMethod(booking);
  ticket.classList.add("is-visible");
  ticketId.textContent = booking.id;
  ticketSummary.textContent = `${booking.service} request created for ${booking.name}. Status: ${booking.status}. This is not final confirmation until staff reviews quote, schedule and payment option.`;
  ticketTrackLink.href = `track-booking.html?id=${encodeURIComponent(booking.id)}`;
  ticketWhatsApp.href = bookingWhatsAppUrl(booking);
  if (ticketCopyButton) {
    ticketCopyButton.dataset.bookingId = booking.id;
    ticketCopyButton.textContent = "Copy Booking ID";
  }

  if (ticketDetails) {
    const detailItems = [
      ["Service", booking.service],
      ["Final Quote", booking.amount || booking.offerPrice || "Quote pending"],
      ["Date / time", formatBookingDate(booking)],
      ["Mode", booking.mode],
      ["Payment status", booking.paymentStatus],
      ["Payment option", paymentMethod],
      ["Next action", getStatusGuidance(booking)]
    ];
    ticketDetails.innerHTML = detailItems.map(([label, value]) => `
      <div>
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `).join("");
  }

  if (ticketNextSteps) {
    ticketNextSteps.innerHTML = `
      ${renderProgressBar(booking, "Booking flow")}
      ${renderPaymentChoiceBoard(booking, "payment-choice-panel ticket-payment-choice")}
      <div class="ticket-step-grid" aria-label="Next booking steps">
        <div><span>1</span><strong>Send ID on WhatsApp</strong><p>Share ${escapeHtml(booking.id)} so staff can confirm quickly.</p></div>
        <div><span>2</span><strong>Staff review</strong><p>Amount, schedule and selected ${escapeHtml(paymentMethod)} route are checked before payment.</p></div>
        <div><span>3</span><strong>Track status</strong><p>Use this ID anytime for quote, payment, schedule and proof updates.</p></div>
      </div>
    `;
  }

  if (ticketSyncNote) {
    if (syncResult.savedCloud) {
      ticketSyncNote.textContent = "Saved to the secure booking system for staff updates across devices.";
    } else if (syncResult.error) {
      ticketSyncNote.textContent = "Booking request created. Send it on WhatsApp now; the team can confirm quote, payment option and status.";
    } else {
      ticketSyncNote.textContent = "Booking request created. Send it on WhatsApp now; secure account tracking will activate shortly.";
    }
  }
}

function renderStatusPanel(booking) {
  const statusPanel = document.querySelector("#statusPanel");
  const statusMessage = document.querySelector("#statusMessage");
  const statusTimeline = document.querySelector("#statusTimeline");
  const statusMeta = document.querySelector("#statusMeta");
  const statusWhatsApp = document.querySelector("#statusWhatsApp");
  const statusNextAction = document.querySelector("#statusNextAction");
  const statusStageBoard = document.querySelector("#statusStageBoard");
  const statusPaymentAction = document.querySelector("#statusPaymentAction");
  if (!statusPanel || !statusMessage || !statusTimeline || !statusMeta || !statusWhatsApp) return;

  if (!booking) {
    statusPanel.classList.add("is-visible");
    statusMessage.textContent = "No booking record found for this Booking ID and contact. Please check the details or send the Booking ID on WhatsApp for staff confirmation.";
    if (statusNextAction) {
      statusNextAction.innerHTML = `<strong>Next action</strong><p>Check the Booking ID, use the same phone/email, or message the team on WhatsApp.</p>`;
    }
    statusTimeline.innerHTML = "";
    statusMeta.innerHTML = "";
    if (statusStageBoard) statusStageBoard.innerHTML = "";
    if (statusPaymentAction) statusPaymentAction.innerHTML = "";
    statusWhatsApp.href = `https://wa.me/${businessWhatsApp}`;
    return;
  }

  const currentIndex = statusIndex(booking.status);
  const serviceProfile = getServiceProfile(booking.service);
  const priority = getBookingPriority(booking);
  statusPanel.classList.add("is-visible");
  statusMessage.textContent = `Booking ${booking.id} is currently: ${booking.status}.`;
  if (statusNextAction) {
    statusNextAction.innerHTML = `
      <div class="status-progress-head">
        <strong>Next action</strong>
        <span>${escapeHtml(priority.label)}</span>
      </div>
      <p>${escapeHtml(getStatusGuidance(booking))}</p>
      ${renderProgressBar(booking, "Overall status")}
      <span>${escapeHtml(serviceProfile.proof)}</span>
    `;
  }
  if (statusStageBoard) {
    statusStageBoard.innerHTML = renderCustomerStageBoard(booking);
  }
  if (statusPaymentAction) {
    statusPaymentAction.innerHTML = renderPaymentReadyPanel(booking);
  }
  statusTimeline.innerHTML = bookingStatuses.map((status, index) => {
    const stateClass = index < currentIndex ? "is-complete" : index === currentIndex ? "is-current" : "";
    const timelineText = index < currentIndex
      ? "Completed in your booking flow."
      : index === currentIndex
        ? getStatusGuidance({ ...booking, status })
        : "Next step after staff update.";
    return `<li class="${stateClass}"><span class="status-dot">${index + 1}</span><div><strong>${escapeHtml(status)}</strong><p>${escapeHtml(timelineText)}</p></div></li>`;
  }).join("");

  const pricing = getBookingPriceBreakdown(booking, serviceProfile.quote || "Quote pending");
  const metaItems = [
    ["Service", booking.service],
    ["Payment status", booking.paymentStatus],
    ["Payment option", getBookingPaymentMethod(booking)],
    ["MRP", pricing.mrpPrice || "To be confirmed"],
    ["Offer Price", pricing.offerPrice || "Quote pending"],
    ["Discount", pricing.discountPrice || "Staff offer pending"],
    ["Final Quote", pricing.amount || "Quote pending"],
    ["Date / time", formatBookingDate(booking)],
    ["Mode", booking.mode],
    ["Staff priority", `${priority.label}: ${priority.detail}`],
    ["Updated", new Date(booking.updatedAt).toLocaleString()]
  ];

  if (booking.staffNote) {
    metaItems.push(["Team update", booking.staffNote]);
  }

  const paymentLink = getVisiblePaymentLink(booking);
  if (paymentLink) {
    metaItems.push(["Payment link", `<a href="${escapeHtml(paymentLink)}" target="_blank" rel="noopener">Pay Now</a>`]);
  }

  if (booking.proofUrl) {
    metaItems.push(["Proof", `<a href="${escapeHtml(safeExternalUrl(booking.proofUrl))}" target="_blank" rel="noopener">Open proof</a>`]);
  }

  statusMeta.innerHTML = metaItems.map(([label, value]) => {
    const renderedValue = String(value).startsWith("<a ") ? value : escapeHtml(value);
    return `<div><span>${escapeHtml(label)}</span><strong>${renderedValue}</strong></div>`;
  }).join("");
  statusWhatsApp.href = bookingWhatsAppUrl(booking);
}

function initAdminStatusFilter() {
  if (adminStatusFilter && adminStatusFilter.dataset.ready !== "true") {
    adminStatusFilter.innerHTML = [
      `<option value="">All statuses</option>`,
      ...bookingStatuses.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`)
    ].join("");
    adminStatusFilter.dataset.ready = "true";
  }

  if (adminPaymentFilter && adminPaymentFilter.dataset.ready !== "true") {
    adminPaymentFilter.innerHTML = [
      `<option value="">All payment</option>`,
      ...paymentStatuses.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`)
    ].join("");
    adminPaymentFilter.dataset.ready = "true";
  }
}

function isDueSoonBooking(booking) {
  const days = getDaysUntilBooking(booking);
  return booking?.status !== "Completed" && days !== null && days >= 0 && days <= 2;
}

function isProofPendingBooking(booking) {
  const proofNeeded = booking?.status === "Pooja Scheduled"
    || booking?.status === "Completed"
    || booking?.paymentStatus === "Payment Received";
  return proofNeeded && !booking?.proofUrl;
}

function isPoojaHawanBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /pooja|puja|hawan|havan|jaap|path|shanti|sankalp|rudrabhishek|satyanarayan|navgraha|durga|lakshmi|ganesh|pitra|mangal|mahamrityunjay|griha|vastu/.test(text)
    && !isGemstoneBooking(booking)
    && !isProductQuoteBooking(booking);
}

function matchesStaffQueueFilter(booking, filter) {
  if (!filter || filter === "all") return true;
  if (filter === "new") return booking.status === "Enquiry Received";
  if (filter === "quote") return booking.status === "Quote Sent";
  if (filter === "payment") return booking.paymentStatus === "Payment Pending";
  if (filter === "due") return isDueSoonBooking(booking);
  if (filter === "proof") return isProofPendingBooking(booking);
  if (filter === "pooja") return isPoojaHawanBooking(booking);
  if (filter === "hawan-samagri") return isHawanSamagriBooking(booking);
  if (filter === "pooja-samagri") return isPoojaSamagriBooking(booking);
  if (filter === "mala") return isMalaBooking(booking);
  if (filter === "kundali") return isKundaliBooking(booking);
  if (filter === "gemstone") return isGemstoneBooking(booking);
  if (filter === "products") return isProductQuoteBooking(booking);
  if (filter === "nri") return isNriBooking(booking);
  if (filter === "scheduled") return booking.status === "Pooja Scheduled";
  if (filter === "completed") return booking.status === "Completed";
  return true;
}

function getStaffQueueItems(bookings) {
  return [
    ["all", "All", bookings.length, "Every booking in the desk"],
    ["new", "New", bookings.filter((booking) => matchesStaffQueueFilter(booking, "new")).length, "Needs first review"],
    ["quote", "Quote", bookings.filter((booking) => matchesStaffQueueFilter(booking, "quote")).length, "Quote sent follow-up"],
    ["payment", "Payment", bookings.filter((booking) => matchesStaffQueueFilter(booking, "payment")).length, "Payment link or receipt"],
    ["due", "Due soon", bookings.filter((booking) => matchesStaffQueueFilter(booking, "due")).length, "Date is close"],
    ["proof", "Proof", bookings.filter((booking) => matchesStaffQueueFilter(booking, "proof")).length, "Proof/update pending"],
    ["pooja", "Hawan/Pooja", bookings.filter((booking) => matchesStaffQueueFilter(booking, "pooja")).length, "Ritual service work"],
    ["hawan-samagri", "Hawan Samagri", bookings.filter((booking) => matchesStaffQueueFilter(booking, "hawan-samagri")).length, "Hawan item quotes"],
    ["pooja-samagri", "Pooja Samagri", bookings.filter((booking) => matchesStaffQueueFilter(booking, "pooja-samagri")).length, "Pooja kit quotes"],
    ["mala", "Mala", bookings.filter((booking) => matchesStaffQueueFilter(booking, "mala")).length, "Mala product quotes"],
    ["kundali", "Kundali", bookings.filter((booking) => matchesStaffQueueFilter(booking, "kundali")).length, "Birth chart and dosh"],
    ["gemstone", "Gems", bookings.filter((booking) => matchesStaffQueueFilter(booking, "gemstone")).length, "Stone and ring quote"],
    ["nri", "NRI", bookings.filter((booking) => matchesStaffQueueFilter(booking, "nri")).length, "Global family handling"]
  ];
}

function syncAdminQuickFilterButtons() {
  document.querySelectorAll("[data-admin-quick-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminQuickFilter === adminQuickFilter);
    button.setAttribute("aria-pressed", button.dataset.adminQuickFilter === adminQuickFilter ? "true" : "false");
  });
}

function applyAdminQuickFilter(filter) {
  adminQuickFilter = filter || "all";
  if (adminStatusFilter) adminStatusFilter.value = "";
  if (adminPaymentFilter) adminPaymentFilter.value = "";
  syncAdminQuickFilterButtons();
  renderAdminDashboard();
}

function getFilteredAdminBookings() {
  const query = normalizeContact(adminSearchInput?.value || "");
  const status = adminStatusFilter?.value || "";
  const paymentStatus = adminPaymentFilter?.value || "";

  return adminBookingsCache.filter((booking) => {
    const searchable = normalizeContact([
      booking.id,
      booking.name,
      booking.phone,
      booking.email,
      booking.country,
      booking.service,
      booking.mode,
      booking.concern
    ].join(" "));
    const matchesQuery = !query || searchable.includes(query);
    const matchesStatus = !status || booking.status === status;
    const matchesPayment = !paymentStatus || booking.paymentStatus === paymentStatus;
    const matchesQuickFilter = matchesStaffQueueFilter(booking, adminQuickFilter);
    return matchesQuery && matchesStatus && matchesPayment && matchesQuickFilter;
  });
}

function renderAdminStats(visibleBookings) {
  if (!adminStats) return;
  const total = adminBookingsCache.length;
  const newEnquiries = adminBookingsCache.filter((booking) => booking.status === "Enquiry Received").length;
  const pendingPayment = adminBookingsCache.filter((booking) => booking.paymentStatus === "Payment Pending").length;
  const quotesSent = adminBookingsCache.filter((booking) => booking.status === "Quote Sent").length;
  const scheduled = adminBookingsCache.filter((booking) => booking.status === "Pooja Scheduled").length;
  const dueSoon = adminBookingsCache.filter(isDueSoonBooking).length;
  const proofPending = adminBookingsCache.filter(isProofPendingBooking).length;
  const kundaliQueue = adminBookingsCache.filter(isKundaliBooking).length;
  const gemstoneQueue = adminBookingsCache.filter(isGemstoneBooking).length;
  const completed = adminBookingsCache.filter((booking) => booking.status === "Completed").length;
  const stats = [
    ["Total", total],
    ["Visible", visibleBookings.length],
    ["New", newEnquiries],
    ["Quote sent", quotesSent],
    ["Payment pending", pendingPayment],
    ["Due soon", dueSoon],
    ["Proof pending", proofPending],
    ["Kundali", kundaliQueue],
    ["Gemstones", gemstoneQueue],
    ["Scheduled", scheduled],
    ["Completed", completed]
  ];

  adminStats.innerHTML = stats.map(([label, value]) => `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");

  if (adminSourceStrip) {
    const sourceLabel = adminBookingsSource === "cloud"
      ? "Secure shared booking desk connected"
      : "Local preview mode - connect shared database for staff devices";
    const visibleLabel = visibleBookings.length === total
      ? "Showing all bookings"
      : `Showing ${visibleBookings.length} of ${total}`;
    adminSourceStrip.innerHTML = `
      <span>${escapeHtml(sourceLabel)}</span>
      <strong>${escapeHtml(visibleLabel)}</strong>
    `;
  }
}

function renderStaffQueueBoard() {
  if (!adminQueueBoard) return;
  adminQueueBoard.innerHTML = getStaffQueueItems(adminBookingsCache).map(([key, label, value, detail]) => `
    <button type="button" data-admin-quick-filter="${escapeHtml(key)}" class="${adminQuickFilter === key ? "is-active" : ""}" aria-pressed="${adminQuickFilter === key ? "true" : "false"}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(detail)}</small>
    </button>
  `).join("");
  syncAdminQuickFilterButtons();
}

function renderAdminWorkflowButtons(booking) {
  return `
    <div class="admin-workflow-strip" aria-label="Quick booking workflow">
      <span>Quick workflow</span>
      ${adminWorkflowActions.map((action) => `
        <button type="button" data-admin-workflow="${escapeHtml(action.key)}" data-booking-id="${escapeHtml(booking.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderAdminTemplateLinks(booking) {
  const templates = [
    ["quote", "Quote"],
    ["payment", "Payment"],
    ["received", "Receipt"],
    ["scheduled", "Schedule"],
    ["proof", "Proof"],
    ["completed", "Complete"]
  ];

  return `
    <div class="admin-template-row" aria-label="WhatsApp message templates">
      <span>WhatsApp templates</span>
      ${templates.map(([key, label]) => `
        <a href="${escapeHtml(staffWhatsAppUrl(booking, key))}" target="_blank" rel="noopener">${escapeHtml(label)}</a>
      `).join("")}
    </div>
  `;
}

function pricingPackageToCloudRow(item) {
  return {
    id: item.id,
    title: item.title,
    service: item.service,
    mode: item.mode,
    category: item.category,
    mrp_price: item.mrpPrice,
    offer_price: item.offerPrice,
    discount_price: item.discountPrice,
    final_quote: item.amount,
    sort_order: item.sortOrder || 0,
    is_active: item.isActive !== false
  };
}

function pricingPackageFromCloudRow(row) {
  return {
    id: row.id,
    title: row.title,
    service: row.service,
    mode: row.mode,
    category: row.category,
    mrpPrice: row.mrp_price,
    offerPrice: row.offer_price,
    discountPrice: row.discount_price,
    amount: row.final_quote,
    productStatus: row.product_status || "",
    quoteNote: row.quote_note || "",
    sortOrder: row.sort_order,
    isActive: row.is_active
  };
}

async function readPricingPackagesOnline() {
  if (!isCloudEnabled()) return [];
  try {
    const { data, error } = await supabaseClient
      .from("pricing_packages")
      .select("id,title,service,mode,category,mrp_price,offer_price,discount_price,final_quote,sort_order,is_active")
      .eq("is_active", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data || []).map(pricingPackageFromCloudRow).filter((item) => item.id && item.title);
  } catch (error) {
    console.warn("Pricing package cloud read failed", error);
    return [];
  }
}

async function savePricingPackagesOnline(packages) {
  if (!isCloudEnabled()) return { savedCloud: false, mode: "local" };
  if (!(await currentUserIsAdmin())) return { savedCloud: false, mode: "local" };
  try {
    const { error } = await supabaseClient
      .from("pricing_packages")
      .upsert(packages.map(pricingPackageToCloudRow), { onConflict: "id" });
    if (error) throw error;
    return { savedCloud: true, mode: "cloud" };
  } catch (error) {
    console.warn("Pricing package cloud save failed", error);
    return { savedCloud: false, mode: "local", error };
  }
}

function getPricingManagerHost(scope) {
  if (scope === "backoffice") return backofficePanel;
  return document.querySelector("#adminDashboardTools");
}

function ensurePricingManager(scope = "admin") {
  const host = getPricingManagerHost(scope);
  if (!host) return null;
  let manager = host.querySelector(`[data-package-pricing-manager="${scope}"]`);
  if (!manager) {
    manager = document.createElement("section");
    manager.className = "package-pricing-manager";
    manager.dataset.packagePricingManager = scope;
    if (scope === "backoffice" && backofficeOperations) {
      host.insertBefore(manager, backofficeOperations);
    } else {
      host.appendChild(manager);
    }
  }
  return manager;
}

function getPricingPackageDesk(item = {}) {
  const category = normalizeCatalogText(item.category || "");
  if (/mala/.test(category)) return "mala";
  if (/hawan samagri|havan samagri/.test(category)) return "hawan-samagri";
  if (/pooja samagri|puja samagri|pooja kit|puja kit/.test(category)) return "pooja-samagri";
  if (/kundali|kundli/.test(category)) return "kundali";
  if (/gemstone|gem|ratna/.test(category)) return "gemstone";

  const text = normalizeCatalogText([
    item.category,
    item.service,
    item.mode,
    item.title
  ].filter(Boolean).join(" "));

  if (/mala|rudraksha|sphatik|crystal|tulsi|sandalwood|chandan|lotus seed|kamal gatta|hakik|jap/.test(text)) {
    return "mala";
  }
  if (/hawan samagri|havan samagri|samagri product/.test(text) && /hawan|havan/.test(text)) {
    return "hawan-samagri";
  }
  if (/pooja samagri|puja samagri|pooja kit|puja kit|hindi pooja kit|kit/.test(text)) {
    return "pooja-samagri";
  }
  if (/gemstone|gem|ratna|stone|ring|pendant|ruby|manik|emerald|panna|sapphire|pukhraj|neelam|coral|moonga|pearl|moti|gomed|hessonite|lehsunia|cat.?s eye|diamond|heera|opal/.test(text)) {
    return "gemstone";
  }
  if (/kundali|kundli|janam|birth chart|dosh|dasha|rahu|ketu|shani|mangal|pitra|kaal sarp|guna|marriage kundali|focused question|full kundali/.test(text)) {
    return "kundali";
  }
  return "pooja-hawan";
}

function getPricingManagerTab(categoryId) {
  return pricingManagerTabs.find((tab) => tab.id === categoryId) || null;
}

function renderPricingCategoryOptions(selectedCategory = "") {
  const options = pricingCategoryFieldOptions.includes(selectedCategory) || !selectedCategory
    ? pricingCategoryFieldOptions
    : [selectedCategory, ...pricingCategoryFieldOptions];
  return options.map((category) => `
    <option value="${escapeHtml(category)}" ${category === selectedCategory ? "selected" : ""}>${escapeHtml(category)}</option>
  `).join("");
}

function renderProductStatusOptions(selectedStatus = "") {
  const options = productStatusOptions.includes(selectedStatus) || !selectedStatus
    ? productStatusOptions
    : [selectedStatus, ...productStatusOptions];
  return options.map((status) => `
    <option value="${escapeHtml(status)}" ${status === selectedStatus ? "selected" : ""}>${escapeHtml(status)}</option>
  `).join("");
}

function renderPricingManager(scope = "admin", message = "") {
  const manager = ensurePricingManager(scope);
  if (!manager) return;
  const packages = getPricingPackages();
  const activeCategory = pricingManagerCategoryState[scope] || "";
  const activeTab = getPricingManagerTab(activeCategory);
  const visiblePackages = activeCategory
    ? packages.filter((item) => getPricingPackageDesk(item) === activeCategory)
    : [];
  const scopeLabel = scope === "backoffice" ? "Backoffice" : "Staff";
  manager.innerHTML = `
    <div class="package-pricing-head">
      <div>
        <p class="eyebrow">Product desk</p>
        <h3>${escapeHtml(scopeLabel)} product tabs and price controls</h3>
        <p>Select one desk first. Only that product group opens, so the dashboard stays light and easy to manage.</p>
      </div>
      <div class="package-pricing-actions">
        <button type="button" class="btn btn-primary" data-package-pricing-save="${escapeHtml(scope)}">Save package prices</button>
        <button type="button" class="btn btn-secondary" data-package-pricing-reset="${escapeHtml(scope)}">Reset local prices</button>
      </div>
    </div>
    ${message ? `<p class="package-pricing-status">${escapeHtml(message)}</p>` : ""}
    <div class="package-pricing-tabs" role="tablist" aria-label="${escapeHtml(scopeLabel)} product desks">
      ${pricingManagerTabs.map((tab) => {
        const count = packages.filter((item) => getPricingPackageDesk(item) === tab.id).length;
        const isActive = activeCategory === tab.id;
        return `
          <button type="button" class="${isActive ? "is-active" : ""}" data-package-pricing-tab="${escapeHtml(scope)}" data-pricing-category="${escapeHtml(tab.id)}" aria-pressed="${isActive ? "true" : "false"}">
            <span>${escapeHtml(tab.label)}</span>
            <strong>${escapeHtml(count)}</strong>
            <small>${escapeHtml(tab.detail)}</small>
          </button>
        `;
      }).join("")}
    </div>
    ${activeCategory ? `
      <p class="package-pricing-status">Showing ${escapeHtml(visiblePackages.length)} item${visiblePackages.length === 1 ? "" : "s"} in ${escapeHtml(activeTab?.label || "selected desk")}.</p>
      <div class="package-pricing-grid">
      ${visiblePackages.map((item) => `
        <article class="package-pricing-card" data-pricing-package-id="${escapeHtml(item.id)}">
          <div class="package-pricing-card-head">
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.productStatus || "Quote after staff review")}</span>
          </div>
          <label>Package<input data-pricing-field="title" type="text" value="${escapeHtml(item.title)}" /></label>
          <label>Service<input data-pricing-field="service" type="text" value="${escapeHtml(item.service)}" /></label>
          <label>Mode<input data-pricing-field="mode" type="text" value="${escapeHtml(item.mode)}" /></label>
          <label>Desk<select data-pricing-field="category">${renderPricingCategoryOptions(item.category)}</select></label>
          <label>MRP<input data-pricing-field="mrpPrice" type="text" value="${escapeHtml(item.mrpPrice)}" /></label>
          <label>Offer Price<input data-pricing-field="offerPrice" type="text" value="${escapeHtml(item.offerPrice)}" /></label>
          <label>Discount<input data-pricing-field="discountPrice" type="text" value="${escapeHtml(item.discountPrice)}" /></label>
          <label>Final Quote<input data-pricing-field="amount" type="text" value="${escapeHtml(item.amount)}" /></label>
          <label>Product Status<select data-pricing-field="productStatus">${renderProductStatusOptions(item.productStatus)}</select></label>
          <label class="package-pricing-note-field">Quote Note<textarea data-pricing-field="quoteNote" rows="3" placeholder="What staff must confirm before payment">${escapeHtml(item.quoteNote || "")}</textarea></label>
          <a class="text-button" href="${escapeHtml(addPackageParamsToUrl("book-online.html", item))}">Create Booking ID</a>
        </article>
      `).join("")}
      </div>
    ` : `
      <div class="package-pricing-empty">
        <h4>Select a product tab</h4>
        <p>Hawan/Pooja, Hawan Samagri, Pooja Samagri, Mala, Gemstones and Kundali are separated. Click a tab to open only that product desk.</p>
      </div>
    `}
  `;
}

function collectPricingManagerPackages(manager) {
  const byId = new Map(getPricingPackages().map((item) => [item.id, { ...item }]));
  [...manager.querySelectorAll("[data-pricing-package-id]")].forEach((card) => {
    const base = findPricingPackage({ id: card.dataset.pricingPackageId }) || {};
    const next = { ...base, id: card.dataset.pricingPackageId, sortOrder: base.sortOrder || byId.size + 1, isActive: true };
    card.querySelectorAll("[data-pricing-field]").forEach((field) => {
      next[field.dataset.pricingField] = field.value.trim();
    });
    byId.set(next.id, normalizePricingPackage(next));
  });
  return [...byId.values()].sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}

async function initializePricingPackages() {
  activePricingPackages = readPricingPackages();
  enhanceBookablePackageLinks();
  const cloudPackages = await readPricingPackagesOnline();
  if (cloudPackages.length) {
    const byId = new Map(getDefaultPricingPackages().map((item) => [item.id, item]));
    const localById = new Map(activePricingPackages.map((item) => [item.id, item]));
    cloudPackages.forEach((item) => byId.set(item.id, normalizePricingPackage(item, localById.get(item.id) || byId.get(item.id) || {})));
    writePricingPackages([...byId.values()]);
    enhanceBookablePackageLinks();
    refreshProductPriceSurfaces();
  }
  renderPricingManager("admin");
  renderPricingManager("backoffice");
}

function applyAdminWorkflow(booking, actionKey) {
  const action = adminWorkflowActions.find((item) => item.key === actionKey);
  if (!action) return false;
  booking.status = action.status;
  booking.paymentStatus = action.paymentStatus;
  booking.amount = booking.amount || booking.offerPrice || getServiceProfile(booking.service).quote;
  booking.staffNote = action.note;
  return true;
}

function renderAdminDashboard() {
  if (!adminBookingList) return;
  initAdminStatusFilter();
  const bookings = getFilteredAdminBookings();
  renderAdminStats(bookings);
  renderStaffQueueBoard();
  renderPricingManager("admin");

  if (!adminBookingsCache.length) {
    const emptyMessage = adminBookingsSource === "cloud"
      ? "No bookings found in the secure booking desk yet."
      : "No secure shared bookings yet. Add shared database settings to make bookings available across staff devices.";
    adminBookingList.innerHTML = `<article><h3>No bookings yet</h3><p>${emptyMessage}</p></article>`;
    return;
  }

  if (!bookings.length) {
    adminBookingList.innerHTML = `<article><h3>No matching bookings</h3><p>Try a different search term or status filter.</p></article>`;
    return;
  }

  adminBookingList.innerHTML = bookings.map((booking) => {
    const priority = getBookingPriority(booking);
    const serviceProfile = getServiceProfile(booking.service);
    const statusOptions = bookingStatuses.map((status) => `<option value="${escapeHtml(status)}" ${booking.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("");
    const paymentOptions = paymentStatuses.map((status) => `<option value="${escapeHtml(status)}" ${booking.paymentStatus === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("");
    const paymentMethodSelectOptions = renderPaymentMethodOptions(getBookingPaymentMethod(booking));
    return `
      <article data-booking-id="${escapeHtml(booking.id)}">
        <div class="admin-booking-head">
          <div>
            <h3>${escapeHtml(booking.name)}</h3>
            <p>${escapeHtml(booking.id)} | ${escapeHtml(booking.service)}</p>
          </div>
          <span class="status-pill">${escapeHtml(booking.status)}</span>
        </div>
        <div class="admin-priority-card is-${escapeHtml(priority.tone)}">
          <strong>${escapeHtml(priority.label)}</strong>
          <p>${escapeHtml(priority.detail)}</p>
        </div>
        ${renderAdminWorkflowButtons(booking)}
        ${renderCompactStatusRail(booking, "admin-status-rail")}
        <div class="admin-client-grid">
          <div><span>Phone</span><strong>${escapeHtml(booking.phone)}</strong></div>
          <div><span>Email</span><strong>${escapeHtml(booking.email || "Not shared")}</strong></div>
          <div><span>Country</span><strong>${escapeHtml(booking.country || "Not shared")}</strong></div>
          <div><span>Date / time</span><strong>${escapeHtml(formatBookingDate(booking))}</strong></div>
          <div><span>Mode</span><strong>${escapeHtml(booking.mode || "Not selected")}</strong></div>
          <div><span>Payment option</span><strong>${escapeHtml(getBookingPaymentMethod(booking))}</strong></div>
          <div><span>Updated</span><strong>${escapeHtml(new Date(booking.updatedAt).toLocaleString())}</strong></div>
        </div>
        <div class="admin-edit-grid">
          <label>Status<select data-field="status">${statusOptions}</select></label>
          <label>Payment<select data-field="paymentStatus">${paymentOptions}</select></label>
          <label>Payment option<select data-field="paymentMethod">${paymentMethodSelectOptions}</select></label>
          <label>MRP<input data-field="mrpPrice" type="text" value="${escapeHtml(booking.mrpPrice || "")}" placeholder="Rs 7,100" /></label>
          <label>Offer Price<input data-field="offerPrice" type="text" value="${escapeHtml(booking.offerPrice || "")}" placeholder="Rs 5,100" /></label>
          <label>Discount Price<input data-field="discountPrice" type="text" value="${escapeHtml(booking.discountPrice || "")}" placeholder="Rs 2,000 off" /></label>
          <label>Final Quote<input data-field="amount" type="text" value="${escapeHtml(booking.amount || "")}" placeholder="Final quote" /></label>
          <label>Payment link<input data-field="paymentLink" type="url" value="${escapeHtml(getBookingPaymentLink(booking))}" placeholder="Razorpay, Stripe, UPI or bank payment link" /></label>
          <label>Schedule date<input data-field="date" type="date" value="${escapeHtml(booking.date || "")}" /></label>
          <label>Schedule time<input data-field="time" type="time" value="${escapeHtml(booking.time || "")}" /></label>
          <label>Service mode<input data-field="mode" type="text" value="${escapeHtml(booking.mode || "")}" placeholder="Online, temple proof, delivery..." /></label>
        </div>
        <label>Proof link<input data-field="proofUrl" type="url" value="${escapeHtml(booking.proofUrl || "")}" placeholder="Photo/video proof URL" /></label>
        <label>Customer update note<textarea data-field="staffNote" rows="3" placeholder="This note appears in customer tracking">${escapeHtml(booking.staffNote || "")}</textarea></label>
        <div class="admin-service-hints">
          <div><span>Proof plan</span><strong>${escapeHtml(serviceProfile.proof)}</strong></div>
          <div><span>Details needed</span><strong>${escapeHtml(serviceProfile.details)}</strong></div>
        </div>
        ${renderPaymentReadyPanel(booking, "payment-ready-panel admin-payment-ready-panel")}
        ${renderCustomerStageBoard(booking, "admin-stage-board")}
        <div class="admin-note-box">
          <strong>Client concern</strong>
          <p>${escapeHtml(booking.concern || "No concern added.")}</p>
        </div>
        ${renderAdminTemplateLinks(booking)}
        <div class="admin-actions">
          <button class="btn btn-primary" type="button" data-admin-save="${escapeHtml(booking.id)}">Save update</button>
          <a class="btn btn-secondary" href="${escapeHtml(staffWhatsAppUrl(booking))}" target="_blank" rel="noopener">Message client</a>
          <a class="btn btn-secondary" href="track-booking.html?id=${encodeURIComponent(booking.id)}">View tracking</a>
        </div>
      </article>
    `;
  }).join("");
}

async function renderAdminBookings() {
  if (!adminBookingList) return;
  adminBookingList.innerHTML = `<article><h3>Loading bookings</h3><p>Checking the secure booking desk.</p></article>`;

  const result = await readBookingsOnline();
  adminBookingsCache = result.bookings;
  adminBookingsSource = result.source;
  renderAdminDashboard();
}

function getBackofficeSearchText(booking) {
  return [
    booking.id,
    booking.name,
    booking.phone,
    booking.email,
    booking.country,
    booking.service,
    booking.mode,
    booking.concern,
    booking.status,
    booking.paymentStatus,
    getBookingPaymentMethod(booking),
    booking.mrpPrice,
    booking.offerPrice,
    booking.discountPrice,
    booking.amount,
    getBookingPaymentLink(booking),
    booking.staffNote
  ].join(" ").toLowerCase();
}

function isKundaliBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /kundali|kundli|janam|birth chart|dosh|dasha|rahu|ketu|shani|mangal|pitra|kaal sarp|navgraha|grah|vivah|marriage matching|guna|muhurat|upay|remedy/.test(text);
}

function isGemstoneBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /gemstone|gem|ratna|stone|ring|pendant|ruby|manik|emerald|panna|sapphire|pukhraj|neelam|coral|moonga|pearl|moti|gomed|hessonite|lehsunia|cat.?s eye|diamond|heera|opal/.test(text)
    && !isMalaBooking(booking);
}

function isMalaBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /astro mala|mala quote|rudraksha|sphatik|crystal mala|tulsi mala|sandalwood mala|chandan mala|lotus seed mala|kamal gatta mala|hakik mala|jap mala|spiritual mala/.test(text);
}

function isHawanSamagriBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /hawan samagri|havan samagri|hawan item|havan item|samidha|mango wood|peepal wood|guggul|loban|kapoor|cow ghee|ghee|bel patra|akshat|kala til|jau barley/.test(text);
}

function isPoojaSamagriBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /pooja samagri|puja samagri|pooja kit|puja kit|hindi pooja kit|ganesh pooja kit|lakshmi pooja kit|durga pooja kit|satyanarayan pooja kit|navgrah pooja kit|kumkum|haldi|chandan powder/.test(text);
}

function isProductQuoteBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return isHawanSamagriBooking(booking)
    || isPoojaSamagriBooking(booking)
    || isMalaBooking(booking)
    || /samagri -|product category|product quote|delivery country/.test(text);
}

function isNriBooking(booking) {
  const country = (booking.country || "").trim().toLowerCase();
  const isIndia = !country || ["india", "in", "bharat"].includes(country);
  return /^NRI /i.test(booking.service || "") || !isIndia;
}

function getBackofficeFilteredBookings() {
  const query = normalizeContact(backofficeSearchInput?.value || "");
  const queue = backofficeQueueFilter?.value || "all";

  return backofficeBookingsCache.filter((booking) => {
    const searchable = normalizeContact(getBackofficeSearchText(booking));
    const matchesQuery = !query || searchable.includes(query);
    const matchesQueue = matchesStaffQueueFilter(booking, queue);

    return matchesQuery && matchesQueue;
  });
}

function renderBackofficeStats(visibleBookings) {
  if (!backofficeStats) return;
  const total = backofficeBookingsCache.length;
  const newEnquiries = backofficeBookingsCache.filter((booking) => booking.status === "Enquiry Received").length;
  const quotesSent = backofficeBookingsCache.filter((booking) => booking.status === "Quote Sent").length;
  const pendingPayment = backofficeBookingsCache.filter((booking) => booking.paymentStatus === "Payment Pending").length;
  const kundaliQueue = backofficeBookingsCache.filter(isKundaliBooking).length;
  const gemstoneQueue = backofficeBookingsCache.filter(isGemstoneBooking).length;
  const productQueue = backofficeBookingsCache.filter(isProductQuoteBooking).length;
  const hawanSamagriQueue = backofficeBookingsCache.filter(isHawanSamagriBooking).length;
  const poojaSamagriQueue = backofficeBookingsCache.filter(isPoojaSamagriBooking).length;
  const malaQueue = backofficeBookingsCache.filter(isMalaBooking).length;
  const nriQueue = backofficeBookingsCache.filter(isNriBooking).length;
  const poojaQueue = backofficeBookingsCache.filter(isPoojaHawanBooking).length;
  const dueSoon = backofficeBookingsCache.filter(isDueSoonBooking).length;
  const proofPending = backofficeBookingsCache.filter(isProofPendingBooking).length;
  const completed = backofficeBookingsCache.filter((booking) => booking.status === "Completed").length;
  const stats = [
    ["Total", total],
    ["Visible", visibleBookings.length],
    ["New", newEnquiries],
    ["Quote sent", quotesSent],
    ["Payment pending", pendingPayment],
    ["Due soon", dueSoon],
    ["Proof pending", proofPending],
    ["Pooja/Hawan", poojaQueue],
    ["Hawan Samagri", hawanSamagriQueue],
    ["Pooja Samagri", poojaSamagriQueue],
    ["Mala", malaQueue],
    ["Kundali", kundaliQueue],
    ["Gemstones", gemstoneQueue],
    ["Kits/Samagri", productQueue],
    ["Global/NRI", nriQueue],
    ["Completed", completed]
  ];

  backofficeStats.innerHTML = stats.map(([label, value]) => `
    <div>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");

  if (backofficeSourceStrip) {
    const sourceLabel = backofficeBookingsSource === "cloud"
      ? "Secure shared backoffice connected"
      : "Local preview mode - shared cloud will sync staff devices";
    const visibleLabel = visibleBookings.length === total
      ? "Showing all records"
      : `Showing ${visibleBookings.length} of ${total}`;
    backofficeSourceStrip.innerHTML = `
      <span>${escapeHtml(sourceLabel)}</span>
      <strong>${escapeHtml(visibleLabel)}</strong>
    `;
  }
}

function renderBackofficeQueueOverview() {
  if (!backofficeQueueOverview) return;
  const activeQueue = backofficeQueueFilter?.value || "all";
  const queueItems = [
    ...getStaffQueueItems(backofficeBookingsCache),
    ["products", "Kits", backofficeBookingsCache.filter(isProductQuoteBooking).length, "Samagri and kit quotes"],
    ["scheduled", "Scheduled", backofficeBookingsCache.filter((booking) => booking.status === "Pooja Scheduled").length, "Upcoming service proof"],
    ["completed", "Done", backofficeBookingsCache.filter((booking) => booking.status === "Completed").length, "Completed records"]
  ];

  backofficeQueueOverview.innerHTML = queueItems.map(([key, label, value, detail]) => `
    <button type="button" data-backoffice-queue-target="${escapeHtml(key)}" class="${activeQueue === key ? "is-active" : ""}" aria-pressed="${activeQueue === key ? "true" : "false"}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(detail)}</small>
    </button>
  `).join("");
}

function getBackofficeCustomers(bookings) {
  const groups = new Map();

  bookings.forEach((booking) => {
    const key = normalizeContact(booking.phone)
      || normalizeContact(booking.email)
      || normalizeContact(booking.name)
      || booking.id;

    if (!groups.has(key)) {
      groups.set(key, {
        name: booking.name || "Client",
        phone: booking.phone || "Not shared",
        email: booking.email || "Not shared",
        country: booking.country || "Not shared",
        bookings: [],
        active: 0,
        paymentPending: 0,
        updatedAt: booking.updatedAt || booking.createdAt
      });
    }

    const group = groups.get(key);
    group.bookings.push(booking);
    if (booking.status !== "Completed") group.active += 1;
    if (booking.paymentStatus === "Payment Pending") group.paymentPending += 1;
    if (new Date(booking.updatedAt || booking.createdAt) > new Date(group.updatedAt || 0)) {
      group.updatedAt = booking.updatedAt || booking.createdAt;
      group.name = booking.name || group.name;
      group.phone = booking.phone || group.phone;
      group.email = booking.email || group.email;
      group.country = booking.country || group.country;
    }
  });

  return [...groups.values()].sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0));
}

function renderBackofficeCustomers(bookings) {
  if (!backofficeCustomerList) return;
  const customers = getBackofficeCustomers(bookings);

  if (!customers.length) {
    backofficeCustomerList.innerHTML = `<article><h3>No customer records</h3><p>Customer records appear here after bookings are created.</p></article>`;
    return;
  }

  backofficeCustomerList.innerHTML = customers.slice(0, 12).map((customer) => {
    const latestBooking = customer.bookings.reduce((latest, booking) => (
      new Date(booking.updatedAt || booking.createdAt) > new Date(latest.updatedAt || latest.createdAt) ? booking : latest
    ), customer.bookings[0]);

    return `
      <article>
        <div class="backoffice-card-head">
          <div>
            <h3>${escapeHtml(customer.name)}</h3>
            <p>${escapeHtml(customer.country)} | ${escapeHtml(customer.phone)}</p>
          </div>
          <span class="status-pill">${escapeHtml(customer.bookings.length)} booking${customer.bookings.length === 1 ? "" : "s"}</span>
        </div>
        <div class="backoffice-mini-grid">
          <div><span>Email</span><strong>${escapeHtml(customer.email)}</strong></div>
          <div><span>Active</span><strong>${escapeHtml(customer.active)}</strong></div>
          <div><span>Payment</span><strong>${escapeHtml(customer.paymentPending)} pending</strong></div>
          <div><span>Latest</span><strong>${escapeHtml(latestBooking.service)}</strong></div>
        </div>
        <div class="backoffice-action-row">
          <a href="track-booking.html?id=${encodeURIComponent(latestBooking.id)}">Track latest</a>
          <a href="${escapeHtml(staffWhatsAppUrl(latestBooking, "status"))}" target="_blank" rel="noopener">WhatsApp update</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderBackofficeQueue(container, bookings, emptyTitle, emptyText) {
  if (!container) return;

  if (!bookings.length) {
    container.innerHTML = `<article><h3>${escapeHtml(emptyTitle)}</h3><p>${escapeHtml(emptyText)}</p></article>`;
    return;
  }

  container.innerHTML = bookings.slice(0, 10).map((booking) => {
    const profile = getServiceProfile(booking.service);
    const priority = getBookingPriority(booking);

    return `
      <article>
        <div class="backoffice-card-head">
          <div>
            <h3>${escapeHtml(booking.service)}</h3>
            <p>${escapeHtml(booking.name)} | ${escapeHtml(booking.id)}</p>
          </div>
          <span class="status-pill">${escapeHtml(priority.label)}</span>
        </div>
        <p>${escapeHtml(booking.concern || profile.body)}</p>
        <div class="backoffice-mini-grid">
          <div><span>MRP</span><strong>${escapeHtml(booking.mrpPrice || "To be confirmed")}</strong></div>
          <div><span>Offer</span><strong>${escapeHtml(booking.offerPrice || "Quote pending")}</strong></div>
          <div><span>Discount</span><strong>${escapeHtml(booking.discountPrice || "Staff offer pending")}</strong></div>
          <div><span>Final quote</span><strong>${escapeHtml(booking.amount || profile.quote)}</strong></div>
          <div><span>Date / time</span><strong>${escapeHtml(formatBookingDate(booking))}</strong></div>
          <div><span>Needed</span><strong>${escapeHtml(profile.details)}</strong></div>
          <div><span>Proof</span><strong>${escapeHtml(profile.proof)}</strong></div>
        </div>
        <div class="backoffice-action-row">
          <a href="admin-bookings.html">Update status</a>
          <a href="${escapeHtml(staffWhatsAppUrl(booking, "quote"))}" target="_blank" rel="noopener">Send quote</a>
          <a href="track-booking.html?id=${encodeURIComponent(booking.id)}">Client view</a>
        </div>
      </article>
    `;
  }).join("");
}

function getBackofficeServiceChecklist(booking) {
  if (isKundaliBooking(booking)) {
    return [
      ["Birth date", "Confirm date of birth"],
      ["Birth time", "Exact time or approximate"],
      ["Birth place", "City, state and country"],
      ["Gotra", "Family gotra if available"],
      ["Problem type", "Marriage, career, health, dosh or dasha"]
    ];
  }

  if (isGemstoneBooking(booking)) {
    return [
      ["Stone", "Ruby, emerald, sapphire or required ratna"],
      ["Form", "Ring, pendant or loose stone"],
      ["Metal", "Gold, silver or panchdhatu preference"],
      ["Size", "Ring size or pendant size"],
      ["Certificate", "Lab/certification and final quote"]
    ];
  }

  if (isProductQuoteBooking(booking)) {
    return [
      ["Product", "Kit or samagri item name"],
      ["Category", "Pooja kit or hawan samagri"],
      ["Delivery", "Country, city and dispatch option"],
      ["Availability", "Stock, quantity and alternatives"],
      ["Quote", "Final product quote before payment"]
    ];
  }

  return [
    ["Sankalp", "Name, gotra and purpose"],
    ["Ritual type", "Pooja, hawan, jaap or path"],
    ["Mode", "Temple proof, live video or consultation"],
    ["Samagri", "Items needed or provided by temple"],
    ["Schedule", "Preferred date, muhurat and time zone"]
  ];
}

function renderBackofficeChecklist(booking) {
  return `
    <div class="backoffice-checklist" aria-label="Service work checklist">
      ${getBackofficeServiceChecklist(booking).map(([label, value]) => `
        <div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>
      `).join("")}
    </div>
  `;
}

function renderBackofficeWorkflowButtons(booking) {
  return `
    <div class="admin-workflow-strip backoffice-workflow-strip" aria-label="Backoffice quick workflow">
      <span>Direct workflow</span>
      ${adminWorkflowActions.map((action) => `
        <button type="button" data-backoffice-workflow="${escapeHtml(action.key)}" data-booking-id="${escapeHtml(booking.id)}">
          ${escapeHtml(action.label)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderBackofficeTemplateLinks(booking) {
  const templates = [
    ["quote", "Quote"],
    ["payment", "Payment"],
    ["received", "Receipt"],
    ["scheduled", "Schedule"],
    ["proof", "Proof"],
    ["completed", "Complete"]
  ];

  return `
    <div class="admin-template-row backoffice-template-row" aria-label="Backoffice WhatsApp templates">
      <span>WhatsApp templates</span>
      ${templates.map(([key, label]) => `
        <a href="${escapeHtml(staffWhatsAppUrl(booking, key))}" target="_blank" rel="noopener">${escapeHtml(label)}</a>
      `).join("")}
    </div>
  `;
}

function renderBackofficeReports(bookings) {
  if (!backofficeReportList) return;
  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);
  const newThisWeek = backofficeBookingsCache.filter((booking) => new Date(booking.createdAt || booking.updatedAt) >= sevenDaysAgo).length;
  const dueSoon = backofficeBookingsCache.filter((booking) => {
    const days = getDaysUntilBooking(booking);
    return booking.status !== "Completed" && days !== null && days >= 0 && days <= 2;
  }).length;
  const datePassed = backofficeBookingsCache.filter((booking) => {
    const days = getDaysUntilBooking(booking);
    return booking.status !== "Completed" && days !== null && days < 0;
  }).length;
  const proofReady = backofficeBookingsCache.filter((booking) => booking.proofUrl).length;
  const reports = [
    ["7-day intake", newThisWeek, "New requests created this week."],
    ["Due soon", dueSoon, "Preferred date is within two days and still needs staff attention."],
    ["Date passed", datePassed, "Check completion, reschedule or customer update."],
    ["Filtered queue", bookings.length, "Current search and queue view."],
    ["Proof links", proofReady, "Bookings that already have proof or delivery links."],
    ["NRI/global", backofficeBookingsCache.filter(isNriBooking).length, "Families outside India or NRI service requests."]
  ];

  backofficeReportList.innerHTML = reports.map(([label, value, detail]) => `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <p>${escapeHtml(detail)}</p>
    </article>
  `).join("");
}

function renderBackofficeOperations(bookings) {
  if (!backofficeOperations) return;

  if (!backofficeBookingsCache.length) {
    backofficeOperations.innerHTML = `<article><h3>No bookings yet</h3><p>Operations will appear here after clients create Booking IDs.</p></article>`;
    return;
  }

  if (!bookings.length) {
    backofficeOperations.innerHTML = `<article><h3>No matching records</h3><p>Try a different search or queue filter.</p></article>`;
    return;
  }

  backofficeOperations.innerHTML = bookings.slice(0, 18).map((booking) => {
    const priority = getBookingPriority(booking);
    const serviceProfile = getServiceProfile(booking.service);
    const statusOptions = bookingStatuses.map((status) => `<option value="${escapeHtml(status)}" ${booking.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("");
    const paymentOptions = paymentStatuses.map((status) => `<option value="${escapeHtml(status)}" ${booking.paymentStatus === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("");
    const paymentMethodSelectOptions = renderPaymentMethodOptions(getBookingPaymentMethod(booking));

    return `
      <article data-backoffice-id="${escapeHtml(booking.id)}">
        <div class="backoffice-card-head">
          <div>
            <h3>${escapeHtml(booking.name)}</h3>
            <p>${escapeHtml(booking.id)} | ${escapeHtml(booking.service)}</p>
          </div>
          <span class="status-pill">${escapeHtml(booking.status)}</span>
        </div>
        <div class="admin-priority-card is-${escapeHtml(priority.tone)}">
          <strong>${escapeHtml(priority.label)}</strong>
          <p>${escapeHtml(priority.detail)}</p>
        </div>
        ${renderCompactStatusRail(booking, "admin-status-rail")}
        ${renderBackofficeWorkflowButtons(booking)}
        <div class="backoffice-mini-grid">
          <div><span>Phone</span><strong>${escapeHtml(booking.phone)}</strong></div>
          <div><span>Email</span><strong>${escapeHtml(booking.email || "Not shared")}</strong></div>
          <div><span>Country</span><strong>${escapeHtml(booking.country || "Not shared")}</strong></div>
          <div><span>Payment</span><strong>${escapeHtml(booking.paymentStatus)}</strong></div>
          <div><span>Payment option</span><strong>${escapeHtml(getBookingPaymentMethod(booking))}</strong></div>
          <div><span>MRP</span><strong>${escapeHtml(booking.mrpPrice || "To be confirmed")}</strong></div>
          <div><span>Offer</span><strong>${escapeHtml(booking.offerPrice || "Quote pending")}</strong></div>
          <div><span>Discount</span><strong>${escapeHtml(booking.discountPrice || "Staff offer pending")}</strong></div>
          <div><span>Final quote</span><strong>${escapeHtml(booking.amount || serviceProfile.quote)}</strong></div>
          <div><span>Payment link</span><strong>${escapeHtml(getBookingPaymentLink(booking) ? "Ready" : "Pending")}</strong></div>
          <div><span>Date / time</span><strong>${escapeHtml(formatBookingDate(booking))}</strong></div>
          <div><span>Mode</span><strong>${escapeHtml(booking.mode || "Not selected")}</strong></div>
          <div><span>Proof</span><strong>${escapeHtml(booking.proofUrl ? "Ready" : "Pending")}</strong></div>
        </div>
        ${renderCustomerStageBoard(booking, "backoffice-stage-board")}
        ${renderBackofficeChecklist(booking)}
        <div class="backoffice-edit-grid">
          <label>Status<select data-backoffice-field="status">${statusOptions}</select></label>
          <label>Payment<select data-backoffice-field="paymentStatus">${paymentOptions}</select></label>
          <label>Payment option<select data-backoffice-field="paymentMethod">${paymentMethodSelectOptions}</select></label>
          <label>MRP<input data-backoffice-field="mrpPrice" type="text" value="${escapeHtml(booking.mrpPrice || "")}" placeholder="Rs 7,100" /></label>
          <label>Offer Price<input data-backoffice-field="offerPrice" type="text" value="${escapeHtml(booking.offerPrice || "")}" placeholder="Rs 5,100" /></label>
          <label>Discount Price<input data-backoffice-field="discountPrice" type="text" value="${escapeHtml(booking.discountPrice || "")}" placeholder="Rs 2,000 off" /></label>
          <label>Final quote<input data-backoffice-field="amount" type="text" value="${escapeHtml(booking.amount || "")}" placeholder="${escapeHtml(serviceProfile.quote)}" /></label>
          <label>Payment link<input data-backoffice-field="paymentLink" type="url" value="${escapeHtml(getBookingPaymentLink(booking))}" placeholder="Razorpay, Stripe, UPI or bank payment link" /></label>
          <label>Schedule date<input data-backoffice-field="date" type="date" value="${escapeHtml(booking.date || "")}" /></label>
          <label>Schedule time<input data-backoffice-field="time" type="time" value="${escapeHtml(booking.time || "")}" /></label>
          <label>Service mode<input data-backoffice-field="mode" type="text" value="${escapeHtml(booking.mode || "")}" placeholder="Temple proof, live video, delivery..." /></label>
          <label>Proof link<input data-backoffice-field="proofUrl" type="url" value="${escapeHtml(booking.proofUrl || "")}" placeholder="Photo/video proof URL" /></label>
        </div>
        ${renderPaymentReadyPanel(booking, "payment-ready-panel backoffice-payment-ready-panel")}
        <label class="backoffice-note-field">Staff work note<textarea data-backoffice-field="staffNote" rows="4" placeholder="Record Kundali birth details, sankalp, samagri, gemstone quote or client update">${escapeHtml(booking.staffNote || "")}</textarea></label>
        <p>${escapeHtml(booking.concern || "No concern added yet.")}</p>
        ${renderBackofficeTemplateLinks(booking)}
        <div class="backoffice-action-row">
          <button type="button" data-backoffice-save="${escapeHtml(booking.id)}">Save update</button>
          <a href="track-booking.html?id=${encodeURIComponent(booking.id)}">Track</a>
          <a href="${escapeHtml(staffWhatsAppUrl(booking, "quote"))}" target="_blank" rel="noopener">Quote WA</a>
          <a href="${escapeHtml(staffWhatsAppUrl(booking, "payment"))}" target="_blank" rel="noopener">Payment WA</a>
          <a href="admin-bookings.html">Staff desk</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderBackofficeDashboard() {
  if (!backofficePanel) return;
  const bookings = getBackofficeFilteredBookings();
  renderBackofficeStats(bookings);
  renderBackofficeQueueOverview();
  renderPricingManager("backoffice");
  renderBackofficeOperations(bookings);
  renderBackofficeCustomers(bookings);
  renderBackofficeQueue(
    backofficeKundaliQueue,
    bookings.filter(isKundaliBooking),
    "No Kundali or Dosh queue",
    "Kundali, dasha, dosh and remedy requests will be highlighted here."
  );
  renderBackofficeQueue(
    backofficeGemstoneQueue,
    bookings.filter(isGemstoneBooking),
    "No gemstone queue",
    "Gemstone, ring, pendant and certified quote requests will be highlighted here."
  );
  renderBackofficeQueue(
    backofficeProductQueue,
    bookings.filter(isProductQuoteBooking),
    "No kit or samagri queue",
    "Hindi pooja kit, hawan samagri and product quote requests will be highlighted here."
  );
  renderBackofficeReports(bookings);
}

async function renderBackofficeBookings() {
  if (!backofficePanel) return;
  if (backofficeOperations) {
    backofficeOperations.innerHTML = `<article><h3>Loading backoffice</h3><p>Checking bookings, customer records and queues.</p></article>`;
  }

  const result = await readBookingsOnline();
  backofficeBookingsCache = result.bookings;
  backofficeBookingsSource = result.source;
  renderBackofficeDashboard();
}

function setService(serviceName) {
  if (!serviceSelect) return;
  serviceSelect.value = serviceName;
  document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => setService(button.dataset.service));
});

function getStoneQuoteProfile(stoneName) {
  const text = normalizeCatalogText(stoneName);
  const isMala = /mala|rudraksha|sphatik|crystal|tulsi|sandalwood|chandan|lotus seed|kamal gatta|hakik|jap/.test(text);
  const isPendant = text.includes("pendant");
  const isLoose = text.includes("loose");
  const isHighCaution = /neelam|blue sapphire|lehsunia|cat.?s eye|shani|ketu/.test(text);
  const profile = {
    form: isMala ? "Mala" : isPendant ? "Pendant" : isLoose ? "Loose stone" : "Ring",
    metal: "Need guidance",
    badge: "Certificate quote",
    check: "Kundli suitability, product proof and final quote before payment",
    note: "Staff will confirm available stone photo/video, certificate detail, carat or ratti, metal, delivery and policy clarity before payment."
  };

  if (isMala) {
    profile.metal = "Not required";
    profile.badge = "Mala quote";
    profile.check = "Bead type, count, purpose and delivery confirmation";
    profile.note = "Staff will confirm mala type, bead count, use guidance, packaging, delivery and final quote before payment.";
    return profile;
  }

  if (/ruby|manik|pukhraj|yellow sapphire|emerald|panna|coral|moonga/.test(text)) {
    profile.metal = "Gold";
  }
  if (/pearl|moti|neelam|blue sapphire|gomed|hessonite|lehsunia|cat.?s eye/.test(text)) {
    profile.metal = "Silver";
  }
  if (/diamond|heera|opal/.test(text)) {
    profile.metal = "Need guidance";
  }
  if (isLoose) {
    profile.metal = "Need guidance";
    profile.check = "Loose stone quality, certificate and optional setting quote";
  }
  if (isHighCaution) {
    profile.badge = "High-caution review";
    profile.check = "Suitability and trial guidance before wearing";
    profile.note = "This stone should be discussed carefully. Staff should review suitability, trial guidance, wearing method and proof before any payment.";
  }
  return profile;
}

function getStonePricingCategory(profile) {
  if (profile.form === "Mala") return "Mala";
  if (profile.form === "Loose stone") return "Loose Gemstone";
  if (profile.form === "Pendant") return "Gemstone Pendant";
  return "Gemstone Ring";
}

function getStoneProductPricing(stoneName, profile, pricingPackage = null) {
  return normalizePricingPackage(pricingPackage || getProductPricingPackage(stoneName, getStonePricingCategory(profile), {
    service: `Gemstone Quote - ${stoneName}`,
    mode: `${profile.form} / ${profile.metal} / gemstone delivery`
  }));
}

function updateStoneQuoteSummary(stoneName, pricingPackage = null) {
  if (!stoneQuoteSummary) return;
  const selectedStone = stoneName || stoneSelect?.value || "Select a gemstone product";
  const profile = getStoneQuoteProfile(selectedStone);
  const pricing = getStoneProductPricing(selectedStone, profile, pricingPackage || activeStonePricingPackage);
  stoneQuoteSummary.innerHTML = `
    <div>
      <span>${escapeHtml(profile.badge)}</span>
      <strong>${escapeHtml(selectedStone)}</strong>
      <p>${escapeHtml(profile.note)}</p>
    </div>
    ${productPricingBlock(pricing, "stone-summary-price")}
    <dl>
      <div><dt>Form</dt><dd>${escapeHtml(profile.form)}</dd></div>
      <div><dt>Metal</dt><dd>${escapeHtml(profile.metal)}</dd></div>
      <div><dt>Check</dt><dd>${escapeHtml(profile.check)}</dd></div>
    </dl>
  `;
}

function setStone(stoneName, options = {}) {
  if (!stoneName) return;
  if (!stoneSelect) {
    window.location.href = `gemstone-shop.html?stone=${encodeURIComponent(stoneName)}`;
    return;
  }
  if (![...stoneSelect.options].some((option) => option.value === stoneName)) {
    const option = new Option(stoneName, stoneName);
    stoneSelect.add(option, 0);
  }
  stoneSelect.value = stoneName;
  const stoneFormField = document.querySelector("#stoneForm");
  const stoneMetalField = document.querySelector("#stoneMetal");
  const stonePurposeField = document.querySelector("#stonePurpose");
  const stoneDeliveryField = document.querySelector("#stoneDelivery");
  const profile = getStoneQuoteProfile(stoneName);
  activeStonePricingPackage = getStoneProductPricing(stoneName, profile, options.pricingPackageId
    ? findPricingPackage({ id: options.pricingPackageId })
    : null);

  setSelectValue(stoneFormField, profile.form);
  setSelectValue(stoneMetalField, profile.metal);
  if (stonePurposeField) {
    stonePurposeField.placeholder = profile.badge === "High-caution review"
      ? "Birth date/time/place, current concern, existing recommendation and whether trial guidance is needed"
      : "Birth date/time/place, existing recommendation, purpose and any budget or certificate preference";
  }
  if (stoneDeliveryField) {
    stoneDeliveryField.placeholder = "India, USA, UK, Canada, UAE, Australia, etc.";
  }
  updateStoneQuoteSummary(stoneName, activeStonePricingPackage);
  if (stoneStatusEl) {
    stoneStatusEl.textContent = `${stoneName} selected. ${activeStonePricingPackage.offerPrice || "Staff quote"} will be confirmed before payment.`;
  }
  if (options.scroll !== false) {
    document.querySelector("#stoneOrder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.querySelectorAll("[data-stone]").forEach((button) => {
  button.addEventListener("click", () => setStone(button.dataset.stone, { pricingPackageId: button.dataset.packageBook || "" }));
});

function setSelectValue(select, value) {
  if (!select || !value) return;
  if (![...select.options].some((option) => option.value === value)) {
    select.add(new Option(value, value));
  }
  select.value = value;
}

function getPortalServiceType(serviceName) {
  const service = (serviceName || "").toLowerCase();
  if (/kundali|kundli|janam|birth chart|dosh|dasha|rahu|ketu|shani|mangal|pitra|kaal sarp|grahan|sade sati|marriage match|guna/.test(service)) {
    return "kundali";
  }
  if (/gemstone|gem|ratna|stone|ring|pendant|ruby|manik|emerald|panna|sapphire|pukhraj|neelam|coral|moonga|pearl|moti|gomed|hessonite|lehsunia|diamond|heera|opal/.test(service)) {
    return "gemstone";
  }
  if (/mala|rudraksha|sphatik|crystal|tulsi|sandalwood|chandan|lotus seed|kamal gatta|hakik|jap/.test(service)) {
    return "gemstone";
  }
  return "pooja";
}

function updatePortalServiceIntake() {
  if (!portalServiceIntake || !portalServiceField) return;
  const serviceType = getPortalServiceType(portalServiceField.value);
  const copy = {
    kundali: {
      title: "Kundali, Dosh and birth-detail intake",
      body: "Birth date, time, place and focus area help the Acharya review Kundali, dosh, dasha, marriage, career and gemstone suitability.",
      badge: "Kundali desk"
    },
    pooja: {
      title: "Pooja, Hawan and sankalp intake",
      body: "Sankalp name, gotra, proof option, purpose and samagri notes help staff confirm the correct ritual scope and quote.",
      badge: "Pooja desk"
    },
    gemstone: {
      title: "Gemstone ring and product intake",
      body: "Stone name, ring or pendant form, metal, size, budget and certificate preference help staff prepare the right quote.",
      badge: "Gemstone desk"
    }
  };

  portalServiceIntake.dataset.activeType = serviceType;
  document.querySelectorAll("[data-intake-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.intakePanel === serviceType);
  });
  if (portalIntakeTitle) portalIntakeTitle.textContent = copy[serviceType].title;
  if (portalIntakeBody) portalIntakeBody.textContent = copy[serviceType].body;
  if (portalIntakeBadge) portalIntakeBadge.textContent = copy[serviceType].badge;
}

function updateServicePreview() {
  if (!servicePreview || !portalServiceField) return;
  const service = portalServiceField.value;
  const profile = getServiceProfile(service);
  let selectedPackage = readPortalPackageSelection();
  if (selectedPackage?.service && service && selectedPackage.service !== service) {
    renderSelectedPackagePanel(null);
    selectedPackage = null;
  }
  const title = document.querySelector("#servicePreviewTitle");
  const body = document.querySelector("#servicePreviewBody");
  const quote = document.querySelector("#servicePreviewQuote");
  const proof = document.querySelector("#servicePreviewProof");
  const details = document.querySelector("#servicePreviewDetails");

  if (title) title.textContent = profile.title;
  if (body) body.textContent = profile.body;
  if (quote) quote.textContent = selectedPackage?.amount || selectedPackage?.offerPrice || profile.quote;
  if (proof) proof.textContent = profile.proof;
  if (details) details.textContent = profile.details;

  if (portalModeField && portalModeField.dataset.touched !== "true") {
    if (/gemstone|ruby|emerald|sapphire|manik|panna|pukhraj|neelam|moonga|moti|gomed|lehsunia|diamond|opal/i.test(service)) {
      portalModeField.value = "Gemstone delivery";
    } else if (/kundali|kundli|hast rekha|palmistry|vastu|muhurat/i.test(service)) {
      portalModeField.value = "Online video call";
    } else {
      portalModeField.value = "Temple pooja with proof";
    }
  }

  updatePortalServiceIntake();
}

function prefillPortalBookingFromUrl() {
  if (!portalBookingForm) return;
  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");
  const requestedMode = params.get("mode");
  const requestedConcern = params.get("concern");
  const requestedProduct = params.get("product");
  const requestedCategory = params.get("category");
  const requestedQuoteType = params.get("quoteType");
  const requestedDelivery = params.get("delivery");
  const requestedPackage = getPortalPackageFromParams();
  const portalService = document.querySelector("#portalService");
  const portalMode = document.querySelector("#portalMode");
  const portalConcern = document.querySelector("#portalConcern");
  const portalSamagri = document.querySelector("#portalSamagri");
  const portalRitualPurpose = document.querySelector("#portalRitualPurpose");
  const portalCountry = document.querySelector("#portalCountry");

  setSelectValue(portalService, requestedService);
  if (portalMode && requestedMode) {
    portalMode.dataset.touched = "true";
  }
  setSelectValue(portalMode, requestedMode);
  renderSelectedPackagePanel(requestedPackage);
  updateServicePreview();

  if (portalConcern && requestedConcern && !portalConcern.value) {
    portalConcern.value = requestedConcern;
  }

  if (requestedProduct) {
    const productLines = [
      requestedCategory ? `Product category: ${requestedCategory}` : "",
      `Product name: ${requestedProduct}`,
      requestedQuoteType ? `Quote type: ${requestedQuoteType}` : "Quote type: Product quote before payment",
      requestedDelivery ? `Delivery country: ${requestedDelivery}` : "Delivery country: To be confirmed"
    ].filter(Boolean);

    if (portalSamagri && !portalSamagri.value) {
      portalSamagri.value = productLines.join("\n");
    }
    if (portalRitualPurpose && !portalRitualPurpose.value) {
      portalRitualPurpose.value = `Product quote for ${requestedProduct}`;
    }
    if (portalCountry && requestedDelivery && requestedDelivery !== "To be confirmed" && !portalCountry.value) {
      portalCountry.value = requestedDelivery;
    }
    if (portalConcern && !portalConcern.value) {
      portalConcern.value = `${productLines.join("\n")}\nPlease confirm availability, delivery, payment step and policies before payment.`;
    }
  }
}

function applyPortalPreset(button) {
  if (!portalBookingForm || !button) return;
  const portalService = document.querySelector("#portalService");
  const portalMode = document.querySelector("#portalMode");
  const portalConcern = document.querySelector("#portalConcern");
  const portalRitualPurpose = document.querySelector("#portalRitualPurpose");
  const service = button.dataset.service || "";
  const mode = button.dataset.mode || "";
  const concern = button.dataset.concern || "";
  const packageData = button.dataset.packageBook
    ? findPricingPackage({ id: button.dataset.packageBook })
    : null;

  setSelectValue(portalService, service);
  if (portalMode && mode) {
    portalMode.dataset.touched = "true";
    setSelectValue(portalMode, mode);
  }
  if (portalConcern && concern && !portalConcern.value) {
    portalConcern.value = concern;
  }
  if (portalRitualPurpose && service && !portalRitualPurpose.value) {
    portalRitualPurpose.value = service;
  }
  renderSelectedPackagePanel(packageData);

  document.querySelectorAll("[data-portal-preset]").forEach((preset) => {
    preset.classList.toggle("is-selected", preset === button);
  });

  updateServicePreview();
  portalBookingForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function normalizeCatalogText(value) {
  return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function updateServiceFinder(finder) {
  const section = document.querySelector(finder.dataset.serviceFinder);
  if (!section) return;

  const cards = [...section.querySelectorAll(".pooja-product-card")];
  const activeFilter = finder.querySelector("[data-filter][aria-pressed='true']");
  const search = normalizeCatalogText(finder.querySelector("[data-service-search]")?.value);
  const activeCategory = activeFilter?.dataset.productCategory || "";
  const terms = activeFilter && activeFilter.dataset.filter !== "all"
    ? (activeFilter.dataset.keywords || activeFilter.dataset.filter).split(",").map(normalizeCatalogText).filter(Boolean)
    : [];
  const searchTerms = search.split(" ").filter(Boolean);
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardText = card.dataset.searchText || normalizeCatalogText(card.textContent);
    card.dataset.searchText = cardText;
    const matchesCategory = !activeCategory || card.dataset.productCategory === activeCategory;
    const matchesFilter = matchesCategory && (!terms.length || terms.some((term) => cardText.includes(term)));
    const matchesSearch = !searchTerms.length || searchTerms.every((term) => cardText.includes(term));
    const isVisible = matchesFilter && matchesSearch;
    card.classList.toggle("is-filtered-out", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  const countEl = finder.querySelector("[data-match-count]");
  if (countEl) {
    countEl.textContent = `${visibleCount} ${visibleCount === 1 ? "service" : "services"}`;
  }

  const emptyMessage = finder.querySelector("[data-empty-message]");
  if (emptyMessage) {
    emptyMessage.hidden = visibleCount !== 0;
  }

  const insight = finder.querySelector("[data-service-finder-insight]");
  if (insight && activeFilter) {
    const title = activeFilter.dataset.filterTitle || activeFilter.textContent.trim() || "Selected desk";
    const body = activeFilter.dataset.filterBody || "Choose an item from the selected desk and create a Booking ID before payment.";
    const action = activeFilter.dataset.filterAction || "Create Booking ID";
    const href = activeFilter.dataset.filterHref || "book-online.html";
    insight.innerHTML = `
      <div>
        <span>Active desk</span>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(body)} ${visibleCount} ${visibleCount === 1 ? "option is" : "options are"} visible.</p>
      </div>
      <a class="text-button" href="${escapeHtml(href)}">${escapeHtml(action)}</a>
    `;
  }
}

function initializeServiceFinders() {
  document.querySelectorAll("[data-service-finder]").forEach((finder) => {
    const buttons = [...finder.querySelectorAll("[data-filter]")];
    const searchInput = finder.querySelector("[data-service-search]");

    buttons.forEach((button) => {
      if (!button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", "false");
      }
      button.addEventListener("click", () => {
        buttons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        updateServiceFinder(finder);
      });
    });

    searchInput?.addEventListener("input", () => updateServiceFinder(finder));
    updateServiceFinder(finder);
  });
}

function setPublicProductTab(group, target) {
  if (!group || !target) return;
  const buttons = [...document.querySelectorAll(`[data-public-product-tab="${group}"]`)];
  const panels = [...document.querySelectorAll(`[data-public-product-panel="${group}"]`)];
  let visibleCount = 0;

  buttons.forEach((button) => {
    const isActive = button.dataset.publicProductTarget === target;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  panels.forEach((panel) => {
    const isVisible = panel.dataset.publicProductCategory === target;
    panel.hidden = !isVisible;
    panel.classList.toggle("is-public-product-hidden", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  document.querySelectorAll(`[data-public-product-count="${group}"]`).forEach((countEl) => {
    const activeButton = buttons.find((button) => button.dataset.publicProductTarget === target);
    countEl.textContent = activeButton?.dataset.publicProductLabel || activeButton?.textContent.trim() || "Selected desk";
    const activeNote = countEl.closest(".public-product-active")?.querySelector(`[data-public-product-note="${group}"]`);
    if (activeNote) {
      activeNote.textContent = activeButton?.dataset.publicProductBody || "Only this selected product desk is visible below.";
    }
  });
}

function initializePublicProductTabs() {
  document.querySelectorAll("[data-public-product-tabs]").forEach((tabRoot) => {
    const group = tabRoot.dataset.publicProductTabs;
    const buttons = [...tabRoot.querySelectorAll(`[data-public-product-tab="${group}"]`)];
    if (!group || !buttons.length) return;

    buttons.forEach((button) => {
      if (!button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", "false");
      }
      button.addEventListener("click", () => {
        setPublicProductTab(group, button.dataset.publicProductTarget);
      });
    });

    const hashTarget = window.location.hash ? document.querySelector(window.location.hash) : null;
    const hashPanel = hashTarget?.closest(`[data-public-product-panel="${group}"]`);
    const hashButton = hashPanel
      ? buttons.find((button) => button.dataset.publicProductTarget === hashPanel.dataset.publicProductCategory)
      : null;
    const activeButton = hashButton || buttons.find((button) => button.classList.contains("is-active")) || buttons[0];
    setPublicProductTab(group, activeButton.dataset.publicProductTarget);
  });
}

const gemstoneFilterCopy = {
  all: ["Full catalogue", "Showing rings, pendants, loose stones and malas for every gemstone product."],
  rings: ["Ring products", "Use this when the customer already wants a wearable ring with metal and finger size guidance."],
  pendants: ["Pendant products", "Use this for customers who prefer a pendant, chain option or non-ring wearing path."],
  loose: ["Loose stones", "Use this when the buyer wants certificate, carat/ratti and proof before deciding ring or pendant setting."],
  malas: ["Astro malas", "Rudraksha, Sphatik, Tulsi, Chandan, Kamal Gatta, Hakik and Jap Mala enquiries stay separate."],
  caution: ["High-caution review", "Neelam and Lehsunia enquiries need suitability, trial guidance and wearing method before payment."],
  authority: ["Authority and growth", "Ruby, Pukhraj and Emerald paths are useful for confidence, learning, career and business discussions."],
  calm: ["Calm and courage", "Pearl and Red Coral paths support Chandra or Mangal-related enquiries after kundli review."],
  marriage: ["Marriage and prosperity", "Pukhraj, Diamond and Opal paths are commonly discussed for Guru or Shukra-related guidance."],
  shukra: ["Shukra products", "Diamond and Opal enquiries need certificate, quality, budget and suitability clarity."],
  "rahu-ketu": ["Rahu and Ketu", "Gomed and Lehsunia require careful chart need, timing, proof and wearing guidance."],
  international: ["NRI ready quote", "Every visible product can be quoted with delivery country, policy clarity and Booking ID tracking."]
};

function matchesGemstoneFilter(filter, cardText, kind) {
  if (filter === "all") return true;
  if (filter === "rings") return kind === "rings";
  if (filter === "pendants") return kind === "pendants";
  if (filter === "loose") return kind === "loose";
  if (filter === "malas") return kind === "malas";
  if (filter === "international") return true;
  if (filter === "caution") return /high-caution|neelam|blue sapphire|cat.?s eye|lehsunia|ketu|shani/.test(cardText);
  if (filter === "authority") return /ruby|manik|pukhraj|yellow sapphire|panna|emerald|surya|guru|budh|career|business|study|prosperity|confidence|authority/.test(cardText);
  if (filter === "calm") return /moti|pearl|chandra|moonga|red coral|mangal|calm|emotional|courage|balance/.test(cardText);
  if (filter === "marriage") return /pukhraj|yellow sapphire|heera|diamond|opal|shukra|guru|marriage|relationship|prosperity/.test(cardText);
  if (filter === "shukra") return /shukra|diamond|heera|opal/.test(cardText);
  if (filter === "rahu-ketu") return /gomed|hessonite|rahu|lehsunia|cat.?s eye|ketu/.test(cardText);
  return true;
}

function renderGemstoneFilterInsight(finder, filter, visibleCount) {
  const insight = finder.querySelector("[data-gemstone-filter-insight]");
  if (!insight) return;
  const [title, body] = gemstoneFilterCopy[filter] || gemstoneFilterCopy.all;
  insight.innerHTML = `
    <div><span>Active view</span><strong>${escapeHtml(title)}</strong></div>
    <p>${escapeHtml(body)} ${visibleCount} ${visibleCount === 1 ? "product is" : "products are"} visible.</p>
  `;
}

function updateGemstoneProductFinder(finder) {
  const cards = [...document.querySelectorAll("#ring-products .ring-product-card, #pendant-products .ring-product-card, #loose-stones .premium-product-card, #mala-products .mala-product-card")];
  if (!cards.length) return;

  const activeFilter = finder.querySelector("[data-gemstone-filter][aria-pressed='true']");
  const filter = activeFilter?.dataset.gemstoneFilter || "all";
  const searchTerms = normalizeCatalogText(finder.querySelector("[data-gemstone-search]")?.value).split(" ").filter(Boolean);
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardText = card.dataset.searchText || normalizeCatalogText(card.textContent);
    card.dataset.searchText = cardText;
    const parentSection = card.closest("section");
    const kind = parentSection?.id === "ring-products"
      ? "rings"
      : parentSection?.id === "pendant-products"
        ? "pendants"
        : parentSection?.id === "mala-products"
          ? "malas"
          : "loose";
    const matchesFilter = matchesGemstoneFilter(filter, cardText, kind);
    const matchesSearch = !searchTerms.length || searchTerms.every((term) => cardText.includes(term));
    const isVisible = matchesFilter && matchesSearch;

    card.hidden = !isVisible;
    card.classList.toggle("is-filtered-out", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  ["ring-products", "pendant-products", "loose-stones", "mala-products"].forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.hidden = ![...section.querySelectorAll(".ring-product-card, .premium-product-card, .mala-product-card")].some((card) => !card.hidden);
  });

  const countEl = finder.querySelector("[data-gemstone-match-count]");
  if (countEl) {
    countEl.textContent = `${visibleCount} ${visibleCount === 1 ? "product" : "products"}`;
  }

  const emptyMessage = finder.querySelector("[data-gemstone-empty-message]");
  if (emptyMessage) {
    emptyMessage.hidden = visibleCount !== 0;
  }

  renderGemstoneFilterInsight(finder, filter, visibleCount);
}

function initializeGemstoneProductFinder() {
  document.querySelectorAll("[data-gemstone-finder]").forEach((finder) => {
    const buttons = [...finder.querySelectorAll("[data-gemstone-filter]")];
    const searchInput = finder.querySelector("[data-gemstone-search]");
    const hashFilterMap = {
      "#ring-products": "rings",
      "#pendant-products": "pendants",
      "#loose-stones": "loose",
      "#mala-products": "malas"
    };
    const hashFilter = hashFilterMap[window.location.hash] || "";

    buttons.forEach((button) => {
      if (!button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", "false");
      }
      button.addEventListener("click", () => {
        buttons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });
        updateGemstoneProductFinder(finder);
      });
    });

    if (hashFilter) {
      buttons.forEach((button) => {
        const isActive = button.dataset.gemstoneFilter === hashFilter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    }

    searchInput?.addEventListener("input", () => updateGemstoneProductFinder(finder));
    updateGemstoneProductFinder(finder);
  });

  document.querySelectorAll("[data-gemstone-filter-target]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetFilter = trigger.dataset.gemstoneFilterTarget;
      const finder = document.querySelector("[data-gemstone-finder]");
      const targetButton = finder?.querySelector(`[data-gemstone-filter="${targetFilter}"]`);
      if (targetButton) {
        targetButton.click();
        finder.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
}

function createHtmlFragment(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function getStaticProductCardCategory(card) {
  const section = card.closest("section");
  if (section?.id === "ring-products") return "Gemstone Ring";
  if (section?.id === "pendant-products") return "Gemstone Pendant";
  if (section?.id === "loose-stones") return "Loose Gemstone";
  return "Gemstone";
}

function enhanceStaticProductCards() {
  const cards = [...document.querySelectorAll("#ring-products .ring-product-card, #pendant-products .ring-product-card, #loose-stones .premium-product-card")];
  cards.forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim();
    if (!title) return;
    const category = getStaticProductCardCategory(card);
    const pricing = getProductPricingPackage(title, category, {
      service: `Gemstone Quote - ${title}`,
      mode: category.includes("Loose") ? "Loose stone quote" : "Gemstone jewellery quote"
    });
    const actionRow = card.querySelector(".product-card-actions");
    const specList = card.querySelector(".ring-spec-list, .product-spec-list, .product-ring-list, .product-card-actions");

    if (!card.querySelector(".product-price-stack") && specList) {
      specList.before(createHtmlFragment(productPricingBlock(pricing, "static-card-price")));
    }

    if (!card.querySelector(".product-quick-detail") && actionRow) {
      actionRow.before(createHtmlFragment(productTrustDetailBlock(pricing, [
        "Kundli suitability or existing recommendation is reviewed before wearing.",
        "Stone photo/video, certificate note and final quote are shared before payment."
      ])));
    }

    const quoteButton = card.querySelector("[data-stone]");
    if (quoteButton) {
      quoteButton.dataset.packageBook = pricing.id;
      quoteButton.dataset.productCategory = category;
      quoteButton.textContent = "Create Quote ID";
    }
  });
}

function refreshProductPriceSurfaces() {
  renderPoojaKitCatalog();
  renderHawanSamagriCatalog();
  renderMalaProductCatalog();
  enhanceStaticProductCards();
  document.querySelectorAll("[data-gemstone-finder]").forEach((finder) => updateGemstoneProductFinder(finder));
  applyCurrencyToPage();
}

const poojaKitProducts = [
  ["Durga Pooja Kit", "assets/pooja-kits/display/01-durga-puja-kit-hindi.jpg", "Shakti worship", "Durga upasana kit with core pooja items, useful for Navratri, strength and protection sankalp."],
  ["Lakshmi Pooja Kit", "assets/pooja-kits/display/02-lakshmi-puja-kit-hindi.jpg", "Prosperity", "Lakshmi worship kit for home, shop, business blessing and Diwali-style pooja preparation."],
  ["Ganesh Pooja Kit", "assets/pooja-kits/display/03-ganesh-puja-kit-hindi.jpg", "Shubh aarambh", "Ganesh kit for new work, obstacle-removal prayers and auspicious beginning rituals."],
  ["Saraswati Pooja Kit", "assets/pooja-kits/display/04-saraswati-puja-kit-hindi.jpg", "Education", "Saraswati kit for students, exams, learning, arts and knowledge-related sankalp."],
  ["Shiv Pooja Kit", "assets/pooja-kits/display/05-shiv-puja-kit-hindi.jpg", "Shiva worship", "Shiv pooja kit for Monday worship, Rudra sankalp and family peace prayers."],
  ["Hanuman Pooja Kit", "assets/pooja-kits/display/06-hanuman-puja-kit-hindi.jpg", "Strength", "Hanuman kit for courage, protection, discipline and Tuesday or Saturday worship."],
  ["Satyanarayan Pooja Kit", "assets/pooja-kits/display/07-satyanarayan-puja-kit-hindi.jpg", "Family blessing", "Satyanarayan kit for family katha, gratitude, birthdays, anniversaries and griha shanti."],
  ["Navgrah Pooja Kit", "assets/pooja-kits/display/08-navgrah-puja-kit-hindi.jpg", "Grah shanti", "Navgrah kit for nine-planet shanti, dasha concern and kundli-based remedy preparation."],
  ["Kali Pooja Kit", "assets/pooja-kits/display/09-kali-puja-kit-hindi.jpg", "Protection", "Kali kit for shakti worship, protection prayers and special spiritual sankalp."],
  ["Griha Pravesh Pooja Kit", "assets/pooja-kits/display/10-griha-pravesh-puja-kit-hindi.jpg", "Home blessing", "Griha Pravesh kit for new home entry, vastu shanti and family blessing preparation."]
];

const hawanSamagriProducts = [
  ["Surya Wood", "assets/hawan-samagri/items/01-surya-wood-single-item.png", "Navgrah wood", "Used where Surya-related grah hawan items are advised."],
  ["Chandra Wood", "assets/hawan-samagri/items/02-chandra-wood-single-item.png", "Navgrah wood", "For Chandra-related hawan planning after purpose and ritual type are confirmed."],
  ["Mangal Wood", "assets/hawan-samagri/items/03-mangal-wood-single-item.png", "Navgrah wood", "For Mangal, courage or marriage-remedy hawan planning where applicable."],
  ["Budh Wood", "assets/hawan-samagri/items/04-budh-wood-single-item.png", "Navgrah wood", "For Budh-related worship, business, study or communication sankalp where advised."],
  ["Guru Wood", "assets/hawan-samagri/items/05-guru-wood-single-item.png", "Navgrah wood", "For Guru-related hawan planning, wisdom, prosperity or marriage guidance."],
  ["Shukra Wood", "assets/hawan-samagri/items/06-shukra-wood-single-item.png", "Navgrah wood", "For Shukra-related prayers, relationship, luxury or harmony sankalp."],
  ["Shani Wood", "assets/hawan-samagri/items/07-shani-wood-single-item.png", "Navgrah wood", "For Shani shanti hawan planning after date, sankalp and guidance are confirmed."],
  ["Rahu Wood", "assets/hawan-samagri/items/08-rahu-wood-single-item.png", "Navgrah wood", "For Rahu-related hawan scope only after concern and ritual requirement are reviewed."],
  ["Ketu Wood", "assets/hawan-samagri/items/09-ketu-wood-single-item.png", "Navgrah wood", "For Ketu-related worship and shanti hawan where the Acharya advises it."],
  ["Hawan Samagri Premium Mix", "assets/hawan-samagri/items/10-hawan-samagri-single-item.png", "Premium mix", "Core herbal hawan mix for ahuti; quantity depends on mantra count and duration."],
  ["Navgrah Hawan Samagri", "assets/hawan-samagri/items/11-nav-grah-hawan-samagri-single-item.png", "Grah shanti", "Prepared for Navgrah hawan enquiries with nine-planet shanti focus."],
  ["Lakshmi Hawan Samagri", "assets/hawan-samagri/items/12-lakshmi-hawan-samagri-single-item.png", "Prosperity", "For Lakshmi or Kuber hawan planning for home, shop or business sankalp."],
  ["Durga Hawan Samagri", "assets/hawan-samagri/items/13-durga-hawan-samagri-single-item.png", "Shakti", "For Durga, Navratri, protection and strength-related hawan preparation."],
  ["Ganesh Hawan Samagri", "assets/hawan-samagri/items/14-ganesh-hawan-samagri-single-item.png", "New beginning", "For Ganesh hawan, obstacle-removal prayers and shubh aarambh rituals."],
  ["Mahamrityunjay Hawan Samagri", "assets/hawan-samagri/items/15-mahamrityunjay-hawan-samagri-single-item.png", "Health prayer", "For Mahamrityunjay hawan and protection sankalp after scope is confirmed."],
  ["Satyanarayan Hawan Samagri", "assets/hawan-samagri/items/16-satyanarayan-hawan-samagri-single-item.png", "Family blessing", "For Satyanarayan pooja and hawan support where family ritual scope requires it."],
  ["Vastu Shanti Hawan Samagri", "assets/hawan-samagri/items/17-vastu-shanti-hawan-samagri-single-item.png", "Home shanti", "For vastu shanti, griha pravesh, home, shop or office hawan planning."],
  ["Samidha Sticks", "assets/hawan-samagri/items/18-samidha-sticks-single-item.png", "Ahuti base", "Dry sticks used as hawan base where safe and suitable for the place."],
  ["Mango Wood Sticks", "assets/hawan-samagri/items/19-mango-wood-sticks-single-item.png", "Ahuti base", "Common hawan wood option; local alternatives can be discussed for NRI families."],
  ["Peepal Wood Sticks", "assets/hawan-samagri/items/20-peepal-wood-sticks-single-item.png", "Sacred wood", "Used only where the ritual list and family tradition require it."],
  ["Dry Coconut", "assets/hawan-samagri/items/21-dry-coconut-single-item.png", "Offering", "Coconut may be used for kalash, offering or specific ritual completion."],
  ["Guggul", "assets/hawan-samagri/items/22-guggul-single-item.png", "Fragrance", "Resin item often used for sacred fragrance and hawan offerings."],
  ["Loban", "assets/hawan-samagri/items/23-loban-single-item.png", "Fragrance", "Used for fragrance and shuddhi where smoke rules and safety allow."],
  ["Kapoor", "assets/hawan-samagri/items/24-kapoor-single-item.png", "Lighting", "Camphor for aarti or lighting support, confirmed with fire-safety guidance."],
  ["Desi Cow Ghee", "assets/hawan-samagri/items/25-desi-cow-ghee-single-item.png", "Ahuti", "Ghee for ahuti and diya use; quantity depends on hawan duration."],
  ["Neem Leaves", "assets/hawan-samagri/items/26-neem-leaves-single-item.png", "Leaves", "Used in select shuddhi or protection-related rituals where advised."],
  ["Bel Patra", "assets/hawan-samagri/items/27-bel-patra-single-item.png", "Shiva offering", "Bel patra is commonly connected with Shiva worship and Rudra-related rituals."],
  ["Ashoka Leaves", "assets/hawan-samagri/items/28-ashoka-leaves-single-item.png", "Leaves", "Used where the ritual list calls for auspicious leaves or local alternatives."],
  ["Tulsi Leaves", "assets/hawan-samagri/items/29-tulsi-leaves-single-item.png", "Sacred leaves", "Tulsi may be used for Vishnu, Satyanarayan or family worship where appropriate."],
  ["Red Chandan Powder", "assets/hawan-samagri/items/30-red-chandan-powder-single-item.png", "Tilak", "Chandan powder for tilak, offering and ritual preparation."],
  ["Yellow Chandan Powder", "assets/hawan-samagri/items/31-yellow-chandan-powder-single-item.png", "Tilak", "Used in select pooja and hawan preparation as per deity and ritual type."],
  ["Kumkum", "assets/hawan-samagri/items/32-kumkum-single-item.png", "Pooja item", "For tilak, Devi worship and family sankalp preparation."],
  ["Haldi Powder", "assets/hawan-samagri/items/33-haldi-powder-single-item.png", "Pooja item", "Turmeric for shubh ritual preparation, tilak and offering support."],
  ["Akshat Raw Rice", "assets/hawan-samagri/items/34-akshat-raw-rice-single-item.png", "Akshat", "Rice used for sankalp, offering and completion where required."],
  ["Kala Til", "assets/hawan-samagri/items/35-kala-til-single-item.png", "Til offering", "Black sesame may be used in Shani, pitra or special shanti rituals."],
  ["Laung", "assets/hawan-samagri/items/36-laung-single-item.png", "Offering", "Cloves are included in select pooja and hawan offerings."],
  ["Dry Rose Petals", "assets/hawan-samagri/items/37-dry-rose-petals-single-item.png", "Flowers", "For fragrance and offering where flower items are included."],
  ["Marigold Flower", "assets/hawan-samagri/items/38-marigold-flower-single-item.png", "Flowers", "Common flower option for worship, decoration and offering."],
  ["Kamal Gatta", "assets/hawan-samagri/items/39-kamal-gatta-single-item.png", "Lakshmi item", "Often connected with Lakshmi worship and prosperity sankalp."],
  ["Shankh Pushpi", "assets/hawan-samagri/items/40-shankh-pushpi-single-item.png", "Herbal item", "Used where the final hawan samagri list specifically includes it."],
  ["Jau Barley", "assets/hawan-samagri/items/41-jau-barley-single-item.png", "Grain offering", "Barley is a common hawan grain; quantity depends on the ritual plan."]
];

const mainSamagriDetailNames = new Set([
  "Hawan Samagri Premium Mix",
  "Navgrah Hawan Samagri",
  "Lakshmi Hawan Samagri",
  "Durga Hawan Samagri",
  "Ganesh Hawan Samagri",
  "Mahamrityunjay Hawan Samagri",
  "Vastu Shanti Hawan Samagri"
]);

const malaProducts = [
  ["Rudraksha Mala", "assets/mala-products/rudraksha_mala_with_divine_elegance.jpg", "5 Mukhi / Shiva", "Premium Rudraksha mala enquiry for jaap, meditation and spiritual discipline with bead type and count confirmation."],
  ["Sphatik / Crystal Mala", "assets/mala-products/elegant_crystal_mala_with_premium_packaging.jpg", "Shanti / clarity", "Sphatik mala quote for peaceful worship, mantra practice and calm focus after purpose and quality are confirmed."],
  ["Tulsi Mala", "assets/mala-products/sacred_tulsi_mala_divine_harmony.jpg", "Vishnu bhakti", "Tulsi mala enquiry for Vishnu, Krishna and daily bhakti practice with packaging and delivery confirmation."],
  ["Chandan / Sandalwood Mala", "assets/mala-products/luxury_sandalwood_mala_product_display.jpg", "Calm jaap", "Chandan mala quote for mantra jaap, fragrance preference and traditional worship support."],
  ["Kamal Gatta / Lotus Seed Mala", "assets/mala-products/elegant_lotus_seed_mala_display.jpg", "Lakshmi sadhana", "Kamal Gatta mala enquiry for Lakshmi worship, prosperity sankalp and guided ritual use."],
  ["Premium Jap Mala", "assets/mala-products/premium_spiritual_mala_with_ornate_details.jpg", "108 bead quote", "Premium Jap Mala option for mantra practice, gifting and pooja support with final quote before payment."],
  ["Hakik Mala", "assets/mala-products/luxury_hakik_mala_with_gold_accents.jpg", "Protection focus", "Hakik mala quote for protection-focused guidance where the Acharya or staff confirms suitability and use."],
  ["Ornate Spiritual Mala", "assets/mala-products/elegant_spiritual_mala_product_design.jpg", "Gift / puja desk", "Ornate spiritual mala enquiry for pooja, gifting or personal practice with product proof and delivery tracking."]
];

function productDetailUrl(name) {
  return `${String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.html`;
}

function bookingUrl(service, mode = "Temple pooja with proof", productOptions = {}) {
  const params = new URLSearchParams({ service, mode });
  if (productOptions.product) params.set("product", productOptions.product);
  if (productOptions.category) params.set("category", productOptions.category);
  if (productOptions.quoteType) params.set("quoteType", productOptions.quoteType);
  if (productOptions.delivery) params.set("delivery", productOptions.delivery);
  if (productOptions.concern) params.set("concern", productOptions.concern);
  return `book-online.html?${params.toString()}`;
}

function productConcern(product, category) {
  return [
    `Product category: ${category}`,
    `Product name: ${product}`,
    "Quote type: Product quote before payment",
    "Delivery country: To be confirmed",
    "Please confirm availability, item list, delivery option, policy and final quote."
  ].join("\n");
}

function renderPoojaKitCatalog() {
  const catalog = document.querySelector("[data-pooja-kit-catalog]");
  if (!catalog) return;
  catalog.innerHTML = poojaKitProducts.map(([name, image, badge, body]) => {
    const pricing = getProductPricingPackage(name, "Pooja Samagri", {
      service: `${name} Enquiry`,
      mode: "Pooja kit guidance"
    });
    const quoteHref = addPricingToBookingUrl(bookingUrl(`${name} Enquiry`, "Pooja kit guidance", {
      product: name,
      category: "Pooja Samagri",
      quoteType: "Product quote before payment",
      delivery: "To be confirmed",
      concern: productConcern(name, "Pooja Samagri")
    }), pricing);
    return `
      <article class="pooja-product-card pooja-kit-card" data-product-name="${escapeHtml(name)}" data-product-category="Pooja Samagri">
        <div class="pooja-product-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(name)} product kit image" loading="lazy" /><span>${escapeHtml(badge)}</span></div>
        <div class="pooja-product-body">
          <span class="quote-chip">Hindi pooja kit</span>
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(body)}</p>
          ${productPricingBlock(pricing)}
          <div class="pooja-product-meta"><div><span>Status</span><strong>${escapeHtml(pricing.productStatus)}</strong></div><div><span>Support</span><strong>Kit + guidance</strong></div></div>
          <ul class="pooja-product-list"><li>Real kit image shown</li><li>Item list confirmed by ritual</li><li>Booking ID for follow-up</li></ul>
          ${productTrustDetailBlock(pricing, ["Delivery and packaging confirmed by staff.", "Final quote appears in the Booking ID before payment."])}
          <div class="product-card-actions">
            <a class="text-button product-detail-link" href="${escapeHtml(productDetailUrl(name))}">View details</a>
            <a class="text-button" href="${escapeHtml(quoteHref)}">Create Quote</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderHawanSamagriCatalog() {
  const catalog = document.querySelector("[data-hawan-samagri-catalog]");
  if (!catalog) return;
  catalog.innerHTML = hawanSamagriProducts.map(([name, image, badge, body]) => {
    const pricing = getProductPricingPackage(name, "Hawan Samagri", {
      service: `Hawan Samagri - ${name}`,
      mode: "Hawan samagri guidance"
    });
    const quoteHref = addPricingToBookingUrl(bookingUrl(`Hawan Samagri - ${name}`, "Hawan samagri guidance", {
      product: name,
      category: "Hawan Samagri",
      quoteType: "Product quote before payment",
      delivery: "To be confirmed",
      concern: productConcern(name, "Hawan Samagri")
    }), pricing);
    return `
      <article class="samagri-card is-product-item" data-product-name="${escapeHtml(name)}" data-product-category="Hawan Samagri">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(name)} hawan samagri product image" loading="lazy" />
        <div>
          <span>${escapeHtml(badge)}</span>
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(body)}</p>
          ${productPricingBlock(pricing)}
          <div class="pooja-product-meta product-status-meta"><div><span>Status</span><strong>${escapeHtml(pricing.productStatus)}</strong></div><div><span>Quote</span><strong>${escapeHtml(pricing.amount || "Staff quote")}</strong></div></div>
          ${productTrustDetailBlock(pricing, ["Quantity is confirmed by ritual and place.", "Delivery country and safety note are checked before payment."])}
          <div class="product-card-actions ${mainSamagriDetailNames.has(name) ? "" : "single-action"}">
            ${mainSamagriDetailNames.has(name) ? `<a class="text-button product-detail-link" href="${escapeHtml(productDetailUrl(name))}">View details</a>` : ""}
            <a class="text-button" href="${escapeHtml(quoteHref)}">Ask for this item</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMalaProductCatalog() {
  const catalog = document.querySelector("[data-mala-products-catalog]");
  if (!catalog) return;
  catalog.innerHTML = malaProducts.map(([name, image, badge, body]) => {
    const pricing = getProductPricingPackage(name, "Mala", {
      service: `Astro Mala - ${name}`,
      mode: "Mala product quote"
    });
    const quoteHref = addPricingToBookingUrl(bookingUrl(`Astro Mala - ${name}`, "Mala product quote", {
      product: name,
      category: "Astro Mala",
      quoteType: "Mala quote before payment",
      delivery: "To be confirmed",
      concern: productConcern(name, "Astro Mala")
    }), pricing);
    return `
      <article class="pooja-product-card mala-product-card" data-product-name="${escapeHtml(name)}" data-product-category="Mala">
        <div class="pooja-product-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(name)} product image" loading="lazy" /><span>${escapeHtml(badge)}</span></div>
        <div class="pooja-product-body">
          <span class="quote-chip">Astro mala</span>
          <h3>${escapeHtml(name)}</h3>
          <p>${escapeHtml(body)}</p>
          ${productPricingBlock(pricing)}
          <div class="pooja-product-meta"><div><span>Status</span><strong>${escapeHtml(pricing.productStatus)}</strong></div><div><span>Confirm</span><strong>Bead type + count</strong></div></div>
          <ul class="pooja-product-list"><li>Product picture shown before quote</li><li>Use guidance confirmed by purpose</li><li>Booking ID for delivery updates</li></ul>
          ${productTrustDetailBlock(pricing, ["Bead count, purpose and packaging are confirmed.", "Delivery and payment step are shared only after quote approval."])}
          <div class="product-card-actions single-action">
            <a class="text-button" href="${escapeHtml(quoteHref)}">Create Quote ID</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function getPortalFieldValue(selector) {
  return document.querySelector(selector)?.value.trim() || "";
}

function addPortalDetail(details, label, value) {
  if (value) details.push(`${label}: ${value}`);
}

function buildPortalConcern() {
  const requirement = document.querySelector("#portalConcern")?.value.trim();
  const sankalp = document.querySelector("#portalSankalp")?.value.trim();
  const timezone = document.querySelector("#portalTimezone")?.value.trim();
  const selectedService = document.querySelector("#portalService")?.value || "";
  const serviceType = getPortalServiceType(selectedService);
  const selectedPackage = readPortalPackageSelection();
  const details = [];

  details.push(...packageLinesForConcern(selectedPackage));
  if (requirement) details.push(`Requirement: ${requirement}`);
  if (sankalp) details.push(`Additional details: ${sankalp}`);
  if (timezone) details.push(`Country time zone: ${timezone}`);

  if (serviceType === "kundali") {
    addPortalDetail(details, "Birth date", getPortalFieldValue("#portalBirthDate"));
    addPortalDetail(details, "Birth time", getPortalFieldValue("#portalBirthTime"));
    addPortalDetail(details, "Birth place", getPortalFieldValue("#portalBirthPlace"));
    addPortalDetail(details, "Gotra", getPortalFieldValue("#portalGotra"));
    addPortalDetail(details, "Kundali focus", getPortalFieldValue("#portalDoshType"));
    addPortalDetail(details, "Second person details", getPortalFieldValue("#portalPartnerDetails"));
  }

  if (serviceType === "pooja") {
    addPortalDetail(details, "Sankalp name", getPortalFieldValue("#portalSankalpName"));
    addPortalDetail(details, "Gotra", getPortalFieldValue("#portalPoojaGotra"));
    addPortalDetail(details, "Proof option", getPortalFieldValue("#portalProofOption"));
    addPortalDetail(details, "Participants", getPortalFieldValue("#portalParticipantCount"));
    addPortalDetail(details, "Ritual purpose", getPortalFieldValue("#portalRitualPurpose"));
    addPortalDetail(details, "Samagri / location note", getPortalFieldValue("#portalSamagri"));
  }

  if (serviceType === "gemstone") {
    addPortalDetail(details, "Stone name", getPortalFieldValue("#portalGemstoneName"));
    addPortalDetail(details, "Product form", getPortalFieldValue("#portalGemstoneForm"));
    addPortalDetail(details, "Metal preference", getPortalFieldValue("#portalGemstoneMetal"));
    addPortalDetail(details, "Ring size", getPortalFieldValue("#portalRingSize"));
    addPortalDetail(details, "Budget / carat", getPortalFieldValue("#portalGemstoneBudget"));
    addPortalDetail(details, "Certificate", getPortalFieldValue("#portalCertificate"));
  }

  return details.join("\n") || "Please call me to discuss details.";
}

if (stoneSelect) {
  const requestedStone = new URLSearchParams(window.location.search).get("stone");
  if (requestedStone) {
    setStone(requestedStone, { scroll: false });
  } else {
    updateStoneQuoteSummary(stoneSelect.value);
  }
  stoneSelect.addEventListener("change", () => setStone(stoneSelect.value, { scroll: false }));
}

document.addEventListener("click", (event) => {
  const paymentButton = event.target.closest("[data-razorpay-pay]");
  if (!paymentButton) return;
  handleRazorpayButtonClick(paymentButton);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const details = {
    name: document.querySelector("#clientName").value.trim(),
    phone: document.querySelector("#clientPhone").value.trim(),
    service: document.querySelector("#clientService").value,
    date: document.querySelector("#clientDate").value || "Flexible",
    mode: document.querySelector("#clientMode").value,
    concern: document.querySelector("#clientConcern").value.trim() || "Please call me to discuss."
  };

  const message = [
    "Namaste Pdt. Jyotishacharya Kumodanand Jha (Shastri) team,",
    "",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Service: ${details.service}`,
    `Preferred date: ${details.date}`,
    `Mode: ${details.mode}`,
    `Concern: ${details.concern}`,
    "",
    "Please share details and pricing."
  ].join("\n");

  if (statusEl) {
    statusEl.textContent = "Opening WhatsApp with your enquiry details.";
  }

  window.location.href = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;
});

stoneOrderForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const order = {
    name: document.querySelector("#stoneClientName").value.trim(),
    phone: document.querySelector("#stoneClientPhone").value.trim(),
    stone: document.querySelector("#stoneName").value,
    form: document.querySelector("#stoneForm").value,
    metal: document.querySelector("#stoneMetal").value,
    ringSize: document.querySelector("#stoneRingSize").value.trim() || "Need staff guidance",
    budget: document.querySelector("#stoneBudget").value.trim() || "Need quote",
    certificate: document.querySelector("#stoneCertificate").value,
    delivery: document.querySelector("#stoneDelivery").value.trim() || "Need delivery guidance",
    purpose: document.querySelector("#stonePurpose").value.trim() || "Please call me for kundli/gemstone guidance."
  };
  const orderProfile = getStoneQuoteProfile(order.stone);
  const orderPricing = getStoneProductPricing(order.stone, orderProfile, activeStonePricingPackage);
  const paymentMethod = readSelectedPaymentMethod("stonePaymentMethod");

  const booking = {
    id: generateBookingId(),
    name: order.name,
    phone: order.phone,
    email: "",
    country: "",
    service: `Gemstone Quote - ${order.stone}`,
    date: "",
    time: "",
    mode: `${order.form} / ${order.metal} / gemstone delivery`,
    concern: [
      `Gemstone: ${order.stone}`,
      `Form: ${order.form}`,
      `Metal preference: ${order.metal}`,
      `Ring size / finger: ${order.ringSize}`,
      `Budget / carat: ${order.budget}`,
      `Certificate: ${order.certificate}`,
      `Delivery country: ${order.delivery}`,
      `Purpose / birth details: ${order.purpose}`
    ].join("\n"),
    status: "Enquiry Received",
    paymentStatus: "Not Requested",
    paymentMethod,
    amount: orderPricing.amount || orderPricing.offerPrice || "Certificate-based quote pending",
    mrpPrice: orderPricing.mrpPrice || "",
    offerPrice: orderPricing.offerPrice || "",
    discountPrice: orderPricing.discountPrice || "",
    proofUrl: "",
    staffNote: [
      orderPricing.title ? `Selected product: ${orderPricing.title}` : "",
      orderPricing.productStatus ? `Product status: ${orderPricing.productStatus}` : "",
      orderPricing.quoteNote || ""
    ].filter(Boolean).join("\n"),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const submitButton = stoneOrderForm.querySelector("button[type='submit']");
  if (submitButton) submitButton.textContent = "Creating quote ID...";

  if (stoneStatusEl) {
    stoneStatusEl.textContent = "Creating gemstone quote request...";
  }

  const syncResult = await saveBookingOnline(booking);
  renderTicket(booking, syncResult);
  stoneOrderForm.reset();
  activeStonePricingPackage = null;
  updateStoneQuoteSummary(stoneSelect?.value || "");

  if (stoneStatusEl) {
    stoneStatusEl.textContent = syncResult.savedCloud
      ? "Gemstone quote ID created and saved for staff follow-up."
      : "Gemstone quote ID created. Send it on WhatsApp for staff follow-up.";
  }

  if (submitButton) submitButton.textContent = "Create gemstone quote ID";
});

portalBookingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selectedService = document.querySelector("#portalService").value;
  const serviceProfile = getServiceProfile(selectedService);
  const selectedPackage = readPortalPackageSelection();
  const paymentMethod = readSelectedPaymentMethod("portalPaymentMethod");

  const booking = {
    id: generateBookingId(),
    name: document.querySelector("#portalName").value.trim(),
    phone: document.querySelector("#portalPhone").value.trim(),
    email: document.querySelector("#portalEmail").value.trim(),
    country: document.querySelector("#portalCountry").value.trim(),
    service: selectedService,
    date: document.querySelector("#portalDate").value,
    time: document.querySelector("#portalTime").value,
    mode: document.querySelector("#portalMode").value,
    concern: buildPortalConcern(),
    status: "Enquiry Received",
    paymentStatus: "Not Requested",
    paymentMethod,
    amount: selectedPackage?.amount || selectedPackage?.offerPrice || serviceProfile.quote,
    mrpPrice: selectedPackage?.mrpPrice || "",
    offerPrice: selectedPackage?.offerPrice || "",
    discountPrice: selectedPackage?.discountPrice || "",
    proofUrl: "",
    staffNote: selectedPackage?.title ? `Selected package: ${selectedPackage.title}` : "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const submitButton = portalBookingForm.querySelector("button[type='submit']");
  if (submitButton) submitButton.textContent = "Creating booking...";
  const syncResult = await saveBookingOnline(booking);
  renderTicket(booking, syncResult);
  portalBookingForm.reset();
  updateServicePreview();
  updatePortalServiceIntake();
  await prefillPortalFromSession();
  if (submitButton) submitButton.textContent = "Create secure Booking ID";
});

trackBookingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const bookingId = document.querySelector("#trackBookingId").value;
  const contact = document.querySelector("#trackContact").value;
  renderStatusPanel(await findBookingOnline(bookingId, contact));
});

if (trackBookingForm) {
  const requestedBookingId = new URLSearchParams(window.location.search).get("id");
  if (requestedBookingId) {
    const field = document.querySelector("#trackBookingId");
    if (field) field.value = requestedBookingId.toUpperCase();
    findBookingOnline(requestedBookingId, "").then(renderStatusPanel);
  }
}

function setAdminStatus(message) {
  const status = document.querySelector("#adminAccessStatus");
  if (status) status.textContent = message;
}

function updateAdminAccessMode() {
  const codeField = document.querySelector("#adminCodeField");
  const cloudFields = document.querySelector("#adminCloudFields");

  if (isCloudEnabled()) {
    codeField?.classList.add("is-hidden");
    cloudFields?.classList.remove("is-hidden");
    setAdminStatus("Secure staff login is active. Use the admin email and password created in the staff system.");
  } else {
    cloudFields?.classList.add("is-hidden");
    codeField?.classList.remove("is-hidden");
  }
}

function setBackofficeStatus(message) {
  const status = document.querySelector("#backofficeAccessStatus");
  if (status) status.textContent = message;
}

function updateBackofficeAccessMode() {
  const codeField = document.querySelector("#backofficeCodeField");
  const cloudFields = document.querySelector("#backofficeCloudFields");

  if (isCloudEnabled()) {
    codeField?.classList.add("is-hidden");
    cloudFields?.classList.remove("is-hidden");
    setBackofficeStatus("Secure backoffice login is active. Use the admin staff email and password.");
  } else {
    cloudFields?.classList.add("is-hidden");
    codeField?.classList.remove("is-hidden");
  }
}

async function currentUserIsAdmin() {
  if (!isCloudEnabled()) return false;
  const user = await getCurrentUser();
  if (!user) return false;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (error) return false;
  return data?.role === "admin";
}

async function openAdminPanel(message = "Staff dashboard opened.") {
  sessionStorage.setItem(adminAccessKey, "true");
  adminPanel?.classList.add("is-visible");
  setAdminStatus(message);
  await renderAdminBookings();
}

async function openBackofficePanel(message = "Backoffice opened.") {
  sessionStorage.setItem(backofficeAccessKey, "true");
  backofficePanel?.classList.add("is-visible");
  backofficeLogin?.classList.add("is-hidden");
  backofficePreview?.classList.add("is-hidden");
  backofficeWorkflowPreview?.classList.add("is-hidden");
  setBackofficeStatus(message);
  await renderBackofficeBookings();
}

adminAccessForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isCloudEnabled()) {
    const email = document.querySelector("#adminEmail")?.value.trim();
    const password = document.querySelector("#adminPassword")?.value;

    if (!email || !password) {
      setAdminStatus("Enter staff email and password.");
      return;
    }

    setAdminStatus("Checking secure staff login...");
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setAdminStatus(error.message || "Staff login was not accepted.");
      return;
    }

    if (!(await currentUserIsAdmin())) {
      setAdminStatus("This account is not marked as admin staff yet.");
      return;
    }

    await openAdminPanel("Secure staff dashboard opened.");
    return;
  }

  const code = document.querySelector("#adminCode").value.trim();
  if (code === adminAccessCode) {
    await openAdminPanel("Staff dashboard opened in local mode.");
  } else {
    setAdminStatus("Access code not accepted.");
  }
});

updateAdminAccessMode();
updateBackofficeAccessMode();

if (adminPanel) {
  if (isCloudEnabled()) {
    currentUserIsAdmin().then((isAdmin) => {
      if (isAdmin) openAdminPanel("Secure staff dashboard opened.");
    });
  } else if (sessionStorage.getItem(adminAccessKey) === "true") {
    openAdminPanel("Staff dashboard opened in local mode.");
  }
}

backofficeAccessForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isCloudEnabled()) {
    const email = document.querySelector("#backofficeEmail")?.value.trim();
    const password = document.querySelector("#backofficePassword")?.value;

    if (!email || !password) {
      setBackofficeStatus("Enter staff email and password.");
      return;
    }

    setBackofficeStatus("Checking secure backoffice login...");
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setBackofficeStatus(error.message || "Backoffice login was not accepted.");
      return;
    }

    if (!(await currentUserIsAdmin())) {
      setBackofficeStatus("This account is not marked as admin staff yet.");
      return;
    }

    await openBackofficePanel("Secure backoffice opened.");
    return;
  }

  const code = document.querySelector("#backofficeCode").value.trim();
  if (code === adminAccessCode) {
    await openBackofficePanel("Backoffice opened in local mode.");
  } else {
    setBackofficeStatus("Access code not accepted.");
  }
});

if (backofficePanel) {
  if (isCloudEnabled()) {
    currentUserIsAdmin().then((isAdmin) => {
      if (isAdmin) openBackofficePanel("Secure backoffice opened.");
    });
  } else if (sessionStorage.getItem(backofficeAccessKey) === "true") {
    openBackofficePanel("Backoffice opened in local mode.");
  }
}

backofficeOperations?.addEventListener("click", async (event) => {
  const workflowButton = event.target.closest("[data-backoffice-workflow]");
  if (workflowButton) {
    const bookingId = workflowButton.dataset.bookingId;
    const booking = backofficeBookingsCache.find((item) => item.id === bookingId);
    if (!booking || !applyAdminWorkflow(booking, workflowButton.dataset.backofficeWorkflow)) return;

    workflowButton.textContent = "Saving...";
    workflowButton.disabled = true;
    try {
      const result = await updateBookingOnline(booking);
      setBackofficeStatus(result.savedCloud ? "Backoffice workflow saved to secure booking desk." : "Backoffice workflow saved locally.");
      await renderBackofficeBookings();
    } catch (error) {
      console.warn("Backoffice workflow update failed", error);
      setBackofficeStatus("Backoffice workflow update failed. Please try again.");
      workflowButton.disabled = false;
    }
    return;
  }

  const saveButton = event.target.closest("[data-backoffice-save]");
  if (!saveButton) return;

  const bookingId = saveButton.dataset.backofficeSave;
  const card = saveButton.closest("[data-backoffice-id]");
  const booking = backofficeBookingsCache.find((item) => item.id === bookingId);
  if (!booking || !card) return;

  card.querySelectorAll("[data-backoffice-field]").forEach((field) => {
    booking[field.dataset.backofficeField] = field.value;
  });

  saveButton.textContent = "Saving...";
  saveButton.disabled = true;
  try {
    const result = await updateBookingOnline(booking);
    setBackofficeStatus(result.savedCloud ? "Backoffice update saved to secure cloud." : "Backoffice update saved locally.");
    await renderBackofficeBookings();
  } catch (error) {
    console.warn("Backoffice update failed", error);
    setBackofficeStatus(error.message || "Backoffice update could not be saved.");
    saveButton.textContent = "Save update";
    saveButton.disabled = false;
  }
});

adminBookingList?.addEventListener("click", async (event) => {
  const workflowButton = event.target.closest("[data-admin-workflow]");
  if (workflowButton) {
    const bookingId = workflowButton.dataset.bookingId;
    const booking = adminBookingsCache.find((item) => item.id === bookingId);
    if (!booking || !applyAdminWorkflow(booking, workflowButton.dataset.adminWorkflow)) return;

    workflowButton.textContent = "Saving...";
    workflowButton.disabled = true;
    try {
      const result = await updateBookingOnline(booking);
      setAdminStatus(result.savedCloud ? "Workflow update saved to secure booking desk." : "Workflow update saved locally.");
      await renderAdminBookings();
    } catch (error) {
      console.warn("Admin workflow update failed", error);
      setAdminStatus("Workflow update failed. Please try again.");
      workflowButton.disabled = false;
    }
    return;
  }

  const saveButton = event.target.closest("[data-admin-save]");
  if (!saveButton) return;

  const bookingId = saveButton.dataset.adminSave;
  const card = saveButton.closest("[data-booking-id]");
  const booking = adminBookingsCache.find((item) => item.id === bookingId);
  if (!booking || !card) return;

  card.querySelectorAll("[data-field]").forEach((field) => {
    booking[field.dataset.field] = field.value;
  });

  saveButton.textContent = "Saving...";
  saveButton.disabled = true;
  try {
    const result = await updateBookingOnline(booking);
    setAdminStatus(result.savedCloud ? "Booking update saved to secure cloud." : "Booking update saved locally.");
    await renderAdminBookings();
  } catch (error) {
    console.warn("Booking update failed", error);
    setAdminStatus(error.message || "Booking update could not be saved.");
    saveButton.textContent = "Save update";
    saveButton.disabled = false;
  }
});

adminSearchInput?.addEventListener("input", renderAdminDashboard);
adminStatusFilter?.addEventListener("change", () => {
  adminQuickFilter = "all";
  syncAdminQuickFilterButtons();
  renderAdminDashboard();
});
adminPaymentFilter?.addEventListener("change", () => {
  adminQuickFilter = "all";
  syncAdminQuickFilterButtons();
  renderAdminDashboard();
});
adminRefreshButton?.addEventListener("click", renderAdminBookings);
adminExportButton?.addEventListener("click", () => {
  const bookings = getFilteredAdminBookings();
  if (!bookings.length) {
    setAdminStatus("No matching booking records to export.");
    return;
  }
  downloadBookingsCsv(bookings, "bandevi-staff-bookings");
  setAdminStatus(`${bookings.length} booking record${bookings.length === 1 ? "" : "s"} exported.`);
});
backofficeSearchInput?.addEventListener("input", renderBackofficeDashboard);
backofficeQueueFilter?.addEventListener("change", renderBackofficeDashboard);
document.addEventListener("click", async (event) => {
  const packageTabButton = event.target.closest("[data-package-pricing-tab]");
  if (packageTabButton) {
    const scope = packageTabButton.dataset.packagePricingTab || "admin";
    pricingManagerCategoryState[scope] = packageTabButton.dataset.pricingCategory || "";
    renderPricingManager(scope);
    return;
  }

  const packageSaveButton = event.target.closest("[data-package-pricing-save]");
  if (packageSaveButton) {
    const scope = packageSaveButton.dataset.packagePricingSave || "admin";
    const manager = packageSaveButton.closest("[data-package-pricing-manager]");
    if (!manager) return;
    packageSaveButton.textContent = "Saving...";
    packageSaveButton.disabled = true;
    const packages = writePricingPackages(collectPricingManagerPackages(manager));
    const result = await savePricingPackagesOnline(packages);
    enhanceBookablePackageLinks();
    refreshProductPriceSurfaces();
    renderPricingManager(scope, result.savedCloud
      ? "Package prices saved to secure cloud and local browser."
      : "Package prices saved locally. Run the pricing package SQL once to share changes across devices.");
    if (scope === "backoffice") {
      setBackofficeStatus(result.savedCloud ? "Package pricing saved to secure cloud." : "Package pricing saved locally.");
    } else {
      setAdminStatus(result.savedCloud ? "Package pricing saved to secure cloud." : "Package pricing saved locally.");
    }
    return;
  }

  const packageResetButton = event.target.closest("[data-package-pricing-reset]");
  if (packageResetButton) {
    const scope = packageResetButton.dataset.packagePricingReset || "admin";
    localStorage.removeItem(packagePricingStorageKey);
    activePricingPackages = readPricingPackages();
    enhanceBookablePackageLinks();
    refreshProductPriceSurfaces();
    renderPricingManager(scope, "Local package prices reset to default website prices.");
    if (scope === "backoffice") {
      setBackofficeStatus("Local package prices reset.");
    } else {
      setAdminStatus("Local package prices reset.");
    }
    return;
  }

  const adminQuickButton = event.target.closest("[data-admin-quick-filter]");
  if (adminQuickButton) {
    applyAdminQuickFilter(adminQuickButton.dataset.adminQuickFilter);
    return;
  }

  const backofficeQueueButton = event.target.closest("[data-backoffice-queue-target]");
  if (backofficeQueueButton && backofficeQueueFilter) {
    backofficeQueueFilter.value = backofficeQueueButton.dataset.backofficeQueueTarget || "all";
    renderBackofficeDashboard();
  }
});
backofficeRefreshButton?.addEventListener("click", renderBackofficeBookings);
backofficeExportButton?.addEventListener("click", () => {
  const bookings = getBackofficeFilteredBookings();
  if (!bookings.length) {
    setBackofficeStatus("No matching backoffice records to export.");
    return;
  }
  downloadBookingsCsv(bookings, "bandevi-backoffice-bookings");
  setBackofficeStatus(`${bookings.length} backoffice record${bookings.length === 1 ? "" : "s"} exported.`);
});

async function prefillPortalFromSession() {
  if (!portalBookingForm || !isCloudEnabled()) return;

  const user = await getCurrentUser();
  if (!user) return;

  const emailField = document.querySelector("#portalEmail");
  const nameField = document.querySelector("#portalName");
  const phoneField = document.querySelector("#portalPhone");
  const fullName = user.user_metadata?.full_name || "";

  if (emailField && !emailField.value && user.email) {
    emailField.value = user.email;
  }

  if (phoneField && !phoneField.value && user.phone) {
    phoneField.value = user.phone;
  }

  if (nameField && !nameField.value && fullName) {
    nameField.value = fullName;
  }
}

function setAuthStatus(message) {
  const authStatus = document.querySelector("#authStatus");
  if (authStatus) authStatus.textContent = message;
}

function getAuthRedirectUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function clearAuthUrlTokens() {
  if (!window.location.hash && !window.location.search.includes("type=recovery")) return;
  window.history.replaceState({}, document.title, `${window.location.origin}${window.location.pathname}`);
}

function getAuthSubmitLabel() {
  if (authContactMode === "phone") {
    return authPhoneOtpSent ? "Verify mobile OTP" : "Send mobile OTP";
  }
  return authMode === "sign-up" ? "Create secure account" : "Sign in securely";
}

function normalizeAuthPhone(phone) {
  const raw = String(phone || "").trim();
  if (!raw) return "";
  if (raw.startsWith("+")) return `+${raw.slice(1).replace(/\D/g, "")}`;
  const digits = normalizePhoneDigits(raw);
  if (digits.length === 10) return `+91${digits}`;
  return digits ? `+${digits}` : "";
}

function setPasswordUpdateStatus(message) {
  if (passwordUpdateStatus) passwordUpdateStatus.textContent = message;
}

function setPasswordRecoveryMode(isRecovery) {
  passwordUpdateForm?.classList.toggle("is-hidden", !isRecovery);
  customerAuthForm?.classList.toggle("is-hidden", isRecovery);
  if (isRecovery) {
    setPasswordUpdateStatus("Enter a new password to finish account recovery.");
    document.querySelector("#newPassword")?.focus();
  }
}

function setAuthSubmitLabel() {
  if (authSubmitButton) {
    authSubmitButton.textContent = getAuthSubmitLabel();
  }
}

function setAuthContactMode(mode) {
  authContactMode = mode === "phone" ? "phone" : "email";
  authPhoneOtpSent = false;
  customerAuthForm?.setAttribute("data-auth-contact", authContactMode);

  const emailInput = document.querySelector("#authEmail");
  const passwordInput = document.querySelector("#authPassword");
  const phoneInput = document.querySelector("#authPhone");
  const otpInput = document.querySelector("#authOtp");
  authEmailField?.classList.toggle("is-hidden", authContactMode !== "email");
  authPasswordField?.classList.toggle("is-hidden", authContactMode !== "email");
  authPhoneField?.classList.toggle("is-hidden", authContactMode !== "phone");
  authOtpField?.classList.toggle("is-hidden", authContactMode !== "phone");
  emailInput?.toggleAttribute("required", authContactMode === "email");
  passwordInput?.toggleAttribute("required", authContactMode === "email");
  phoneInput?.toggleAttribute("required", authContactMode === "phone");
  otpInput?.removeAttribute("required");
  if (otpInput) otpInput.value = "";
  authGoogleButton?.classList.toggle("is-hidden", authContactMode !== "email");
  authForgotButton?.classList.toggle("is-hidden", authContactMode !== "email");

  document.querySelectorAll(".auth-contact-tabs [data-auth-contact]").forEach((button) => {
    const isActive = button.dataset.authContact === authContactMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  setAuthSubmitLabel();
  setAuthStatus(authContactMode === "phone"
    ? "Enter mobile number to receive OTP. Use country code, for example +91."
    : authMode === "sign-up"
      ? "Create an account with the same email used for your Booking ID."
      : "Sign in to open private booking history for your email or mobile.");
}

function setAuthMode(mode) {
  authMode = mode === "sign-up" ? "sign-up" : "sign-in";
  customerAuthForm?.setAttribute("data-auth-mode", authMode);
  authNameField?.classList.toggle("is-hidden", authMode !== "sign-up");
  setAuthSubmitLabel();
  const passwordField = document.querySelector("#authPassword");
  if (passwordField) {
    passwordField.autocomplete = authMode === "sign-up" ? "new-password" : "current-password";
  }
  document.querySelectorAll(".auth-mode-tabs [data-auth-mode]").forEach((button) => {
    const isActive = button.dataset.authMode === authMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  setAuthStatus(authContactMode === "phone"
    ? "Enter mobile number to receive OTP. Use country code, for example +91."
    : authMode === "sign-up"
      ? "Create an account with the same email used for your Booking ID."
      : "Sign in to open private booking history for your email or mobile.");
}

function setAccountPrivacyState(isPrivate) {
  accountSection?.classList.toggle("is-private", isPrivate);
}

function renderAccountLockedState(title, detail, actionLabel = "Login to view") {
  const accountBookingList = document.querySelector("#accountBookingList");
  setAccountPrivacyState(true);

  if (accountSummary) {
    accountSummary.innerHTML = `
      <article class="account-summary-lead">
        <span>Private account portal</span>
        <strong>${escapeHtml(title)}</strong>
      </article>
      <article><span>Status</span><strong>Locked</strong></article>
      <article><span>Privacy</span><strong>Email or mobile required</strong></article>
      <article><span>Action</span><strong>${escapeHtml(actionLabel)}</strong></article>
    `;
  }

  if (accountBookingList) {
    accountBookingList.innerHTML = `
      <article class="account-privacy-card">
        <span class="account-privacy-icon">BA</span>
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(detail)}</p>
          <div class="account-privacy-actions">
            <a class="btn btn-primary" href="track-booking.html">Track by Booking ID</a>
            <a class="btn btn-secondary" href="book-online.html">Create Booking ID</a>
          </div>
        </div>
      </article>
    `;
  }
}

function renderAccountSummary(bookings, sourceLabel = "Booking desk") {
  if (!accountSummary) return;
  const activeBookings = bookings.filter((booking) => booking.status !== "Completed").length;
  const paymentPending = bookings.filter((booking) => booking.paymentStatus === "Payment Pending").length;
  const completed = bookings.filter((booking) => booking.status === "Completed").length;
  const quotePending = bookings.filter((booking) => booking.status === "Enquiry Received").length;
  const proofReady = bookings.filter((booking) => booking.proofUrl).length;
  const summaryItems = [
    ["Total requests", bookings.length],
    ["Active", activeBookings],
    ["Quote review", quotePending],
    ["Payment pending", paymentPending],
    ["Proof ready", proofReady],
    ["Completed", completed]
  ];

  accountSummary.innerHTML = `
    <article class="account-summary-lead">
      <span>${escapeHtml(sourceLabel)}</span>
      <strong>Client command desk for quote, payment, schedule and proof updates.</strong>
    </article>
    ${summaryItems.map(([label, value]) => `
      <article>
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </article>
    `).join("")}
  `;
}

async function renderAccountBookings() {
  const accountBookingList = document.querySelector("#accountBookingList");
  if (!accountBookingList) return;

  if (!accountPortalUnlocked) {
    if (isCloudEnabled()) {
      const user = await getCurrentUser();
      if (user) {
        renderAccountLockedState(
          "Signed in. Open private bookings to view.",
          "For customer privacy, booking history is hidden until you press Open my bookings in this session.",
          "Open my bookings"
        );
      } else {
        renderAccountLockedState(
          "Booking history is private.",
          "Sign in or create an account with the same email or mobile used in your Booking ID. No booking details are shown before login.",
          "Sign in"
        );
      }
    } else {
      renderAccountLockedState(
        "Secure account login is required.",
        "Use Booking ID tracking or WhatsApp support. Local booking previews are hidden to protect customer privacy.",
        "Track by ID"
      );
    }
    return;
  }

  if (!isCloudEnabled()) {
    renderAccountLockedState(
      "Secure account login is not connected on this preview.",
      "Please use Booking ID tracking or WhatsApp support for staff confirmation.",
      "Track by ID"
    );
    return;
  }

  const user = await getCurrentUser();
  if (!user) {
    accountPortalUnlocked = false;
    renderAccountLockedState(
      "Sign in to view bookings.",
      "After login, matching bookings for your email or mobile will appear here for quote, payment, schedule and proof updates.",
      "Sign in"
    );
    return;
  }

  try {
    setAccountPrivacyState(false);
    const filters = [];
    if (user.email) {
      filters.push(`email.eq.${user.email.replaceAll(",", "%2C")}`);
    }

    const phoneDigits = normalizePhoneDigits(user.phone);
    if (phoneDigits) {
      filters.push(`phone.ilike.%${phoneDigits}%`);
      if (phoneDigits.length > 10) filters.push(`phone.ilike.%${phoneDigits.slice(-10)}%`);
    }

    if (!filters.length) {
      renderAccountLockedState(
        "Account contact is not available.",
        "Please track with Booking ID or contact WhatsApp support so staff can verify the booking.",
        "Track by ID"
      );
      return;
    }

    const { data, error } = await supabaseClient
      .from("bookings")
      .select("*")
      .or(filters.join(","))
      .order("created_at", { ascending: false });
    if (error) throw error;

    const bookings = (data || []).map(fromCloudBooking);
    renderAccountSummary(bookings, "Secure account portal");
    if (!bookings.length) {
      accountBookingList.innerHTML = `<article><h3>No bookings in this account yet</h3><p>Create a booking with this email, or track an existing Booking ID manually.</p></article>`;
      return;
    }

    accountBookingList.innerHTML = bookings.map(renderAccountBookingCard).join("");
  } catch (error) {
    console.warn("Account booking list failed", error);
    renderAccountSummary([], "Booking desk");
    accountBookingList.innerHTML = `<article><h3>Booking history unavailable</h3><p>Please use Booking ID tracking or WhatsApp support while staff checks the account.</p></article>`;
  }
}

function getCustomerChecklistItems(booking) {
  const type = getPortalServiceType(booking.service);
  if (type === "kundali") {
    return ["Birth date", "Birth time", "Birth place", "Gotra", "Problem focus"];
  }
  if (type === "gemstone") {
    return ["Stone", "Ring/pendant", "Metal", "Size", "Certificate"];
  }
  return ["Sankalp", "Gotra", "Proof option", "Samagri", "Schedule"];
}

function renderCustomerChecklist(booking) {
  return `
    <div class="customer-checklist" aria-label="Client service checklist">
      ${getCustomerChecklistItems(booking).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  `;
}

function renderAccountBookingCard(booking) {
  const priority = getBookingPriority(booking);
  const serviceProfile = getServiceProfile(booking.service);
  const proofMarkup = booking.proofUrl
    ? `<a href="${escapeHtml(safeExternalUrl(booking.proofUrl))}" target="_blank" rel="noopener">Open proof</a>`
    : "Proof link pending";
  return `
    <article class="account-booking-card">
      <div class="account-booking-main">
        <div class="mini-booking-head">
          <h3>${escapeHtml(booking.service)}</h3>
          <span class="status-pill">${escapeHtml(booking.status)}</span>
        </div>
        <p>${escapeHtml(booking.id)} | ${escapeHtml(formatBookingDate(booking))} | ${escapeHtml(booking.mode || "Mode pending")}</p>
        ${renderProgressBar(booking, "Status progress")}
        ${renderCompactStatusRail(booking, "account-status-rail")}
        ${renderCustomerChecklist(booking)}
        ${renderCustomerStageBoard(booking, "account-stage-board")}
        ${renderPaymentReadyPanel(booking, "payment-ready-panel account-payment-ready-panel")}
        <div class="mini-booking-meta">
          <span><strong>Payment status</strong>${escapeHtml(booking.paymentStatus)}</span>
          <span><strong>Payment option</strong>${escapeHtml(getBookingPaymentMethod(booking))}</span>
          <span><strong>MRP</strong>${escapeHtml(booking.mrpPrice || "To be confirmed")}</span>
          <span><strong>Offer</strong>${escapeHtml(booking.offerPrice || "Quote pending")}</span>
          <span><strong>Discount</strong>${escapeHtml(booking.discountPrice || "Staff offer pending")}</span>
          <span><strong>Final Quote</strong>${escapeHtml(booking.amount || booking.offerPrice || "Quote pending")}</span>
          <span><strong>Proof plan</strong>${escapeHtml(serviceProfile.proof)}</span>
        </div>
        <div class="account-action-rail" aria-label="Client next action summary">
          <div><span>Current desk</span><strong>${escapeHtml(serviceProfile.title)}</strong></div>
          <div><span>Client action</span><strong>${escapeHtml(priority.label)}</strong></div>
          <div><span>Support</span><strong>WhatsApp with Booking ID</strong></div>
        </div>
        <div class="account-next-card is-${escapeHtml(priority.tone)}">
          <strong>${escapeHtml(priority.label)}</strong>
          <p>${escapeHtml(getStatusGuidance(booking))}</p>
        </div>
        <div class="mini-proof-row account-proof-row">
          <div>
            <span>Proof / update</span>
            <strong>${proofMarkup}</strong>
          </div>
          <div>
            <span>Team note</span>
            <strong>${escapeHtml(booking.staffNote || "Staff note will appear here after update.")}</strong>
          </div>
        </div>
      </div>
      <div class="account-card-actions">
        <a class="btn btn-secondary" href="track-booking.html?id=${encodeURIComponent(booking.id)}">Track</a>
        <a class="btn btn-primary" href="${escapeHtml(bookingWhatsAppUrl(booking))}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </article>
  `;
}

async function refreshAuthState() {
  if (!customerAuthForm && !document.querySelector("#accountBookingList")) return;

  if (!isCloudEnabled()) {
    setAuthStatus("Secure account login is not connected on this preview. Track by Booking ID or WhatsApp support.");
    authLogoutButton?.classList.add("is-hidden");
    authOpenAccountButton?.classList.add("is-hidden");
    await renderAccountBookings();
    return;
  }

  const user = await getCurrentUser();
  if (user) {
    const userContact = user.email || user.phone || "this account";
    setAuthStatus(accountPortalUnlocked
      ? `Private bookings opened for ${userContact}.`
      : `Signed in as ${userContact}. Press Open my bookings to view private records.`);
    authLogoutButton?.classList.remove("is-hidden");
    authOpenAccountButton?.classList.toggle("is-hidden", accountPortalUnlocked);
  } else {
    accountPortalUnlocked = false;
    setAuthStatus("Sign in or create an account to view bookings saved with your email or mobile.");
    authLogoutButton?.classList.add("is-hidden");
    authOpenAccountButton?.classList.add("is-hidden");
  }

  await renderAccountBookings();
}

async function handleCustomerAuth(action) {
  if (!isCloudEnabled()) {
    setAuthStatus("Use Booking ID tracking on this device, or send the Booking ID on WhatsApp for staff confirmation.");
    return;
  }

  if (authContactMode === "phone") {
    await handleCustomerPhoneAuth();
    return;
  }

  const email = document.querySelector("#authEmail")?.value.trim();
  const password = document.querySelector("#authPassword")?.value;
  const fullName = document.querySelector("#authName")?.value.trim();

  if (!email || !password) {
    setAuthStatus("Enter email and password.");
    return;
  }

  setAuthStatus(action === "sign-up" ? "Creating account..." : "Signing in...");

  const response = action === "sign-up"
    ? await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName || email } }
    })
    : await supabaseClient.auth.signInWithPassword({ email, password });

  if (response.error) {
    setAuthStatus(response.error.message || "Login could not be completed.");
    return;
  }

  accountPortalUnlocked = action === "sign-in" || Boolean(response.data?.session);
  setAuthStatus(action === "sign-up" && !accountPortalUnlocked ? "Account created. If email confirmation is enabled, please confirm your email." : "Signed in successfully.");
  await refreshAuthState();
  await prefillPortalFromSession();
  if (accountPortalUnlocked) {
    accountSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function handleCustomerPhoneAuth() {
  const phone = normalizeAuthPhone(document.querySelector("#authPhone")?.value);
  const otp = document.querySelector("#authOtp")?.value.trim();
  const fullName = document.querySelector("#authName")?.value.trim();

  if (!phone) {
    setAuthStatus("Enter mobile number with country code, for example +91.");
    return;
  }

  if (!authPhoneOtpSent || !otp) {
    setAuthStatus("Sending mobile OTP...");
    const { error } = await supabaseClient.auth.signInWithOtp({
      phone,
      options: {
        shouldCreateUser: true,
        data: { full_name: fullName || phone }
      }
    });

    if (error) {
      setAuthStatus(error.message || "Mobile OTP could not be sent.");
      return;
    }

    authPhoneOtpSent = true;
    document.querySelector("#authOtp")?.setAttribute("required", "required");
    setAuthSubmitLabel();
    setAuthStatus("OTP sent. Enter the mobile OTP to open your private bookings.");
    document.querySelector("#authOtp")?.focus();
    return;
  }

  setAuthStatus("Verifying mobile OTP...");
  const { data, error } = await supabaseClient.auth.verifyOtp({
    phone,
    token: otp,
    type: "sms"
  });

  if (error) {
    setAuthStatus(error.message || "Mobile OTP was not accepted.");
    return;
  }

  accountPortalUnlocked = Boolean(data?.session);
  authPhoneOtpSent = false;
  setAuthSubmitLabel();
  setAuthStatus("Mobile login successful.");
  await refreshAuthState();
  if (accountPortalUnlocked) {
    accountSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initializeCustomerAuthSessionWatcher() {
  if (!isCloudEnabled() || !customerAuthForm) return;

  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const queryParams = new URLSearchParams(window.location.search);
  if (hashParams.get("type") === "recovery" || queryParams.get("type") === "recovery") {
    setPasswordRecoveryMode(true);
  }

  supabaseClient.auth.onAuthStateChange(async (event) => {
    if (event === "PASSWORD_RECOVERY") {
      setPasswordRecoveryMode(true);
      return;
    }

    if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
      await prefillPortalFromSession();
      await refreshAuthState();
    }

    if (event === "SIGNED_OUT") {
      accountPortalUnlocked = false;
      authPhoneOtpSent = false;
      setAuthSubmitLabel();
      await refreshAuthState();
    }
  });
}

passwordUpdateForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isCloudEnabled()) {
    setPasswordUpdateStatus("Password update is available after secure login is connected.");
    return;
  }

  const newPassword = document.querySelector("#newPassword")?.value || "";
  const confirmPassword = document.querySelector("#confirmPassword")?.value || "";

  if (newPassword.length < 8) {
    setPasswordUpdateStatus("Use at least 8 characters for the new password.");
    return;
  }

  if (newPassword !== confirmPassword) {
    setPasswordUpdateStatus("Both password fields must match.");
    return;
  }

  setPasswordUpdateStatus("Updating password...");
  const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
  if (error) {
    setPasswordUpdateStatus(error.message || "Password could not be updated.");
    return;
  }

  const newPasswordField = document.querySelector("#newPassword");
  const confirmPasswordField = document.querySelector("#confirmPassword");
  if (newPasswordField) newPasswordField.value = "";
  if (confirmPasswordField) confirmPasswordField.value = "";
  setPasswordRecoveryMode(false);
  clearAuthUrlTokens();
  accountPortalUnlocked = true;
  setAuthStatus("Password updated. Private bookings are open for this session.");
  await refreshAuthState();
  accountSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});

passwordUpdateCancel?.addEventListener("click", () => {
  setPasswordRecoveryMode(false);
  clearAuthUrlTokens();
  setAuthStatus("Sign in with your updated password, Google account or mobile OTP.");
});

customerAuthForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleCustomerAuth(authMode);
});

document.querySelectorAll(".auth-mode-tabs [data-auth-mode]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    setAuthMode(button.dataset.authMode);
  });
});

document.querySelectorAll(".auth-contact-tabs [data-auth-contact]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    setAuthContactMode(button.dataset.authContact);
  });
});

authForgotButton?.addEventListener("click", async () => {
  if (!isCloudEnabled()) {
    setAuthStatus("Password reset is available after secure login is connected.");
    return;
  }

  const email = document.querySelector("#authEmail")?.value.trim();
  if (!email) {
    setAuthStatus("Enter your email first, then click Forgot password.");
    return;
  }

  setAuthStatus("Sending password reset email...");
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, { redirectTo: getAuthRedirectUrl() });
  setAuthStatus(error ? error.message || "Password reset could not be sent." : "Password reset link sent. Please check your email.");
});

authGoogleButton?.addEventListener("click", async () => {
  if (!isCloudEnabled()) {
    setAuthStatus("Google login is available after secure login is connected.");
    return;
  }

  setAuthStatus("Opening Google login...");
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: getAuthRedirectUrl() }
  });
  if (error) {
    setAuthStatus(error.message || "Google login could not be opened.");
  }
});

authOpenAccountButton?.addEventListener("click", async () => {
  accountPortalUnlocked = true;
  await refreshAuthState();
  accountSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});

authLogoutButton?.addEventListener("click", async () => {
  if (supabaseClient) {
    await supabaseClient.auth.signOut();
  }
  accountPortalUnlocked = false;
  authPhoneOtpSent = false;
  setAuthSubmitLabel();
  setAuthStatus("Signed out.");
  await refreshAuthState();
});

portalServiceField?.addEventListener("change", updateServicePreview);
portalModeField?.addEventListener("change", () => {
  portalModeField.dataset.touched = "true";
});

document.querySelectorAll("[data-portal-preset]").forEach((button) => {
  button.addEventListener("click", () => applyPortalPreset(button));
});

ticketCopyButton?.addEventListener("click", async () => {
  const bookingId = ticketCopyButton.dataset.bookingId;
  if (!bookingId) return;
  try {
    await navigator.clipboard.writeText(bookingId);
    ticketCopyButton.textContent = "Copied";
  } catch {
    ticketCopyButton.textContent = bookingId;
  }
});

if (customerAuthForm) {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  setAuthMode("sign-in");
  setAuthContactMode("email");
  initializeCustomerAuthSessionWatcher();
  window.addEventListener("load", () => {
    document.querySelector("#client-login")?.scrollIntoView({ behavior: "auto", block: "start" });
  }, { once: true });
}

prefillPortalBookingFromUrl();
updateServicePreview();
initializePricingPackages();
refreshProductPriceSurfaces();
initializePublicProductTabs();
initializeServiceFinders();
initializeGemstoneProductFinder();
prefillPortalFromSession();
refreshAuthState();
