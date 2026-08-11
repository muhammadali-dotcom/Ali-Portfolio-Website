/**
 * Triggers a custom Google Analytics 4 event
 * @param action - Event name (e.g. 'cta_click')
 * @param params - Additional parameters for tracking (e.g. { location: 'navbar', text: "Let's Talk" })
 */
export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};
