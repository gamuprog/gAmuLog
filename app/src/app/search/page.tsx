import ArticleSearcher from "@/components/search/ArticleSearcher";
import { getAllPosts } from "@/lib/api";
import { PostPageHeader } from "@/components/post/PostPageHeader";
import { Suspense } from "react";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <PostPageHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleSearcher posts={allPosts} />
      </Suspense>
    </main>
  );
}
