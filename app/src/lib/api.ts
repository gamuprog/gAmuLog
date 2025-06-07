import fs from "fs";
import { join } from "path";

import matter from "gray-matter";

import { Post } from "@/interfaces/post";
import { frontMatters } from "@/lib/tsxPost/frontMatter";

const mdPostsDirectory = join(process.cwd(), "_posts");
const tsxPostsDirectory = join(process.cwd(), "src", "app", "posts");

export function getPostSlugs() {
  return fs.readdirSync(mdPostsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(mdPostsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, type: "md", slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map(getPostBySlug));
  const tsxPosts = frontMatters.map(
    (matter) =>
      ({
        ...matter,
      }) as Post
  );
  const allPosts = [...posts, ...tsxPosts];
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
