import React from "react";

import { ViewMoreButton } from "@/components/button/ViewMoreButton";
import { PostPreview } from "@/components/postPreview/PostPreview";
import { PostPreviewHorizontal } from "@/components/postPreview/PostPreviewHorizontal";
import { Post } from "@/interfaces/post";

export type ThemeColorVariant = "red" | "blue" | "green" | "orange";
type Props = {
  posts: Post[];
  className?: string;
  sectionTitleJa: string;
  sectionTitleEn: string;
  maxPostsToShow?: number;
  themeColorVariant: ThemeColorVariant;
  viewMoreTo?: string;
  viewMoreText?: string;
};

export function HomeSection({
  themeColorVariant,
  posts,
  className,
  sectionTitleJa,
  sectionTitleEn,
  maxPostsToShow = 3,
  viewMoreTo,
  viewMoreText,
}: Props) {
  const textVariants: { [key in ThemeColorVariant]: string } = {
    red: "text-red-400",
    blue: "text-blue-400",
    green: "text-green-400",
    orange: "text-orange-400",
  };

  return (
    <section className={`pt-16 mx-auto px-8 md:px-36 ${className}`}>
      <h2 className="text-center text-2xl md:text-4xl tracking-tight leading-tight">
        {sectionTitleJa}
      </h2>
      <div className={`text-center mb-8 ${textVariants[themeColorVariant]}`}>
        {sectionTitleEn}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-20 md:gap-y-32">
        {posts.slice(0, maxPostsToShow).map((post) => (
          <div key={post.slug}>
            <PostPreview
              className="hidden md:block"
              themeColorVariant={themeColorVariant}
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              excerpt={post.excerpt}
            />
            <PostPreviewHorizontal
              className="rounded-md md:hidden"
              key={post.slug + "-horizontal"}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
      {viewMoreTo ? (
        <ViewMoreButton
          to={viewMoreTo}
          buttonText={viewMoreText}
          className="py-16"
        />
      ) : (
        <div className="mt-16" />
      )}
    </section>
  );
}
