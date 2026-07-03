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
const adminSourceStrip = document.querySelector("#adminSourceStrip");
const backofficeAccessForm = document.querySelector("#backofficeAccessForm");
const backofficePanel = document.querySelector("#backofficePanel");
const backofficeStats = document.querySelector("#backofficeStats");
const backofficeSearchInput = document.querySelector("#backofficeSearch");
const backofficeQueueFilter = document.querySelector("#backofficeQueueFilter");
const backofficeRefreshButton = document.querySelector("#backofficeRefresh");
const backofficeSourceStrip = document.querySelector("#backofficeSourceStrip");
const backofficeOperations = document.querySelector("#backofficeOperations");
const backofficeCustomerList = document.querySelector("#backofficeCustomerList");
const backofficeKundaliQueue = document.querySelector("#backofficeKundaliQueue");
const backofficeGemstoneQueue = document.querySelector("#backofficeGemstoneQueue");
const backofficeReportList = document.querySelector("#backofficeReportList");
const backofficeLogin = document.querySelector("#backofficeLogin");
const backofficePreview = document.querySelector("#backofficePreview");
const backofficeWorkflowPreview = document.querySelector("#backofficeWorkflowPreview");
const customerAuthForm = document.querySelector("#customerAuthForm");
const authLogoutButton = document.querySelector("#authLogoutButton");
const accountSummary = document.querySelector("#accountSummary");
const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");
const portalServiceField = document.querySelector("#portalService");
const portalModeField = document.querySelector("#portalMode");
const servicePreview = document.querySelector("#servicePreview");
const ticketDetails = document.querySelector("#ticketDetails");
const ticketCopyButton = document.querySelector("#ticketCopy");
const bookingStorageKey = "bandeviAstroBookings";
const adminAccessKey = "bandeviAstroAdminUnlocked";
const backofficeAccessKey = "bandeviAstroBackofficeUnlocked";
const adminAccessCode = "BA-ADMIN-2026";
let adminBookingsCache = [];
let adminBookingsSource = "local";
let backofficeBookingsCache = [];
let backofficeBookingsSource = "local";

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
    test: (service) => /gemstone|ruby|emerald|sapphire|manik|panna|pukhraj|neelam|moonga|moti|gomed|lehsunia|diamond/i.test(service),
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

function safeExternalUrl(value) {
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
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
  const guidance = {
    "Enquiry Received": "Your request is received. The team will review details and share the right quote, schedule and payment process.",
    "Quote Sent": `Quote is ready: ${amount}. Please confirm on WhatsApp before making payment.`,
    "Payment Pending": "Payment is pending after quote approval. Staff will confirm the payment method before collection.",
    "Confirmed": "Your booking is confirmed. The team is preparing the schedule, pandit assignment or consultation slot.",
    "Pooja Scheduled": "Your service is scheduled. Please keep your phone available for final coordination and proof updates.",
    "Completed": "Your service is marked completed. Check proof, notes and WhatsApp updates from the team."
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

async function getCurrentUser() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) return null;
  return data?.user || null;
}

function toCloudBooking(booking, user) {
  return {
    booking_code: booking.id,
    customer_name: booking.name,
    phone: booking.phone,
    email: booking.email || null,
    country: booking.country || null,
    service: booking.service,
    preferred_date: booking.date || null,
    preferred_time: booking.time || null,
    mode: booking.mode || null,
    concern: booking.concern || null,
    status: booking.status,
    payment_status: booking.paymentStatus,
    amount: booking.amount || null,
    proof_url: booking.proofUrl || null,
    staff_note: booking.staffNote || null,
    customer_user_id: user?.id || booking.customerUserId || null,
    created_at: booking.createdAt,
    updated_at: booking.updatedAt
  };
}

function fromCloudBooking(row) {
  const preferredTime = row.preferred_time ? String(row.preferred_time).slice(0, 5) : "";

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
    proofUrl: row.proof_url || row.proofUrl || "",
    staffNote: row.staff_note || row.staffNote || "",
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

  if (!isCloudEnabled()) {
    return { savedCloud: false, mode: "local" };
  }

  const updatePayload = {
    status: booking.status,
    payment_status: booking.paymentStatus,
    amount: booking.amount || null,
    proof_url: booking.proofUrl || null,
    staff_note: booking.staffNote || null,
    updated_at: booking.updatedAt
  };

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
  if (!statusPanel || !statusMessage || !statusTimeline || !statusMeta || !statusWhatsApp) return;

  if (!booking) {
    statusPanel.classList.add("is-visible");
    statusMessage.textContent = "No booking record found for this Booking ID and contact. Please check the details or send the Booking ID on WhatsApp for staff confirmation.";
    if (statusNextAction) {
      statusNextAction.innerHTML = `<strong>Next action</strong><p>Check the Booking ID, use the same phone/email, or message the team on WhatsApp.</p>`;
    }
    statusTimeline.innerHTML = "";
    statusMeta.innerHTML = "";
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
    return matchesQuery && matchesStatus && matchesPayment;
  });
}

function renderAdminStats(visibleBookings) {
  if (!adminStats) return;
  const total = adminBookingsCache.length;
  const newEnquiries = adminBookingsCache.filter((booking) => booking.status === "Enquiry Received").length;
  const pendingPayment = adminBookingsCache.filter((booking) => booking.paymentStatus === "Payment Pending").length;
  const quotesSent = adminBookingsCache.filter((booking) => booking.status === "Quote Sent").length;
  const scheduled = adminBookingsCache.filter((booking) => booking.status === "Pooja Scheduled").length;
  const completed = adminBookingsCache.filter((booking) => booking.status === "Completed").length;
  const stats = [
    ["Total", total],
    ["Visible", visibleBookings.length],
    ["New", newEnquiries],
    ["Quote sent", quotesSent],
    ["Payment pending", pendingPayment],
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
        </div>
        <label>Proof link<input data-field="proofUrl" type="url" value="${escapeHtml(booking.proofUrl || "")}" placeholder="Photo/video proof URL" /></label>
        <label>Customer update note<textarea data-field="staffNote" rows="3" placeholder="This note appears in customer tracking">${escapeHtml(booking.staffNote || "")}</textarea></label>
        <div class="admin-service-hints">
          <div><span>Proof plan</span><strong>${escapeHtml(serviceProfile.proof)}</strong></div>
          <div><span>Details needed</span><strong>${escapeHtml(serviceProfile.details)}</strong></div>
        </div>
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
    booking.staffNote
  ].join(" ").toLowerCase();
}

function isKundaliBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /kundali|kundli|janam|birth chart|dosh|dasha|rahu|ketu|shani|mangal|pitra|kaal sarp|navgraha|grah|vivah|marriage matching|guna|muhurat|upay|remedy/.test(text);
}

function isGemstoneBooking(booking) {
  const text = getBackofficeSearchText(booking);
  return /gemstone|gem|ratna|stone|ring|pendant|ruby|manik|emerald|panna|sapphire|pukhraj|neelam|coral|moonga|pearl|moti|gomed|hessonite|lehsunia|cat.?s eye|diamond|heera/.test(text);
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
    let matchesQueue = true;

    if (queue === "new") matchesQueue = booking.status === "Enquiry Received";
    if (queue === "payment") matchesQueue = booking.paymentStatus === "Payment Pending";
    if (queue === "kundali") matchesQueue = isKundaliBooking(booking);
    if (queue === "gemstone") matchesQueue = isGemstoneBooking(booking);
    if (queue === "nri") matchesQueue = isNriBooking(booking);
    if (queue === "scheduled") matchesQueue = booking.status === "Pooja Scheduled";
    if (queue === "completed") matchesQueue = booking.status === "Completed";

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
  const nriQueue = backofficeBookingsCache.filter(isNriBooking).length;
  const completed = backofficeBookingsCache.filter((booking) => booking.status === "Completed").length;
  const stats = [
    ["Total", total],
    ["Visible", visibleBookings.length],
    ["New", newEnquiries],
    ["Quote sent", quotesSent],
    ["Payment pending", pendingPayment],
    ["Kundali", kundaliQueue],
    ["Gemstones", gemstoneQueue],
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
          <div><span>Date / time</span><strong>${escapeHtml(formatBookingDate(booking))}</strong></div>
          <div><span>Mode</span><strong>${escapeHtml(booking.mode || "Not selected")}</strong></div>
        </div>
        ${renderBackofficeChecklist(booking)}
        <div class="backoffice-edit-grid">
          <label>Status<select data-backoffice-field="status">${statusOptions}</select></label>
          <label>Payment<select data-backoffice-field="paymentStatus">${paymentOptions}</select></label>
          <label>Quote amount<input data-backoffice-field="amount" type="text" value="${escapeHtml(booking.amount || "")}" placeholder="${escapeHtml(serviceProfile.quote)}" /></label>
          <label>Proof link<input data-backoffice-field="proofUrl" type="url" value="${escapeHtml(booking.proofUrl || "")}" placeholder="Photo/video proof URL" /></label>
        </div>
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

function setStone(stoneName) {
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
  if (stoneFormField && /ring/i.test(stoneName)) {
    stoneFormField.value = "Ring";
  } else if (stoneFormField && /pendant/i.test(stoneName)) {
    stoneFormField.value = "Pendant";
  } else if (stoneFormField && /loose/i.test(stoneName)) {
    stoneFormField.value = "Loose stone";
  }
  document.querySelector("#stoneOrder")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    if (/gemstone|ruby|emerald|sapphire|manik|panna|pukhraj|neelam|moonga|moti|gomed|lehsunia|diamond/i.test(service)) {
      portalModeField.value = "Gemstone delivery";
    } else if (/kundali|kundli|hast rekha|palmistry|vastu|muhurat/i.test(service)) {
      portalModeField.value = "Online video call";
    } else {
      portalModeField.value = "Temple pooja with proof";
    }
  }
}

function prefillPortalBookingFromUrl() {
  if (!portalBookingForm) return;
  const params = new URLSearchParams(window.location.search);
  const requestedService = params.get("service");
  const requestedMode = params.get("mode");
  const requestedConcern = params.get("concern");
  const portalService = document.querySelector("#portalService");
  const portalMode = document.querySelector("#portalMode");
  const portalConcern = document.querySelector("#portalConcern");

  setSelectValue(portalService, requestedService);
  if (portalMode && requestedMode) {
    portalMode.dataset.touched = "true";
  }
  setSelectValue(portalMode, requestedMode);
  updateServicePreview();

  if (portalConcern && requestedConcern && !portalConcern.value) {
    portalConcern.value = requestedConcern;
  }
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

function buildPortalConcern() {
  const requirement = document.querySelector("#portalConcern")?.value.trim();
  const sankalp = document.querySelector("#portalSankalp")?.value.trim();
  const timezone = document.querySelector("#portalTimezone")?.value.trim();
  const details = [];

  if (requirement) details.push(`Requirement: ${requirement}`);
  if (sankalp) details.push(`Birth / sankalp details: ${sankalp}`);
  if (timezone) details.push(`Country time zone: ${timezone}`);

  return details.join("\n") || "Please call me to discuss details.";
}

if (stoneSelect) {
  const requestedStone = new URLSearchParams(window.location.search).get("stone");
  if (requestedStone) {
    if (![...stoneSelect.options].some((option) => option.value === requestedStone)) {
      stoneSelect.add(new Option(requestedStone, requestedStone), 0);
    }
    stoneSelect.value = requestedStone;
  }
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
  try {
    const result = await updateBookingOnline(booking);
    setAdminStatus(result.savedCloud ? "Booking update saved to secure cloud." : "Booking update saved locally.");
    await renderAdminBookings();
  } catch (error) {
    console.warn("Booking update failed", error);
    setAdminStatus(error.message || "Booking update could not be saved.");
    saveButton.textContent = "Save update";
  }
});

adminSearchInput?.addEventListener("input", renderAdminDashboard);
adminStatusFilter?.addEventListener("change", renderAdminDashboard);
adminPaymentFilter?.addEventListener("change", renderAdminDashboard);
adminRefreshButton?.addEventListener("click", renderAdminBookings);
backofficeSearchInput?.addEventListener("input", renderBackofficeDashboard);
backofficeQueueFilter?.addEventListener("change", renderBackofficeDashboard);
backofficeRefreshButton?.addEventListener("click", renderBackofficeBookings);

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

function renderAccountSummary(bookings, sourceLabel = "Booking desk") {
  if (!accountSummary) return;
  const activeBookings = bookings.filter((booking) => booking.status !== "Completed").length;
  const paymentPending = bookings.filter((booking) => booking.paymentStatus === "Payment Pending").length;
  const completed = bookings.filter((booking) => booking.status === "Completed").length;
  const summaryItems = [
    ["Total requests", bookings.length],
    ["Active", activeBookings],
    ["Payment pending", paymentPending],
    ["Completed", completed]
  ];

  accountSummary.innerHTML = `
    <article class="account-summary-lead">
      <span>${escapeHtml(sourceLabel)}</span>
      <strong>Track quote, payment, schedule and proof from one place.</strong>
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

  if (!isCloudEnabled()) {
    const localBookings = readBookings().slice(0, 8);
    renderAccountSummary(localBookings, "Local booking preview");
    if (!localBookings.length) {
      accountBookingList.innerHTML = `<article><h3>Secure account activation pending</h3><p>Customer login is ready on the website. Track by Booking ID while account history is activated.</p></article>`;
      return;
    }
    accountBookingList.innerHTML = localBookings.map(renderAccountBookingCard).join("");
    return;
  }

  const user = await getCurrentUser();
  if (!user) {
    renderAccountSummary([], "Secure account portal");
    accountBookingList.innerHTML = `<article><h3>Sign in to view bookings</h3><p>After login, matching bookings will appear here for tracking.</p></article>`;
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from("bookings")
      .select("*")
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
        <div class="mini-booking-meta">
          <span><strong>Payment</strong>${escapeHtml(booking.paymentStatus)}</span>
          <span><strong>Amount</strong>${escapeHtml(booking.amount || "Quote pending")}</span>
          <span><strong>Proof plan</strong>${escapeHtml(serviceProfile.proof)}</span>
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
    setAuthStatus("Secure customer login is ready for activation. For now, track with Booking ID or WhatsApp support.");
    authLogoutButton?.classList.add("is-hidden");
    await renderAccountBookings();
    return;
  }

  const user = await getCurrentUser();
  if (user) {
    setAuthStatus(`Signed in as ${user.email}.`);
    authLogoutButton?.classList.remove("is-hidden");
  } else {
    setAuthStatus("Sign in or create an account to view bookings saved with your email.");
    authLogoutButton?.classList.add("is-hidden");
  }

  await renderAccountBookings();
}

async function handleCustomerAuth(action) {
  if (!isCloudEnabled()) {
    setAuthStatus("Secure customer login is being activated. Please track with Booking ID for now.");
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

  setAuthStatus(action === "sign-up" ? "Account created. If email confirmation is enabled, please confirm your email." : "Signed in successfully.");
  await refreshAuthState();
  await prefillPortalFromSession();
}

customerAuthForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleCustomerAuth("sign-in");
});

document.querySelectorAll("[data-auth-action]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    handleCustomerAuth(button.dataset.authAction);
  });
});

authLogoutButton?.addEventListener("click", async () => {
  if (supabaseClient) {
    await supabaseClient.auth.signOut();
  }
  setAuthStatus("Signed out.");
  await refreshAuthState();
});

portalServiceField?.addEventListener("change", updateServicePreview);
portalModeField?.addEventListener("change", () => {
  portalModeField.dataset.touched = "true";
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

prefillPortalBookingFromUrl();
updateServicePreview();
initializeServiceFinders();
prefillPortalFromSession();
refreshAuthState();
