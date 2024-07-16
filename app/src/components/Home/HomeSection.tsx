import { Post } from "@/interfaces/post";
import { PostPreview } from "../postPreview/PostPreview";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import React from "react";

export type ThemeColorVariant = "red" | "blue" | "green" | "orange";
type Props = {
  posts: Post[];
  className?: string;
  sectionTitleJa: string;
  sectionTitleEn: string;
  maxPostsToShow?: number;
  themeColorVariant: ThemeColorVariant;
  viewMoreTo?: string;
};

export function HomeSection({
  themeColorVariant,
  posts,
  className,
  sectionTitleJa,
  sectionTitleEn,
  maxPostsToShow = 3,
  viewMoreTo,
}: Props) {
  const textVariants: { [key in ThemeColorVariant]: string } = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
    orange: "text-orange-400",
  };

  return (
    <section className={`pt-16 mx-auto px-36 ${className}`}>
      <h2 className="text-center text-xl md:text-4xl tracking-tight leading-tight">
        {sectionTitleJa}
      </h2>
      <div className={` text-center mb-8 ${textVariants[themeColorVariant]}`}>
        {sectionTitleEn}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-20 md:gap-y-32">
        {posts.slice(0, maxPostsToShow).map((post) => (
          <PostPreview
            themeColorVariant={themeColorVariant}
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
      {viewMoreTo ? (
        <ViewMoreButton to={viewMoreTo} className="py-16" />
      ) : (
        <div className="mt-16" />
      )}
    </section>
  );
}
