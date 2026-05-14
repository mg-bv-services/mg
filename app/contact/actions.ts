"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
  success: boolean;
  message: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const SUBJECT_LABELS: Record<string, string> = {
  koerier: "Koeriersdiensten",
  transport: "Goederenvervoer",
  verhuizing: "Verhuizing",
  beveiliging: "Beveiligingsdiensten",
  reiniging: "Reinigingsdiensten",
  offerte: "Algemene offerte / meerdere diensten",
  anders: "Anders",
};

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 2000);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    throw new Error("SMTP configuration missing: set SMTP_HOST, SMTP_USER, SMTP_PASS");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: sanitizeInput((formData.get("name") as string) || ""),
    email: sanitizeInput((formData.get("email") as string) || ""),
    phone: sanitizeInput((formData.get("phone") as string) || ""),
    subject: sanitizeInput((formData.get("subject") as string) || ""),
    message: sanitizeInput((formData.get("message") as string) || ""),
  };

  if (!data.name || data.name.length < 2) {
    return { success: false, message: "Vul een geldige naam in (minimaal 2 karakters)." };
  }
  if (!data.email || !validateEmail(data.email)) {
    return { success: false, message: "Vul een geldig e-mailadres in." };
  }
  if (!data.subject) {
    return { success: false, message: "Selecteer een onderwerp." };
  }
  if (!data.message || data.message.length < 10) {
    return { success: false, message: "Uw bericht moet minimaal 10 karakters bevatten." };
  }

  const subjectLabel = SUBJECT_LABELS[data.subject] || data.subject;
  const mailFrom = process.env.MAIL_FROM || "info@mg-services.nl";
  const mailTo = process.env.MAIL_TO || "info@mg-services.nl";

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"M.G B.V. website" <${mailFrom}>`,
      to: mailTo,
      replyTo: data.email,
      subject: `Nieuw contactverzoek: ${subjectLabel}`,
      text: [
        "Nieuw bericht via het contactformulier:",
        "",
        `Naam:     ${data.name}`,
        `E-mail:   ${data.email}`,
        `Telefoon: ${data.phone || "—"}`,
        `Onderwerp: ${subjectLabel}`,
        "",
        "Bericht:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; padding: 24px;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin: 0 0 16px;">Nieuw contactverzoek</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 90px;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb;">${escapeHtml(data.email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Telefoon</td><td style="padding: 8px 0;">${data.phone ? escapeHtml(data.phone) : "&mdash;"}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Onderwerp</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(subjectLabel)}</td></tr>
          </table>
          <h3 style="color: #1e3a5f; margin-top: 24px;">Bericht</h3>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb; white-space: pre-wrap;">${escapeHtml(data.message)}</div>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">Gebruik &quot;Reply&quot; om direct te reageren naar ${escapeHtml(data.email)}.</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"M.G B.V." <${mailFrom}>`,
      to: data.email,
      subject: "Bedankt voor uw bericht — M.G B.V.",
      text: [
        `Beste ${data.name},`,
        "",
        `Bedankt voor uw bericht. Wij hebben uw aanvraag voor "${subjectLabel}" ontvangen en nemen zo snel mogelijk contact met u op — meestal binnen één werkdag.`,
        "",
        "Hieronder uw bericht voor uw eigen administratie:",
        "",
        data.message,
        "",
        "Met vriendelijke groet,",
        "M.G B.V.",
        "T: 06-84780008",
        "E: info@mg-services.nl",
      ].join("\n"),
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; padding: 24px;">
          <h2 style="color: #1e3a5f; margin: 0 0 16px;">Bedankt voor uw bericht</h2>
          <p>Beste ${escapeHtml(data.name)},</p>
          <p>Wij hebben uw aanvraag voor <strong>${escapeHtml(subjectLabel)}</strong> ontvangen en nemen zo snel mogelijk contact met u op — meestal binnen één werkdag.</p>
          <p>Hieronder een kopie van uw bericht voor uw eigen administratie:</p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb; white-space: pre-wrap;">${escapeHtml(data.message)}</div>
          <p style="margin-top: 32px;">Met vriendelijke groet,</p>
          <p style="font-weight: 600; margin: 0 0 8px;">M.G B.V.</p>
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            T: <a href="tel:+31684780008" style="color: #2563eb;">06-84780008</a><br>
            E: <a href="mailto:info@mg-services.nl" style="color: #2563eb;">info@mg-services.nl</a>
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message:
        "Bedankt voor uw bericht! U ontvangt een bevestiging per e-mail en wij nemen zo snel mogelijk contact met u op.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message:
        "Het versturen is helaas mislukt. Probeer het later opnieuw of bel ons direct op 06-84780008.",
    };
  }
}
