import "@testing-library/jest-dom";

// jsdom doesn't implement window.matchMedia — provide a minimal stub so
// components that call it (e.g. useMagneticEffect, StarfieldBackground) don't crash.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});
