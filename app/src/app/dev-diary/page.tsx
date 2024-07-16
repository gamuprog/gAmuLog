import { ViewMoreButton } from "@/components/ViewMoreButton";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { HeroPostPreview } from "@/components/postPreview/HeroPostPreview";
import { PostPreview } from "@/components/postPreview/PostPreview";
import { getAllPosts } from "@/lib/api";
import React from "react";

export default function Index() {
  const allPosts = getAllPosts();

  const themeColor = "green";

  const lifestyleHobbyPosts = allPosts.filter(
    (post) => post.category === "DevDiary"
  );

  return (
    <main>
      <PostPageHeader />
      <div className="px-24">
        <div className="mt-28 mb-16 flex flex-col items-center">
          <h2 className="text-center text-xl md:text-4xl tracking-tight leading-tight">
            開発日記
          </h2>
          <span className="text-green-400">Dev Diary</span>
        </div>
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
              />
            ))}
          </div>
        </div>
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
        </div>
        <ViewMoreButton to="/search?category=DevDiary" className="py-16" />
      </div>
    </main>
  );
}
