import { PostPreviewForSidebar } from "@/components/postPreview/PostPreviewForSidebar";
import { Post } from "@/interfaces/post";

type Props = {
  relatedPosts: Post[];
  recommendedPosts: Post[];
  maxPostsToShow?: number;
};

export function Sidebar({
  relatedPosts,
  recommendedPosts,
  maxPostsToShow = 3,
}: Props) {
  return (
    <div className="max-w-sm min-w-[16rem]">
      <section>
        <div className="text-2xl border-t-2 border-b-2 border-black p-4">
          関連記事
        </div>
        {relatedPosts.slice(0, maxPostsToShow).map((post, index) => (
          <>
            {index !== 0 && <div className="border-t border-gray-200" />}
            <PostPreviewForSidebar
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
          <>
            {index !== 0 && <div className="border-t border-gray-200" />}
            <PostPreviewForSidebar
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
    </div>
  );
}
