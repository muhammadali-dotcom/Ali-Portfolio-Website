/**
 * Tests for the Button component — variants, sizes, ripple, and interaction.
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/ui/Button";

// Framer Motion's motion.button renders a real button in jsdom — no mock needed.

describe("Button", () => {
  test("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  test("applies primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/bg-primary/);
  });

  test("applies outline variant class when variant=outline", () => {
    render(<Button variant="outline">Outline</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/border-primary/);
  });

  test("applies secondary variant class when variant=secondary", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/bg-card/);
  });

  test("applies ghost variant class when variant=ghost", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/bg-transparent/);
  });

  test("fires the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Submit</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not fire onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("is disabled when the disabled prop is set", () => {
    render(<Button disabled>Can&apos;t click</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("ripple span is added to the DOM on click", () => {
    render(<Button>Ripple</Button>);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    // The ripple span has aria-hidden="true" and animate class
    const ripple = btn.querySelector('[aria-hidden="true"]');
    expect(ripple).toBeInTheDocument();
  });

  test("accepts and applies a custom className", () => {
    render(<Button className="my-custom-class">Custom</Button>);
    expect(screen.getByRole("button").className).toMatch(/my-custom-class/);
  });

  test("forwards type attribute correctly", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
