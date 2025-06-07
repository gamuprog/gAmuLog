import fs from "fs";
import { join } from "path";

import matter from "gray-matter";
import markdownToHtml from "zenn-markdown-html";

import { Post } from "@/interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // ---- .md -------------------------------------------------------------
  const html = markdownToHtml(content, {
    embedOrigin: "https://embed.zenn.studio",
  });
  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map(getPostBySlug));
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
