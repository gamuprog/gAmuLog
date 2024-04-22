import { PostPreview } from "@/components/PostPreview";
import { PostPreviewForSidebar } from "@/components/PostPreviewForSidebar";
import { Post } from "@/interfaces/post";

type Props = {
  posts: Post[];
  maxPostsToShow?: number;
};

export function Sidebar({ posts, maxPostsToShow = 3 }: Props) {
  return (
    <div className="max-w-sm min-w-[16rem]">
      <section>
        <div className="text-2xl border-t-2 border-b-2 border-black p-4">
          関連記事
        </div>
        {posts.slice(0, maxPostsToShow).map((post, index) => (
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
        いいい
      </section>
      <section className="">ううう</section>
    </div>
  );
}
