import { Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { Tag } from "@/interfaces/tag";

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

export type PostWithEmptyContent = Omit<Post, "content"> & { content: "" };
