/**
 * Tests for the useScrollProgress hook.
 */
import { renderHook, act } from "@testing-library/react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

describe("useScrollProgress", () => {
  const setupScrollable = (scrollY: number, scrollHeight: number) => {
    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: scrollY,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800,
    });
    Object.defineProperty(document.body, "scrollHeight", {
      writable: true,
      configurable: true,
      value: scrollHeight,
    });
  };

  afterEach(() => {
    setupScrollable(0, 800);
  });

  test("returns 0 at the top of the page", () => {
    setupScrollable(0, 1600);
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current).toBe(0);
  });

  test("returns 100 when scrolled to the bottom", () => {
    // scrollHeight - innerHeight = scrollable distance
    setupScrollable(800, 1600); // 800 / (1600 - 800) = 1.0 → 100
    const { result } = renderHook(() => useScrollProgress());

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(100);
  });

  test("returns ~50 at the halfway point", () => {
    setupScrollable(400, 1600); // 400 / 800 = 0.5 → 50
    const { result } = renderHook(() => useScrollProgress());

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(50);
  });

  test("updates when the user scrolls", () => {
    setupScrollable(0, 1600);
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current).toBe(0);

    setupScrollable(200, 1600);
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current).toBe(25);
  });

  test("cleans up the scroll listener on unmount", () => {
    const removeSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useScrollProgress());
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
    removeSpy.mockRestore();
  });
});
