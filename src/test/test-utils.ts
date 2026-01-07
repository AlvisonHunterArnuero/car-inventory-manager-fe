import { vi } from "vitest";

/**
 * Simulates a window resize and updates matchMedia for MUI hooks.
 * @param width The desired window width in pixels
 */
export const resizeScreen = (width: number) => {
  window.innerWidth = width;

  window.dispatchEvent(new Event("resize"));

  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches:
      (query.includes("max-width:640px") && width <= 640) ||
      (query.includes("min-width:1024px") && width >= 1024) ||
      (query.includes("min-width:641px") &&
        query.includes("max-width:1023px") &&
        width > 640 &&
        width < 1024),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
};
