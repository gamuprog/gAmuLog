import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";
import { PostBody } from "@/components/post/PostBody";
import { Sidebar } from "@/components/Sidebar";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostTitle } from "@/components/post/PostTitle";
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

  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
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

// {
//   "name": "Next.js",
//   "short_name": "Next.js",
//   "icons": [
//     {
//       "src": "/favicons/android-chrome-192x192.png",
//       "sizes": "192x192",
//       "type": "image/png"
//     },
//     {
//       "src": "/favicons/android-chrome-512x512.png",
//       "sizes": "512x512",
//       "type": "image/png"
//     }
//   ],
//   "theme_color": "#000000",
//   "background_color": "#000000",
//   "display": "standalone"
// }
