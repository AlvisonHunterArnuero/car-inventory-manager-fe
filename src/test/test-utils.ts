import { vi } from "vitest";

/**
 * Simulates a window resize and updates matchMedia for MUI hooks.
 * @param width The desired window width in pixels
 */
export const resizeScreen = (width: number) => {
  window.innerWidth = width;

  window.dispatchEvent(new Event("resize"));

  window.matchMedia = vi.fn().mockImplementation((query: string) => {
    let matches = false;

    if (query.includes("min-width") && query.includes("max-width")) {
      const minMatch = query.match(/min-width:\s*(\d+)/);
      const maxMatch = query.match(/max-width:\s*([\d.]+)/);
      if (minMatch && maxMatch) {
        const minWidth = parseInt(minMatch[1]);
        const maxWidth = parseFloat(maxMatch[1]);
        matches = width >= minWidth && width <= maxWidth;
      }
    } else if (query.includes("max-width")) {
      const match = query.match(/max-width:\s*([\d.]+)/);
      if (match) {
        const maxWidth = parseFloat(match[1]);
        matches = width <= maxWidth;
      }
    } else if (query.includes("min-width")) {
      const match = query.match(/min-width:\s*(\d+)/);
      if (match) {
        const minWidth = parseInt(match[1]);
        matches = width >= minWidth;
      }
    }

    return {
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };
  });
};
