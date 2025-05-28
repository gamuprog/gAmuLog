import { Suspense } from "react";

import { PostPageHeader } from "@/components/post/PostPageHeader";
import ArticleSearcher from "@/components/search/ArticleSearcher";
import { getAllPosts } from "@/lib/api";

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.gamulog.com/search",
  },
};
export default async function Index() {
  const allPosts = await getAllPosts();
  return (
    <main>
      <PostPageHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleSearcher posts={allPosts} />
      </Suspense>
    </main>
  );
}
