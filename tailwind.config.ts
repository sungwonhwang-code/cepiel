import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FA4E40",
          hover: "#E63E31",
        },
        foreground: "rgb(var(--fg) / <alpha-value>)",
        background: "rgb(var(--bg) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["IBM Plex Serif", "Georgia", "serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      maxWidth: {
        prose: "680px",
        wide: "880px",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(38 38 38)",
            "--tw-prose-headings": "rgb(10 10 10)",
            "--tw-prose-links": "#FA4E40",
            "--tw-prose-bold": "rgb(10 10 10)",
            "--tw-prose-code": "rgb(10 10 10)",
            "--tw-prose-quotes": "rgb(64 64 64)",
            "--tw-prose-invert-body": "rgb(212 212 212)",
            "--tw-prose-invert-headings": "rgb(245 245 245)",
            "--tw-prose-invert-links": "#FA4E40",
            "--tw-prose-invert-bold": "rgb(245 245 245)",
            "--tw-prose-invert-code": "rgb(245 245 245)",
            "--tw-prose-invert-quotes": "rgb(163 163 163)",
            maxWidth: "680px",
            fontSize: "17px",
            lineHeight: "1.7",
            a: {
              textDecoration: "underline",
              textDecorationThickness: "1px",
              textUnderlineOffset: "3px",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              backgroundColor: "rgb(245 245 245)",
              padding: "0.15em 0.35em",
              borderRadius: "4px",
              fontWeight: "400",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
