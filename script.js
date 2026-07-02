const businessWhatsApp = "919876543210";

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
const bookingStorageKey = "bandeviAstroBookings";
const adminAccessKey = "bandeviAstroAdminUnlocked";
const adminAccessCode = "BA-ADMIN-2026";

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

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function readBookings() {
  try {
    return JSON.parse(localStorage.getItem(bookingStorageKey) || "[]");
  } catch {
    return [];
  }
}

function writeBookings(bookings) {
  localStorage.setItem(bookingStorageKey, JSON.stringify(bookings));
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
    return [booking.phone, booking.email].some((value) => normalizeContact(value).includes(contact) || contact.includes(normalizeContact(value)));
  });
}

function statusIndex(status) {
  return Math.max(0, bookingStatuses.indexOf(status));
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

function renderTicket(booking) {
  const ticket = document.querySelector("#portalTicket");
  const ticketId = document.querySelector("#ticketId");
  const ticketSummary = document.querySelector("#ticketSummary");
  const ticketTrackLink = document.querySelector("#ticketTrackLink");
  const ticketWhatsApp = document.querySelector("#ticketWhatsApp");
  if (!ticket || !ticketId || !ticketSummary || !ticketTrackLink || !ticketWhatsApp) return;

  ticket.classList.add("is-visible");
  ticketId.textContent = booking.id;
  ticketSummary.textContent = `${booking.service} request received for ${booking.name}. Status: ${booking.status}.`;
  ticketTrackLink.href = `track-booking.html?id=${encodeURIComponent(booking.id)}`;
  ticketWhatsApp.href = bookingWhatsAppUrl(booking);
}

function renderStatusPanel(booking) {
  const statusPanel = document.querySelector("#statusPanel");
  const statusMessage = document.querySelector("#statusMessage");
  const statusTimeline = document.querySelector("#statusTimeline");
  const statusMeta = document.querySelector("#statusMeta");
  const statusWhatsApp = document.querySelector("#statusWhatsApp");
  if (!statusPanel || !statusMessage || !statusTimeline || !statusMeta || !statusWhatsApp) return;

  if (!booking) {
    statusPanel.classList.add("is-visible");
    statusMessage.textContent = "No local booking record found for this ID. If you booked on another phone or computer, send the Booking ID on WhatsApp for staff confirmation.";
    statusTimeline.innerHTML = "";
    statusMeta.innerHTML = "";
    statusWhatsApp.href = `https://wa.me/${businessWhatsApp}`;
    return;
  }

  const currentIndex = statusIndex(booking.status);
  statusPanel.classList.add("is-visible");
  statusMessage.textContent = `Booking ${booking.id} is currently: ${booking.status}.`;
  statusTimeline.innerHTML = bookingStatuses.map((status, index) => {
    const stateClass = index < currentIndex ? "is-complete" : index === currentIndex ? "is-current" : "";
    return `<li class="${stateClass}"><span class="status-dot">${index + 1}</span><div><strong>${status}</strong><p>${index <= currentIndex ? "Updated in your booking flow." : "Next step after staff update."}</p></div></li>`;
  }).join("");
  statusMeta.innerHTML = [
    ["Service", booking.service],
    ["Payment", booking.paymentStatus],
    ["Amount", booking.amount || "Quote pending"],
    ["Preferred date", booking.date || "Flexible"],
    ["Mode", booking.mode],
    ["Updated", new Date(booking.updatedAt).toLocaleString()]
  ].map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");
  statusWhatsApp.href = bookingWhatsAppUrl(booking);
}

function renderAdminBookings() {
  if (!adminBookingList) return;
  const bookings = readBookings();
  if (!bookings.length) {
    adminBookingList.innerHTML = `<article><h3>No bookings on this browser yet</h3><p>When a booking is created from this site in this browser, it will appear here. Database sync can be connected in the next backend phase.</p></article>`;
    return;
  }

  adminBookingList.innerHTML = bookings.map((booking) => {
    const statusOptions = bookingStatuses.map((status) => `<option value="${status}" ${booking.status === status ? "selected" : ""}>${status}</option>`).join("");
    const paymentOptions = paymentStatuses.map((status) => `<option value="${status}" ${booking.paymentStatus === status ? "selected" : ""}>${status}</option>`).join("");
    return `
      <article data-booking-id="${booking.id}">
        <div class="admin-booking-head">
          <div>
            <h3>${booking.name}</h3>
            <p>${booking.id} | ${booking.service} | ${booking.phone}</p>
          </div>
          <span class="status-pill">${booking.status}</span>
        </div>
        <div class="admin-edit-grid">
          <label>Status<select data-field="status">${statusOptions}</select></label>
          <label>Payment<select data-field="paymentStatus">${paymentOptions}</select></label>
          <label>Amount<input data-field="amount" type="text" value="${booking.amount || ""}" placeholder="Final quote" /></label>
        </div>
        <label>Proof link<input data-field="proofUrl" type="url" value="${booking.proofUrl || ""}" placeholder="Photo/video proof URL" /></label>
        <label>Staff note<textarea data-field="staffNote" rows="3" placeholder="Internal note or client update">${booking.staffNote || ""}</textarea></label>
        <div class="admin-actions">
          <button class="btn btn-primary" type="button" data-admin-save="${booking.id}">Save update</button>
          <a class="btn btn-secondary" href="${bookingWhatsAppUrl(booking)}">Open WhatsApp</a>
        </div>
      </article>
    `;
  }).join("");
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
  document.querySelector("#stoneOrder")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-stone]").forEach((button) => {
  button.addEventListener("click", () => setStone(button.dataset.stone));
});

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

stoneOrderForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const order = {
    name: document.querySelector("#stoneClientName").value.trim(),
    phone: document.querySelector("#stoneClientPhone").value.trim(),
    stone: document.querySelector("#stoneName").value,
    form: document.querySelector("#stoneForm").value,
    budget: document.querySelector("#stoneBudget").value.trim() || "Need quote",
    certificate: document.querySelector("#stoneCertificate").value,
    purpose: document.querySelector("#stonePurpose").value.trim() || "Please call me for kundli/gemstone guidance."
  };

  const message = [
    "Namaste Pdt. Jyotishya Acharya Kumodanand Jha team,",
    "",
    "I want to buy/enquire for gemstone online.",
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Gemstone: ${order.stone}`,
    `Form: ${order.form}`,
    `Budget / carat: ${order.budget}`,
    `Certificate: ${order.certificate}`,
    `Purpose / birth details: ${order.purpose}`,
    "",
    "Please confirm suitability, certificate, price and payment process."
  ].join("\n");

  if (stoneStatusEl) {
    stoneStatusEl.textContent = "Opening WhatsApp with gemstone order details.";
  }

  window.location.href = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;
});

portalBookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const booking = {
    id: generateBookingId(),
    name: document.querySelector("#portalName").value.trim(),
    phone: document.querySelector("#portalPhone").value.trim(),
    email: document.querySelector("#portalEmail").value.trim(),
    country: document.querySelector("#portalCountry").value.trim(),
    service: document.querySelector("#portalService").value,
    date: document.querySelector("#portalDate").value,
    time: document.querySelector("#portalTime").value,
    mode: document.querySelector("#portalMode").value,
    concern: document.querySelector("#portalConcern").value.trim(),
    status: "Enquiry Received",
    paymentStatus: "Not Requested",
    amount: serviceStartingPrices[document.querySelector("#portalService").value] || "Quote pending",
    proofUrl: "",
    staffNote: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  saveBooking(booking);
  renderTicket(booking);
  portalBookingForm.reset();
});

trackBookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookingId = document.querySelector("#trackBookingId").value;
  const contact = document.querySelector("#trackContact").value;
  renderStatusPanel(findBooking(bookingId, contact));
});

if (trackBookingForm) {
  const requestedBookingId = new URLSearchParams(window.location.search).get("id");
  if (requestedBookingId) {
    const field = document.querySelector("#trackBookingId");
    if (field) field.value = requestedBookingId.toUpperCase();
    renderStatusPanel(findBooking(requestedBookingId, ""));
  }
}

adminAccessForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const code = document.querySelector("#adminCode").value.trim();
  const status = document.querySelector("#adminAccessStatus");
  if (code === adminAccessCode) {
    sessionStorage.setItem(adminAccessKey, "true");
    adminPanel?.classList.add("is-visible");
    renderAdminBookings();
    if (status) status.textContent = "Staff dashboard opened.";
  } else if (status) {
    status.textContent = "Access code not accepted.";
  }
});

if (adminPanel && sessionStorage.getItem(adminAccessKey) === "true") {
  adminPanel.classList.add("is-visible");
  renderAdminBookings();
}

adminBookingList?.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-admin-save]");
  if (!saveButton) return;

  const bookingId = saveButton.dataset.adminSave;
  const card = saveButton.closest("[data-booking-id]");
  const bookings = readBookings();
  const booking = bookings.find((item) => item.id === bookingId);
  if (!booking || !card) return;

  card.querySelectorAll("[data-field]").forEach((field) => {
    booking[field.dataset.field] = field.value;
  });
  booking.updatedAt = new Date().toISOString();
  writeBookings(bookings);
  renderAdminBookings();
});
