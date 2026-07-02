const businessWhatsApp = "919876543210";

const serviceSelect = document.querySelector("#clientService");
const form = document.querySelector("#bookingForm");
const statusEl = document.querySelector("#formStatus");
const yearEl = document.querySelector("#year");
const stoneOrderForm = document.querySelector("#stoneOrderForm");
const stoneSelect = document.querySelector("#stoneName");
const stoneStatusEl = document.querySelector("#stoneOrderStatus");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
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
  stoneSelect.value = stoneName;
  document.querySelector("#stoneOrder")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll("[data-stone]").forEach((button) => {
  button.addEventListener("click", () => setStone(button.dataset.stone));
});

if (stoneSelect) {
  const requestedStone = new URLSearchParams(window.location.search).get("stone");
  if (requestedStone) {
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
