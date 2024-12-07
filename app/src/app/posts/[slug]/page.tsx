import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";
import { PostBody } from "@/components/posting/PostBody";
import { Sidebar } from "@/components/Sidebar";
import { PostPageHeader } from "@/components/posting/PostPageHeader";
import { PostTitle } from "@/components/posting/PostTitle";
import Script from "next/script";

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
      <article className="my-32 px-16 znc">
        <Script
          src="https://embed.zenn.studio/js/listen-embed-event.js"
          strategy="afterInteractive"
        />

        <PostTitle>{post.title}</PostTitle>
        <div className="flex mx-16 justify-between">
          <PostBody
            title={post.title}
            date={post.date}
            tags={post.tags}
            coverImage={post.coverImage}
            content={content}
          />
          <Sidebar
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

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
