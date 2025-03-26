import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
// import markdownToHtml from "zenn-markdown-html";

import { Sidebar } from "@/components/Sidebar";
import { ShareButtons } from "@/components/button/ShareButtons";
import { PostBody } from "@/components/post/PostBody";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostTitle } from "@/components/post/PostTitle";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

import "zenn-content-css";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const allPosts = getAllPosts();

  if (!post) {
    return notFound();
  }

  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag))
  );

  const recommendedPosts = allPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.slug === "several_AI" || p.slug === "duplicate_content_SEO")
  );

  // const formattedPostContent = markdownToHtml(post.content || "", {
  //   embedOrigin: "https://embed.zenn.studio",
  // });

  const formattedPostContent = await markdownToHtml(post.content);

  return (
    <main>
      <PostPageHeader />
      <article className="my-20 md:my-32 md:px-16 znc">
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
          <div className="sticky top-20 h-fit self-start hidden md:block">
            <ShareButtons post={post} directionVariant="vertical" />
          </div>

          <PostBody post={post} content={formattedPostContent} />
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

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [post.ogImage.url],
    },
    twitter: {
      title,
      description,
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
