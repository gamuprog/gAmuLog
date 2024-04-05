import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/Post/post-body";
import { PostHeader } from "@/components/Post/post-header";
import { Sidebar } from "@/components/Sidebar";
import { PostPageHeader } from "@/components/Post/PostPageHeader";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const allPosts = getAllPosts();

  if (!post) {
    return notFound();
  }

  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag))
  );

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <PostPageHeader />
      <article className="my-32 px-16 ">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <div className="flex mx-16 justify-between">
          <PostBody content={content} />
          <Sidebar posts={relatedPosts} />
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
