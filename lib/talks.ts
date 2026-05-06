import data from "@/content/talks.json";

export type Talk = {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  type: string;
  url?: string;
};

export function getAllTalks(): Talk[] {
  return [...(data as Talk[])].sort((a, b) => (a.date < b.date ? 1 : -1));
}
