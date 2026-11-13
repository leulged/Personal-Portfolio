const TO_EMAIL = "leulgedion224@gmail.com";
const FROM_EMAIL = "Portfolio <onboarding@resend.dev>";

function clean(value, maxLength) {
  return String(value || "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendContact(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: { error: "Email service is not configured." } };
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 200);
  const subject = clean(payload.subject, 200);
  const message = clean(payload.message, 5000);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: { error: "Name, email, and message are required." },
    };
  }
  if (!isEmail(email)) {
    return { statusCode: 400, body: { error: "Enter a valid email address." } };
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: subject || `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    return { statusCode: 502, body: { error: "The message could not be sent." } };
  }

  return { statusCode: 200, body: { ok: true } };
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload || "{}");
    } catch (error) {
      res.status(400).json({ error: "Invalid message." });
      return;
    }
  }
  if (!payload || typeof payload !== "object") {
    res.status(400).json({ error: "Invalid message." });
    return;
  }

  try {
    const result = await sendContact(payload);
    res.status(result.statusCode).json(result.body);
  } catch (error) {
    res.status(502).json({ error: "The message could not be sent." });
  }
};
