import { z } from "zod";
import { Resend } from "resend";

const rsvpSchema = z.object({
  name: z.string().min(2).max(80),
  attending: z.enum(["yes", "no", "maybe"]),
  guests: z.number().int().min(1).max(10),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().max(500).optional().or(z.literal("")),
});

const attendingLabel = {
  yes: "Иә, қатысамын",
  no: "Келе алмаймын",
  maybe: "Әлі белгісіз",
};

function escape(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(obj));
}

export async function handleRsvp(req, res) {
  let data;
  try {
    const raw = await readBody(req);
    data = JSON.parse(raw);
  } catch {
    return send(res, 400, { error: "Invalid JSON" });
  }

  const parsed = rsvpSchema.safeParse(data);
  if (!parsed.success) {
    return send(res, 422, {
      error: "Validation failed",
      details: parsed.error.flatten(),
    });
  }

  const payload = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RSVP_TO_EMAIL || "fpvn22@gmail.com";
  const from = process.env.RSVP_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey) {
    console.log("[RSVP dev] no RESEND_API_KEY, payload:", payload);
    return send(res, 200, { ok: true, dev: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `RSVP — ${payload.name}`,
      html: `
        <h2>Жаңа RSVP жауап</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td><b>Аты-жөні:</b></td><td>${escape(payload.name)}</td></tr>
          <tr><td><b>Қатысу:</b></td><td>${escape(attendingLabel[payload.attending])}</td></tr>
          <tr><td><b>Адам саны:</b></td><td>${payload.guests}</td></tr>
          <tr><td><b>Телефон:</b></td><td>${escape(payload.phone || "—")}</td></tr>
          <tr><td><b>Хабарлама:</b></td><td>${escape(payload.message || "—")}</td></tr>
        </table>
      `,
    });
    if (error) {
      console.error("Resend error:", error);
      return send(res, 502, { error: "Email failed" });
    }
    return send(res, 200, { ok: true });
  } catch (e) {
    console.error("RSVP API error:", e);
    return send(res, 500, { error: "Server error" });
  }
}
