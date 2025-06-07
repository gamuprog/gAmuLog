import fs from "fs";
import { join } from "path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import markdownToHtml from "zenn-markdown-html";

import { SampleButton } from "@/components/button/SampleButton";
import { BaseFrontMatterWithSlug, Post } from "@/interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");
// これ何？
const slugs = () =>
  fs.readdirSync(postsDirectory).filter((f) => /\.mdx?$/.test(f));

export function getPostSlugs(): string[] {
  // .md と .mdx だけ拾う
  return fs.readdirSync(postsDirectory).filter((f) => /\.mdx?$/.test(f));
}

// フロントマターのみ
export function getPostMetaBySlug(slug: string): BaseFrontMatterWithSlug {
  const real = slug.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(join(postsDirectory, slug), "utf8");
  const { data } = matter(raw); // ← 解析はここまで
  return { ...(data as any), slug: real } as BaseFrontMatterWithSlug;
}

// フルコンテンツ
export async function getPostFullBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx?$/, "");

  const mdPath = join(postsDirectory, `${realSlug}.md`);
  const mdxPath = join(postsDirectory, `${realSlug}.mdx`);
  const isMdx = fs.existsSync(mdxPath);
  const fullPath = isMdx ? mdxPath : mdPath;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (isMdx) {
    // const { content } = await compileMdxContent(fileContents);
    // ---- .mdx ----------------------------------------------------------
    // const mdxSource = await serialize(content); // rehype/remark は必要に応じて
    return {
      ...(data as Omit<Post, "kind" | "mdxSource" | "html">),
      slug: realSlug,
      kind: "mdx",
      mdxSource: content,
    } as Post;
  }

  // ---- .md -------------------------------------------------------------
  const html = markdownToHtml(content, {
    embedOrigin: "https://embed.zenn.studio",
  });
  return {
    ...(data as Omit<Post, "kind" | "mdxSource" | "html">),
    slug: realSlug,
    kind: "html",
    html,
  } as Post;
}

export function getAllPostsMeta(): BaseFrontMatterWithSlug[] {
  return slugs()
    .map(getPostMetaBySlug)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map(getPostFullBySlug));
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function compileMdxContent(fileContent: string) {
  return compileMDX({
    source: fileContent,
    components: {
      SampleButton,
    },
    options: {
      parseFrontmatter: true,
    },
  });
}
