import type { ReactNode } from "react";
import { site, hasLink } from "@/lib/config";

type Props = {
  children?: ReactNode;
  className?: string;
};

/**
 * Renders the CEPiEL name as a link. Centralizes the URL so we only
 * have to update lib/config.ts when the company domain changes.
 *
 * If site.cepiel.url is empty, renders plain text instead of a link
 * (useful before the company site is live).
 */
export function CepielLink({ children, className }: Props) {
  const text = children ?? site.cepiel.label;

  if (!hasLink(site.cepiel.url)) {
    return <span className={className}>{text}</span>;
  }

  return (
    <a
      href={site.cepiel.url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {text}
    </a>
  );
}
