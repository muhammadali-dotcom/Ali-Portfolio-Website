/**
 * Tests for the sendContactEmail Server Action — validation, honeypot,
 * rate limiting, and Nodemailer error handling.
 */

const sendMailMock = jest.fn();

jest.mock("nodemailer", () => ({
  __esModule: true,
  default: {
    createTransport: jest.fn(() => ({ sendMail: sendMailMock })),
  },
}));

const headersMock = jest.fn();
jest.mock("next/headers", () => ({
  headers: () => headersMock(),
}));

import { sendContactEmail } from "@/app/actions/contact";

const validData = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "Hello, I would love to work with you on a project.",
};

function mockIp(ip: string) {
  headersMock.mockResolvedValue({
    get: (key: string) => (key === "x-forwarded-for" ? ip : null),
  });
}

// Each test gets its own IP so the module-level rate limiter (which persists
// across tests in this file) never interferes with unrelated assertions.
let ipCounter = 0;
function nextIp() {
  ipCounter += 1;
  return `10.0.0.${ipCounter}`;
}

describe("sendContactEmail", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.clearAllMocks();
    sendMailMock.mockResolvedValue(undefined);
    process.env = {
      ...originalEnv,
      GMAIL_USER: "me@gmail.com",
      GMAIL_APP_PASSWORD: "app-password",
      CONTACT_TO_EMAIL: "me@gmail.com",
    };
    mockIp(nextIp());
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test("rejects a name that is too short", async () => {
    const result = await sendContactEmail({ ...validData, name: "J" });
    expect(result).toEqual({ success: false, error: "Name must be at least 2 characters." });
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("rejects a name that is too long", async () => {
    const result = await sendContactEmail({ ...validData, name: "a".repeat(101) });
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/under 100 characters/);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("rejects an invalid email", async () => {
    const result = await sendContactEmail({ ...validData, email: "not-an-email" });
    expect(result.success).toBe(false);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("rejects a message that is too short", async () => {
    const result = await sendContactEmail({ ...validData, message: "short" });
    expect(result.success).toBe(false);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("rejects a message that is too long", async () => {
    const result = await sendContactEmail({ ...validData, message: "a".repeat(5001) });
    expect(result.success).toBe(false);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("silently succeeds without sending mail when honeypot is filled", async () => {
    const result = await sendContactEmail({ ...validData, honeypot: "I am a bot" });
    expect(result).toEqual({ success: true });
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("returns a configuration error when env vars are missing", async () => {
    delete process.env.GMAIL_USER;
    delete process.env.GMAIL_APP_PASSWORD;
    const result = await sendContactEmail(validData);
    expect(result.success).toBe(false);
    expect(sendMailMock).not.toHaveBeenCalled();
  });

  test("sends an escaped email on valid input", async () => {
    const result = await sendContactEmail({
      ...validData,
      name: "<script>alert(1)</script>",
    });
    expect(result).toEqual({ success: true });
    expect(sendMailMock).toHaveBeenCalledTimes(1);
    const call = sendMailMock.mock.calls[0][0];
    expect(call.html).toContain("&lt;script&gt;");
    expect(call.html).not.toContain("<script>alert(1)</script>");
  });

  test("returns a failure result when nodemailer throws", async () => {
    sendMailMock.mockRejectedValueOnce(new Error("SMTP down"));
    const result = await sendContactEmail(validData);
    expect(result.success).toBe(false);
  });

  test("rate limits repeated submissions from the same IP", async () => {
    mockIp("2.2.2.2");
    for (let i = 0; i < 3; i++) {
      const result = await sendContactEmail(validData);
      expect(result.success).toBe(true);
    }
    const limited = await sendContactEmail(validData);
    expect(limited).toEqual({
      success: false,
      error: "Too many messages sent. Please try again later.",
    });
  });

  test("does not rate limit a different IP", async () => {
    mockIp("3.3.3.1");
    for (let i = 0; i < 3; i++) {
      await sendContactEmail(validData);
    }
    mockIp("3.3.3.2");
    const result = await sendContactEmail(validData);
    expect(result.success).toBe(true);
  });
});
