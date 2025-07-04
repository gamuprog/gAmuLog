import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

import { tsxFrontMatters } from "@/entity/tsxFrontMatters";
import { Post } from "@/interfaces/post";

// TODO: TSX記事も一緒に取得する(top pageなどで表示するため)
const postsDirectory = join(process.cwd(), "_posts");

export function getMdPostSlugs() {
  const mdSlugs = fs.readdirSync(postsDirectory);
  return mdSlugs;
}

// 使わなそう
export function getTsxPostSlugs() {
  const tsxSlugs = tsxFrontMatters.map((post) => post.slug);
  return tsxSlugs;
}

export function getPostBySlug(slug: string) {
  // realSlug: mdファイルタイトルの、.md抜き ex)postA
  const realSlug = slug.replace(/\.md$/, "");

  // fullPath: mdファイルまでの完全パス ex)Users/main/Desktop/...../postA.md
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  // logs({ slug, realSlug, fullPath });
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const mdPosts = await Promise.all(getMdPostSlugs().map(getPostBySlug));
  const tsxPosts = tsxFrontMatters as Post[];
  return [...mdPosts, ...tsxPosts].sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getAllMdPosts(): Promise<Post[]> {
  const mdPosts = await Promise.all(getMdPostSlugs().map(getPostBySlug));
  return mdPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
