import type { Metadata } from "next";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch.",
};

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sungwonhwang@gmail.com",
    value: "sungwonhwang@gmail.com",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    href: "https://scholar.google.com",
    value: "scholar.google.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    value: "github.com/seanhwang",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    value: "linkedin.com/in/seanhwang",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-prose">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="The fastest way to reach me is by email. I read everything; I reply when I can."
      />
      <ul className="space-y-3">
        {links.map(({ icon: Icon, label, href, value }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="card-hover group flex items-center gap-3 rounded-md border border-subtle px-4 py-3 hover:border-accent"
            >
              <Icon size={18} className="text-muted group-hover:text-accent" />
              <span className="font-medium">{label}</span>
              <span className="ml-auto font-mono text-sm text-muted group-hover:text-accent">
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
