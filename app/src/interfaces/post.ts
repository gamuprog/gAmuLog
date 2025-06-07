import { MDXRemoteSerializeResult } from "node_modules/next-mdx-remote/dist/types";
import React from "react";

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
  content: string | React.ReactNode;
  preview?: boolean;
  type: "md" | "tsx";
};
