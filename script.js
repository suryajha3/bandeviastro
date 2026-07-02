const siteConfig = window.BANDEVI_CONFIG || {};
const businessWhatsApp = siteConfig.whatsappNumber || "919876543210";
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
const adminRefreshButton = document.querySelector("#adminRefresh");
const customerAuthForm = document.querySelector("#customerAuthForm");
const authLogoutButton = document.querySelector("#authLogoutButton");
const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");
const portalServiceField = document.querySelector("#portalService");
const portalModeField = document.querySelector("#portalMode");
const servicePreview = document.querySelector("#servicePreview");
const ticketDetails = document.querySelector("#ticketDetails");
const ticketCopyButton = document.querySelector("#ticketCopy");
const bookingStorageKey = "bandeviAstroBookings";
const adminAccessKey = "bandeviAstroAdminUnlocked";
const adminAccessCode = "BA-ADMIN-2026";
let adminBookingsCache = [];
let adminBookingsSource = "local";

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

const serviceStartingPrices = {
  "Online Pooja": "From Rs 1,501",
  "Hawan / Havan": "From Rs 5,100",
  "Kundli Consultation": "From Rs 1,501",
  "Hast Rekha / Palmistry": "From Rs 1,100",
  "Gemstone Guidance": "Quote after kundli review",
  "Buy Gemstone Online": "Certificate-based quote",
  "Vastu / Muhurat": "From Rs 2,100",
  "NRI Online Pooja": "Quote by time zone and ritual",
  "Marriage Guidance": "From Rs 1,501",
  "Business Guidance": "From Rs 2,100"
};

const serviceProfileRules = [
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

document.addEventListener("click", (event) => {
  if (!menuToggle || !primaryNav || menuToggle.contains(event.target) || primaryNav.contains(event.target)) return;
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
});

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
    "Namaste Pdt. Jyotishya Acharya Kumodanand Jha team,",
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

function staffWhatsAppUrl(booking) {
  const phone = normalizeContact(booking.phone).replace(/[^0-9]/g, "");
  const message = [
    `Namaste ${booking.name},`,
    "",
    "Bandevi Astro booking update:",
    `Booking ID: ${booking.id}`,
    `Service: ${booking.service}`,
    `Current status: ${booking.status}`,
    `Payment status: ${booking.paymentStatus}`,
    `Amount / quote: ${booking.amount || "Quote pending"}`,
    "",
    getStatusGuidance(booking)
  ].join("\n");
  return `https://wa.me/${phone || businessWhatsApp}?text=${encodeURIComponent(message)}`;
}

function renderTicket(booking, syncResult = {}) {
  const ticket = document.querySelector("#portalTicket");
  const ticketId = document.querySelector("#ticketId");
  const ticketSummary = document.querySelector("#ticketSummary");
  const ticketTrackLink = document.querySelector("#ticketTrackLink");
  const ticketWhatsApp = document.querySelector("#ticketWhatsApp");
  const ticketSyncNote = document.querySelector("#ticketSyncNote");
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
      ["Next action", getStatusGuidance(booking)]
    ];
    ticketDetails.innerHTML = detailItems.map(([label, value]) => `
      <div>
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `).join("");
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
  statusPanel.classList.add("is-visible");
  statusMessage.textContent = `Booking ${booking.id} is currently: ${booking.status}.`;
  if (statusNextAction) {
    statusNextAction.innerHTML = `
      <strong>Next action</strong>
      <p>${escapeHtml(getStatusGuidance(booking))}</p>
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
  if (!adminStatusFilter || adminStatusFilter.dataset.ready === "true") return;
  adminStatusFilter.innerHTML = [
    `<option value="">All statuses</option>`,
    ...bookingStatuses.map((status) => `<option value="${escapeHtml(status)}">${escapeHtml(status)}</option>`)
  ].join("");
  adminStatusFilter.dataset.ready = "true";
}

function getFilteredAdminBookings() {
  const query = normalizeContact(adminSearchInput?.value || "");
  const status = adminStatusFilter?.value || "";

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
    return matchesQuery && matchesStatus;
  });
}

function renderAdminStats(visibleBookings) {
  if (!adminStats) return;
  const total = adminBookingsCache.length;
  const pendingPayment = adminBookingsCache.filter((booking) => booking.paymentStatus === "Payment Pending").length;
  const scheduled = adminBookingsCache.filter((booking) => booking.status === "Pooja Scheduled").length;
  const completed = adminBookingsCache.filter((booking) => booking.status === "Completed").length;
  const stats = [
    ["Total", total],
    ["Visible", visibleBookings.length],
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
        <div class="admin-note-box">
          <strong>Client concern</strong>
          <p>${escapeHtml(booking.concern || "No concern added.")}</p>
        </div>
        <div class="admin-actions">
          <button class="btn btn-primary" type="button" data-admin-save="${escapeHtml(booking.id)}">Save update</button>
          <a class="btn btn-secondary" href="${escapeHtml(staffWhatsAppUrl(booking))}">Message client</a>
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
    "Namaste Pdt. Jyotishya Acharya Kumodanand Jha team,",
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

if (adminPanel) {
  if (isCloudEnabled()) {
    currentUserIsAdmin().then((isAdmin) => {
      if (isAdmin) openAdminPanel("Secure staff dashboard opened.");
    });
  } else if (sessionStorage.getItem(adminAccessKey) === "true") {
    openAdminPanel("Staff dashboard opened in local mode.");
  }
}

adminBookingList?.addEventListener("click", async (event) => {
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
adminRefreshButton?.addEventListener("click", renderAdminBookings);

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

async function renderAccountBookings() {
  const accountBookingList = document.querySelector("#accountBookingList");
  if (!accountBookingList) return;

  if (!isCloudEnabled()) {
    const localBookings = readBookings().slice(0, 8);
    if (!localBookings.length) {
      accountBookingList.innerHTML = `<article><h3>Secure account activation pending</h3><p>Customer login is ready on the website. Track by Booking ID while account history is activated.</p></article>`;
      return;
    }
    accountBookingList.innerHTML = localBookings.map(renderAccountBookingCard).join("");
    return;
  }

  const user = await getCurrentUser();
  if (!user) {
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
    if (!bookings.length) {
      accountBookingList.innerHTML = `<article><h3>No bookings in this account yet</h3><p>Create a booking with this email, or track an existing Booking ID manually.</p></article>`;
      return;
    }

    accountBookingList.innerHTML = bookings.map(renderAccountBookingCard).join("");
  } catch (error) {
    console.warn("Account booking list failed", error);
    accountBookingList.innerHTML = `<article><h3>Booking history unavailable</h3><p>Please use Booking ID tracking or WhatsApp support while staff checks the account.</p></article>`;
  }
}

function renderAccountBookingCard(booking) {
  return `
    <article>
      <div>
        <div class="mini-booking-head">
          <h3>${escapeHtml(booking.service)}</h3>
          <span class="status-pill">${escapeHtml(booking.status)}</span>
        </div>
        <p>${escapeHtml(booking.id)} | ${escapeHtml(booking.paymentStatus)} | ${escapeHtml(booking.amount || "Quote pending")}</p>
        <div class="mini-booking-meta">
          <span>${escapeHtml(formatBookingDate(booking))}</span>
          <span>${escapeHtml(booking.mode || "Mode pending")}</span>
          <span>${escapeHtml(getStatusGuidance(booking))}</span>
        </div>
      </div>
      <a class="btn btn-secondary" href="track-booking.html?id=${encodeURIComponent(booking.id)}">Track</a>
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
