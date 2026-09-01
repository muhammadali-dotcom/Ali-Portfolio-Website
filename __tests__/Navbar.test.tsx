/**
 * Tests for the Navbar component — rendering, mobile toggle, and navigation links.
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/ui/Navbar";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock next/link to render a plain anchor
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

// Mock framer-motion — must include every motion.* element used by Navbar and
// its child components (Button uses motion.button).
jest.mock("framer-motion", () => {
  const passthrough = (tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      ({ children, ...rest }: React.HTMLAttributes<Element>, ref: React.Ref<Element>) => {
        // Strip framer-specific props so they don't hit the DOM
        const {
          initial,
          animate,
          exit,
          transition,
          whileTap,
          whileHover,
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
      nav: passthrough("nav"),
      ul: passthrough("ul"),
      li: passthrough("li"),
      a: passthrough("a"),
      p: passthrough("p"),
      section: passthrough("section"),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    useReducedMotion: () => false,
    useMotionValue: (v: unknown) => ({ set: jest.fn(), get: () => v }),
    useSpring: (v: unknown) => v,
    useTransform: () => "0%",
  };
});

describe("Navbar", () => {
  test("renders the site logo", () => {
    render(<Navbar />);
    expect(screen.getByText(/ALI/)).toBeInTheDocument();
  });

  test("renders the desktop navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /contact/i })[0]).toBeInTheDocument();
  });

  test("renders the mobile hamburger button", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /toggle navigation menu/i })).toBeInTheDocument();
  });

  test("opens the mobile drawer when the hamburger is clicked", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /toggle navigation menu/i });
    fireEvent.click(toggle);
    expect(screen.getByText("Navigation")).toBeInTheDocument();
  });

  test("closes the mobile drawer when the close button is clicked", () => {
    render(<Navbar />);
    // Open
    fireEvent.click(screen.getByRole("button", { name: /toggle navigation menu/i }));
    expect(screen.getByText("Navigation")).toBeInTheDocument();
    // The drawer renders its own X button — it's the second button in the DOM
    const allButtons = screen.getAllByRole("button");
    fireEvent.click(allButtons[1]);
    expect(screen.queryByText("Navigation")).not.toBeInTheDocument();
  });

  test("logo link points to home", () => {
    render(<Navbar />);
    // Logo renders as two text nodes: "ALI" + ".DEV" — accessible name is "ALI .DEV"
    const logo = screen.getByRole("link", { name: /ali/i });
    expect(logo).toHaveAttribute("href", "/");
  });
});
