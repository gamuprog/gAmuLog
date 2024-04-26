import ArticleSearcher from "@/components/search/ArticleSearcher";
import { HeroPost } from "@/components/hero-post";
import { HomeHeader } from "@/components/home/HomeHeader";
import { Tag } from "@/interfaces/tag";
import { getAllPosts } from "@/lib/api";
import { MouseEvent } from "react";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <ArticleSearcher posts={allPosts} />
    </main>
  );
}
