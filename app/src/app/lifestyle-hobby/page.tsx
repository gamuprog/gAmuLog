import React from "react";

import { ViewMoreButton } from "@/components/button/ViewMoreButton";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { HeroPostPreview } from "@/components/postPreview/HeroPostPreview";
import { PostPreview } from "@/components/postPreview/PostPreview";
import { getAllPosts } from "@/lib/api";

export default async function Index() {
  const allPosts = await getAllPosts();

  const themeColor = "orange";

  const lifestyleHobbyPosts = allPosts.filter(
    (post) => post.category === "LifeStyle"
  );

  return (
    <main>
      <PostPageHeader />
      <div className="px-8 md:px-24">
        <div className="mt-28 mb-16 flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl tracking-tight leading-tight">
            雑談
          </h2>
          <span className="text-orange-400">LifeStyle & Hobby</span>
        </div>
        <div className="hidden md:block">
          {lifestyleHobbyPosts.length > 0 ? (
            <div className="flex justify-between">
              <HeroPostPreview
                className="w-[55vw] h-[40rem]"
                themeColorVariant={themeColor}
                coverImage={lifestyleHobbyPosts[0].coverImage}
                title={lifestyleHobbyPosts[0].title}
                date={lifestyleHobbyPosts[0].date}
                tags={lifestyleHobbyPosts[0].tags}
                excerpt={lifestyleHobbyPosts[0].excerpt}
                slug={lifestyleHobbyPosts[0].slug}
              />
              <div className="flex flex-col gap-4 w-[30vw]">
                {lifestyleHobbyPosts.slice(1, 3).map((post) => (
                  <PostPreview
                    key={post.slug}
                    themeColorVariant={themeColor}
                    coverImage={post.coverImage}
                    title={post.title}
                    date={post.date}
                    tags={post.tags}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    coverImageSizeVariant="side"
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-3xl">記事がありません</div>
          )}
          <div className="border-b my-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-12">
            {lifestyleHobbyPosts.slice(3, 9).map((post) => (
              <PostPreview
                themeColorVariant={themeColor}
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 md:hidden lg:gap-x-12 gap-y-12">
          {lifestyleHobbyPosts.slice(0, 6).map((post) => (
            <PostPreview
              themeColorVariant={themeColor}
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
        <ViewMoreButton to="/search?category=LifeStyle" className="py-16" />
      </div>
    </main>
  );
}
