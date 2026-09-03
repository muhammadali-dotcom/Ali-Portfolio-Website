/**
 * Tests for the Privacy Policy section — heading, all sections, and key links.
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

jest.mock("framer-motion", () => {
  const passthrough = (tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(
      ({ children, ...rest }: React.HTMLAttributes<Element>, ref: React.Ref<Element>) => {
        const { initial, whileInView, viewport, transition, ...domRest } = rest as Record<
          string,
          unknown
        >;
        void initial;
        void whileInView;
        void viewport;
        void transition;
        return React.createElement(tag, { ...domRest, ref }, children);
      }
    );

  return {
    __esModule: true,
    motion: { div: passthrough("div") },
    useReducedMotion: () => false,
  };
});

describe("PrivacyPolicy", () => {
  test("renders the heading and last-updated subtitle", () => {
    render(<PrivacyPolicy />);
    expect(screen.getByRole("heading", { name: /privacy policy/i })).toBeInTheDocument();
    expect(screen.getByText(/last updated:/i)).toBeInTheDocument();
  });

  test("renders all numbered sections", () => {
    render(<PrivacyPolicy />);
    const titles = [
      /1\. introduction/i,
      /2\. information i collect/i,
      /3\. cookies/i,
      /4\. how i use your information/i,
      /5\. how information is shared/i,
      /6\. data retention/i,
      /7\. your rights/i,
      /8\. security/i,
      /9\. children's privacy/i,
      /10\. changes to this policy/i,
      /11\. contact/i,
    ];
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("renders a mailto link and a link to the contact form", () => {
    render(<PrivacyPolicy />);
    const mailtoLinks = screen.getAllByRole("link", { name: /alisaleem\.as719@gmail\.com/i });
    expect(mailtoLinks[0]).toHaveAttribute("href", "mailto:alisaleem.as719@gmail.com");
    expect(screen.getByRole("link", { name: /contact form/i })).toHaveAttribute("href", "/contact");
  });
});
