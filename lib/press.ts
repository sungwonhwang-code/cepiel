import data from "@/content/press.json";

export type PressItem = {
  id: string;
  title: string;
  outlet: string;
  date: string;
  language?: string;
  url: string;
  post?: string; // optional link to my own write-up on this site
};

export function getAllPress(): PressItem[] {
  return [...(data as PressItem[])].sort((a, b) => (a.date < b.date ? 1 : -1));
}
