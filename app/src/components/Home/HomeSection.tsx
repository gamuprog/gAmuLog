import { Post } from "@/interfaces/post";
import { PostPreview } from "../PostPreview";

type Props = {
  posts: Post[];
  className?: string;
  sectionTitleJa: string;
  sectionTitleEn: string;
  maxPostsToShow?: number;
};

export function HomeSection({
  posts,
  className,
  sectionTitleJa,
  sectionTitleEn,
  maxPostsToShow = 3,
}: Props) {
  return (
    <section className={`pt-16 mx-auto px-36 ${className}`}>
      <h2 className="text-center text-xl md:text-4xl tracking-tight leading-tight">
        {sectionTitleJa}
      </h2>
      <div className="text-center text-gray-500 mb-8">{sectionTitleEn}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-20 md:gap-y-32 pb-32">
        {posts.slice(0, maxPostsToShow).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
