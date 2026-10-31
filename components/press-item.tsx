import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { PressItem as Press } from "@/lib/press";
import { formatDate } from "@/lib/posts";

export function PressItem({ item }: { item: Press }) {
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-baseline gap-1.5 font-medium hover:text-accent"
      >
        {item.title}
        <ExternalLink size={12} className="shrink-0 text-muted group-hover:text-accent" />
      </a>
      <p className="text-sm text-muted">
        {item.outlet}
        {" · "}
        {formatDate(item.date)}
        {item.language && <> · in {item.language}</>}
        {item.post && (
          <>
            {" · "}
            <Link href={item.post} className="link-accent">
              My notes
            </Link>
          </>
        )}
      </p>
    </li>
  );
}
