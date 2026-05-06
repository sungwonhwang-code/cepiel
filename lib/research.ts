import data from "@/content/research.json";

export type Paper = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  tags?: string[];
  summary?: string;
};

export function getAllPapers(): Paper[] {
  return [...(data as Paper[])].sort((a, b) => b.year - a.year);
}

export function getPapersByYear(): Map<number, Paper[]> {
  const map = new Map<number, Paper[]>();
  for (const p of getAllPapers()) {
    const list = map.get(p.year) ?? [];
    list.push(p);
    map.set(p.year, list);
  }
  return map;
}
