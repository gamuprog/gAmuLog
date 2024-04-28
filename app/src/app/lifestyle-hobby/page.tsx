import { HeroPost } from "@/components/hero-post";
import { HomeHeader } from "@/components/home/HomeHeader";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { PostPreview } from "@/components/postPreview/PostPreview";
import { getAllPosts } from "@/lib/api";
import React from "react";

export default function Index() {
  const allPosts = getAllPosts();

  const lifestyleHobbyPosts = allPosts.filter(
    (post) => post.category === "LifeStyle"
  );

  return (
    <main>
      <PostPageHeader />
      <div className="px-24">
        <div className="mt-40 flex flex-col items-center">
          <span className="text-3xl font-medium">雑談</span>
          <span className="mt-2">LifeStyle & Hobby</span>
        </div>
        <div className="flex justify-between">
          <PostPreview
            className="w-[60vw]"
            themeColorVariant="red"
            coverImage={lifestyleHobbyPosts[0].coverImage}
            title={lifestyleHobbyPosts[0].title}
            date={lifestyleHobbyPosts[0].date}
            tags={lifestyleHobbyPosts[0].tags}
            excerpt={lifestyleHobbyPosts[0].excerpt}
            slug={lifestyleHobbyPosts[0].slug}
          />
          <div className="flex flex-col w-[25vw]">
            {lifestyleHobbyPosts.slice(1).map((post) => (
              <PostPreview
                key={post.slug}
                themeColorVariant="red"
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
      </div>
    </main>
  );
}
