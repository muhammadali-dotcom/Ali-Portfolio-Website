"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  /** Honeypot field — real users never fill this in; bots often do. */
  honeypot?: string;
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

// ── Rate limiting ──────────────────────────────────────────────────────────
// Best-effort, in-memory sliding-window limiter keyed by IP. This resets on
// server restart/redeploy and isn't shared across serverless instances —
// acceptable for a personal portfolio's traffic, not a robust production
// limiter. Swap for Upstash/Redis if this ever needs to scale.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    submissionsByIp.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return false;
}

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  const forwardedFor = headersList.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return headersList.get("x-real-ip") ?? "unknown";
}

/**
 * Server Action — sends a contact form submission via Nodemailer + Gmail.
 *
 * Environment variables required (add to .env.local + Vercel project settings):
 *   GMAIL_USER=alisaleem.as719@gmail.com        — your Gmail address
 *   GMAIL_APP_PASSWORD=xxxx                     — Gmail App Password (Google Account → Security → App passwords)
 *   CONTACT_TO_EMAIL=alisaleem.as719@gmail.com  — where to receive messages (defaults to GMAIL_USER)
 */
export async function sendContactEmail(data: ContactFormData): Promise<ContactResult> {
  // Honeypot — silently "succeed" without sending mail so bots don't learn to avoid this field.
  if (data.honeypot) {
    return { success: true };
  }

  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return { success: false, error: "Too many messages sent. Please try again later." };
  }

  // ── Input validation ──────────────────────────────────────────────────────
  const name = data.name?.trim();
  const email = data.email?.trim().toLowerCase();
  const message = data.message?.trim();

  if (!name || name.length < 2) {
    return { success: false, error: "Name must be at least 2 characters." };
  }
  if (name.length > 100) {
    return { success: false, error: "Name must be under 100 characters." };
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

  // ── Nodemailer ────────────────────────────────────────────────────────────
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? gmailUser;

  if (!gmailUser || !gmailPass) {
    console.error("[contact] GMAIL_USER or GMAIL_APP_PASSWORD is not set.");
    return {
      success: false,
      error: "Email service is not configured. Please reach out directly.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: toEmail,
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
  } catch (err) {
    console.error("[contact] Nodemailer error:", err);
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
