/**
 * Tests for the Contact section — form rendering, submission flow, and
 * success/error states. The server action itself is mocked; its own
 * validation/rate-limiting logic is covered in contact.test.ts.
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "@/components/sections/Contact";
import { sendContactEmail } from "@/app/actions/contact";
import { trackEvent } from "@/lib/analytics";

jest.mock("@/app/actions/contact", () => ({
  sendContactEmail: jest.fn(),
}));

jest.mock("@/lib/analytics", () => ({
  trackEvent: jest.fn(),
}));

jest.mock("framer-motion", () => {
  const passthrough = (tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      ({ children, ...rest }: React.HTMLAttributes<Element>, ref: React.Ref<Element>) => {
        const {
          initial,
          animate,
          exit,
          transition,
          whileTap,
          whileHover,
          whileInView,
          viewport,
          variants,
          layoutId,
          style,
          ...domRest
        } = rest as Record<string, unknown>;
        void initial;
        void animate;
        void exit;
        void transition;
        void whileTap;
        void whileHover;
        void whileInView;
        void viewport;
        void variants;
        void layoutId;
        return React.createElement(tag, { ...domRest, style, ref }, children);
      }
    );

  return {
    __esModule: true,
    motion: {
      div: passthrough("div"),
      span: passthrough("span"),
      button: passthrough("button"),
      a: passthrough("a"),
    },
    useReducedMotion: () => false,
  };
});

const mockedSendContactEmail = sendContactEmail as jest.Mock;
const mockedTrackEvent = trackEvent as jest.Mock;

function fillForm() {
  fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: "Jane Doe" } });
  fireEvent.change(screen.getByLabelText(/your email/i), {
    target: { value: "jane@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { value: "Hello, let's build something." },
  });
}

describe("Contact", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the name, email, and message fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  test("honeypot field is present but not focusable", () => {
    render(<Contact />);
    const honeypot = screen.getByLabelText(/company/i);
    expect(honeypot).toBeInTheDocument();
    expect(honeypot).toHaveAttribute("tabIndex", "-1");
  });

  test("submits the form with entered values and shows a sending state", async () => {
    let resolveSend: (value: { success: boolean }) => void = () => {};
    mockedSendContactEmail.mockReturnValue(
      new Promise((resolve) => {
        resolveSend = resolve;
      })
    );

    render(<Contact />);
    fillForm();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
    expect(mockedTrackEvent).toHaveBeenCalledWith("contact_form_submit", { status: "started" });
    expect(mockedSendContactEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Hello, let's build something.",
        honeypot: "",
      })
    );

    resolveSend({ success: true });
    await waitFor(() => expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument());
  });

  test("shows success state, clears fields, and tracks success", async () => {
    mockedSendContactEmail.mockResolvedValue({ success: true });

    render(<Contact />);
    fillForm();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument());
    expect(mockedTrackEvent).toHaveBeenCalledWith("contact_form_submit", { status: "success" });
    expect(screen.getByLabelText(/your name/i)).toHaveValue("");
  });

  test("shows the error message when the action fails", async () => {
    mockedSendContactEmail.mockResolvedValue({
      success: false,
      error: "Too many messages sent. Please try again later.",
    });

    render(<Contact />);
    fillForm();
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent(/too many messages sent/i);
  });
});
