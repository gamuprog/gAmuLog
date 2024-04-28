export type Category = "Tech" | "DevDiary" | "LifeStyle";

export const categories: { [key in Category]: { en: string; ja: string } } = {
  Tech: { en: "Tech Articles", ja: "技術記事" },
  DevDiary: { en: "Dev Diary", ja: "開発日記" },
  LifeStyle: { en: "Lifestyle & Hobby", ja: "雑談" },
};
