import { PostPreviewHorizontal } from "@/components/postPreview/PostPreviewHorizontal";
import { Post } from "@/interfaces/post";

type Props = {
  className?: string;
  relatedPosts: Post[];
  recommendedPosts: Post[];
  maxPostsToShow?: number;
};

export function Sidebar({
  className,
  relatedPosts,
  recommendedPosts,
  maxPostsToShow = 3,
}: Props) {
  return (
    <div className={`${className} max-w-sm min-w-[16rem]`}>
      <section>
        <div className="text-2xl border-t-2 border-b-2 border-black p-4">
          関連記事
        </div>
        {relatedPosts.slice(0, maxPostsToShow).map((post, index) => (
          <>
            {index !== 0 && <div className="border-t border-gray-200" />}
            <PostPreviewHorizontal
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </>
        ))}
      </section>
      <section className="">
        <div className="text-2xl border-t-2 border-b-2 border-black p-4">
          おすすめ記事
        </div>
        {recommendedPosts.map((post, index) => (
          <div key={post.slug}>
            {index !== 0 && <div className="border-t border-gray-200" />}
            <PostPreviewHorizontal
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
