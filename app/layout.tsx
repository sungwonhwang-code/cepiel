import type { Metadata } from "next";
import { Inter, JetBrains_Mono, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seanhwang.dev"),
  title: {
    default: "Sean Hwang — Digital twins and AI for chemical engineering",
    template: "%s — Sean Hwang",
  },
  description:
    "Personal site of Sungwon (Sean) Hwang — Professor at Inha University, CEO of CEPiEL. Writing on digital twins, AI, and the future of chemical processes.",
  openGraph: {
    title: "Sean Hwang",
    description:
      "Digital twins and AI for chemical engineering. Inha University · CEPiEL.",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${plexSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Nav />
          <main className="mx-auto max-w-wide px-6 py-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
