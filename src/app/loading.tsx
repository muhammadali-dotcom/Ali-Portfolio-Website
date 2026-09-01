/**
 * Route-level loading UI — shown by Next.js App Router while a page segment
 * is streaming/suspending. Keeps a visually consistent dark background so
 * there is no flash of white before the page hydrates.
 */
export default function Loading() {
  return (
    <div
      aria-label="Loading page"
      role="status"
      className="flex min-h-screen w-full items-center justify-center bg-bg"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinning ring using design-system color tokens */}
        <span
          aria-hidden="true"
          className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-primary"
        />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
