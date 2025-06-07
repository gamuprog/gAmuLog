import { notFound } from "next/navigation";

import { Sidebar } from "@/components/Sidebar";
import { ShareButtons } from "@/components/button/ShareButtons";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostTitle } from "@/components/post/PostTitle";
import { TSXPostBody } from "@/components/post/TSXPostBody";
import { FrontMatterForTSXPost } from "@/interfaces/frontMatter";
import { getAllPosts } from "@/lib/api";

import "zenn-content-css";

type Props = {
  frontMatter: FrontMatterForTSXPost;
  postContent: React.ReactNode;
};
export default async function TSXPostWrapper({
  frontMatter,
  postContent,
}: Props) {
  const allPosts = await getAllPosts();

  if (!postContent) return notFound();

  const relatedPosts = allPosts.filter(
    (p) =>
      p.slug !== frontMatter.slug &&
      p.tags.some((t) => frontMatter.tags.includes(t))
  );
  const recommendedPosts = allPosts.filter(
    (p) =>
      p.slug !== frontMatter.slug &&
      (p.slug === "several_AI" || p.slug === "duplicate_content_SEO")
  );

  return (
    <main>
      <PostPageHeader />

      <article className="my-20 md:my-32 md:px-16 znc">
        <PostTitle>{frontMatter.title}</PostTitle>

        <div className="mx-4 flex justify-between md:mr-16 md:ml-0">
          {/* 共有ボタン */}
          <div className="sticky top-20 h-fit self-start hidden md:block">
            <ShareButtons post={frontMatter} directionVariant="vertical" />
          </div>

          <TSXPostBody post={frontMatter} content={postContent} />
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
