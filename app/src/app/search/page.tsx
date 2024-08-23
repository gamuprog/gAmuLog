import ArticleSearcher from "@/components/search/ArticleSearcher";
import { getAllPosts } from "@/lib/api";
import { PostPageHeader } from "@/components/Post/PostPageHeader";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <PostPageHeader />
      <ArticleSearcher posts={allPosts} />
    </main>
  );
}
