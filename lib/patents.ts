import data from "@/content/patents.json";

export type Patent = {
  id: string;
  title: string;
  inventors: string[];
  number: string;
  country: string;
  status: "Filed" | "Granted";
  year: number;
  url?: string;
};

export function getAllPatents(): Patent[] {
  return [...(data as Patent[])].sort((a, b) => b.year - a.year);
}

export function getPatentsByYear(): Map<number, Patent[]> {
  const map = new Map<number, Patent[]>();
  for (const p of getAllPatents()) {
    const list = map.get(p.year) ?? [];
    list.push(p);
    map.set(p.year, list);
  }
  return map;
}

export function getPatentCounts(): { granted: number; filed: number; total: number } {
  const all = getAllPatents();
  const granted = all.filter((p) => p.status === "Granted").length;
  const filed = all.filter((p) => p.status === "Filed").length;
  return { granted, filed, total: all.length };
}
