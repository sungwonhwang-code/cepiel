import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/research", label: "Research" },
  { href: "/talks", label: "Talks" },
  { href: "/demos", label: "Demos" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-subtle bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-medium tracking-tight"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-subtle bg-subtle">
            <span className="absolute inset-0 dot-grid mask-fade opacity-50" />
            <span className="relative font-serif text-sm">SH</span>
            <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-accent" />
          </span>
          <span className="group-hover:text-accent">Sean Hwang</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden text-muted transition-colors hover:text-accent sm:inline"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
