import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import markdownToHtml from "zenn-markdown-html";

import { Sidebar } from "@/components/Sidebar";
import { PostBody } from "@/components/post/PostBody";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostTitle } from "@/components/post/PostTitle";
import { getAllPosts, getPostBySlug } from "@/lib/api";

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
      (p.slug === "react-tutorial-useEffect" ||
        p.slug === "react-tutorial-useMemo")
  );

  const content = markdownToHtml(post.content || "", {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <main>
      <PostPageHeader />
      <article className="my-20 md:my-32 md:px-16 znc">
        <Script
          src="https://embed.zenn.studio/js/listen-embed-event.js"
          strategy="afterInteractive"
        />

        <PostTitle>{post.title}</PostTitle>
        <div className="mx-4 flex justify-between md:mx-16">
          <PostBody
            title={post.title}
            date={post.date}
            tags={post.tags}
            coverImage={post.coverImage}
            content={content}
          />
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
