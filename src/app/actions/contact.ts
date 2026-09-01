"use server";

import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

/**
 * Server Action — sends a contact form submission via Resend.
 *
 * Environment variables required (add to .env.local + Vercel project settings):
 *   RESEND_API_KEY=re_xxxxxxxxxxxx          — from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL=you@example.com        — where to receive messages
 *   CONTACT_FROM_EMAIL=noreply@yourdomain.com — verified Resend sender domain
 */
export async function sendContactEmail(data: ContactFormData): Promise<ContactResult> {
  // ── Input validation ──────────────────────────────────────────────────────
  const name = data.name?.trim();
  const email = data.email?.trim().toLowerCase();
  const message = data.message?.trim();

  if (!name || name.length < 2) {
    return { success: false, error: "Name must be at least 2 characters." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }
  if (!message || message.length < 10) {
    return { success: false, error: "Message must be at least 10 characters." };
  }
  if (message.length > 5000) {
    return { success: false, error: "Message must be under 5000 characters." };
  }

  // ── Resend ────────────────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "alisaleem.as719@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"; // resend default for testing

  if (!apiKey) {
    // Key not configured — fall back silently so the UI can show a useful error
    console.error("[contact] RESEND_API_KEY is not set.");
    return {
      success: false,
      error: "Email service is not configured. Please reach out directly.",
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Portfolio Contact <${fromEmail}>`,
    to: [toEmail],
    replyTo: email,
    subject: `New message from ${name} — Portfolio`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <h2 style="margin-bottom:4px">New Contact Message</h2>
        <p style="color:#64748b;font-size:14px;margin-top:0">Received via your portfolio contact form</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;font-weight:600;width:80px;vertical-align:top">Name</td>
            <td style="padding:8px 0">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;vertical-align:top">Email</td>
            <td style="padding:8px 0">
              <a href="mailto:${escapeHtml(email)}" style="color:#3b82f6">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;vertical-align:top">Message</td>
            <td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(message)}</td>
          </tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
        <p style="font-size:12px;color:#94a3b8">
          Sent from your portfolio at ${new Date().toUTCString()}
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { success: false, error: "Failed to send. Please try again later." };
  }

  return { success: true };
}

/** Minimal HTML escaping to prevent XSS in the email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
