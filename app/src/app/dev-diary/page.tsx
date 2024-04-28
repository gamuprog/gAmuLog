import { HeroPost } from "@/components/hero-post";
import { HomeHeader } from "@/components/home/HomeHeader";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { getAllPosts } from "@/lib/api";
import React from "react";

export default function Index() {
  const allPosts = getAllPosts();

  const devDiaryPosts = allPosts.filter((post) => post.category === "DevDiary");

  return (
    <main>
      <PostPageHeader />
      <HeroPost
        title={devDiaryPosts[0].title}
        coverImage={devDiaryPosts[0].coverImage}
        date={devDiaryPosts[0].date}
        excerpt={devDiaryPosts[0].excerpt}
        author={devDiaryPosts[0].author}
        slug={devDiaryPosts[0].slug}
      />
    </main>
  );
}
