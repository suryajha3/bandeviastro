const crypto = require("crypto");
const fs = require("fs");
const http = require("http");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const razorpayKeyId = process.env.RAZORPAY_KEY_ID || "";
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".sql": "text/plain; charset=utf-8"
};

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 128 * 1024) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    request.on("error", reject);
  });
}

function cleanText(value, maxLength = 120) {
  return String(value || "")
    .replace(/[^\w\s\-.,:/@()+]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizeAmountPaise(value) {
  const amount = Number(value);
  if (!Number.isInteger(amount)) return 0;
  if (amount < 100) return 0;
  if (amount > 500000000) return 0;
  return amount;
}

function razorpayAuthHeader() {
  return `Basic ${Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64")}`;
}

async function createRazorpayOrder(request, response) {
  if (!razorpayKeyId || !razorpayKeySecret) {
    sendJson(response, 503, {
      ok: false,
      error: "Razorpay is not configured on the server."
    });
    return;
  }

  try {
    const payload = await readJson(request);
    const amountPaise = normalizeAmountPaise(payload.amountPaise);
    const bookingId = cleanText(payload.bookingId, 40).toUpperCase();
    const service = cleanText(payload.service, 120);

    if (!amountPaise || !bookingId) {
      sendJson(response, 400, {
        ok: false,
        error: "A valid booking ID and payment amount are required."
      });
      return;
    }

    const receipt = bookingId.replace(/[^A-Z0-9-]/g, "").slice(0, 40) || `BA-${Date.now()}`;
    const orderPayload = {
      amount: amountPaise,
      currency: "INR",
      receipt,
      notes: {
        booking_id: bookingId,
        service,
        source: "bandeviastro.com"
      }
    };

    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Authorization": razorpayAuthHeader(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderPayload)
    });

    const order = await razorpayResponse.json().catch(() => ({}));
    if (!razorpayResponse.ok) {
      sendJson(response, 502, {
        ok: false,
        error: order?.error?.description || "Razorpay order creation failed."
      });
      return;
    }

    sendJson(response, 200, {
      ok: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt
      }
    });
  } catch (error) {
    sendJson(response, 400, {
      ok: false,
      error: error.message || "Unable to create Razorpay order."
    });
  }
}

async function verifyRazorpayPayment(request, response) {
  if (!razorpayKeySecret) {
    sendJson(response, 503, {
      ok: false,
      error: "Razorpay verification is not configured on the server."
    });
    return;
  }

  try {
    const payload = await readJson(request);
    const orderId = cleanText(payload.razorpay_order_id, 80);
    const paymentId = cleanText(payload.razorpay_payment_id, 80);
    const signature = cleanText(payload.razorpay_signature, 160);

    if (!orderId || !paymentId || !signature) {
      sendJson(response, 400, {
        ok: false,
        verified: false,
        error: "Missing Razorpay payment verification fields."
      });
      return;
    }

    const expected = crypto
      .createHmac("sha256", razorpayKeySecret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expected, "hex");
    const signatureBuffer = /^[a-f0-9]{64}$/i.test(signature)
      ? Buffer.from(signature, "hex")
      : Buffer.alloc(expectedBuffer.length);
    const verified = signatureBuffer.length === expectedBuffer.length
      && crypto.timingSafeEqual(expectedBuffer, signatureBuffer);

    sendJson(response, verified ? 200 : 400, {
      ok: verified,
      verified,
      paymentId: verified ? paymentId : undefined
    });
  } catch (error) {
    sendJson(response, 400, {
      ok: false,
      verified: false,
      error: error.message || "Unable to verify Razorpay payment."
    });
  }
}

function isBlockedStaticPath(relativePath) {
  return relativePath
    .split(/[\\/]+/)
    .some((part) => part.startsWith(".") && part !== ".well-known");
}

function serveStatic(request, response) {
  const url = new URL(request.url, "http://localhost");
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";
  if (pathname.endsWith("/")) pathname += "index.html";

  const relativePath = pathname.replace(/^\/+/, "");
  if (isBlockedStaticPath(relativePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const filePath = path.resolve(root, relativePath);
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=86400"
    });
    fs.createReadStream(filePath).pipe(response);
  });
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://localhost");

  if (request.method === "GET" && url.pathname === "/api/health") {
    sendJson(response, 200, {
      ok: true,
      service: "bandeviastro",
      razorpayConfigured: Boolean(razorpayKeyId && razorpayKeySecret)
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/razorpay/order") {
    createRazorpayOrder(request, response);
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/razorpay/verify") {
    verifyRazorpayPayment(request, response);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { "Allow": "GET, HEAD, POST" });
    response.end("Method not allowed");
    return;
  }

  serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`Bandevi Astro server running on port ${port}.`);
});
