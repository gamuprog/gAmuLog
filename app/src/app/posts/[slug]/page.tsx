import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Sidebar } from "@/components/Sidebar";
import { ShareButtons } from "@/components/button/ShareButtons";
import { PostBody } from "@/components/post/PostBody";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostTitle } from "@/components/post/PostTitle";
import { getAllPosts, getPostBySlug } from "@/lib/api";

import "zenn-content-css";

type Params = { params: Promise<{ slug: string }> };

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug); // ここを await
  const allPosts = await getAllPosts();

  if (!post) return notFound();

  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
  );
  const recommendedPosts = allPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.slug === "several_AI" || p.slug === "duplicate_content_SEO")
  );

  return (
    <main>
      <PostPageHeader />

      <article className="my-20 md:my-32 md:px-16 znc">
        {/* 埋め込みスクリプト */}
        <Script
          src="https://embed.zenn.studio/js/listen-embed-event.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://platform.twitter.com/widgets.js"
          strategy="afterInteractive"
        />

        <PostTitle>{post.title}</PostTitle>

        <div className="mx-4 flex justify-between md:mr-16 md:ml-0">
          {/* 共有ボタン */}
          <div className="sticky top-20 h-fit self-start hidden md:block">
            <ShareButtons post={post} directionVariant="vertical" />
          </div>

          {/* ---- ここで拡張子ごとに描画を変える ---- */}
          {post.kind === "html" ? (
            <PostBody post={post} content={post.html} />
          ) : (
            <PostBody post={post} mdxSource={post.mdxSource} />
          )}

          {/* サイドバー */}
          <Sidebar
            className="hidden md:block"
            relatedPosts={relatedPosts}
            recommendedPosts={recommendedPosts}
          />
        </div>
      </article>
    </main>
  );
}

/* ------------------------------------------------------------------ */

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const { title, excerpt: description, coverImage, ogImage } = post;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [ogImage.url],
    },
    twitter: {
      title,
      description,
      images: [coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}
