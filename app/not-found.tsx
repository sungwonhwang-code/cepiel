import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-prose py-12">
      <h1 className="text-3xl font-medium tracking-tight">Not found</h1>
      <p className="mt-2 text-muted">
        The page you're looking for doesn't exist (or moved).
      </p>
      <Link
        href="/"
        className="mt-6 inline-block link-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
