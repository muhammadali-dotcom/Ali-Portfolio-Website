import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-7xl font-black text-primary sm:text-8xl">404</p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-heading sm:text-3xl">Page not found</h1>
        <p className="max-w-md text-body">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 font-semibold text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_0_28px_rgba(59,130,246,0.55)]"
      >
        Back to home
      </Link>
    </div>
  );
}
