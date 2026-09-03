/**
 * Tests for the CookieConsent banner — visibility, dismissal, and
 * localStorage persistence.
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CookieConsent from "@/components/ui/CookieConsent";

jest.mock("next/link", () => {
  const Link = ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  Link.displayName = "MockLink";
  return Link;
});

jest.mock("framer-motion", () => {
  const passthrough = (tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      ({ children, ...rest }: React.HTMLAttributes<Element>, ref: React.Ref<Element>) => {
        const { initial, animate, exit, transition, ...domRest } = rest as Record<string, unknown>;
        void initial;
        void animate;
        void exit;
        void transition;
        return React.createElement(tag, { ...domRest, ref }, children);
      }
    );

  return {
    __esModule: true,
    motion: { div: passthrough("div") },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe("CookieConsent", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("renders the banner and a link to the privacy policy when not dismissed", async () => {
    render(<CookieConsent />);
    const link = await screen.findByRole("link", { name: /privacy policy/i });
    expect(link).toHaveAttribute("href", "/privacy-policy");
    expect(screen.getByText(/this site uses cookies/i)).toBeInTheDocument();
  });

  test("dismissing the banner hides it and persists to localStorage", async () => {
    render(<CookieConsent />);
    const dismissButton = await screen.findByRole("button", { name: /dismiss cookie notice/i });

    fireEvent.click(dismissButton);

    await waitFor(() =>
      expect(screen.queryByText(/this site uses cookies/i)).not.toBeInTheDocument()
    );
    expect(window.localStorage.getItem("cookie-consent")).toBe("dismissed");
  });

  test("does not render when consent was already dismissed", async () => {
    window.localStorage.setItem("cookie-consent", "dismissed");
    render(<CookieConsent />);

    await waitFor(() => {
      expect(screen.queryByText(/this site uses cookies/i)).not.toBeInTheDocument();
    });
  });
});
