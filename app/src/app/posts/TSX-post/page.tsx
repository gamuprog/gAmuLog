import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import Content from "@/app/posts/TSX-post/Content";
import { Sidebar } from "@/components/Sidebar";
import { ShareButtons } from "@/components/button/ShareButtons";
import { PostBodyForTsx } from "@/components/post/PostBodyForTsx";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostTitle } from "@/components/post/PostTitle";
import { recommendSlugs } from "@/entity/recommendSlugs";
import { tsxFrontMatters } from "@/entity/tsxFrontMatters";
import { getAllPosts } from "@/lib/api";
import { metadataBase } from "@/lib/constants";

const slug = "TSX-post";
const post = tsxFrontMatters.find((post) => post.slug === slug);
export default async function Page() {
  if (!post) return notFound();

  const allPosts = await getAllPosts();

  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))
  );
  const recommendedPosts = allPosts.filter(
    (p) =>
      p.slug !== post.slug && recommendSlugs.some((slug) => slug === p.slug)
  );

  return (
    <main>
      <PostPageHeader />
      <article className="my-20 md:my-32 md:px-16">
        <PostTitle>{post.title}</PostTitle>

        <div className="mx-4 flex justify-between md:mr-16 md:ml-0">
          {/* 共有ボタン */}
          <div className="sticky top-20 h-fit self-start hidden md:block">
            <ShareButtons post={post} directionVariant="vertical" />
          </div>

          <PostBodyForTsx post={post}>
            <Content />
          </PostBodyForTsx>

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

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: post?.title,
  description: post?.excerpt,
  openGraph: {
    title: post?.title,
    description: post?.excerpt,
    images: [
      {
        url: post?.ogImage.url || "",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: post?.title,
    description: post?.excerpt,
    images: [post?.coverImage || ""],
  },
};
