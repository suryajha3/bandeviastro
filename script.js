const siteConfig = window.BANDEVI_CONFIG || {};
const businessWhatsApp = siteConfig.whatsappNumber || "918676846484";
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
    topStart: "<strong>Global desk</strong> India, USA, UK, Canada, UAE and NRI families",
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
    topStart: "<strong>Global desk</strong> Bharat, USA, UK, Canada, UAE aur NRI parivar",
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
let adminBookingsCache = [];
let adminBookingsSource = "local";
let adminQuickFilter = "all";
let backofficeBookingsCache = [];
let backofficeBookingsSource = "local";
let authMode = "sign-in";
let authContactMode = "email";
let authPhoneOtpSent = false;
let accountPortalUnlocked = false;

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

function initHeaderGlobalTools() {
  document.querySelectorAll(".international-header .header-main").forEach((headerMain) => {
    if (headerMain.querySelector("[data-global-tools]")) return;
    const actions = headerMain.querySelector(".header-actions");
    if (!actions) return;

    const tools = document.createElement("div");
    tools.className = "header-global-tools notranslate";
    tools.setAttribute("data-global-tools", "");
    tools.setAttribute("aria-label", "Language and currency converter");
    tools.innerHTML = `
      <label>
        <span>Language</span>
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
    headerMain.insertBefore(tools, actions);
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
    const spans = topline.querySelectorAll("span");
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

function parseStaffNotePaymentLink(value) {
  const rawNote = String(value || "");
  const match = rawNote.match(/\[\[payment_link:([^\]]*)\]\]/i);
  let paymentLink = "";
  if (match) {
    try {
      paymentLink = decodeURIComponent(match[1] || "");
    } catch {
      paymentLink = "";
    }
  }
  const note = rawNote.replace(/\s*\[\[payment_link:[^\]]*\]\]\s*/gi, " ").replace(/\s{2,}/g, " ").trim();
  return { note, paymentLink };
}

function serializeStaffNotePaymentLink(note, paymentLink) {
  const parsed = parseStaffNotePaymentLink(note);
  const cleanNote = parsed.note;
  const cleanPaymentLink = String(paymentLink || "").trim();
  if (!cleanPaymentLink) return cleanNote;
  return `${cleanNote}${cleanNote ? "\n\n" : ""}[[payment_link:${encodeURIComponent(cleanPaymentLink)}]]`;
}

function getBookingPaymentLink(booking) {
  if (!booking) return "";
  if (booking.paymentLink) return String(booking.paymentLink).trim();
  return parseStaffNotePaymentLink(booking.staffNote).paymentLink;
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

function renderPaymentReadyPanel(booking, className = "payment-ready-panel") {
  if (!booking) return "";
  const amount = booking.amount || getServiceProfile(booking.service).quote || "Quote pending";
  const paymentLink = getVisiblePaymentLink(booking);
  const isPending = isPaymentPendingStage(booking);
  const stateLabel = isPending
    ? paymentLink ? "Payment link ready" : "Payment link pending"
    : "Locked until quote approval";
  const pendingActionLabel = isPending ? "Awaiting payment link" : "Payment locked";
  const action = paymentLink
    ? `<a class="btn btn-primary" href="${escapeHtml(paymentLink)}" target="_blank" rel="noopener">Pay Now</a>`
    : `<span class="payment-pending-chip">${escapeHtml(pendingActionLabel)}</span>`;

  return `
    <div class="${escapeHtml(className)} ${isPending ? "is-payment-open" : "is-payment-locked"}" aria-label="Payment readiness">
      <div>
        <span>${escapeHtml(stateLabel)}</span>
        <strong>${escapeHtml(amount)}</strong>
        <p>Payment opens only after staff confirms the quote. UPI, bank transfer or gateway link can be shared here before full payment gateway integration.</p>
      </div>
      <div class="payment-ready-actions">
        ${action}
        <small>Pay only after confirming the quote and Booking ID with staff.</small>
      </div>
    </div>
  `;
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
      "Quote",
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
  const amount = booking?.amount || getServiceProfile(booking?.service).quote;
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
  const amount = booking?.amount || profile.quote || "Quote under review";
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
  const staffNote = serializeStaffNotePaymentLink(booking.staffNote, booking.paymentLink);
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

  return payload;
}

function fromCloudBooking(row) {
  const preferredTime = row.preferred_time ? String(row.preferred_time).slice(0, 5) : "";
  const parsedStaffNote = parseStaffNotePaymentLink(row.staff_note || row.staffNote || "");

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
  const staffNote = serializeStaffNotePaymentLink(booking.staffNote, booking.paymentLink);

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
    `Concern: ${booking.concern || "Please call me to discuss."}`,
    "",
    "Please confirm quote, schedule and payment process."
  ].join("\n");
  return `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;
}

function getStaffTemplateMessage(booking, templateKey = "status") {
  const amount = booking.amount || getServiceProfile(booking.service).quote;
  const baseLines = [
    `Namaste ${booking.name},`,
    "",
    "Bandevi Astro booking update:",
    `Booking ID: ${booking.id}`,
    `Service: ${booking.service}`
  ];

  const templateLines = {
    quote: [
      "Your details have been reviewed and the quote is ready.",
      `Amount / quote: ${amount}`,
      "Please confirm the service, date and payment process on WhatsApp before making payment."
    ],
    payment: [
      "Your booking has reached the payment stage.",
      `Amount / quote: ${amount}`,
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
      `Amount / quote: ${amount}`,
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

  ticket.classList.add("is-visible");
  ticketId.textContent = booking.id;
  ticketSummary.textContent = `${booking.service} request received for ${booking.name}. Status: ${booking.status}.`;
  ticketTrackLink.href = `track-booking.html?id=${encodeURIComponent(booking.id)}`;
  ticketWhatsApp.href = bookingWhatsAppUrl(booking);
  if (ticketCopyButton) {
    ticketCopyButton.dataset.bookingId = booking.id;
    ticketCopyButton.textContent = "Copy Booking ID";
  }

  if (ticketDetails) {
    const detailItems = [
      ["Service", booking.service],
      ["Quote", booking.amount || "Quote pending"],
      ["Date / time", formatBookingDate(booking)],
      ["Mode", booking.mode],
      ["Payment", booking.paymentStatus],
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
      <div class="ticket-step-grid" aria-label="Next booking steps">
        <div><span>1</span><strong>Send ID on WhatsApp</strong><p>Share ${escapeHtml(booking.id)} so staff can confirm quickly.</p></div>
        <div><span>2</span><strong>Wait for quote</strong><p>Amount, payment method and schedule are confirmed before payment.</p></div>
        <div><span>3</span><strong>Track status</strong><p>Use this ID anytime for quote, payment, schedule and proof updates.</p></div>
      </div>
    `;
  }

  if (ticketSyncNote) {
    if (syncResult.savedCloud) {
      ticketSyncNote.textContent = "Saved to the secure booking system for staff updates across devices.";
    } else if (syncResult.error) {
      ticketSyncNote.textContent = "Booking ID created. Send it on WhatsApp now; the team can confirm and update your status.";
    } else {
      ticketSyncNote.textContent = "Booking ID created. Send it on WhatsApp now; secure account tracking will activate shortly.";
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

  const metaItems = [
    ["Service", booking.service],
    ["Payment", booking.paymentStatus],
    ["Amount", booking.amount || "Quote pending"],
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
    ["pooja", "Pooja", bookings.filter((booking) => matchesStaffQueueFilter(booking, "pooja")).length, "Pooja and hawan work"],
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

function applyAdminWorkflow(booking, actionKey) {
  const action = adminWorkflowActions.find((item) => item.key === actionKey);
  if (!action) return false;
  booking.status = action.status;
  booking.paymentStatus = action.paymentStatus;
  booking.amount = booking.amount || getServiceProfile(booking.service).quote;
  booking.staffNote = action.note;
  return true;
}

function renderAdminDashboard() {
  if (!adminBookingList) return;
  initAdminStatusFilter();
  const bookings = getFilteredAdminBookings();
  renderAdminStats(bookings);
  renderStaffQueueBoard();

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
          <div><span>Updated</span><strong>${escapeHtml(new Date(booking.updatedAt).toLocaleString())}</strong></div>
        </div>
        <div class="admin-edit-grid">
          <label>Status<select data-field="status">${statusOptions}</select></label>
          <label>Payment<select data-field="paymentStatus">${paymentOptions}</select></label>
          <label>Amount<input data-field="amount" type="text" value="${escapeHtml(booking.amount || "")}" placeholder="Final quote" /></label>
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
  return /gemstone|gem|ratna|stone|ring|pendant|ruby|manik|emerald|panna|sapphire|pukhraj|neelam|coral|moonga|pearl|moti|gomed|hessonite|lehsunia|cat.?s eye|diamond|heera|opal/.test(text);
}

function isProductQuoteBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /pooja kit|puja kit|hindi pooja kit|hawan samagri|samagri -|product category|product quote|delivery country|durga pooja kit|lakshmi pooja kit|ganesh pooja kit|navgrah pooja kit/.test(text);
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
          <div><span>Quote</span><strong>${escapeHtml(booking.amount || profile.quote)}</strong></div>
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
          <div><span>Quote</span><strong>${escapeHtml(booking.amount || serviceProfile.quote)}</strong></div>
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
          <label>Quote amount<input data-backoffice-field="amount" type="text" value="${escapeHtml(booking.amount || "")}" placeholder="${escapeHtml(serviceProfile.quote)}" /></label>
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
  const isPendant = text.includes("pendant");
  const isLoose = text.includes("loose");
  const isHighCaution = /neelam|blue sapphire|lehsunia|cat.?s eye|shani|ketu/.test(text);
  const profile = {
    form: isPendant ? "Pendant" : isLoose ? "Loose stone" : "Ring",
    metal: "Need guidance",
    badge: "Certificate quote",
    check: "Kundli suitability, product proof and final quote before payment",
    note: "Staff will confirm available stone photo/video, certificate detail, carat or ratti, metal, delivery and policy clarity before payment."
  };

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

function updateStoneQuoteSummary(stoneName) {
  if (!stoneQuoteSummary) return;
  const selectedStone = stoneName || stoneSelect?.value || "Select a gemstone product";
  const profile = getStoneQuoteProfile(selectedStone);
  stoneQuoteSummary.innerHTML = `
    <div>
      <span>${escapeHtml(profile.badge)}</span>
      <strong>${escapeHtml(selectedStone)}</strong>
      <p>${escapeHtml(profile.note)}</p>
    </div>
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
  updateStoneQuoteSummary(stoneName);
  if (stoneStatusEl) {
    stoneStatusEl.textContent = `${stoneName} selected. Add name, WhatsApp, budget and delivery country to create the quote ID.`;
  }
  if (options.scroll !== false) {
    document.querySelector("#stoneOrder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.querySelectorAll("[data-stone]").forEach((button) => {
  button.addEventListener("click", () => setStone(button.dataset.stone));
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
  const title = document.querySelector("#servicePreviewTitle");
  const body = document.querySelector("#servicePreviewBody");
  const quote = document.querySelector("#servicePreviewQuote");
  const proof = document.querySelector("#servicePreviewProof");
  const details = document.querySelector("#servicePreviewDetails");

  if (title) title.textContent = profile.title;
  if (body) body.textContent = profile.body;
  if (quote) quote.textContent = profile.quote;
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
  const terms = activeFilter && activeFilter.dataset.filter !== "all"
    ? (activeFilter.dataset.keywords || activeFilter.dataset.filter).split(",").map(normalizeCatalogText).filter(Boolean)
    : [];
  const searchTerms = search.split(" ").filter(Boolean);
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardText = card.dataset.searchText || normalizeCatalogText(card.textContent);
    card.dataset.searchText = cardText;
    const matchesFilter = !terms.length || terms.some((term) => cardText.includes(term));
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

const gemstoneFilterCopy = {
  all: ["Full catalogue", "Showing rings, pendants and loose stones for every gemstone product."],
  rings: ["Ring products", "Use this when the customer already wants a wearable ring with metal and finger size guidance."],
  pendants: ["Pendant products", "Use this for customers who prefer a pendant, chain option or non-ring wearing path."],
  loose: ["Loose stones", "Use this when the buyer wants certificate, carat/ratti and proof before deciding ring or pendant setting."],
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
  const cards = [...document.querySelectorAll("#ring-products .ring-product-card, #pendant-products .ring-product-card, #loose-stones .premium-product-card")];
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
        : "loose";
    const matchesFilter = matchesGemstoneFilter(filter, cardText, kind);
    const matchesSearch = !searchTerms.length || searchTerms.every((term) => cardText.includes(term));
    const isVisible = matchesFilter && matchesSearch;

    card.hidden = !isVisible;
    card.classList.toggle("is-filtered-out", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  ["ring-products", "pendant-products", "loose-stones"].forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.hidden = ![...section.querySelectorAll(".ring-product-card, .premium-product-card")].some((card) => !card.hidden);
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

    searchInput?.addEventListener("input", () => updateGemstoneProductFinder(finder));
    updateGemstoneProductFinder(finder);
  });

  document.querySelectorAll("[data-gemstone-filter-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
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
  catalog.innerHTML = poojaKitProducts.map(([name, image, badge, body]) => `
    <article class="pooja-product-card pooja-kit-card">
      <div class="pooja-product-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(name)} product kit image" loading="lazy" /><span>${escapeHtml(badge)}</span></div>
      <div class="pooja-product-body">
        <span class="quote-chip">Hindi pooja kit</span>
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(body)}</p>
        <div class="pooja-product-meta"><div><span>Quote</span><strong>Before payment</strong></div><div><span>Support</span><strong>Kit + guidance</strong></div></div>
        <ul class="pooja-product-list"><li>Real kit image shown</li><li>Item list confirmed by ritual</li><li>Booking ID for follow-up</li></ul>
        <div class="product-card-actions">
          <a class="text-button product-detail-link" href="${escapeHtml(productDetailUrl(name))}">View details</a>
          <a class="text-button" href="${escapeHtml(bookingUrl(`${name} Enquiry`, "Pooja kit guidance", { product: name, category: "Hindi Pooja Kit", quoteType: "Product quote before payment", delivery: "To be confirmed", concern: productConcern(name, "Hindi Pooja Kit") }))}">Create Quote</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderHawanSamagriCatalog() {
  const catalog = document.querySelector("[data-hawan-samagri-catalog]");
  if (!catalog) return;
  catalog.innerHTML = hawanSamagriProducts.map(([name, image, badge, body]) => `
    <article class="samagri-card is-product-item">
      <img src="${escapeHtml(image)}" alt="${escapeHtml(name)} hawan samagri product image" loading="lazy" />
      <div>
        <span>${escapeHtml(badge)}</span>
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(body)}</p>
        <div class="product-card-actions ${mainSamagriDetailNames.has(name) ? "" : "single-action"}">
          ${mainSamagriDetailNames.has(name) ? `<a class="text-button product-detail-link" href="${escapeHtml(productDetailUrl(name))}">View details</a>` : ""}
          <a class="text-button" href="${escapeHtml(bookingUrl(`Hawan Samagri - ${name}`, "Hawan samagri guidance", { product: name, category: "Hawan Samagri", quoteType: "Product quote before payment", delivery: "To be confirmed", concern: productConcern(name, "Hawan Samagri") }))}">Ask for this item</a>
        </div>
      </div>
    </article>
  `).join("");
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
  const details = [];

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
    amount: "Certificate-based quote pending",
    proofUrl: "",
    staffNote: "",
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
    amount: serviceProfile.quote,
    proofUrl: "",
    staffNote: "",
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
  if (submitButton) submitButton.textContent = "Create booking ID";
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
document.addEventListener("click", (event) => {
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
  const fullName = user.user_metadata?.full_name || "";

  if (emailField && !emailField.value && user.email) {
    emailField.value = user.email;
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
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  return digits ? `+${digits}` : "";
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
      : "Sign in to open private booking history for your email.");
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
      : "Sign in to open private booking history for your email.");
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
          "Sign in or create an account with the same email used in your Booking ID. No booking details are shown before login.",
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
      "After login, matching bookings for your email will appear here for quote, payment, schedule and proof updates.",
      "Sign in"
    );
    return;
  }

  try {
    setAccountPrivacyState(false);
    let bookingQuery = supabaseClient
      .from("bookings")
      .select("*");

    if (user.email) {
      bookingQuery = bookingQuery.eq("email", user.email);
    } else if (user.phone) {
      bookingQuery = bookingQuery.eq("phone", user.phone);
    } else {
      renderAccountLockedState(
        "Account contact is not available.",
        "Please track with Booking ID or contact WhatsApp support so staff can verify the booking.",
        "Track by ID"
      );
      return;
    }

    const { data, error } = await bookingQuery.order("created_at", { ascending: false });
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
          <span><strong>Payment</strong>${escapeHtml(booking.paymentStatus)}</span>
          <span><strong>Amount</strong>${escapeHtml(booking.amount || "Quote pending")}</span>
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
    setAuthStatus("Sign in or create an account to view bookings saved with your email.");
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
  window.addEventListener("load", () => {
    document.querySelector("#client-login")?.scrollIntoView({ behavior: "auto", block: "start" });
  }, { once: true });
}

prefillPortalBookingFromUrl();
updateServicePreview();
renderPoojaKitCatalog();
renderHawanSamagriCatalog();
initializeServiceFinders();
initializeGemstoneProductFinder();
prefillPortalFromSession();
refreshAuthState();
