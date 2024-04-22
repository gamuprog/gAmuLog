import { Tag } from "@/interfaces/tag";
import { type Author } from "./author";
import { Category } from "@/interfaces/category";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  category: Category;
  tags: Tag[];
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
