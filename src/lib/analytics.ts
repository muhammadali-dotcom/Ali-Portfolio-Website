/**
 * Triggers a custom Google Analytics 4 event.
 * @param action - Event name (e.g. 'cta_click')
 * @param params - Additional parameters for tracking (e.g. { location: 'navbar', text: "Let's Talk" })
 */
type EventParams = Record<string, string | number | boolean>;

type GtagFn = (command: string, action: string, params?: EventParams) => void;

export const trackEvent = (action: string, params?: EventParams) => {
  if (typeof window !== "undefined" && (window as Window & { gtag?: GtagFn }).gtag) {
    (window as Window & { gtag?: GtagFn }).gtag!("event", action, params);
  }
};
