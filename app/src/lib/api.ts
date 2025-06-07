import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

import { Post } from "@/interfaces/post";
import { frontMatters } from "@/tsxPosts/frontMatter";

const mdPostsDirectory = join(process.cwd(), "_posts");
const tsxPostsDirectory = join(process.cwd(), "src", "app", "posts");

export function getPostSlugs() {
  return fs.readdirSync(mdPostsDirectory);
}

export function getPostBySlug(slug: string): Post | null {
  const mdPath = join(mdPostsDirectory, `${slug}.md`);
  if (!fs.existsSync(mdPath)) return null; // TSX 記事

  const file = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(file);
  return { ...data, type: "md", slug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const mdPosts = getPostSlugs().map(getPostBySlug).filter(Boolean) as Post[];

  const tsxPosts = frontMatters.map((fm) => ({ ...fm, type: "tsx" }) as Post);

  return [...mdPosts, ...tsxPosts].sort((a, b) => (a.date > b.date ? -1 : 1));
}
