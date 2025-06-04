import { JSXElementConstructor } from "react";
import { ReactElement } from "react";

import { Author } from "@/interfaces/author";
import { Category } from "@/interfaces/category";
import { Tag } from "@/interfaces/tag";

// export type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   coverImage: string;
//   category: Category;
//   tags: Tag[];
//   author: Author;
//   excerpt: string;
//   ogImage: {
//     url: string;
//   };
//   content: string;
//   preview?: boolean;
// };

export interface BaseFrontMatter {
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
}

export interface HtmlPost extends BaseFrontMatter {
  kind: "html";
  slug: string;
  html: string; // Zenn 変換後の HTML
}

export interface MdxPost extends BaseFrontMatter {
  kind: "mdx";
  slug: string;
  mdxSource: ReactElement<any, string | JSXElementConstructor<any>>;
}

export type Post = HtmlPost | MdxPost;
