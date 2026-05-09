import data from "@/content/projects.json";

export type Project = {
  id: string;
  title: string;
  partner: string;
  type:
    | "Industry-academia"
    | "Government R&D"
    | "International collaboration";
  period?: string;
  status: "ongoing" | "completed";
  role?: string;
};

export function getAllProjects(): Project[] {
  return [...(data as Project[])];
}

export function getOngoingProjects(): Project[] {
  return getAllProjects()
    .filter((p) => p.status === "ongoing")
    .sort((a, b) => (a.period && b.period ? (a.period < b.period ? 1 : -1) : 0));
}

export function getCompletedProjects(): Project[] {
  return getAllProjects().filter((p) => p.status === "completed");
}

export function getUniquePartners(): string[] {
  const partners = new Set(getAllProjects().map((p) => p.partner));
  return Array.from(partners).sort();
}
