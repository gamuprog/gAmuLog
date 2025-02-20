export type Category = "Tech" | "DevDiary" | "LifeStyle";

export type CategoryWithName = {
  category: Category;
  en: string;
  ja: string;
};
export const categoriesWithName: CategoryWithName[] = [
  { category: "Tech", en: "Tech Articles", ja: "技術記事" },
  { category: "DevDiary", en: "Dev Diary", ja: "開発日記" },
  { category: "LifeStyle", en: "Lifestyle & Hobby", ja: "雑談" },
];
