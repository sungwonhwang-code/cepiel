import Link from "next/link";
import { site, hasLink } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-subtle">
      <div className="mx-auto flex max-w-wide flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Sungwon (Sean) Hwang. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/insights" className="hover:text-accent">
            Insights
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
          {hasLink(site.cepiel.url) && (
            <a
              href={site.cepiel.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              CEPiEL ↗
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
