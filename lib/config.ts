/**
 * Site-wide configuration.
 *
 * Edit this file to change links / handles that appear in many places
 * across the site. Avoid putting URLs directly in page components.
 */

export const site = {
  // The personal site itself — used for OG metadata.
  // Update this once the production domain is wired up.
  url: "https://seanhwang.dev",

  // ─── External profiles ────────────────────────────────────────────

  /**
   * Inha University research lab page.
   * Set url to "" to render as plain text instead of a link.
   */
  inhaLab: {
    url: "https://cepi.inha.ac.kr",
    host: "cepi.inha.ac.kr", // shown in monospace under the title
    label: "CEPi @ Inha University",
  },

  /**
   * CEPiEL company site.
   * Set url to "" to render as plain text / "Soon" placeholder.
   */
  cepiel: {
    url: "https://cepiel.kr",
    host: "cepiel.kr",
    label: "CEPiEL",
  },

  scholar: {
    url: "https://scholar.google.com/citations?user=YOUR_ID",
    label: "Google Scholar",
  },

  github: {
    url: "https://github.com/seanhwang",
    label: "GitHub",
  },

  linkedin: {
    url: "https://www.linkedin.com/in/seanhwang",
    label: "LinkedIn",
  },

  email: "sungwonhwang@gmail.com",
};

/**
 * Returns true if a given URL is configured (non-empty).
 * Use this to guard rendering of optional links.
 */
export function hasLink(url: string | undefined | null): url is string {
  return typeof url === "string" && url.trim().length > 0;
}
