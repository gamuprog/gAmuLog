import { FrontMatterForTSXPost } from "@/interfaces/frontMatter";
import { TestPost } from "@/tsxPosts/TestPost";

export const frontMatters: FrontMatterForTSXPost[] = [
  {
    title: "Test Post",
    slug: "test",
    excerpt:
      "This is a test post to demonstrate the front matter structure in TypeScript.",
    date: "2025-12-21T05:35:07.322Z",
    coverImage: "/assets/blog/deploy/deploy_cover.webp",
    category: "DevDiary",
    tags: ["Next"],
    author: {
      name: "Kasper",
      picture: "/assets/blog/authors/jj.jpeg",
    },
    ogImage: {
      url: "/assets/blog/deploy/deploy_cover.webp",
    },
    content: <TestPost />,
    type: "tsx",
  },
];
