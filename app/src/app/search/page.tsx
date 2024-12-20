import { Suspense } from "react";

import { PostPageHeader } from "@/components/post/PostPageHeader";
import ArticleSearcher from "@/components/search/ArticleSearcher";
import { getAllPosts } from "@/lib/api";

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
