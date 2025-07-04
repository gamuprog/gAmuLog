import { PostWithEmptyContent } from "@/interfaces/post";

export const tsxFrontMatters: PostWithEmptyContent[] = [
  {
    slug: "TSX-post",
    title: "TSXで記事を書きたい漢の格闘日記",
    date: "2025-07-04T05:35:07.322Z",
    coverImage: "/images/sample-cover.jpg",
    category: "LifeStyle",
    tags: ["React", "Next"],
    author: { name: "がむ", picture: "/assets/blog/authors/jj.jpeg" },
    excerpt: "This is a sample post written in TSX format.",
    ogImage: {
      url: "/images/sample-og-image.jpg",
    },
    content: "",
  },
];
