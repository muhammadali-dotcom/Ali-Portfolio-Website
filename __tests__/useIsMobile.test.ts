/**
 * Tests for the useIsMobile hook.
 * jsdom sets window.innerWidth to 1024 by default.
 */
import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "@/hooks/useIsMobile";

describe("useIsMobile", () => {
  const resizeTo = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
  };

  afterEach(() => {
    // Reset to jsdom default
    resizeTo(1024);
  });

  test("returns false on a wide viewport (default jsdom width 1024)", () => {
    resizeTo(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  test("returns true when viewport width is below the default 768 breakpoint", () => {
    resizeTo(375);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  test("returns false when viewport equals the breakpoint (boundary — not below)", () => {
    resizeTo(768);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  test("responds to window resize events", () => {
    resizeTo(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    resizeTo(400);
    expect(result.current).toBe(true);

    resizeTo(1280);
    expect(result.current).toBe(false);
  });

  test("respects a custom breakpoint", () => {
    resizeTo(500);
    const { result } = renderHook(() => useIsMobile(600));
    expect(result.current).toBe(true);

    resizeTo(700);
    const { result: result2 } = renderHook(() => useIsMobile(600));
    expect(result2.current).toBe(false);
  });

  test("cleans up the resize listener on unmount", () => {
    const removeSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useIsMobile());
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    removeSpy.mockRestore();
  });
});
